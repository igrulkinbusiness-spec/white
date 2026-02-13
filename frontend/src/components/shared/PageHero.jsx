import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';

export const PageHero = ({ 
  title, 
  subtitle, 
  image, 
  showBack = true,
  compact = false 
}) => {
  const { t } = useLanguage();

  return (
    <section 
      className={`relative ${compact ? 'h-[300px] md:h-[350px]' : 'h-[400px] md:h-[500px]'} overflow-hidden`}
      data-testid="page-hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 md:px-8 max-w-7xl flex flex-col justify-end pb-12 md:pb-16">
        {showBack && (
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors w-fit"
            data-testid="back-link"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{t('common.backHome')}</span>
          </Link>
        )}
        
        <div className="max-w-3xl">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
            Roads of Ireland
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
