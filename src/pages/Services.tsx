import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Smartphone, Monitor, Cloud, Shield, Headphones, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
      {/* Hero Section avec animation de fond */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-950 dark:via-blue-950 dark:to-gray-950 text-white py-20 overflow-hidden">
        {/* Animation de grille en arrière-plan */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('services.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('services.hero.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid avec stagger */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.main.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('services.main.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ 
                  scale: 1.03, 
                  rotate: 1,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group transform-gpu"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gradient-to-r ${service.color} p-6 text-white`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-8 w-8 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-blue-100">{service.description}</p>
                </motion.div>
                
                <div className="p-6">
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                    className="space-y-3"
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section avec timeline */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {t('services.process.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {t('services.process.subtitle')}
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg transform-gpu"
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section avec effet 3D */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.technologies.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('services.technologies.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {[
              'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
              'MongoDB', 'PostgreSQL', 'TypeScript', 'Next.js', 'Vue.js', 'Laravel'
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
                  visible: { opacity: 1, scale: 1, rotateY: 0 }
                }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 5,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 text-center font-medium text-gray-700 dark:text-gray-300 cursor-pointer transform-gpu backdrop-blur-lg"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section avec animation de pulse */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 overflow-hidden">
        {/* Cercles animés en arrière-plan */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t('services.cta.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            {t('services.cta.subtitle')}
          </motion.p>
          
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 inline-flex items-center group"
          >
            {t('services.cta.button')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;