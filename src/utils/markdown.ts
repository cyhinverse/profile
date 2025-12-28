import yaml from 'js-yaml';

export interface MarkdownPost {
  slug: string;
  title: string;
  date: string;
  thumbnail?: string;
  description?: string; // For Works
  summary?: string; // For Writing
  body: string;
  [key: string]: any;
}

const parseFrontmatter = (text: string) => {
  const cleanText = text
    .replace(/^\uFEFF/, '')
    .trimStart();
  const match = cleanText.match(
    /^---\r?\n([\s\S]*?)\r?\n---/,
  );
  if (!match) {
    return { data: {}, content: text };
  }

  try {
    const data = yaml.load(match[1]) as any;
    const content = text.slice(match[0].length);
    return { data, content };
  } catch (e) {
    console.error(
      'Error parsing YAML frontmatter:',
      e,
    );
    return { data: {}, content: text };
  }
};

// Memory cache for posts to avoid redundant fetching
const contentCache: Record<
  string,
  MarkdownPost[]
> = {};
const postCache: Record<string, MarkdownPost> =
  {};

export const getContent = async (
  type: 'works' | 'writing',
): Promise<MarkdownPost[]> => {
  // Return cached content if available
  if (contentCache[type]) {
    return contentCache[type];
  }

  let modules;
  if (type === 'works') {
    modules = import.meta.glob(
      '../content/works/*.md',
      {
        query: '?raw',
        import: 'default',
      },
    );
  } else {
    modules = import.meta.glob(
      '../content/writing/*.md',
      {
        query: '?raw',
        import: 'default',
      },
    );
  }

  // Load all modules in parallel
  const postPromises = Object.entries(
    modules as Record<
      string,
      () => Promise<string>
    >,
  ).map(async ([path, loader]) => {
    const rawContent = await loader();
    const { data, content } =
      parseFrontmatter(rawContent);
    const slug =
      path.split('/').pop()?.replace('.md', '') ||
      '';

    const post: MarkdownPost = {
      slug,
      title: data.title || 'Untitled',
      date: data.date
        ? new Date(data.date).toISOString()
        : new Date().toISOString(),
      thumbnail: data.thumbnail,
      description: data.description,
      summary: data.summary,
      body: content,
      ...data,
    };

    // Also cache individual posts
    postCache[`${type}/${slug}`] = post;
    return post;
  });

  const posts = await Promise.all(postPromises);

  // Sort by date descending
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime(),
  );

  // Store in cache
  contentCache[type] = sortedPosts;

  return sortedPosts;
};

export const getPostBySlug = async (
  type: 'works' | 'writing',
  slug: string,
): Promise<MarkdownPost | null> => {
  const cacheKey = `${type}/${slug}`;

  // Check cache first
  if (postCache[cacheKey]) {
    return postCache[cacheKey];
  }

  try {
    const module = await import(
      `../content/${type}/${slug}.md?raw`
    );
    const { data, content } = parseFrontmatter(
      module.default,
    );

    const post: MarkdownPost = {
      slug,
      title: data.title || 'Untitled',
      date: data.date
        ? new Date(data.date).toISOString()
        : new Date().toISOString(),
      thumbnail: data.thumbnail,
      description: data.description,
      summary: data.summary,
      body: content,
      ...data,
    };

    // Store in cache
    postCache[cacheKey] = post;

    return post;
  } catch (error) {
    console.error(
      `Error loading post ${slug}:`,
      error,
    );
    return null;
  }
};
