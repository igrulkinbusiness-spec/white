import { Info, Heart, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';

const HERO_IMAGE = "https://images.unsplash.com/photo-1630413933714-a36e3aa156b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxSb21lJTIwQ29sb3NzZXVtJTIwY2l0eSUyMHBhcmtpbmd8ZW58MHx8fHwxNzcwODA2ODM1fDA&ixlib=rb-4.1.0&q=85";

export const AboutPage = () => {
  return (
    <div data-testid="about-page">
      <PageHero 
        title="О проекте"
        subtitle="Strade d'Italia — ваш надёжный путеводитель по дорогам солнечной Италии."
        image={HERO_IMAGE}
      />

      <ContentSection title="Наша миссия" subtitle="О нас" id="mission">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="prose prose-lg max-w-none text-italia-text-muted">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                <strong className="text-italia-text">Strade d'Italia</strong> — это информационный 
                портал для русскоязычных путешественников, планирующих автомобильную поездку по Италии.
              </p>
              <p className="leading-relaxed mb-6">
                Мы собрали всю необходимую информацию о дорогах, правилах, платных автострадах, 
                парковках и зонах ZTL в одном месте. Наша цель — помочь вам подготовиться 
                к путешествию и избежать типичных ошибок.
              </p>
              <p className="leading-relaxed mb-6">
                Информация на сайте основана на официальных источниках, личном опыте 
                путешественников и регулярно обновляется. Однако правила и тарифы могут 
                меняться — всегда проверяйте актуальную информацию перед поездкой.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white border-l-4 border-italia-green">
              <Info className="w-8 h-8 text-italia-green mb-4" />
              <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                Информационный ресурс
              </h3>
              <p className="text-italia-text-muted">
                Мы не продаём услуги и не зарабатываем на рекламе прокатных компаний. 
                Наша информация объективна и беспристрастна.
              </p>
            </div>
            <div className="p-6 bg-white border-l-4 border-italia-gold">
              <Heart className="w-8 h-8 text-italia-gold mb-4" />
              <h3 className="font-serif text-xl font-medium text-italia-text mb-2">
                Создано с любовью
              </h3>
              <p className="text-italia-text-muted">
                Проект создан энтузиастами, влюблёнными в Италию и автопутешествия.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="topics-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              Содержание
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Что вы найдёте на сайте
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Автострады', desc: 'Сеть Autostrade, маршруты, зоны отдыха' },
              { title: 'Платные дороги', desc: 'Система оплаты, Telepass, тарифы' },
              { title: 'ПДД Италии', desc: 'Правила, штрафы, документы' },
              { title: 'Живописные маршруты', desc: 'Лучшие дороги для путешествий' },
              { title: 'Аренда авто', desc: 'Компании, требования, страховки' },
              { title: 'Заправки', desc: 'Типы топлива, цены, сервисы' },
              { title: 'Парковки и ZTL', desc: 'Разметка, правила, штрафы' },
              { title: 'Дорожные знаки', desc: 'Итальянские знаки и указатели' },
              { title: 'Экстренные службы', desc: 'Номера, помощь при ДТП' },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-italia-border hover:border-italia-green transition-colors">
                <h3 className="font-serif text-lg font-medium text-italia-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-italia-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-italia-green" data-testid="cta-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Mail className="w-12 h-12 text-italia-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            Есть вопросы или предложения?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Мы всегда рады обратной связи. Напишите нам, если нашли неточность 
            или хотите поделиться опытом.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-italia-green font-medium rounded-full hover:bg-italia-limestone transition-all"
          >
            Написать нам
          </Link>
        </div>
      </section>
    </div>
  );
};
