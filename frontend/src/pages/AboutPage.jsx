import { Users, Target, BookOpen, Globe } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxJcmVsYW5kJTIwY291bnRyeXNpZGUlMjByb2FkfGVufDB8fHx8MTc3MDgwNjgxMnww&ixlib=rb-4.1.0&q=85";

const content = {
  en: {
    title: 'About Us',
    subtitle: 'Roads of Ireland - your trusted guide to driving in Ireland.',
    missionTitle: 'Our Mission',
    missionSubtitle: 'Why We Exist',
    missionText1: 'We created Roads of Ireland to help visitors and new residents navigate Irish roads with confidence. Whether you\'re planning a road trip along the Wild Atlantic Way or simply need to know how to pay the M50 toll, we\'ve got you covered.',
    missionText2: 'Driving in Ireland can be challenging - narrow winding roads, driving on the left, unique road signs in both English and Irish, and unpredictable weather. Our goal is to prepare you for everything so you can relax and enjoy one of Europe\'s most beautiful countries.',
    topicsTitle: 'Topics',
    topicsSubtitle: 'What We Cover',
    disclaimerTitle: 'Disclaimer',
    disclaimerText1: 'Roads of Ireland is an independent informational website. We are not affiliated with, endorsed by, or connected to any government agency, tourism board, or official body.',
    disclaimerText2: 'While we strive to keep information accurate and up-to-date, road rules, toll prices, and other details may change. Always check official sources and signage. Drive safely and enjoy Ireland!',
    values: [
      { icon: 'Target', title: 'Accurate', desc: 'Up-to-date, verified information' },
      { icon: 'BookOpen', title: 'Comprehensive', desc: 'Everything you need to know' },
      { icon: 'Users', title: 'Helpful', desc: 'Written for real travellers' },
      { icon: 'Globe', title: 'Bilingual', desc: 'English and Irish (Gaeilge)' },
    ],
    topics: [
      { title: 'Motorways', desc: 'M1, M50, M4 and Ireland\'s motorway network' },
      { title: 'Toll Roads', desc: 'eFlow, M50 toll, and payment methods' },
      { title: 'Traffic Rules', desc: 'Drive on the left, speed limits, and regulations' },
      { title: 'Scenic Routes', desc: 'Wild Atlantic Way, Ring of Kerry, and more' },
      { title: 'Petrol Stations', desc: 'Fuel prices, chains, and locations' },
      { title: 'Parking', desc: 'Pay & display, disc parking, and clamping' },
      { title: 'Road Signs', desc: 'Bilingual signs in English and Irish' },
      { title: 'Emergency', desc: '999, Gardaí, and roadside assistance' },
      { title: 'Tips', desc: 'Practical advice for driving in Ireland' },
    ],
  },
  ga: {
    title: 'Fúinn',
    subtitle: 'Bóithre na hÉireann - do threoir iontaofa do thiomáint in Éirinn.',
    missionTitle: 'Ár Misean',
    missionSubtitle: 'Cén Fáth a bhfuilimid Ann',
    missionText1: 'Chruthaíomar Bóithre na hÉireann chun cabhrú le cuairteoirí agus cónaitheoirí nua nascleanúint a dhéanamh ar bhóithre na hÉireann le muinín. Cibé an bhfuil tú ag pleanáil turas bóthair feadh Shlí an Atlantaigh Fhiáin nó má theastaíonn uait a fháil amach conas dola an M50 a íoc, tá tú clúdaithe againn.',
    missionText2: 'Is féidir le tiomáint in Éirinn a bheith dúshlánach - bóithre cúnga lúbacha, tiomáint ar chlé, comharthaí bóthair uathúla i mBéarla agus Gaeilge, agus aimsir dho-thuartha. Is é ár sprioc tú a ullmhú do gach rud ionas gur féidir leat ligean do scíth agus taitneamh a bhaint as ceann de na tíortha is áille san Eoraip.',
    topicsTitle: 'Ábhair',
    topicsSubtitle: 'Cad a Chlúdaímid',
    disclaimerTitle: 'Séanadh',
    disclaimerText1: 'Is suíomh gréasáin faisnéise neamhspleách é Bóithre na hÉireann. Níl baint againn le, ná tacaíocht againn ó, ná nasc againn le haon ghníomhaireacht rialtais, bord turasóireachta, ná comhlacht oifigiúil.',
    disclaimerText2: 'Cé go ndéanaimid ár ndícheall eolas a choinneáil cruinn agus cothrom le dáta, is féidir le rialacha bóthair, praghsanna dola, agus sonraí eile athrú. Seiceáil foinsí oifigiúla agus comharthaíocht i gcónaí. Tiomáin go sábháilte agus bain taitneamh as Éirinn!',
    values: [
      { icon: 'Target', title: 'Cruinn', desc: 'Eolas cothrom le dáta, fíoraithe' },
      { icon: 'BookOpen', title: 'Cuimsitheach', desc: 'Gach rud atá uait a fháil amach' },
      { icon: 'Users', title: 'Cabhrach', desc: 'Scríofa d\'fhíorthaistealaithe' },
      { icon: 'Globe', title: 'Dátheangach', desc: 'Béarla agus Gaeilge' },
    ],
    topics: [
      { title: 'Mótarbhealaí', desc: 'M1, M50, M4 agus líonra mótarbhealaí na hÉireann' },
      { title: 'Bóithre Dola', desc: 'eFlow, dola M50, agus modhanna íocaíochta' },
      { title: 'Rialacha Tráchta', desc: 'Tiomáint ar chlé, teorainneacha luais, agus rialacháin' },
      { title: 'Bealaí Radharcacha', desc: 'Slí an Atlantaigh Fhiáin, Mórchuaird Chiarraí, agus níos mó' },
      { title: 'Stáisiúin Pheitril', desc: 'Praghsanna breosla, slabhraí, agus suíomhanna' },
      { title: 'Páirceáil', desc: 'Íoc & taispeáin, páirceáil diosca, agus clampáil' },
      { title: 'Comharthaí Bóthair', desc: 'Comharthaí dátheangacha i mBéarla agus Gaeilge' },
      { title: 'Éigeandáil', desc: '999, Gardaí, agus cúnamh cois bóthair' },
      { title: 'Leideanna', desc: 'Comhairle phraiticiúil do thiomáint in Éirinn' },
    ],
  }
};

