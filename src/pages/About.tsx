import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Users, Lightbulb, Award, Heart, Zap } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.items.0.title'),
      description: t('about.values.items.0.description')
    },
    {
      icon: Heart,
      title: t('about.values.items.1.title'),
      description: t('about.values.items.1.description')
    },
    {
      icon: Users,
      title: t('about.values.items.2.title'),
      description: t('about.values.items.2.description')
    }
  ];

  const stats = [
    { number: '50+', label: t('about.stats.items.0') },
    { number: '100%', label: t('about.stats.items.1') },
    { number: '5+', label: t('about.stats.items.2') },
    { number: '24/7', label: t('about.stats.items.3') }
  ];

  return (
    <div className="dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-950 dark:via-blue-950 dark:to-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
                {(t('about.story.paragraphs', { returnObjects: true }) as string[]).map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-8 rounded-2xl text-white">
                <Target className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h3>
                <p className="text-blue-100 text-lg">
                  {t('about.mission.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-4 rounded-full w-fit mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about.stats.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('about.stats.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.founder.title')}
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
                <p>
                  <strong className="text-gray-900 dark:text-white">Marwen Helali</strong>, {t('about.founder.description')}
                </p>
                {(t('about.founder.bio', { returnObjects: true }) as string[]).map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Marwen Helali</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{t('about.founder.position')}</p>
                  <div className="flex justify-center space-x-4">
                    <Award className="h-6 w-6 text-yellow-500" />
                    <Zap className="h-6 w-6 text-blue-500" />
                    <Target className="h-6 w-6 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('about.vision.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('about.vision.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {(t('about.vision.pillars', { returnObjects: true }) as { title: string; description: string }[]).map((pillar, index) => {
              const icons = [Lightbulb, Users, Target];
              const Icon = icons[index];
              return (
                <div key={index} className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                  <p className="text-blue-100">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;