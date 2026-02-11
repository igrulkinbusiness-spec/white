import { cn } from '../../lib/utils';

export const ContentSection = ({ 
  title, 
  subtitle,
  children, 
  className,
  id 
}) => {
  return (
    <section 
      id={id}
      className={cn('py-16 md:py-24', className)}
      data-testid={`section-${id || 'content'}`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 max-w-3xl">
            {subtitle && (
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-italia-text leading-tight">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
