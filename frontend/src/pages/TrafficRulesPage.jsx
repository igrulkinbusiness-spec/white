import { Shield, AlertTriangle, Phone, FileText } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1764709981173-7b8a7f149ee1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHw0fHxJdGFseSUyMHJvYWQlMjBzaWduJTIwdHJhZmZpYyUyMHZpbnRhZ2V8ZW58MHx8fHwxNzcwODA2ODI2fDA&ixlib=rb-4.1.0&q=85";

const dataIT = {
  mainRules: [
    { title: 'Guida a destra', description: 'Come in molti paesi europei, in Italia si guida a destra. Il sorpasso si effettua a sinistra.' },
    { title: 'Luci anabbaglianti obbligatorie', description: 'Fuori dai centri abitati le luci anabbaglianti devono essere accese 24 ore su 24, con qualsiasi tempo.' },
    { title: 'Cinture di sicurezza', description: 'Obbligatorie per tutti i passeggeri. Bambini sotto i 150 cm — in seggiolini speciali.' },
    { title: 'Telefono alla guida', description: 'Consentito solo con auricolare vivavoce. Multa da 165 a 660 euro.' },
    { title: 'Alcol', description: 'Limite consentito — 0,5 per mille. Per neopatentati (meno di 3 anni) — 0,0 per mille.' },
    { title: 'Pneumatici invernali', description: 'Dal 15 novembre al 15 aprile obbligatori sulle strade di montagna (cartello "catene obbligatorie").' },
  ],
  requiredDocuments: [
    { name: 'Patente di guida', note: 'La patente italiana è valida, per stranieri serve la patente internazionale' },
    { name: 'Passaporto', note: 'Documento d\'identità valido' },
    { name: 'Assicurazione', note: 'Carta verde o polizza valida nell\'UE' },
    { name: 'Documenti del veicolo', note: 'Libretto di circolazione del veicolo' },
  ],
  fines: [
    { violation: 'Eccesso di velocità fino a 10 km/h', fine: '42-173€' },
    { violation: 'Eccesso di velocità 10-40 km/h', fine: '173-695€' },
    { violation: 'Eccesso di velocità oltre 40 km/h', fine: '543-2.171€ + sospensione patente' },
    { violation: 'Passaggio con semaforo rosso', fine: '167-665€' },
    { violation: 'Uso del telefono', fine: '165-660€' },
    { violation: 'Cintura non allacciata', fine: '83-333€' },
    { violation: 'Guida in stato di ebbrezza', fine: '543-6.000€ + arresto' },
    { violation: 'Sosta vietata', fine: '42-173€' },
  ],
  equipment: [
    'Giubbotto riflettente (per ogni passeggero)',
    'Triangolo di emergenza',
    'Lampadine di ricambio per i fari',
    'Kit di pronto soccorso (consigliato)',
  ],
};

const dataEN = {
  mainRules: [
    { title: 'Drive on the right', description: 'Like many European countries, Italy drives on the right. Overtaking is done on the left.' },
    { title: 'Low beam lights required', description: 'Outside built-up areas, low beam lights must be on 24/7, in any weather.' },
    { title: 'Seat belts', description: 'Mandatory for all passengers. Children under 150 cm — in special car seats.' },
    { title: 'Phone while driving', description: 'Only hands-free headsets allowed. Fine from 165 to 660 euros.' },
    { title: 'Alcohol', description: 'Permitted level — 0.5 per mille. For new drivers (less than 3 years) — 0.0 per mille.' },
    { title: 'Winter tires', description: 'From November 15 to April 15, mandatory on mountain roads (sign "chains required").' },
  ],
  requiredDocuments: [
    { name: 'Driver\'s license', note: 'National license valid, international driving permit recommended' },
    { name: 'Passport', note: 'Valid ID document' },
    { name: 'Insurance', note: 'Green card or EU-valid policy' },
    { name: 'Vehicle documents', note: 'Vehicle registration certificate' },
  ],
  fines: [
    { violation: 'Speeding up to 10 km/h', fine: '42-173€' },
    { violation: 'Speeding 10-40 km/h', fine: '173-695€' },
    { violation: 'Speeding over 40 km/h', fine: '543-2.171€ + license suspension' },
    { violation: 'Running red light', fine: '167-665€' },
    { violation: 'Using phone', fine: '165-660€' },
    { violation: 'Seat belt not fastened', fine: '83-333€' },
    { violation: 'Drunk driving', fine: '543-6.000€ + arrest' },
    { violation: 'Illegal parking', fine: '42-173€' },
  ],
  equipment: [
    'Reflective vest (for each passenger)',
    'Warning triangle',
    'Spare bulbs for headlights',
    'First aid kit (recommended)',
  ],
};

export const TrafficRulesPage = () => {
  const { t, language } = useLanguage();
  const data = language === 'en' ? dataEN : dataIT;

  return (
    <div data-testid="traffic-rules-page">
      <PageHero 
        title={t('trafficRules.title')}
        subtitle={t('trafficRules.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection title={t('trafficRules.mainRulesTitle')} subtitle={t('trafficRules.mainRulesSubtitle')} id="rules">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.mainRules.map((rule) => (
            <div 
              key={rule.title}
              className="bg-white border border-italia-border p-6 hover:border-italia-green transition-colors"
            >
              <h3 className="font-serif text-lg font-medium text-italia-text mb-3">
                {rule.title}
              </h3>
              <p className="text-sm text-italia-text-muted leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="documents-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
                {t('trafficRules.documentsSubtitle')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text mb-8">
                {t('trafficRules.documentsTitle')}
              </h2>
              
              <div className="space-y-4">
                {data.requiredDocuments.map((doc) => (
                  <div key={doc.name} className="flex items-start gap-4 p-4 border-l-4 border-italia-green bg-italia-limestone/30">
                    <FileText className="w-5 h-5 text-italia-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-italia-text">{doc.name}</h4>
                      <p className="text-sm text-italia-text-muted">{doc.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <InfoCard icon={AlertTriangle} variant="warning" title={t('trafficRules.equipmentTitle')} className="mb-6">
                <ul className="space-y-2 mt-3">
                  {data.equipment.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </InfoCard>
              
              <InfoCard icon={Phone} title={t('trafficRules.emergencyTitle')}>
                <ul className="space-y-2 mt-3 font-mono">
                  <li><strong>112</strong> — {t('emergency.num112')}</li>
                  <li><strong>113</strong> — {t('emergency.num113').split(' ')[0]}</li>
                  <li><strong>115</strong> — {t('emergency.num115').split(' ')[0]}</li>
                  <li><strong>118</strong> — {t('emergency.num118').split(' ')[0]}</li>
                  <li><strong>116</strong> — {t('emergency.num116').split(' ')[0]}</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title={t('trafficRules.finesTitle')} subtitle={t('trafficRules.finesSubtitle')} id="fines">
        <p className="text-lg text-italia-text-muted mb-8 max-w-3xl">
          {t('trafficRules.finesIntro')}
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-italia-red">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">
                  {language === 'en' ? 'Violation' : 'Violazione'}
                </th>
                <th className="text-left py-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">
                  {language === 'en' ? 'Fine' : 'Multa'}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.fines.map((item, index) => (
                <tr key={item.violation} className={index % 2 === 0 ? 'bg-white' : 'bg-italia-limestone/50'}>
                  <td className="py-4 pr-4 text-italia-text">{item.violation}</td>
                  <td className="py-4 font-mono text-italia-red font-medium">{item.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="tips-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
              {language === 'en' ? 'Tip' : 'Consiglio'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
              {t('trafficRules.cameraTitle')}
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              {t('trafficRules.cameraText')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
