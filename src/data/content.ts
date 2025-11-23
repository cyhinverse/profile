
import { Project, Post } from '../types';

export const projectsEn: Project[] = [
  {
    id: 'inknote',
    title: 'InkNote',
    description: 'A distraction-free markdown editor inspired by Chinese calligraphy.',
    year: '2024',
    image: 'https://picsum.photos/id/101/800/500',
    tags: ['React', 'Electron', 'Tailwind'],
    content: `
      <p>InkNote is born from a desire to bring the serenity of traditional calligraphy to digital writing.</p>
      <p>In a world full of notifications and complex toolbars, InkNote offers a blank sheet of virtual rice paper. The cursor behaves like a brush, reacting subtly to your typing speed. It supports full Markdown syntax but hides it when not in focus, allowing you to see only your thoughts.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Zen Mode: Disappear everything except text.</li>
        <li>Typewriter Scroll: Keeps your focus in the center.</li>
        <li>Export to PDF with custom serif typography.</li>
      </ul>
    `
  },
  {
    id: 'hutong-maps',
    title: 'Hutong Maps',
    description: 'Interactive historical map of Beijing\'s vanishing alleyways.',
    year: '2023',
    image: 'https://picsum.photos/id/103/800/500',
    tags: ['Mapbox', 'Next.js', 'History'],
    content: `
      <p>Beijing's Hutongs are the soul of the city, but they are disappearing fast. This project is a digital preservation effort.</p>
      <p>Using historical data overlaid on modern maps, users can slide through time to see how neighborhoods have changed from 1950 to today. We walked through over 200 alleys to collect oral histories from elderly residents, attaching audio clips to specific coordinates on the map.</p>
    `
  },
  {
    id: 'teatimer',
    title: 'TeaTimer',
    description: 'IoT companion app for brewing the perfect cup of Gongfu tea.',
    year: '2023',
    image: 'https://picsum.photos/id/106/800/500',
    tags: ['React Native', 'IoT', 'Bluetooth'],
    content: `
      <p>Gongfu tea brewing is an art of precision. Water temperature and steeping time must be exact.</p>
      <p>TeaTimer connects to a smart scale and kettle via Bluetooth. You select your tea leaf type (e.g., Aged Pu-erh or High Mountain Oolong), and the app guides you through the multiple steepings, adjusting the time slightly for each infusion to extract the perfect flavor profile.</p>
    `
  },
  {
    id: 'zenfocus',
    title: 'ZenFocus',
    description: 'Productivity timer blending Pomodoro with meditation sounds.',
    year: '2022',
    image: 'https://picsum.photos/id/116/800/500',
    tags: ['Vue', 'Web Audio API'],
    content: `
      <p>A productivity tool that doesn't stress you out. ZenFocus combines the Pomodoro technique with ambient sounds recorded from nature in rural China.</p>
      <p>Instead of a jarring alarm, a soft temple bell rings when your session is done.</p>
    `
  },
];

