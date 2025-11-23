import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Section from '../components/Section';
import { useLanguage } from '../context/LanguageContext';
import { getPostBySlug, MarkdownPost } from '../utils/markdown';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { format } from 'date-fns';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [post, setPost] = useState<MarkdownPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const data = await getPostBySlug('writing', id);
        setPost(data);
      }
      setLoading(false);
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <div className="pt-20 text-center">Loading...</div>;
  }

  if (!post) {
    return <div className="pt-20 text-center">Post not found</div>;
  }

  return (
    <div className="pt-4 pb-20">
      <Section>
        <button 
          onClick={() => navigate('/posts')}
          className="group flex items-center gap-2 text-stone-500 hover:text-jade transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {t('back')}
        </button>
      </Section>

      <article>
        <Section delay={0.1}>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-ink dark:text-stone-100 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-stone-500 dark:text-stone-400 font-mono">
              <span className="flex items-center gap-2">
                <Calendar size={14} /> {format(new Date(post.date), 'MMMM dd, yyyy')}
              </span>
              {/* Read time calculation could be added here */}
            </div>
          </div>
        </Section>

        <Section delay={0.2}>
          {/* Blog Content Container mimicking a page of text */}
          <div className="bg-white dark:bg-stone-800/50 p-8 md:p-12 rounded-2xl shadow-sm ring-1 ring-stone-100 dark:ring-white/5">
            <MarkdownRenderer content={post.body} />
            
            <div className="mt-16 pt-8 border-t border-stone-100 dark:border-stone-700 text-center font-serif italic text-stone-400">
              ***
            </div>
          </div>
        </Section>
      </article>
    </div>
  );
};

export default PostDetail;