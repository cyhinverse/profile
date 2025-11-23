
import React, { createContext, useState, useContext, ReactNode } from 'react';
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
    'home.greeting': '"Hello, I\'m an indie developer based in Vietnam!"',
    'home.role': 'Digital Craftsman ( Software Developer / Student )',
    'home.work_title': 'Work',
    'home.work_desc': 'GuoYing is a full-stack developer with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera in the Hutongs or drinking Longjing tea.',
    'home.portfolio_btn': 'My Portfolio',
    'home.bio_title': 'Bio',
    'home.born': 'Born in HoChiMinh City (胡志明市), Vietnam.',
    'home.master': 'Completed the Master\'s Program at Hutech University.',
    'home.freelance': 'Started journey as a Freelance Developer.',
    'home.love_title': 'I ♥',
    'home.love_desc': 'Music, Drawing, Calligraphy, Photography.',
    'works.title': 'Selected Works',
    'works.read_more': 'View Details',
    'posts.title': 'Writing',
    'posts.read_more': 'Read Article',
    'footer.text': '© 2025 Guo Ying. Made with morning silence.',
    'back': 'Back',
    'not_found.title': 'Lost in the Mist',
    'not_found.desc': 'The page you are looking for has drifted away.',
    'not_found.home_btn': 'Return Home',
  },
  zh: {
    'nav.about': '关于',
    'nav.works': '作品',
    'nav.posts': '随笔',
    'home.greeting': '“你好，我是一名现居越南的独立开发者！”',
    'home.role': '数字工匠 ( 开发者 / 学生 )',
    'home.work_title': '工作',
    'home.work_desc': 'Jing 是一名全栈开发者，热衷于构建自己想要的数字产品。他擅长产品发布的方方面面，从规划、设计一直到用代码解决现实生活中的问题。不在线的时候，他喜欢带着相机在胡同里闲逛，或者喝龙井茶。',
    'home.portfolio_btn': '作品集',
    'home.bio_title': '经历',
    'home.born': '出生于越南胡志明市。',
    'home.master': '在河内理工大学完成硕士学位。',
    'home.bytedance': '在字节跳动担任产品工程师。',
    'home.freelance': '开启独立开发者之旅。',
    'home.love_title': '爱好',
    'home.love_desc': '艺术，音乐，绘画，书法，摄影，机器学习。',
    'works.title': '精选作品',
    'works.read_more': '查看详情',
    'posts.title': '随笔',
    'posts.read_more': '阅读全文',
    'footer.text': '© 2025 Guo Ying. 于清晨静谧中制作。',
    'back': '返回',
    'not_found.title': '迷失雾中',
    'not_found.desc': '你寻找的页面已随风飘散。',
    'not_found.home_btn': '返回首页',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};