
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
    'home.work_desc': 'Hello everyone, my name is Quốc Anh. I am 21 years old and currently a student in the 2025–2026 academic year at HUTECH University. I am about to graduate with a major in Information Technology. My dream job — or more accurately, the position I’ve always aspired to even while still studying — is to become a full-stack developer. I can solve both general and specific problems for clients; as long as you have a need, I will help you address it through code.This is the first blog I’ve created to share the knowledge and learning experiences I’ve gained over the past four years. Thank you all for visiting my website. I truly appreciate it.',
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
    'home.work_desc': '大家好，我叫 Guo Ying，今年 21 岁，目前仍然是 2025–2026 学年的大学生，就读于 HUTECH，即将从信息技术专业毕业。我的理想工作，或者说在仍然在读书期间就向往的职位，是全栈开发工程师。我能够解决客户的各种问题，只要你有需求，我都会用代码来帮你完成。这是我创建的第一个博客，用来分享我在过去四年中的学习经验和知识。感谢大家访问我的网站，非常感谢！',
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