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
  const match = text.match(
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

export const getContent = async (
  type: 'works' | 'writing',
): Promise<MarkdownPost[]> => {
  let modules;
  if (type === 'works') {
    modules = import.meta.glob(
      '../content/works/*.md',
      { query: '?raw', import: 'default' },
    );
  } else {
    modules = import.meta.glob(
      '../content/writing/*.md',
      { query: '?raw', import: 'default' },
    );
  }

  const posts: MarkdownPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    const { data, content } =
      parseFrontmatter(rawContent);
    const slug =
      path.split('/').pop()?.replace('.md', '') ||
      '';

    posts.push({
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
    });
  }

  // Sort by date descending
  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime(),
  );
};

export const getPostBySlug = async (
  type: 'works' | 'writing',
  slug: string,
): Promise<MarkdownPost | null> => {
  try {
    const module = await import(
      `../content/${type}/${slug}.md?raw`
    );
    const { data, content } = parseFrontmatter(
      module.default,
    );

    return {
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
  } catch (error) {
    console.error(
      `Error loading post ${slug}:`,
      error,
    );
    return null;
  }
};
