import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import { useLanguage } from '../context/LanguageContext';
import { getPostBySlug, MarkdownPost } from '../utils/markdown';
import MarkdownRenderer from '../components/MarkdownRenderer';

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [project, setProject] = useState<MarkdownPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (id) {
        const data = await getPostBySlug('works', id);
        setProject(data);
      }
      setLoading(false);
    };
    fetchProject();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <div className="pt-20 text-center">Loading...</div>;
  }

  if (!project) {
    return <div className="pt-20 text-center">Project not found</div>;
  }

  return (
    <div className="pt-4 pb-20">
      <Section>
        <button 
          onClick={() => navigate('/works')}
          className="group flex items-center gap-2 text-stone-500 hover:text-jade transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {t('back')}
        </button>
      </Section>

      <Section delay={0.1}>
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
             <h1 className="text-3xl md:text-4xl font-serif font-bold text-ink dark:text-stone-100">
              {project.title}
            </h1>
            <span className="bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 px-3 py-1 rounded-full text-xs font-mono">
              {new Date(project.date).getFullYear()}
            </span>
          </div>
          
          <p className="text-xl text-stone-600 dark:text-stone-400 font-light leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {project.tags && (
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag: string) => (
                <span key={tag} className="text-xs font-medium text-jade dark:text-jade-light border border-jade/20 dark:border-jade/30 px-2 py-1 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Section>

      <Section delay={0.2}>
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-stone-200 dark:border-stone-700 mb-10">
          <img 
            src={project.thumbnail || '/images/placeholder.jpg'} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </Section>

      <Section delay={0.3}>
        <MarkdownRenderer content={project.body} />
        
        {project.link && (
          <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 flex justify-center">
             <a 
               href={project.link} 
               className="flex items-center gap-2 bg-ink dark:bg-stone-700 text-white px-6 py-3 rounded-full font-medium hover:bg-jade dark:hover:bg-jade transition-colors"
               target="_blank"
               rel="noopener noreferrer"
             >
               View Live <ExternalLink size={16} />
             </a>
          </div>
        )}
      </Section>
    </div>
  );
};

export default WorkDetail;