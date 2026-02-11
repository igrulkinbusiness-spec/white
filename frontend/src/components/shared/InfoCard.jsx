import { cn } from '../../lib/utils';

export const InfoCard = ({ 
  title, 
  children, 
  icon: Icon,
  variant = 'default', // 'default' | 'warning' | 'gold'
  className 
}) => {
  const variants = {
    default: 'border-l-italia-green',
    warning: 'border-l-italia-red',
    gold: 'border-l-italia-gold',
  };

  const iconColors = {
    default: 'text-italia-green',
    warning: 'text-italia-red',
    gold: 'text-italia-gold',
  };

  return (
    <div 
      className={cn(
        'bg-white border-l-4 p-6 md:p-8 shadow-sm',
        variants[variant],
        className
      )}
      data-testid="info-card"
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <div className={cn('mt-1', iconColors[variant])}>
            <Icon className="w-6 h-6" />
          </div>
        )}
        <div className="flex-1">
          {title && (
            <h3 className="font-serif text-xl font-medium text-italia-text mb-3">
              {title}
            </h3>
          )}
          <div className="text-italia-text-muted leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
