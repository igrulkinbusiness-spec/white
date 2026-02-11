import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../../i18n';

export const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t('footer.roads'),
      links: [
        { name: t('nav.autostrade'), path: '/autostrade' },
        { name: t('nav.tollRoads'), path: '/toll-roads' },
        { name: t('nav.scenicRoutes'), path: '/scenic-routes' },
      ]
    },
    {
      title: t('footer.rules'),
      links: [
        { name: t('nav.trafficRules'), path: '/traffic-rules' },
        { name: t('nav.roadSigns'), path: '/road-signs' },
        { name: t('nav.speedLimits'), path: '/speed-limits' },
        { name: t('nav.ztl'), path: '/parking' },
      ]
    },
    {
      title: t('footer.useful'),
      links: [
        { name: t('nav.gasStations'), path: '/gas-stations' },
        { name: t('nav.emergency'), path: '/emergency' },
        { name: t('nav.tips'), path: '/tips' },
      ]
    },
  ];

  return (
    <footer className="bg-italia-green text-white" data-testid="footer">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center">
                <span className="text-italia-green font-serif font-bold text-2xl">S</span>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-medium">Strade d'Italia</h2>
                <p className="text-sm text-white/70 font-mono uppercase tracking-wider">
                  {t('common.brandTagline')}
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-sm">
              {t('footer.description')}
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>{t('footer.infoPortal')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>info@strade-italia.it</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <span>{t('footer.updated')}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <Link to="/about" className="hover:text-white transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
