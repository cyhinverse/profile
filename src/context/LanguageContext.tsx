import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.about': 'About',
    'nav.works': 'Works',
    'nav.posts': 'Writing',
    'home.greeting':
      "Hello, I'm an indie developer based in Vietnam :>",
    'home.role':
      'Digital Craftsman ( Software Developer / Student )',
    'home.work_title': 'Work',
    'home.work_desc':
      'Hello everyone, my name is Anh. I am 21 years old and currently a student at HUTECH University, set to graduate in the 2025–2026 academic year with a major in Information Technology. ' +
      'My career aspiration is to become a Software Engineering. I am dedicated to addressing various client needs and providing reliable technical solutions through coding. ' +
      'This is the first blog I have created to share the knowledge and learning experiences I have gained over the past four years. Thank you for visiting my website. I sincerely appreciate your support.',
    'home.portfolio_btn': 'My Portfolio',
    'home.bio_title': 'Bio',
    'home.born':
      'Born in HoChiMinh City (胡志明市), Vietnam.',
    'home.master':
      'Started studying at Hutech University.',
    'home.freelance':
      'Started journey as a Freelance Developer.',
    'home.love_title': 'I ♥',
    'home.love_desc':
      'Music, Drawing, Calligraphy, Photography.',
    'works.title': 'Selected Works',
    'works.read_more': 'View Details',
    'posts.title': 'Writing',
    'posts.read_more': 'Read Article',
    'footer.text':
      '© 2025 Guo Ying. Made with morning silence.',
    back: 'Back',
    'not_found.title': 'Lost in the Mist',
    'not_found.desc':
      'The page you are looking for has drifted away.',
    'not_found.home_btn': 'Return Home',
  },
  zh: {
    'nav.about': '关于',
    'nav.works': '作品',
    'nav.posts': '随笔',
    'home.greeting':
      '你好，我是一名现居越南的独立开发者！',
    'home.role': '数字工匠 ( 开发者 / 学生 )',
    'home.work_title': '工作',
    'home.work_desc':
      '大家好，我叫 Ying，今年二十一岁，目前仍是 HUTECH 的在校生，即将在 2025–2026 学年从信息技术专业毕业。' +
      '我的职业理想是成为一名全栈开发工程师。我致力于解决客户各类需求，并以专业的代码能力提供可靠的技术支持。' +
      '这是我创建的第一个博客，用于分享我四年来的学习经验与知识。感谢各位访问我的网站，谨致谢意。',
    'home.portfolio_btn': '作品集',
    'home.bio_title': '经历',
    'home.born': '出生于越南胡志明市。',
    'home.master': '在河内理工大学完成硕士学位。',
    'home.freelance': '开启独立开发者之旅。',
    'home.love_title': '爱好',
    'home.love_desc': '艺术，音乐，绘画，书法。',
    'works.title': '精选作品',
    'works.read_more': '查看详情',
    'posts.title': '随笔',
    'posts.read_more': '阅读全文',
    'footer.text':
      '© 2025 Guo Ying. 于清晨静谧中制作。',
    back: '返回',
    'not_found.title': '迷失雾中',
    'not_found.desc': '你寻找的页面已随风飘散。',
    'not_found.home_btn': '返回首页',
  },
};

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export const LanguageProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [language, setLanguage] =
    useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === 'en' ? 'zh' : 'en',
    );
  };

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider',
    );
  }
  return context;
};
