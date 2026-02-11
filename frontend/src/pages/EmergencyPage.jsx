import { Phone, Shield, AlertTriangle, Heart, Car, Flame } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { InfoCard } from '../components/shared/InfoCard';

const HERO_IMAGE = "https://images.unsplash.com/photo-1660148887196-a2f834ec2755?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxSb21lJTIwQ29sb3NzZXVtJTIwY2l0eSUyMHBhcmtpbmd8ZW58MHx8fHwxNzcwODA2ODM1fDA&ixlib=rb-4.1.0&q=85";

const emergencyNumbers = [
  { number: '112', name: 'Единый экстренный номер', description: 'Работает по всей Европе. Операторы говорят на английском.', icon: Phone },
  { number: '113', name: 'Polizia di Stato', description: 'Государственная полиция. ДТП, преступления, общие вопросы.', icon: Shield },
  { number: '115', name: 'Vigili del Fuoco', description: 'Пожарная служба. Также спасательные операции.', icon: Flame },
  { number: '118', name: 'Emergenza Sanitaria', description: 'Скорая медицинская помощь.', icon: Heart },
  { number: '116', name: 'ACI Soccorso Stradale', description: 'Дорожная помощь. Эвакуаторы, техпомощь.', icon: Car },
  { number: '1515', name: 'Guardia Forestale', description: 'Лесная охрана. Пожары в лесу, экология.', icon: AlertTriangle },
];

const policeTypes = [
  {
    name: 'Polizia Stradale',
    description: 'Дорожная полиция. Патрулирует автострады, оформляет ДТП.',
    vehicle: 'Бело-синие автомобили с надписью «Polizia»',
  },
  {
    name: 'Carabinieri',
    description: 'Военная полиция. Широкие полномочия, часто в сельской местности.',
    vehicle: 'Тёмно-синие автомобили с красной полосой',
  },
  {
    name: 'Polizia Municipale',
    description: 'Муниципальная полиция. Штрафы за парковку, контроль ZTL.',
    vehicle: 'Белые автомобили с синей полосой и гербом города',
  },
  {
    name: 'Guardia di Finanza',
    description: 'Финансовая полиция. Редко останавливают, но имеют право.',
    vehicle: 'Серо-зелёные автомобили',
  },
];

export const EmergencyPage = () => {
  return (
    <div data-testid="emergency-page">
      <PageHero 
        title="Экстренные службы"
        subtitle="Важные телефоны и информация о службах помощи на дорогах Италии."
        image={HERO_IMAGE}
      />

      <ContentSection title="Экстренные номера" subtitle="Телефоны" id="numbers">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyNumbers.map((item) => (
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
              Полиция
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-italia-text">
              Виды полиции в Италии
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policeTypes.map((police) => (
              <div 
                key={police.name}
                className="p-6 border border-italia-border"
              >
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

      <ContentSection title="При ДТП" subtitle="Действия" id="accident">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-medium text-italia-text">
              Что делать при аварии
            </h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="font-mono text-italia-green text-lg">01</span>
                <div>
                  <p className="font-medium text-italia-text">Остановитесь и включите аварийку</p>
                  <p className="text-sm text-italia-text-muted">Не покидайте место ДТП</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-italia-green text-lg">02</span>
                <div>
                  <p className="font-medium text-italia-text">Наденьте светоотражающий жилет</p>
                  <p className="text-sm text-italia-text-muted">Обязателен при выходе из машины на дороге</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-italia-green text-lg">03</span>
                <div>
                  <p className="font-medium text-italia-text">Установите знак аварийной остановки</p>
                  <p className="text-sm text-italia-text-muted">На расстоянии 50-100 метров</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-italia-green text-lg">04</span>
                <div>
                  <p className="font-medium text-italia-text">Вызовите помощь</p>
                  <p className="text-sm text-italia-text-muted">112 или 113 при травмах, 116 для техпомощи</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-italia-green text-lg">05</span>
                <div>
                  <p className="font-medium text-italia-text">Заполните европротокол (CAI)</p>
                  <p className="text-sm text-italia-text-muted">Constatazione Amichevole di Incidente</p>
                </div>
              </li>
            </ol>
          </div>
          <div className="space-y-6">
            <InfoCard icon={AlertTriangle} variant="warning" title="Важно помнить">
              <ul className="space-y-2 mt-3">
                <li>• Сфотографируйте место ДТП и повреждения</li>
                <li>• Запишите данные второго участника</li>
                <li>• Получите копию протокола полиции</li>
                <li>• Сообщите в прокатную компанию в течение 24 часов</li>
              </ul>
            </InfoCard>
            <InfoCard icon={Phone} title="Горячая линия ACI">
              <p className="mt-3">
                <span className="font-mono text-2xl text-italia-green">803 116</span>
              </p>
              <p className="mt-2 text-sm">
                Бесплатный номер для помощи на дорогах. 
                Работает 24/7. Эвакуатор, техпомощь, консультации.
              </p>
            </InfoCard>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-italia-green" data-testid="consulate-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-gold mb-4">
              Консульская помощь
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
              Посольство России в Италии
            </h2>
            <div className="space-y-4 text-white/90">
              <p>
                <strong>Адрес:</strong> Via Gaeta, 5, 00185 Roma
              </p>
              <p>
                <strong>Телефон:</strong> +39 06 494 1680
              </p>
              <p>
                <strong>Экстренный телефон:</strong> +39 06 494 1649
              </p>
              <p className="text-sm text-white/70 mt-6">
                Консульские отделы также есть в Милане, Генуе и Палермо.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