export const projectsZh: Project[] = [
  {
    id: 'inknote',
    title: 'InkNote 墨笔',
    description: '受中国书法启发的沉浸式 Markdown 编辑器。',
    year: '2024',
    image: 'https://picsum.photos/id/101/800/500',
    tags: ['React', 'Electron', 'Tailwind'],
    content: `
      <p>InkNote 诞生于将传统书法的宁静带入数字写作的愿望。</p>
      <p>在一个充满通知和复杂工具栏的世界里，InkNote 提供了一张虚拟的宣纸。光标像毛笔一样，根据你的打字速度做出微妙的反应。它支持完整的 Markdown 语法，但在未聚焦时隐藏标记，让你只看到你的思想。</p>
      <h3>主要功能</h3>
      <ul>
        <li>禅模式：隐藏除文字以外的一切。</li>
        <li>打字机滚动：让你的视线始终保持在屏幕中央。</li>
        <li>导出为带有自定义衬线排版的 PDF。</li>
      </ul>
    `
  },
  {
    id: 'hutong-maps',
    title: '胡同记忆',
    description: '北京正在消失的胡同巷弄的历史互动地图。',
    year: '2023',
    image: 'https://picsum.photos/id/103/800/500',
    tags: ['Mapbox', 'Next.js', 'History'],
    content: `
      <p>胡同是北京的灵魂，但它们正在迅速消失。这是一个数字保护项目。</p>
      <p>通过将历史数据覆盖在现代地图上，用户可以滑动时间轴，查看街区从1950年至今的变化。我们走访了200多条胡同，收集了老居民的口述历史，将音频片段附加到地图上的特定坐标。</p>
    `
  },
  {
    id: 'teatimer',
    title: '功夫茶伴',
    description: '用于冲泡完美功夫茶的 IoT 伴侣应用。',
    year: '2023',
    image: 'https://picsum.photos/id/106/800/500',
    tags: ['React Native', 'IoT', 'Bluetooth'],
    content: `
      <p>功夫茶是一门精准的艺术。水温和浸泡时间必须精确。</p>
      <p>TeaTimer 通过蓝牙连接智能秤和水壶。你选择茶叶类型（例如：陈年普洱或高山乌龙），应用程序会引导你完成多次冲泡，每次稍微调整时间，以提取完美的风味。</p>
    `
  },
  {
    id: 'zenfocus',
    title: 'ZenFocus 禅定',
    description: '融合番茄工作法与冥想音效的效率工具。',
    year: '2022',
    image: 'https://picsum.photos/id/116/800/500',
    tags: ['Vue', 'Web Audio API'],
    content: `
      <p>一个不会让你感到压力的生产力工具。ZenFocus 将番茄工作法与在中国乡村录制的自然环境音相结合。</p>
      <p>当你的专注时间结束时，不是刺耳的闹钟，而是一声柔和的寺庙钟声响起。</p>
    `
  },
];

export const postsEn: Post[] = [
  {
    id: 'wabi-sabi-code',
    title: 'Embracing Imperfection (Wabi-Sabi) in Code',
    date: '2024/10/05',
    excerpt: 'Why 100% test coverage is not the goal, but harmony is.',
    readTime: '5 min',
    content: `
      <p>In traditional Japanese aesthetics, <em>Wabi-sabi</em> (侘寂) is a world view centered on the acceptance of transience and imperfection.</p>
      <p>As developers, we often strive for the "perfect" architecture. We want 100% test coverage. We want zero technical debt. But code, like organic matter, decays. Requirements change. Libraries become obsolete.</p>
      <p>Instead of fighting this entropy with rigid rules, what if we embraced it?</p>
      <blockquote>"Nothing lasts, nothing is finished, and nothing is perfect."</blockquote>
      <p>Writing code that is easy to delete is often better than writing code that is extensible. Modular, small, imperfect pieces that serve a purpose today and can be replaced tomorrow—that is the Wabi-sabi of software engineering.</p>
    `
  },
  {
    id: 'react-19-silence',
    title: 'The Silence of React 19',
    date: '2024/08/12',
    excerpt: 'Reflections on the new rendering engine and server components.',
    readTime: '3 min',
    content: `
      <p>The noise in the frontend ecosystem is deafening. Every week a new framework. Every day a new library.</p>
      <p>React 19 feels different. It feels like a maturing. The introduction of Server Components isn't just a feature; it's a fundamental shift back to the server, back to simplicity, back to sending less JavaScript down the wire.</p>
      <p>Silence is fast. Silence is performant.</p>
    `
  },
  {
    id: 'scholar-studio',
    title: 'Building a Digital Scholar\'s Studio',
    date: '2024/05/03',
    excerpt: 'Curating a workspace that fosters deep work and creativity.',
    readTime: '6 min',
    content: `
      <p>The ancient Chinese scholars had their studios (书房). A place of retreat, filled with objects that inspired contemplation—a brush pot, a weirdly shaped rock, a scroll.</p>
      <p>Our digital environments are our modern studios. But are they curated? Or are they cluttered with notifications, endless tabs, and chaotic file structures?</p>
      <p>I spent the last month decluttering my digital life. I switched to a window manager that forces focus. I chose a color scheme that mimics ink on paper. I turned off all non-human notifications.</p>
    `
  },
  {
    id: 'tailwind-art',
    title: 'Tailwind and the Art of Utility',
    date: '2023/12/22',
    excerpt: 'How atomic CSS relates to modular wood joinery.',
    readTime: '4 min',
    content: `
      <p>There is a beauty in utility. In traditional Chinese wood joinery (sunmao), complex structures are built without nails or glue, just interlocking geometric shapes.</p>
      <p>Tailwind CSS feels similar. Small, atomic utility classes that lock together to build complex interfaces. There is no "magic" hidden in a separate stylesheet. The structure is the style.</p>
    `
  }
];

