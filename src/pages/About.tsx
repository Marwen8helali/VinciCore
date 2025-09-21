import React from 'react';
import { Target, Users, Lightbulb, Award, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous restons à la pointe de la technologie pour vous offrir des solutions innovantes et performantes.'
    },
    {
      icon: Heart,
      title: 'Fiabilité',
      description: 'Notre engagement envers la qualité et la fiabilité fait de nous un partenaire de confiance durable.'
    },
    {
      icon: Users,
      title: 'Proximité Client',
      description: 'Nous privilégions une relation de proximité et un accompagnement personnalisé pour chaque client.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projets réalisés avec succès' },
    { number: '100%', label: 'Taux de satisfaction client' },
    { number: '5+', label: 'Années d\'expertise technique' },
    { number: '24/7', label: 'Support client disponible' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos de VinciCore
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez l'histoire, les valeurs et la vision qui animent VinciCore 
              dans sa mission d'accompagner votre transformation digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  VinciCore est née de la passion pour la technologie et du désir de créer 
                  des solutions numériques qui transforment véritablement les entreprises. 
                  Fondée avec la conviction que chaque organisation mérite des outils 
                  technologiques à la hauteur de ses ambitions.
                </p>
                <p>
                  Depuis nos débuts, nous nous sommes spécialisés dans l'accompagnement 
                  des entreprises de toutes tailles dans leur transformation digitale, 
                  en combinant expertise technique de pointe et approche humaine centrée 
                  sur vos besoins réels.
                </p>
                <p>
                  Aujourd'hui, VinciCore continue de grandir et d'évoluer, guidée par 
                  nos valeurs fondamentales et notre engagement constant envers l'excellence 
                  et l'innovation au service de nos clients.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-8 rounded-2xl text-white">
                <Target className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
                <p className="text-blue-100 text-lg">
                  Démocratiser l'accès aux technologies de pointe en rendant les solutions 
                  numériques avancées accessibles à toutes les entreprises, quelle que soit leur taille.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes fondamentaux qui guident notre action et définissent 
              notre approche unique du service client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-4 rounded-full w-fit mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              VinciCore en Chiffres
            </h2>
            <p className="text-xl text-gray-600">
              Quelques données qui témoignent de notre engagement et de notre expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rencontrez le Fondateur
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  <strong className="text-gray-900">Marwen Helali</strong>, fondateur et CEO de VinciCore, 
                  est un expert en technologie avec plus de 5 années d'expérience dans le 
                  développement de solutions numériques innovantes.
                </p>
                <p>
                  Diplômé en informatique et passionné par les nouvelles technologies, 
                  Marwen a créé VinciCore avec la vision de rendre les solutions technologiques 
                  avancées accessibles à toutes les entreprises.
                </p>
                <p>
                  Son approche centrée sur le client et sa expertise technique font de lui 
                  un leader reconnu dans le domaine de la transformation digitale.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Marwen Helali</h3>
                  <p className="text-blue-600 font-medium mb-4">Fondateur & CEO</p>
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
            Notre Vision pour l'Avenir
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Être le partenaire technologique de référence qui accompagne les entreprises 
            dans leur transformation digitale, en créant des solutions qui font la différence 
            et génèrent de la valeur réelle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-fit mx-auto mb-4">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation Continue</h3>
              <p className="text-blue-100">Rester à la pointe de la technologie pour offrir toujours le meilleur</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-fit mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Partenariat Durable</h3>
              <p className="text-blue-100">Construire des relations de confiance sur le long terme</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-fit mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impact Positif</h3>
              <p className="text-blue-100">Créer des solutions qui transforment positivement les entreprises</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;