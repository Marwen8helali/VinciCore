import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cloud, Code, Users, Zap, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Code,
      title: 'Développement Sur Mesure',
      description: 'Solutions logicielles adaptées à vos besoins spécifiques'
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Migration et optimisation de vos infrastructures'
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Protection complète de vos données et systèmes'
    },
    {
      icon: Users,
      title: 'Conseil Expert',
      description: 'Accompagnement dans votre transformation digitale'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projets réalisés' },
    { number: '100%', label: 'Clients satisfaits' },
    { number: '24/7', label: 'Support disponible' },
    { number: '5+', label: 'Années d\'expérience' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Au cœur de vos
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                solutions numériques
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              VinciCore vous accompagne dans votre transformation digitale avec des solutions 
              innovantes et personnalisées pour propulser votre entreprise vers le futur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              >
                Découvrez nos services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Expertises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour accompagner votre croissance et votre transformation digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-lg w-fit mb-4 group-hover:shadow-lg transition-shadow">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir VinciCore ?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre approche centrée sur l'innovation et la qualité nous permet de 
                délivrer des solutions qui dépassent vos attentes.
              </p>
              
              <div className="space-y-4">
                {[
                  'Expertise technique reconnue',
                  'Solutions sur mesure et évolutives',
                  'Accompagnement personnalisé',
                  'Support réactif et disponible',
                  'Approche agile et collaborative'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-8 rounded-2xl text-white">
                <Zap className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Innovation & Performance</h3>
                <p className="text-blue-100">
                  Nous combinons les dernières technologies avec une approche pragmatique 
                  pour créer des solutions qui propulsent votre business vers le succès.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discutons de vos projets et découvrons ensemble comment VinciCore 
            peut vous accompagner dans votre réussite.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center group"
          >
            Commencer maintenant
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;