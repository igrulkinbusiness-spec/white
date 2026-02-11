import { CreditCard, Clock, Euro, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1707342269520-03ca1dddc0fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxSb21lJTIwQ29sb3NzZXVtJTIwY2l0eSUyMHBhcmtpbmd8ZW58MHx8fHwxNzcwODA2ODM1fDA&ixlib=rb-4.1.0&q=85";

const tollRates = [
  { category: 'A (Auto)', rate: '0.07-0.10', note: 'Categoria base per auto fino a 3,5t' },
  { category: 'B (Auto con rimorchio)', rate: '0.10-0.14', note: 'Auto con rimorchio o caravan' },
  { category: '3 (Camion)', rate: '0.14-0.18', note: 'Veicoli commerciali a 2 assi' },
  { category: '4 (Autobus)', rate: '0.16-0.20', note: 'Autobus e grandi camion' },
];

export const TollRoadsPage = () => {
  const { t } = useLanguage();

  const paymentMethods = [
    {
      name: t('tollRoads.cashName'),
      icon: Euro,
      description: t('tollRoads.cashDesc'),
      pros: t('tollRoads.cashPros'),
      cons: t('tollRoads.cashCons'),
    },
    {
      name: t('tollRoads.cardName'),
      icon: CreditCard,
      description: t('tollRoads.cardDesc'),
      pros: t('tollRoads.cardPros'),
      cons: t('tollRoads.cardCons'),
    },
    {
      name: t('tollRoads.telepassName'),
      icon: CheckCircle,
      description: t('tollRoads.telepassDesc'),
      pros: t('tollRoads.telepassPros'),
      cons: t('tollRoads.telepassCons'),
    },
  ];

  return (
    <div data-testid="toll-roads-page">
      <PageHero 
        title={t('tollRoads.title')}
        subtitle={t('tollRoads.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection title={t('tollRoads.overviewTitle')} subtitle={t('tollRoads.overviewSubtitle')} id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none text-italia-text-muted">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                {t('tollRoads.overviewText1')}
              </p>
              <p className="leading-relaxed mb-6">
                {t('tollRoads.overviewText2')}
              </p>
              <ul className="space-y-2 mb-6">
                <li><strong className="text-italia-gold">{t('tollRoads.laneYellow')}</strong></li>
                <li><strong className="text-italia-text">{t('tollRoads.laneBlue')}</strong></li>
                <li><strong className="text-italia-text">{t('tollRoads.laneWhite')}</strong></li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-4">
            <InfoCard icon={AlertCircle} variant="warning" title={t('tollRoads.warningTitle')}>
              {t('tollRoads.warningText')}
            </InfoCard>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="payment-methods">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t('tollRoads.paymentMethodsSubtitle')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t('tollRoads.paymentMethodsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentMethods.map((method) => (
              <div 
                key={method.name}
                className="border border-italia-border p-8 hover:border-italia-green transition-colors"
              >
                <div className="w-12 h-12 bg-italia-green/10 rounded-sm flex items-center justify-center mb-6">
                  <method.icon className="w-6 h-6 text-italia-green" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-italia-text mb-3">
                  {method.name}
                </h3>
                <p className="text-italia-text-muted mb-6">{method.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-italia-green mb-2">Pro</p>
                    <ul className="space-y-1">
                      {method.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-italia-text-muted flex items-start gap-2">
                          <span className="text-italia-green mt-1">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-italia-red mb-2">Contro</p>
                    <ul className="space-y-1">
                      {method.cons.map((con, i) => (
                        <li key={i} className="text-sm text-italia-text-muted flex items-start gap-2">
                          <span className="text-italia-red mt-1">−</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title={t('tollRoads.ratesTitle')} subtitle={t('tollRoads.ratesSubtitle')} id="rates">
        <p className="text-lg text-italia-text-muted mb-8 max-w-3xl">
          {t('tollRoads.ratesIntro')}
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-italia-green">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Categoria</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">€/km</th>
                <th className="text-left py-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Descrizione</th>
              </tr>
            </thead>
            <tbody>
              {tollRates.map((rate, index) => (
                <tr key={rate.category} className={index % 2 === 0 ? 'bg-white' : 'bg-italia-limestone/50'}>
                  <td className="py-4 pr-4 font-medium text-italia-text">{rate.category}</td>
                  <td className="py-4 pr-4 font-mono text-italia-green">{rate.rate}</td>
                  <td className="py-4 text-italia-text-muted">{rate.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 p-6 bg-italia-gold/10 border-l-4 border-italia-gold">
          <p className="text-italia-text">
            <strong>Consiglio:</strong> {t('tollRoads.rateTip')}
          </p>
        </div>
      </ContentSection>

      <ContentSection title={t('tollRoads.telepassTitle')} subtitle={t('tollRoads.telepassSubtitle')} id="telepass" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-italia-text-muted leading-relaxed mb-6">
              <strong className="text-italia-text">Telepass</strong> — {t('tollRoads.telepassText')}
            </p>
            <h4 className="font-serif text-xl font-medium text-italia-text mb-4">
              {t('tollRoads.telepassHowTo')}
            </h4>
            <ol className="space-y-3 text-italia-text-muted">
              <li className="flex gap-3">
                <span className="font-mono text-italia-green">01</span>
                <span>{t('tollRoads.telepassStep1')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-italia-green">02</span>
                <span>{t('tollRoads.telepassStep2')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-italia-green">03</span>
                <span>{t('tollRoads.telepassStep3')}</span>
              </li>
            </ol>
          </div>
          <div className="space-y-4">
            <InfoCard icon={Clock} title={t('tollRoads.telepassTimeSaving')} variant="gold">
              {t('tollRoads.telepassTimeSavingText')}
            </InfoCard>
            <InfoCard icon={Euro} title={t('tollRoads.telepassDiscounts')}>
              {t('tollRoads.telepassDiscountsText')}
            </InfoCard>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};