const IconComponent = ({ iconName }) => {
  const icons = { Target, BookOpen, Users, Globe };
  const Icon = icons[iconName];
  return Icon ? <Icon className="w-10 h-10 text-italia-green mx-auto mb-4" /> : null;
};

export const AboutPage = () => {
  const { language } = useLanguage();
  const t = content[language] || content.en;

  return (
    <div data-testid="about-page">
      <PageHero 
        title={t.title}
        subtitle={t.subtitle}
        image={HERO_IMAGE}
      />

      <ContentSection title={t.missionTitle} subtitle={t.missionSubtitle} id="mission">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-italia-text-muted leading-relaxed mb-6">
              {t.missionText1}
            </p>
            <p className="text-lg text-italia-text-muted leading-relaxed">
              {t.missionText2}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {t.values.map((value) => (
              <div key={value.title} className="p-6 bg-italia-limestone border border-italia-border text-center">
                <IconComponent iconName={value.icon} />
                <h3 className="font-serif text-lg font-medium text-italia-text">{value.title}</h3>
                <p className="text-sm text-italia-text-muted mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="topics-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t.topicsSubtitle}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              {t.topicsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.topics.map((topic) => (
              <div key={topic.title} className="p-6 border border-italia-border hover:border-italia-green transition-colors">
                <h3 className="font-serif text-lg font-medium text-italia-text mb-2">{topic.title}</h3>
                <p className="text-sm text-italia-text-muted">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="disclaimer-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="font-serif text-3xl font-medium text-white mb-6">{t.disclaimerTitle}</h2>
          <p className="text-white/90 mb-4">
            {t.disclaimerText1}
          </p>
          <p className="text-white/80 text-sm">
            {t.disclaimerText2}
          </p>
        </div>
      </section>
    </div>
  );
};
