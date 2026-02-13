import { Users, Target, BookOpen, Globe } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { useLanguage } from '../i18n';

const HERO_IMAGE = "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxJcmVsYW5kJTIwY291bnRyeXNpZGUlMjByb2FkfGVufDB8fHx8MTc3MDgwNjgxMnww&ixlib=rb-4.1.0&q=85";

const topics = [
  { title: 'Motorways', desc: 'M1, M50, M4 and Ireland\'s motorway network' },
  { title: 'Toll Roads', desc: 'eFlow, M50 toll, and payment methods' },
  { title: 'Traffic Rules', desc: 'Drive on the left, speed limits, and regulations' },
  { title: 'Scenic Routes', desc: 'Wild Atlantic Way, Ring of Kerry, and more' },
  { title: 'Petrol Stations', desc: 'Fuel prices, chains, and locations' },
  { title: 'Parking', desc: 'Pay & display, disc parking, and clamping' },
  { title: 'Road Signs', desc: 'Bilingual signs in English and Irish' },
  { title: 'Emergency', desc: '999, Gardaí, and roadside assistance' },
  { title: 'Tips', desc: 'Practical advice for driving in Ireland' },
];

export const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="about-page">
      <PageHero 
        title="About Us"
        subtitle="Roads of Ireland - your trusted guide to driving in Ireland."
        image={HERO_IMAGE}
      />

      <ContentSection title="Our Mission" subtitle="Why We Exist" id="mission">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-italia-text-muted leading-relaxed mb-6">
              We created Roads of Ireland to help visitors and new residents navigate Irish roads with confidence. 
              Whether you're planning a road trip along the Wild Atlantic Way or simply need to know how to pay 
              the M50 toll, we've got you covered.
            </p>
            <p className="text-lg text-italia-text-muted leading-relaxed">
              Driving in Ireland can be challenging - narrow winding roads, driving on the left, 
              unique road signs in both English and Irish, and unpredictable weather. Our goal is to 
              prepare you for everything so you can relax and enjoy one of Europe's most beautiful countries.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-italia-limestone border border-italia-border text-center">
              <Target className="w-10 h-10 text-italia-green mx-auto mb-4" />
              <h3 className="font-serif text-lg font-medium text-italia-text">Accurate</h3>
              <p className="text-sm text-italia-text-muted mt-2">Up-to-date, verified information</p>
            </div>
            <div className="p-6 bg-italia-limestone border border-italia-border text-center">
              <BookOpen className="w-10 h-10 text-italia-green mx-auto mb-4" />
              <h3 className="font-serif text-lg font-medium text-italia-text">Comprehensive</h3>
              <p className="text-sm text-italia-text-muted mt-2">Everything you need to know</p>
            </div>
            <div className="p-6 bg-italia-limestone border border-italia-border text-center">
              <Users className="w-10 h-10 text-italia-green mx-auto mb-4" />
              <h3 className="font-serif text-lg font-medium text-italia-text">Helpful</h3>
              <p className="text-sm text-italia-text-muted mt-2">Written for real travellers</p>
            </div>
            <div className="p-6 bg-italia-limestone border border-italia-border text-center">
              <Globe className="w-10 h-10 text-italia-green mx-auto mb-4" />
              <h3 className="font-serif text-lg font-medium text-italia-text">Bilingual</h3>
              <p className="text-sm text-italia-text-muted mt-2">English and Irish (Gaeilge)</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="topics-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              What We Cover
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Topics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topics.map((topic) => (
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
          <h2 className="font-serif text-3xl font-medium text-white mb-6">Disclaimer</h2>
          <p className="text-white/90 mb-4">
            Roads of Ireland is an independent informational website. We are not affiliated with, 
            endorsed by, or connected to any government agency, tourism board, or official body.
          </p>
          <p className="text-white/80 text-sm">
            While we strive to keep information accurate and up-to-date, road rules, toll prices, 
            and other details may change. Always check official sources and signage. 
            Drive safely and enjoy Ireland!
          </p>
        </div>
      </section>
    </div>
  );
};
