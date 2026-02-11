import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export const FeatureCard = ({ 
  title, 
  description, 
  image, 
  link, 
  icon: Icon,
  size = 'medium', // 'small' | 'medium' | 'large'
  className 
}) => {
  const sizes = {
    small: 'aspect-square',
    medium: 'aspect-[4/3]',
    large: 'aspect-[16/9]',
  };

  const Card = link ? Link : 'div';
  const cardProps = link ? { to: link } : {};

  return (
    <Card 
      {...cardProps}
      className={cn(
        'group block bg-white border border-italia-border overflow-hidden card-hover',
        className
      )}
      data-testid="feature-card"
    >
      {/* Image */}
      <div className={cn('relative overflow-hidden', sizes[size])}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover img-zoom"
        />
        <div className="absolute inset-0 bg-italia-green/0 group-hover:bg-italia-green/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {Icon && (
              <div className="inline-flex items-center justify-center w-10 h-10 bg-italia-green/10 rounded-sm mb-4">
                <Icon className="w-5 h-5 text-italia-green" />
              </div>
            )}
            <h3 className="font-serif text-xl md:text-2xl font-medium text-italia-text mb-2 group-hover:text-italia-green transition-colors">
              {title}
            </h3>
            <p className="text-italia-text-muted text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>
          {link && (
            <ArrowRight className="w-5 h-5 text-italia-text-muted group-hover:text-italia-green group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
          )}
        </div>
      </div>
    </Card>
  );
};
