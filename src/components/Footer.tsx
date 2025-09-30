import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code2, Mail, MapPin, Phone } from 'lucide-react';
import LogoImage from '../img/LogoImage 18 sept. 2025, 22_50_14.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={LogoImage} 
                alt="VinciCore Logo" 
                className="w-auto object-contain" 
                style={{ height: '150px' , marginBottom: '-30px'}}
              />
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">
              {t('footer.contact')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400 dark:text-cyan-300" />
                <span className="text-gray-300 dark:text-gray-400">
                  {t('contact.info.email.content')}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">
              {t('footer.services')}
            </h3>
            <ul className="space-y-2">
              {(t('footer.servicesList', { returnObjects: true }) as string[]).map((service: string, index: number) => (
                <li key={index}>
                  <span className="text-gray-300 dark:text-gray-400 hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} VinciCore. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;