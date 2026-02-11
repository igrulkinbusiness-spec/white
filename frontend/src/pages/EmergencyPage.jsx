import { Phone, Shield, AlertTriangle, Heart, Car, Flame } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1660148887196-a2f834ec2755?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxSb21lJTIwQ29sb3NzZXVtJTIwY2l0eSUyMHBhcmtpbmd8ZW58MHx8fHwxNzcwODA2ODM1fDA&ixlib=rb-4.1.0&q=85";

const dataIT = {
  emergencyNumbers: [
    { number: '112', name: 'Numero unico di emergenza', description: 'Funziona in tutta Europa. Gli operatori parlano inglese.', icon: Phone },
    { number: '113', name: 'Polizia di Stato', description: 'Incidenti, crimini, questioni generali.', icon: Shield },
    { number: '115', name: 'Vigili del Fuoco', description: 'Servizio antincendio. Anche operazioni di soccorso.', icon: Flame },
    { number: '118', name: 'Emergenza Sanitaria', description: 'Pronto soccorso medico.', icon: Heart },
    { number: '116', name: 'ACI Soccorso Stradale', description: 'Assistenza stradale. Carroattrezzi, assistenza tecnica.', icon: Car },
    { number: '1515', name: 'Guardia Forestale', description: 'Incendi boschivi, ecologia.', icon: AlertTriangle },
  ],
  policeTypes: [
    { name: 'Polizia Stradale', description: 'Polizia stradale. Pattuglia le autostrade, gestisce incidenti.', vehicle: 'Auto bianco-blu con scritta "Polizia"' },
    { name: 'Carabinieri', description: 'Forza di polizia militare. Ampi poteri, spesso nelle zone rurali.', vehicle: 'Auto blu scuro con striscia rossa' },
    { name: 'Polizia Municipale', description: 'Polizia municipale. Multe per parcheggio, controllo ZTL.', vehicle: 'Auto bianche con striscia blu e stemma cittadino' },
    { name: 'Guardia di Finanza', description: 'Polizia finanziaria. Raramente ferma, ma ha il diritto.', vehicle: 'Auto grigio-verdi' },
  ],
  accidentSteps: [
    { title: 'Fermati e accendi le quattro frecce', note: 'Non abbandonare il luogo dell\'incidente' },
    { title: 'Indossa il giubbotto riflettente', note: 'Obbligatorio quando esci dall\'auto sulla strada' },
    { title: 'Posiziona il triangolo di emergenza', note: 'A 50-100 metri di distanza' },
    { title: 'Chiama i soccorsi', note: '112 o 113 in caso di feriti, 116 per assistenza tecnica' },
    { title: 'Compila il modulo CAI', note: 'Constatazione Amichevole di Incidente' },
  ],
  rememberList: [
    'Fotografa il luogo dell\'incidente e i danni',
    'Annota i dati dell\'altro conducente',
    'Ottieni una copia del verbale della polizia',
    'Conserva tutti i documenti',
  ],
};

const dataEN = {
  emergencyNumbers: [
    { number: '112', name: 'Single emergency number', description: 'Works throughout Europe. Operators speak English.', icon: Phone },
    { number: '113', name: 'State Police', description: 'Accidents, crimes, general matters.', icon: Shield },
    { number: '115', name: 'Fire Department', description: 'Also rescue operations.', icon: Flame },
    { number: '118', name: 'Medical Emergency', description: 'Ambulance service.', icon: Heart },
    { number: '116', name: 'ACI Roadside Assistance', description: 'Road assistance. Tow trucks, technical help.', icon: Car },
    { number: '1515', name: 'Forest Rangers', description: 'Forest fires, environmental issues.', icon: AlertTriangle },
  ],
  policeTypes: [
    { name: 'Polizia Stradale', description: 'Traffic police. Patrols highways, handles accidents.', vehicle: 'White-blue cars with "Polizia" written' },
    { name: 'Carabinieri', description: 'Military police force. Wide powers, often in rural areas.', vehicle: 'Dark blue cars with red stripe' },
    { name: 'Polizia Municipale', description: 'Municipal police. Parking fines, ZTL control.', vehicle: 'White cars with blue stripe and city crest' },
    { name: 'Guardia di Finanza', description: 'Financial police. Rarely stops, but has the right.', vehicle: 'Gray-green cars' },
  ],
  accidentSteps: [
    { title: 'Stop and turn on hazard lights', note: 'Don\'t leave the accident scene' },
    { title: 'Put on reflective vest', note: 'Mandatory when exiting car on road' },
    { title: 'Place warning triangle', note: '50-100 meters away' },
    { title: 'Call for help', note: '112 or 113 for injuries, 116 for technical help' },
    { title: 'Fill out CAI form', note: 'European Accident Statement' },
  ],
  rememberList: [
    'Photograph the accident scene and damage',
    'Record the other driver\'s details',
    'Get a copy of the police report',
    'Keep all documents safe',
  ],
};

export const EmergencyPage = () => {
  const { t, language } = useLanguage();
  const data = language === 'en' ? dataEN : dataIT;

  return (
    <div data-testid="emergency-page">
      <PageHero 
        title={t('emergency.title')}
        subtitle={t('emergency.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection title={t('emergency.numbersTitle')} subtitle={t('emergency.numbersSubtitle')} id="numbers">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.emergencyNumbers.map((item) => (
            <div 
              key={item.number}
              className="p-6 bg-white border border-italia-border hover:border-italia-green transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-italia-green/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-italia-green" />
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-italia-green mb-1">
                    {item.number}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-italia-text mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-italia-text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="police-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t('emergency.policeSubtitle')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t('emergency.policeTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.policeTypes.map((police) => (
              <div key={police.name} className="p-6 border border-italia-border">
                <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                  {police.name}
                </h3>
                <p className="text-italia-text-muted mb-3">{police.description}</p>
                <p className="text-sm text-italia-text-muted italic">{police.vehicle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection title={t('emergency.accidentTitle')} subtitle={t('emergency.accidentSubtitle')} id="accident">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ol className="space-y-6">
              {data.accidentSteps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="font-mono text-2xl font-bold text-italia-green">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-medium text-italia-text mb-1">{step.title}</h4>
                    <p className="text-sm text-italia-text-muted">{step.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <InfoCard icon={AlertTriangle} variant="warning" title={t('emergency.rememberTitle')}>
              <ul className="space-y-2 mt-3">
                {data.rememberList.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </InfoCard>
            
            <div className="mt-6 p-6 bg-italia-green text-white">
              <h4 className="font-serif text-xl font-medium mb-2">{t('emergency.aciHotline')}</h4>
              <div className="font-mono text-3xl font-bold mb-2">803 116</div>
              <p className="text-white/80 text-sm">{t('emergency.aciHotlineText')}</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};
