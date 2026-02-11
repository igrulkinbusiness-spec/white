import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const navItems = [
  { name: 'Главная', path: '/' },
  { 
    name: 'Дороги', 
    children: [
      { name: 'Автострады', path: '/autostrade' },
      { name: 'Платные дороги', path: '/toll-roads' },
      { name: 'Живописные маршруты', path: '/scenic-routes' },
    ]
  },
  { 
    name: 'Правила', 
    children: [
      { name: 'ПДД Италии', path: '/traffic-rules' },
      { name: 'Дорожные знаки', path: '/road-signs' },
      { name: 'Скоростные ограничения', path: '/speed-limits' },
      { name: 'Зоны ZTL', path: '/parking' },
    ]
  },
  { 
    name: 'Сервисы', 
    children: [
      { name: 'Заправки', path: '/gas-stations' },
      { name: 'Аренда авто', path: '/car-rental' },
      { name: 'Экстренные службы', path: '/emergency' },
    ]
  },
  { name: 'Советы', path: '/tips' },
  { name: 'О сайте', path: '/about' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-italia-border/50" data-testid="header">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" data-testid="logo-link">
            <div className="w-10 h-10 bg-italia-green rounded-sm flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">S</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-medium text-italia-text group-hover:text-italia-green transition-colors">
                Strade d'Italia
              </h1>
              <p className="text-xs text-italia-text-muted font-mono uppercase tracking-wider">
                Путеводитель по дорогам
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
            {navItems.map((item) => (
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-italia-text hover:text-italia-green transition-colors">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border-italia-border">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.path} asChild>
                        <Link 
                          to={child.path}
                          className={`w-full ${isActive(child.path) ? 'text-italia-green font-medium' : ''}`}
                        >
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path) 
                      ? 'text-italia-green' 
                      : 'text-italia-text hover:text-italia-green'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Contact Button */}
          <Link 
            to="/contact"
            className="hidden lg:flex items-center px-6 py-2.5 bg-italia-green text-white text-sm font-medium rounded-full hover:bg-italia-green-dark transition-all btn-italia"
            data-testid="contact-btn"
          >
            Связаться
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-italia-text"
            data-testid="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-italia-border" data-testid="mobile-menu">
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.name} className="py-2">
                  <span className="text-sm font-medium text-italia-text-muted uppercase tracking-wider">
                    {item.name}
                  </span>
                  <div className="mt-2 ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 text-sm ${
                          isActive(child.path) ? 'text-italia-green font-medium' : 'text-italia-text'
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-sm font-medium ${
                    isActive(item.path) ? 'text-italia-green' : 'text-italia-text'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 py-3 text-center bg-italia-green text-white text-sm font-medium rounded-full"
            >
              Связаться
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
