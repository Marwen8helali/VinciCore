import React from 'react';
import { Code, Smartphone, Monitor, Cloud, Shield, Headphones, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement logiciel sur mesure',
      description: 'Solutions web, mobile et desktop adaptées à vos besoins spécifiques',
      features: [
        'Applications web modernes (React, Node.js, Python)',
        'Applications mobiles (iOS, Android, React Native)',
        'Logiciels desktop multiplateformes',
        'APIs et microservices',
        'Intégrations système'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Conseil en informatique & transformation digitale',
      description: 'Accompagnement stratégique pour optimiser vos processus',
      features: [
        'Audit informatique complet',
        'Stratégie de transformation digitale',
        'Optimisation des processus métier',
        'Architecture système et technique',
        'Conduite du changement'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Migration et optimisation de vos infrastructures cloud',
      features: [
        'Migration vers le cloud (AWS, Azure, GCP)',
        'Architecture cloud native',
        'DevOps et CI/CD',
        'Monitoring et observabilité',
        'Optimisation des coûts'
      ],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Protection complète de vos données et systèmes informatiques',
      features: [
        'Audit de sécurité et tests d\'intrusion',
        'Mise en place de politiques de sécurité',
        'Formation des équipes',
        'Gestion des incidents de sécurité',
        'Conformité RGPD et normes ISO'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: 'Support technique réactif et maintenance préventive',
      features: [
        'Support technique 24/7',
        'Maintenance préventive et corrective',
        'Monitoring proactif',
        'Mise à jour et évolutions',
        'Formation des utilisateurs'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analyse des besoins',
      description: 'Nous analysons vos besoins et définissons ensemble les objectifs de votre projet.'
    },
    {
      step: '02',
      title: 'Conception & Planning',
      description: 'Conception détaillée de la solution et planification des étapes de développement.'
    },
    {
      step: '03',
      title: 'Développement',
      description: 'Développement agile avec des points de contrôle réguliers et votre feedback continu.'
    },
    {
      step: '04',
      title: 'Déploiement & Support',
      description: 'Mise en production sécurisée et support continu pour assurer le succès de votre projet.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions complètes pour accompagner votre transformation digitale 
            et propulser votre entreprise vers le succès.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Expertise à Votre Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos domaines d'expertise et comment nous pouvons vous accompagner 
              dans la réalisation de vos projets les plus ambitieux.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group"
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
                        <span className="text-gray-700">{feature}</span>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Processus de Travail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée et agile pour garantir le succès de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:shadow-lg transition-shadow">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-cyan-200 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies Maîtrisées
            </h2>
            <p className="text-xl text-gray-600">
              Nous utilisons les technologies les plus modernes et éprouvées
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
              'MongoDB', 'PostgreSQL', 'TypeScript', 'Next.js', 'Vue.js', 'Laravel'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center font-medium text-gray-700"
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
            Discutons de Votre Projet
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Contactez-nous pour un devis personnalisé 
            et découvrez comment nous pouvons vous aider à le concrétiser.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center group"
          >
            Demander un devis
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;