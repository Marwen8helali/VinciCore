import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Smartphone, Monitor, Cloud, Shield, Headphones, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t('services.items.development.title'),
      description: t('services.items.development.description'),
      features: t('services.items.development.features', { returnObjects: true }) as string[],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: t('services.items.consulting.title'),
      description: t('services.items.consulting.description'),
      features: t('services.items.consulting.features', { returnObjects: true }) as string[],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Cloud,
      title: t('services.items.cloud.title'),
      description: t('services.items.cloud.description'),
      features: t('services.items.cloud.features', { returnObjects: true }) as string[],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: t('services.items.security.title'),
      description: t('services.items.security.description'),
      features: t('services.items.security.features', { returnObjects: true }) as string[],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Headphones,
      title: t('services.items.support.title'),
      description: t('services.items.support.description'),
      features: t('services.items.support.features', { returnObjects: true }) as string[],
      color: 'from-green-500 to-green-600'
    }
  ];

  const process = (t('services.process.steps', { returnObjects: true }) as Array<{ title: string; description: string }>).map((step, index) => ({
    step: String(index + 1).padStart(2, '0'),
    ...step
  }));

  return (
    <div className="dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-950 dark:via-blue-950 dark:to-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.hero.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.main.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('services.main.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <service.icon className="h-8 w-8 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-blue-100">{service.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.process.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('services.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:shadow-lg transition-shadow">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.technologies.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('services.technologies.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
              'MongoDB', 'PostgreSQL', 'TypeScript', 'Next.js', 'Vue.js', 'Laravel'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center font-medium text-gray-700 dark:text-gray-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('services.cta.subtitle')}
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center group"
          >
            {t('services.cta.button')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;