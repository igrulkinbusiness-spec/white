import { ParkingCircle, AlertTriangle, Clock, Euro, Camera } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1603668279554-631d92eaef9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxSb21lJTIwQ29sb3NzZXVtJTIwY2l0eSUyMHBhcmtpbmd8ZW58MHx8fHwxNzcwODA2ODM1fDA&ixlib=rb-4.1.0&q=85";

const dataIT = {
  parkingTypes: [
    { color: 'Strisce bianche', meaning: 'Parcheggio gratuito', note: 'Raro in centro. Attenzione ai cartelli — potrebbe esserci un limite di tempo.' },
    { color: 'Strisce blu', meaning: 'Parcheggio a pagamento', note: 'Pagamento ai parcometri. Solitamente 1-3€/ora. Nel weekend spesso gratuito.' },
    { color: 'Strisce gialle', meaning: 'Solo per residenti o veicoli speciali', note: 'Divieto di parcheggio! Rimozione + multa.' },
    { color: 'Strisce rosa', meaning: 'Per donne incinte e genitori con bambini', note: 'Si trova nei centri commerciali e ospedali.' },
  ],
  ztlCities: [
    { city: 'Roma', schedule: 'Lun-Ven: 6:30-18:00, Sab: 14:00-18:00', note: 'Molte zone, incluso Trastevere' },
    { city: 'Firenze', schedule: 'Tutti i giorni: 7:30-20:00', note: 'Controllo molto rigido' },
    { city: 'Milano', schedule: 'Lun-Ven: 7:30-19:30', note: 'Area C — zona a pagamento in centro' },
    { city: 'Venezia', schedule: 'Sempre', note: 'Auto vietate sulle isole' },
    { city: 'Bologna', schedule: 'Tutti i giorni: 7:00-20:00', note: 'Controllo rigoroso con telecamere' },
    { city: 'Napoli', schedule: 'Zone diverse', note: 'Controllo meno rigido' },
  ],
  tips: [
    { title: 'Parcheggi coperti', text: 'In centro cerca i cartelli "Parcheggio" — parcheggi coperti a pagamento. Più cari (2-4€/ora), ma più sicuri e senza problemi di ZTL.' },
    { title: 'Disco orario', text: 'Nei parcheggi gratuiti con limite di tempo serve il disco orario — un disco di cartone con l\'indicazione dell\'ora di arrivo. Compralo in tabaccheria.' },
    { title: 'Parcometri', text: 'Per pagare servono monete. Alcuni accettano carte. Metti lo scontrino sotto il parabrezza.' },
  ],
  mainTip: 'Quando visiti i centri storici, lascia l\'auto in un parcheggio fuori dalla ZTL e vai a piedi. Così eviterai multe, stress e vedrai davvero la città.',
};

const dataEN = {
  parkingTypes: [
    { color: 'White lines', meaning: 'Free parking', note: 'Rare in city centers. Watch for signs — there may be time limits.' },
    { color: 'Blue lines', meaning: 'Paid parking', note: 'Pay at meters. Usually €1-3/hour. Often free on weekends.' },
    { color: 'Yellow lines', meaning: 'Residents or special vehicles only', note: 'No parking! Towing + fine.' },
    { color: 'Pink lines', meaning: 'For pregnant women and parents with children', note: 'Found at shopping centers and hospitals.' },
  ],
  ztlCities: [
    { city: 'Rome', schedule: 'Mon-Fri: 6:30-18:00, Sat: 14:00-18:00', note: 'Many zones, including Trastevere' },
    { city: 'Florence', schedule: 'Daily: 7:30-20:00', note: 'Very strict control' },
    { city: 'Milan', schedule: 'Mon-Fri: 7:30-19:30', note: 'Area C — paid zone in center' },
    { city: 'Venice', schedule: 'Always', note: 'Cars prohibited on islands' },
    { city: 'Bologna', schedule: 'Daily: 7:00-20:00', note: 'Strict camera control' },
    { city: 'Naples', schedule: 'Various zones', note: 'Less strict control' },
  ],
  tips: [
    { title: 'Covered parking', text: 'In city centers look for "Parcheggio" signs — covered paid parking. More expensive (€2-4/hour), but safer and no ZTL issues.' },
    { title: 'Parking disc', text: 'In free parking with time limits you need a parking disc — a cardboard dial showing arrival time. Buy at tobacco shops.' },
    { title: 'Parking meters', text: 'Need coins to pay. Some accept cards. Put the receipt under the windshield.' },
  ],
  mainTip: 'When visiting historic centers, leave your car in a parking lot outside the ZTL and walk. This way you\'ll avoid fines, stress, and truly see the city.',
};

export const ParkingPage = () => {
  const { t, language } = useLanguage();
  const data = language === 'en' ? dataEN : dataIT;

  return (
    <div data-testid="parking-page">
      <PageHero 
        title={t('parking.title')}
        subtitle={t('parking.subtitle')}
        image={HERO_IMAGE}
      />

      <ContentSection title={t('parking.colorsTitle')} subtitle={t('parking.colorsSubtitle')} id="colors">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.parkingTypes.map((type) => (
            <div 
              key={type.color}
              className="p-6 bg-white border border-italia-border hover:border-italia-green transition-colors"
            >
              <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                {type.color}
              </h3>
              <p className="text-italia-green font-medium mb-3">{type.meaning}</p>
              <p className="text-sm text-italia-text-muted">{type.note}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="ztl-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-red mb-4">
                {t('parking.ztlSubtitle')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text mb-6">
                {t('parking.ztlTitle')}
              </h2>
              <p className="text-lg text-italia-text-muted mb-6">
                {t('parking.ztlText')}
              </p>
              
              <InfoCard icon={Camera} variant="warning" title={t('parking.ztlCameraTitle')}>
                {t('parking.ztlCameraText')}
              </InfoCard>
            </div>
            
            <div>
              <h3 className="font-serif text-xl font-medium text-italia-text mb-6">
                {t('parking.ztlCitiesTitle')}
              </h3>
              <div className="space-y-4">
                {data.ztlCities.map((item) => (
                  <div key={item.city} className="p-4 border-l-4 border-italia-red bg-italia-limestone/30">
                    <h4 className="font-medium text-italia-text">{item.city}</h4>
                    <p className="text-sm text-italia-green font-mono">{item.schedule}</p>
                    <p className="text-sm text-italia-text-muted">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title={t('parking.tipsTitle')} subtitle={t('parking.tipsSubtitle')} id="tips">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {data.tips.map((tip) => (
            <InfoCard key={tip.title} icon={ParkingCircle} title={tip.title}>
              {tip.text}
            </InfoCard>
          ))}
        </div>
        
        <div className="p-8 bg-italia-green text-white">
          <h3 className="font-serif text-2xl font-medium mb-4">
            {t('parking.mainTipTitle')}
          </h3>
          <p className="text-lg text-white/90">
            {data.mainTip}
          </p>
        </div>
      </ContentSection>
    </div>
  );
};
