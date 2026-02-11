import { CreditCard, Clock, Euro, AlertCircle, CheckCircle } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1707342269520-03ca1dddc0fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxSb21lJTIwQ29sb3NzZXVtJTIwY2l0eSUyMHBhcmtpbmd8ZW58MHx8fHwxNzcwODA2ODM1fDA&ixlib=rb-4.1.0&q=85";

const paymentMethods = [
  {
    name: 'Наличные',
    icon: Euro,
    description: 'Принимаются в кассах с оператором и некоторых автоматах',
    pros: ['Не требует предварительной подготовки', 'Принимаются в любом пункте'],
    cons: ['Очереди в часы пик', 'Нужна мелочь'],
  },
  {
    name: 'Банковская карта',
    icon: CreditCard,
    description: 'Visa, MasterCard принимаются в автоматах с синей полосой',
    pros: ['Быстрее наличных', 'Удобно для туристов'],
    cons: ['Не все автоматы принимают карты', 'Возможна комиссия'],
  },
  {
    name: 'Telepass',
    icon: CheckCircle,
    description: 'Электронная система автоматической оплаты',
    pros: ['Моментальный проезд', 'Скидки до 20%', 'Нет очередей'],
    cons: ['Требуется устройство', 'Нужна регистрация'],
  },
];

const tollRates = [
  { category: 'A (Легковые автомобили)', rate: '0.07-0.10', note: 'Базовая категория для машин до 3.5т' },
  { category: 'B (Автомобили с прицепом)', rate: '0.10-0.14', note: 'Автомобили с прицепом или караваном' },
  { category: '3 (Грузовики)', rate: '0.14-0.18', note: 'Грузовые автомобили с 2 осями' },
  { category: '4 (Автобусы)', rate: '0.16-0.20', note: 'Автобусы и большие грузовики' },
];

export const TollRoadsPage = () => {
  return (
    <div data-testid="toll-roads-page">
      <PageHero 
        title="Платные дороги"
        subtitle="Система оплаты итальянских автострад: Telepass, тарифы и советы по экономии."
        image={HERO_IMAGE}
      />

      <ContentSection title="Система оплаты" subtitle="Обзор" id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none text-italia-text-muted">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Большинство автострад Италии являются платными. Система оплаты 
                проста: при въезде вы берёте билет, при выезде оплачиваете 
                в зависимости от пройденного расстояния.
              </p>
              <p className="leading-relaxed mb-6">
                На въездах и выездах пункты оплаты разделены по типам:
              </p>
              <ul className="space-y-2 mb-6">
                <li><strong className="text-italia-green">Жёлтая полоса</strong> — Telepass (автоматический проезд)</li>
                <li><strong className="text-italia-text">Синяя полоса</strong> — автоматы с картой/наличными</li>
                <li><strong className="text-italia-text">Белая полоса</strong> — касса с оператором</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-4">
            <InfoCard icon={AlertCircle} variant="warning" title="Важно!">
              Не заезжайте в полосу Telepass без устройства — придётся сдавать назад 
              или ждать помощи персонала. Штраф за проезд без оплаты — от 80 евро.
            </InfoCard>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-white" data-testid="payment-methods">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              Способы оплаты
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Как оплатить проезд
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
                    <p className="font-mono text-xs uppercase tracking-wider text-italia-green mb-2">Плюсы</p>
                    <ul className="space-y-1">
                      {method.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-italia-text-muted flex items-start gap-2">
                          <span className="text-italia-green mt-1">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-italia-red mb-2">Минусы</p>
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

      <ContentSection title="Тарифы на проезд" subtitle="Стоимость" id="rates">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-italia-green">
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Категория</th>
                <th className="text-left py-4 pr-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">€/км</th>
                <th className="text-left py-4 font-mono text-xs uppercase tracking-wider text-italia-text-muted">Описание</th>
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
            <strong>Совет:</strong> Для примерного расчёта стоимости поездки умножьте 
            расстояние на 0.08 евро. Например, Милан — Рим (580 км) обойдётся примерно в 46 евро.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Telepass" subtitle="Электронная оплата" id="telepass" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-italia-text-muted leading-relaxed mb-6">
              <strong className="text-italia-text">Telepass</strong> — это электронная 
              система автоматической оплаты. Устройство крепится на лобовое стекло 
              и автоматически списывает деньги при проезде через пункты оплаты.
            </p>
            <h4 className="font-serif text-xl font-medium text-italia-text mb-4">
              Как получить Telepass туристу:
            </h4>
            <ol className="space-y-3 text-italia-text-muted">
              <li className="flex gap-3">
                <span className="font-mono text-italia-green">01</span>
                <span>Арендуйте вместе с автомобилем (доплата 1-2€/день)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-italia-green">02</span>
                <span>Купите в пунктах Punto Blu на автострадах</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-italia-green">03</span>
                <span>Закажите онлайн на telepass.com</span>
              </li>
            </ol>
          </div>
          <div className="space-y-4">
            <InfoCard icon={Clock} title="Экономия времени" variant="gold">
              С Telepass вы проезжаете пункты оплаты без остановки, 
              экономя до 5-10 минут на каждом выезде.
            </InfoCard>
            <InfoCard icon={Euro} title="Скидки">
              Владельцы Telepass получают скидки до 20% на некоторых участках 
              и в определённое время суток.
            </InfoCard>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};
