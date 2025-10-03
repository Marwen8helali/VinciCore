import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Users, Lightbulb, Award, Heart, Zap } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

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
      {/* Hero Section avec effet de particules */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-950 dark:via-blue-950 dark:to-gray-950 text-white py-20 overflow-hidden">
        {/* Particules flottantes */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('about.hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('about.hero.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Values Section avec animations 3D */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {t('about.values.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {t('about.values.subtitle')}
            </motion.p>
          </motion.div>

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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateY: -30 },
                  visible: { opacity: 1, y: 0, rotateY: 0 }
                }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer transform-gpu backdrop-blur-lg bg-white/90 dark:bg-gray-700/90"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  whileHover={{ 
                    rotate: 360, 
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 p-4 rounded-full w-fit mx-auto mb-6"
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  {value.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 dark:text-gray-300 text-lg"
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section avec counter animation et effet glassmorphism */}
      <section className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
        {/* Effet de fond animé */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {t('about.stats.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              {t('about.stats.subtitle')}
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { scale: 0.5, opacity: 0, rotateX: -90 },
                  visible: { scale: 1, opacity: 1, rotateX: 0 }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 3,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform-gpu backdrop-blur-sm"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.3, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 10
                  }}
                  className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                >
                  {stat.number}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-gray-700 dark:text-gray-300 font-medium"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section supplémentaire avec effet de révélation */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-white text-center shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Target className="h-16 w-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Notre Mission</h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Transformer vos idées en solutions digitales innovantes et performantes, 
                en mettant l'accent sur la qualité, la sécurité et l'expérience utilisateur.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;