export const postsZh: Post[] = [
  {
    id: 'wabi-sabi-code',
    title: '代码中的侘寂之美 (Wabi-Sabi)',
    date: '2024/10/05',
    excerpt: '为什么 100% 的测试覆盖率不是目标，和谐才是。',
    readTime: '5 分钟',
    content: `
      <p>在东方美学中，<strong>侘寂</strong> (Wabi-sabi) 是一种以接受短暂和不完美为核心的世界观。</p>
      <p>作为开发者，我们经常追求“完美”的架构。我们想要 100% 的测试覆盖率。我们想要零技术债务。但是代码，就像有机物质一样，会腐烂。需求会变化。库会过时。</p>
      <p>与其用僵化的规则对抗这种熵，如果我们接受它呢？</p>
      <blockquote>“万物皆无常，万物皆未完成，万物皆不完美。”</blockquote>
      <p>编写容易删除的代码往往比编写可扩展的代码更好。模块化的、小的、不完美的片段，今天服务于某个目的，明天可以被替换——这就是软件工程的侘寂。</p>
    `
  },
  {
    id: 'react-19-silence',
    title: 'React 19 的静谧',
    date: '2024/08/12',
    excerpt: '关于新渲染引擎和服务器组件的思考。',
    readTime: '3 分钟',
    content: `
      <p>前端生态系统中的噪音震耳欲聋。每周都有新框架。每天都有新库。</p>
      <p>React 19 给人的感觉不同。它感觉像是一种成熟。服务器组件的引入不仅仅是一个功能；它是向服务器的根本回归，向简单的回归，向发送更少 JavaScript 的回归。</p>
      <p>静谧即是速度。静谧即是性能。</p>
    `
  },
  {
    id: 'scholar-studio',
    title: '打造数字书房',
    date: '2024/05/03',
    excerpt: '策划一个培养深度工作和创造力的工作空间。',
    readTime: '6 分钟',
    content: `
      <p>中国古代文人有他们的书房。那是一个隐居的地方，充满了激发沉思的物品——笔筒、奇石、画卷。</p>
      <p>我们的数字环境就是现代的书房。但它们经过精心策划了吗？还是充斥着通知、无尽的标签页和混乱的文件结构？</p>
      <p>上个月我整理了我的数字生活。我切换到了一个强制专注的窗口管理器。我选择了一种模仿纸上墨迹的配色方案。我关闭了所有非人类的通知。</p>
    `
  },
  {
    id: 'tailwind-art',
    title: 'Tailwind 与实用之美',
    date: '2023/12/22',
    excerpt: '原子 CSS 如何与传统的榫卯结构相通。',
    readTime: '4 分钟',
    content: `
      <p>实用中蕴含着美。在中国传统的榫卯结构中，复杂的结构不需要钉子或胶水，只需互锁的几何形状。</p>
      <p>Tailwind CSS 给人的感觉很相似。小的、原子的实用类锁定在一起，构建复杂的界面。没有隐藏在单独样式表中的“魔法”。结构即风格。</p>
    `
  }
];