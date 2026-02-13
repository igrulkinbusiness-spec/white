import { useState } from 'react';
import { Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import { useLanguage } from '../i18n';
import { PageHero } from '../components/shared/PageHero';
import { ContentSection } from '../components/shared/ContentSection';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import axios from 'axios';

const HERO_IMAGE = "https://images.unsplash.com/photo-1650132758640-e3481c46014e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwzfHx2aW50YWdlJTIwRmlhdCUyMGNhciUyMEl0YWx5JTIwc3RyZWV0fGVufDB8fHx8MTc3MDgwNjgzMHww&ixlib=rb-4.1.0&q=85";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(t('contact.formError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      <PageHero 
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        image={HERO_IMAGE}
        compact
      />

      <ContentSection id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-4">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-italia-green mb-4">
              {t('contact.infoSubtitle')}
            </span>
            <h2 className="font-serif text-3xl font-medium text-italia-text mb-8">
              {t('contact.infoTitle')}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-italia-green/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-italia-green" />
                </div>
                <div>
                  <h3 className="font-medium text-italia-text mb-1">{t('contact.email')}</h3>
                  <p className="text-italia-text-muted">info@roadsofireland.ie</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-italia-green/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-italia-green" />
                </div>
                <div>
                  <h3 className="font-medium text-italia-text mb-1">{t('contact.location')}</h3>
                  <p className="text-italia-text-muted">{t('contact.locationValue')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-italia-green/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-italia-green" />
                </div>
                <div>
                  <h3 className="font-medium text-italia-text mb-1">{t('contact.responseTime')}</h3>
                  <p className="text-italia-text-muted">{t('contact.responseTimeValue')}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-italia-gold/10 border-l-4 border-italia-gold">
              <p className="text-italia-text text-sm">
                <strong>{language === 'ga' ? 'Nóta:' : 'Note:'}</strong> {t('contact.note')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-italia-border p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-italia-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-italia-green" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-italia-text mb-4">
                    {t('contact.formSuccess')}
                  </h3>
                  <p className="text-italia-text-muted mb-8">
                    {t('contact.formSuccessText')}
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-italia-green text-italia-green hover:bg-italia-green hover:text-white"
                  >
                    {t('contact.formSuccessButton')}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.formName')}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.formNamePlaceholder')}
                        required
                        className="border-italia-border focus:border-italia-green focus:ring-italia-green"
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.formEmail')}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.formEmailPlaceholder')}
                        required
                        className="border-italia-border focus:border-italia-green focus:ring-italia-green"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('contact.formSubject')}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('contact.formSubjectPlaceholder')}
                      required
                      className="border-italia-border focus:border-italia-green focus:ring-italia-green"
                      data-testid="input-subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.formMessage')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.formMessagePlaceholder')}
                      rows={6}
                      required
                      className="border-italia-border focus:border-italia-green focus:ring-italia-green resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-italia-red/10 border border-italia-red/20 text-italia-red text-sm">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-italia-green hover:bg-italia-green-dark text-white py-6 rounded-full"
                    data-testid="submit-btn"
                  >
                    {isSubmitting ? (
                      t('common.sending')
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t('contact.formSubmit')}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};
