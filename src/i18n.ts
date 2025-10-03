import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      home: {
        hero: {
          title: 'At the heart of your',
          titleHighlight: 'digital solutions',
          subtitle: 'VinciCore accompanies you in your digital transformation with innovative and personalized solutions to propel your business towards the future.',
          ctaPrimary: 'Discover our services',
          ctaSecondary: 'Contact us'
        },
        stats: {
          projects: 'Completed projects',
          satisfaction: 'Client satisfaction',
          support: 'Available support',
          experience: 'Years of experience'
        },
        features: {
          title: 'Our Expertise',
          subtitle: 'Complete solutions to support your growth and digital transformation',
          development: {
            title: 'Custom Development',
            description: 'Software solutions adapted to your specific needs'
          },
          cloud: {
            title: 'Cloud & Infrastructure',
            description: 'Migration and optimization of your infrastructures'
          },
          security: {
            title: 'Cybersecurity',
            description: 'Complete protection of your data and systems'
          },
          consulting: {
            title: 'Expert Consulting',
            description: 'Support in your digital transformation'
          }
        },
        whyChoose: {
          title: 'Why choose VinciCore?',
          subtitle: 'Our approach centered on innovation and quality allows us to deliver solutions that exceed your expectations.',
          items: [
            'Recognized technical expertise',
            'Custom and scalable solutions',
            'Personalized support',
            'Responsive and available support',
            'Agile and collaborative approach'
          ],
          innovation: {
            title: 'Innovation & Performance',
            description: 'We combine the latest technologies with a pragmatic approach to create solutions that propel your business towards success.'
          }
        },
        cta: {
          title: 'Ready to transform your business?',
          subtitle: 'Let\'s discuss your projects and discover together how VinciCore can support you in your success.',
          button: 'Start now'
        }
      },
      services: {
        hero: {
          title: 'Our Services',
          subtitle: 'Complete solutions to support your digital transformation and propel your business towards success.'
        },
        main: {
          title: 'Our Expertise at Your Service',
          subtitle: 'Discover our areas of expertise and how we can support you in achieving your most ambitious projects.'
        },
        items: {
          development: {
            title: 'Custom software development',
            description: 'Web, mobile and desktop solutions adapted to your specific needs',
            features: [
              'Modern web applications (React, Node.js, Python)',
              'Mobile applications (iOS, Android, React Native)',
              'Cross-platform desktop software',
              'APIs and microservices',
              'System integrations'
            ]
          },
          consulting: {
            title: 'IT consulting & digital transformation',
            description: 'Strategic support to optimize your processes',
            features: [
              'Complete IT audit',
              'Digital transformation strategy',
              'Business process optimization',
              'System and technical architecture',
              'Change management'
            ]
          },
          cloud: {
            title: 'Cloud & Infrastructure',
            description: 'Migration and optimization of your cloud infrastructures',
            features: [
              'Cloud migration (AWS, Azure, GCP)',
              'Cloud native architecture',
              'DevOps and CI/CD',
              'Monitoring and observability',
              'Cost optimization'
            ]
          },
          security: {
            title: 'Cybersecurity',
            description: 'Complete protection of your data and IT systems',
            features: [
              'Security audit and penetration testing',
              'Implementation of security policies',
              'Team training',
              'Security incident management',
              'GDPR compliance and ISO standards'
            ]
          },
          support: {
            title: 'Support & Maintenance',
            description: 'Responsive technical support and preventive maintenance',
            features: [
              '24/7 technical support',
              'Preventive and corrective maintenance',
              'Proactive monitoring',
              'Updates and evolutions',
              'User training'
            ]
          }
        },
        process: {
          title: 'Our Work Process',
          subtitle: 'A structured and agile approach to guarantee the success of your projects',
          steps: [
            {
              title: 'Needs analysis',
              description: 'We analyze your needs and define together the objectives of your project.'
            },
            {
              title: 'Design & Planning',
              description: 'Detailed design of the solution and planning of development stages.'
            },
            {
              title: 'Development',
              description: 'Agile development with regular checkpoints and your continuous feedback.'
            },
            {
              title: 'Deployment & Support',
              description: 'Secure production deployment and continuous support to ensure your project\'s success.'
            }
          ]
        },
        technologies: {
          title: 'Mastered Technologies',
          subtitle: 'We use the most modern and proven technologies'
        },
        cta: {
          title: 'Let\'s discuss your project',
          subtitle: 'Do you have a project in mind? Contact us for a personalized quote and discover how we can help you make it happen.',
          button: 'Request a quote'
        }
      },
      about: {
        hero: {
          title: 'About VinciCore',
          subtitle: 'Discover the story, values and vision that drive VinciCore in its mission to support your digital transformation.'
        },
        story: {
          title: 'Our Story',
          paragraphs: [
            'VinciCore was born from a passion for technology and the desire to create digital solutions that truly transform businesses. Founded with the conviction that every organization deserves technological tools worthy of its ambitions.',
            'Since our beginnings, we have specialized in supporting companies of all sizes in their digital transformation, combining cutting-edge technical expertise with a human approach centered on your real needs.',
            'Today, VinciCore continues to grow and evolve, guided by our fundamental values and our constant commitment to excellence and innovation in service of our clients.'
          ]
        },
        mission: {
          title: 'Our Mission',
          description: 'Democratize access to cutting-edge technologies by making advanced digital solutions accessible to all companies, regardless of their size.'
        },
        values: {
          title: 'Our Values',
          subtitle: 'The fundamental principles that guide our action and define our unique approach to customer service.',
          items: [
            {
              title: 'Innovation',
              description: 'We stay at the forefront of technology to offer you innovative and high-performance solutions.'
            },
            {
              title: 'Reliability',
              description: 'Our commitment to quality and reliability makes us a trusted long-term partner.'
            },
            {
              title: 'Customer Proximity',
              description: 'We favor a close relationship and personalized support for each client.'
            }
          ]
        },
        stats: {
          title: 'VinciCore in Numbers',
          subtitle: 'Some data that testifies to our commitment and expertise',
          items: [
            'Successfully completed projects',
            'Client satisfaction rate',
            'Years of technical expertise',
            'Available client support'
          ]
        },
        founder: {
          title: 'Meet the Founder',
          description: 'Marwen Helali, founder and CEO of VinciCore, is a technology expert with over 5 years of experience in developing innovative digital solutions.',
          bio: [
            'A graduate in computer science and passionate about new technologies, Marwen created VinciCore with the vision of making advanced technological solutions accessible to all companies.',
            'His customer-centered approach and technical expertise make him a recognized leader in the field of digital transformation.'
          ],
          position: 'Founder & CEO'
        },
        vision: {
          title: 'Our Vision for the Future',
          subtitle: 'To be the reference technology partner that accompanies companies in their digital transformation, creating solutions that make a difference and generate real value.',
          pillars: [
            {
              title: 'Continuous Innovation',
              description: 'Stay at the forefront of technology to always offer the best'
            },
            {
              title: 'Sustainable Partnership',
              description: 'Build lasting relationships of trust'
            },
            {
              title: 'Positive Impact',
              description: 'Create solutions that positively transform businesses'
            }
          ]
        }
      },
      contact: {
        hero: {
          title: 'Contact Us',
          subtitle: 'Do you have a project in mind? A question about our services? Our team is here to support you and meet all your needs.'
        },
        form: {
          title: 'Send us a message',
          subtitle: 'Fill out the form below and we will contact you as soon as possible.',
          name: 'Full name',
          email: 'Email',
          message: 'Message',
          namePlaceholder: 'Your name',
          emailPlaceholder: 'your@email.com',
          messagePlaceholder: 'Describe your project or question...',
          send: 'Send message',
          sending: 'Sending...',
          success: 'Message sent successfully! We will respond to you soon.',
          error: 'An error occurred while sending the message.'
        },
        info: {
          title: 'Contact Information',
          subtitle: 'We are available to answer all your questions and discuss your projects. Don\'t hesitate to contact us!',
          email: {
            title: 'Email',
            content: 'vinci.core360@gmail.com',
            description: 'We respond within 24 hours'
          },
          whatsApp: {
            title: 'WhatsApp',
            description: 'Click to chat on WhatsApp'
          }
        },
        project: {
          title: 'Let\'s talk about your project',
          description: 'Every project is unique. Contact us for a personalized consultation and let\'s discover together how VinciCore can support you in your success.',
          features: [
            'Free consultation',
            'Personalized quote',
            'Response within 24h'
          ]
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Find answers to the most common questions',
          items: [
            {
              question: 'What is the average timeline for a project?',
              answer: 'The timeline varies depending on the project complexity. For a simple website, allow 2-4 weeks. For a complex application, it can take 3-6 months. We establish a detailed schedule from the beginning.'
            },
            {
              question: 'Do you offer support after delivery?',
              answer: 'Yes, we offer different levels of support and maintenance. We remain available for updates, corrections and evolutions of your solution.'
            },
            {
              question: 'How does a typical project unfold?',
              answer: 'Needs analysis → Design & Planning → Iterative development → Testing & Validation → Deployment → Support. You are involved at every stage with regular checkpoints.'
            },
            {
              question: 'Do you work with small businesses?',
              answer: 'Absolutely! We support companies of all sizes, from startups to large enterprises. Our solutions adapt to your budget and needs.'
            }
          ]
        }
      },
      footer: {
        description: 'At the heart of your digital solutions. We support companies in their digital transformation with expertise and innovation.',
        contact: 'Contact',
        services: 'Services',
        servicesList: [
          'Software development',
          'IT consulting',
          'Cloud & Infrastructure',
          'Cybersecurity'
        ],
        copyright: 'All rights reserved.'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        services: 'Services',
        about: 'À Propos',
        contact: 'Contact'
      },
      home: {
        hero: {
          title: 'Au cœur de vos',
          titleHighlight: 'solutions numériques',
          subtitle: 'VinciCore vous accompagne dans votre transformation digitale avec des solutions innovantes et personnalisées pour propulser votre entreprise vers le futur.',
          ctaPrimary: 'Découvrez nos services',
          ctaSecondary: 'Nous contacter'
        },
        stats: {
          projects: 'Projets réalisés',
          satisfaction: 'Clients satisfaits',
          support: 'Support disponible',
          experience: 'Années d\'expérience'
        },
        features: {
          title: 'Nos Expertises',
          subtitle: 'Des solutions complètes pour accompagner votre croissance et votre transformation digitale',
          development: {
            title: 'Développement Sur Mesure',
            description: 'Solutions logicielles adaptées à vos besoins spécifiques'
          },
          cloud: {
            title: 'Cloud & Infrastructure',
            description: 'Migration et optimisation de vos infrastructures'
          },
          security: {
            title: 'Cybersécurité',
            description: 'Protection complète de vos données et systèmes'
          },
          consulting: {
            title: 'Conseil Expert',
            description: 'Accompagnement dans votre transformation digitale'
          }
        },
        whyChoose: {
          title: 'Pourquoi choisir VinciCore ?',
          subtitle: 'Notre approche centrée sur l\'innovation et la qualité nous permet de délivrer des solutions qui dépassent vos attentes.',
          items: [
            'Expertise technique reconnue',
            'Solutions sur mesure et évolutives',
            'Accompagnement personnalisé',
            'Support réactif et disponible',
            'Approche agile et collaborative'
          ],
          innovation: {
            title: 'Innovation & Performance',
            description: 'Nous combinons les dernières technologies avec une approche pragmatique pour créer des solutions qui propulsent votre business vers le succès.'
          }
        },
        cta: {
          title: 'Prêt à transformer votre entreprise ?',
          subtitle: 'Discutons de vos projets et découvrons ensemble comment VinciCore peut vous accompagner dans votre réussite.',
          button: 'Commencer maintenant'
        }
      },
      services: {
        hero: {
          title: 'Nos Services',
          subtitle: 'Des solutions complètes pour accompagner votre transformation digitale et propulser votre entreprise vers le succès.'
        },
        main: {
          title: 'Notre Expertise à Votre Service',
          subtitle: 'Découvrez nos domaines d\'expertise et comment nous pouvons vous accompagner dans la réalisation de vos projets les plus ambitieux.'
        },
        items: {
          development: {
            title: 'Développement logiciel sur mesure',
            description: 'Solutions web, mobile et desktop adaptées à vos besoins spécifiques',
            features: [
              'Applications web modernes (React, Node.js, Python)',
              'Applications mobiles (iOS, Android, React Native)',
              'Logiciels desktop multiplateformes',
              'APIs et microservices',
              'Intégrations système'
            ]
          },
          consulting: {
            title: 'Conseil en informatique & transformation digitale',
            description: 'Accompagnement stratégique pour optimiser vos processus',
            features: [
              'Audit informatique complet',
              'Stratégie de transformation digitale',
              'Optimisation des processus métier',
              'Architecture système et technique',
              'Conduite du changement'
            ]
          },
          cloud: {
            title: 'Cloud & Infrastructure',
            description: 'Migration et optimisation de vos infrastructures cloud',
            features: [
              'Migration vers le cloud (AWS, Azure, GCP)',
              'Architecture cloud native',
              'DevOps et CI/CD',
              'Monitoring et observabilité',
              'Optimisation des coûts'
            ]
          },
          security: {
            title: 'Cybersécurité',
            description: 'Protection complète de vos données et systèmes informatiques',
            features: [
              'Audit de sécurité et tests d\'intrusion',
              'Mise en place de politiques de sécurité',
              'Formation des équipes',
              'Gestion des incidents de sécurité',
              'Conformité RGPD et normes ISO'
            ]
          },
          support: {
            title: 'Support & Maintenance',
            description: 'Support technique réactif et maintenance préventive',
            features: [
              'Support technique 24/7',
              'Maintenance préventive et corrective',
              'Monitoring proactif',
              'Mise à jour et évolutions',
              'Formation des utilisateurs'
            ]
          }
        },
        process: {
          title: 'Notre Processus de Travail',
          subtitle: 'Une approche structurée et agile pour garantir le succès de vos projets',
          steps: [
            {
              title: 'Analyse des besoins',
              description: 'Nous analysons vos besoins et définissons ensemble les objectifs de votre projet.'
            },
            {
              title: 'Conception & Planning',
              description: 'Conception détaillée de la solution et planification des étapes de développement.'
            },
            {
              title: 'Développement',
              description: 'Développement agile avec des points de contrôle réguliers et votre feedback continu.'
            },
            {
              title: 'Déploiement & Support',
              description: 'Mise en production sécurisée et support continu pour assurer le succès de votre projet.'
            }
          ]
        },
        technologies: {
          title: 'Technologies Maîtrisées',
          subtitle: 'Nous utilisons les technologies les plus modernes et éprouvées'
        },
        cta: {
          title: 'Discutons de Votre Projet',
          subtitle: 'Vous avez un projet en tête ? Contactez-nous pour un devis personnalisé et découvrez comment nous pouvons vous aider à le concrétiser.',
          button: 'Demander un devis'
        }
      },
      about: {
        hero: {
          title: 'À Propos de VinciCore',
          subtitle: 'Découvrez l\'histoire, les valeurs et la vision qui animent VinciCore dans sa mission d\'accompagner votre transformation digitale.'
        },
        story: {
          title: 'Notre Histoire',
          paragraphs: [
            'VinciCore est née de la passion pour la technologie et du désir de créer des solutions numériques qui transforment véritablement les entreprises. Fondée avec la conviction que chaque organisation mérite des outils technologiques à la hauteur de ses ambitions.',
            'Depuis nos débuts, nous nous sommes spécialisés dans l\'accompagnement des entreprises de toutes tailles dans leur transformation digitale, en combinant expertise technique de pointe et approche humaine centrée sur vos besoins réels.',
            'Aujourd\'hui, VinciCore continue de grandir et d\'évoluer, guidée par nos valeurs fondamentales et notre engagement constant envers l\'excellence et l\'innovation au service de nos clients.'
          ]
        },
        mission: {
          title: 'Notre Mission',
          description: 'Démocratiser l\'accès aux technologies de pointe en rendant les solutions numériques avancées accessibles à toutes les entreprises, quelle que soit leur taille.'
        },
        values: {
          title: 'Nos Valeurs',
          subtitle: 'Les principes fondamentaux qui guident notre action et définissent notre approche unique du service client.',
          items: [
            {
              title: 'Innovation',
              description: 'Nous restons à la pointe de la technologie pour vous offrir des solutions innovantes et performantes.'
            },
            {
              title: 'Fiabilité',
              description: 'Notre engagement envers la qualité et la fiabilité fait de nous un partenaire de confiance durable.'
            },
            {
              title: 'Proximité Client',
              description: 'Nous privilégions une relation de proximité et un accompagnement personnalisé pour chaque client.'
            }
          ]
        },
        stats: {
          title: 'VinciCore en Chiffres',
          subtitle: 'Quelques données qui témoignent de notre engagement et de notre expertise',
          items: [
            'Projets réalisés avec succès',
            'Taux de satisfaction client',
            'Années d\'expertise technique',
            'Support client disponible'
          ]
        },
        founder: {
          title: 'Rencontrez le Fondateur',
          description: 'Marwen Helali, fondateur et CEO de VinciCore, est un expert en technologie avec plus de 5 années d\'expérience dans le développement de solutions numériques innovantes.',
          bio: [
            'Diplômé en informatique et passionné par les nouvelles technologies, Marwen a créé VinciCore avec la vision de rendre les solutions technologiques avancées accessibles à toutes les entreprises.',
            'Son approche centrée sur le client et sa expertise technique font de lui un leader reconnu dans le domaine de la transformation digitale.'
          ],
          position: 'Fondateur & CEO'
        },
        vision: {
          title: 'Notre Vision pour l\'Avenir',
          subtitle: 'Être le partenaire technologique de référence qui accompagne les entreprises dans leur transformation digitale, en créant des solutions qui font la différence et génèrent de la valeur réelle.',
          pillars: [
            {
              title: 'Innovation Continue',
              description: 'Rester à la pointe de la technologie pour offrir toujours le meilleur'
            },
            {
              title: 'Partenariat Durable',
              description: 'Construire des relations de confiance sur le long terme'
            },
            {
              title: 'Impact Positif',
              description: 'Créer des solutions qui transforment positivement les entreprises'
            }
          ]
        }
      },
      contact: {
        hero: {
          title: 'Contactez-Nous',
          subtitle: 'Vous avez un projet en tête ? Une question sur nos services ? Notre équipe est là pour vous accompagner et répondre à tous vos besoins.'
        },
        form: {
          title: 'Envoyez-nous un message',
          subtitle: 'Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais.',
          name: 'Nom complet',
          email: 'Email',
          message: 'Message',
          namePlaceholder: 'Votre nom',
          emailPlaceholder: 'votre@email.com',
          messagePlaceholder: 'Décrivez votre projet ou votre question...',
          send: 'Envoyer le message',
          sending: 'Envoi en cours...',
          success: 'Message envoyé avec succès ! Nous vous répondrons bientôt.',
          error: 'Une erreur est survenue lors de l\'envoi du message.'
        },
        info: {
          title: 'Informations de Contact',
          subtitle: 'Nous sommes disponibles pour répondre à toutes vos questions et discuter de vos projets. N\'hésitez pas à nous contacter !',
          email: {
            title: 'Email',
            content: 'vinci.core360@gmail.com',
            description: 'Nous répondons sous 24h'
          },
        whatsApp: {
            title: 'WhatsApp',
            description: 'Cliquez pour discuter sur WhatsApp'
          }
        },
        project: {
          title: 'Parlons de votre projet',
          description: 'Chaque projet est unique. Contactez-nous pour une consultation personnalisée et découvrons ensemble comment VinciCore peut vous accompagner dans votre réussite.',
          features: [
            'Consultation gratuite',
            'Devis personnalisé',
            'Réponse sous 24h'
          ]
        },
        faq: {
          title: 'Questions Fréquentes',
          subtitle: 'Retrouvez les réponses aux questions les plus courantes',
          items: [
            {
              question: 'Quel est le délai moyen pour un projet ?',
              answer: 'Le délai varie selon la complexité du projet. Pour un site web simple, comptez 2-4 semaines. Pour une application complexe, cela peut prendre 3-6 mois. Nous établissons un planning détaillé dès le début.'
            },
            {
              question: 'Proposez-vous un support après livraison ?',
              answer: 'Oui, nous offrons différents niveaux de support et maintenance. Nous restons disponibles pour les mises à jour, corrections et évolutions de votre solution.'
            },
            {
              question: 'Comment se déroule un projet type ?',
              answer: 'Analyse des besoins → Conception & Planning → Développement itératif → Tests & Validation → Déploiement → Support. Vous êtes impliqué à chaque étape avec des points de contrôle réguliers.'
            },
            {
              question: 'Travaillez-vous avec des petites entreprises ?',
              answer: 'Absolument ! Nous accompagnons les entreprises de toutes tailles, des startups aux grandes entreprises. Nos solutions s\'adaptent à votre budget et vos besoins.'
            }
          ]
        }
      },
      footer: {
        description: 'Au cœur de vos solutions numériques. Nous accompagnons les entreprises dans leur transformation digitale avec expertise et innovation.',
        contact: 'Contact',
        services: 'Services',
        servicesList: [
          'Développement logiciel',
          'Conseil informatique',
          'Cloud & Infrastructure',
          'Cybersécurité'
        ],
        copyright: 'Tous droits réservés.'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        services: 'الخدمات',
        about: 'حول',
        contact: 'اتصل بنا'
      },
      home: {
        hero: {
          title: 'في قلب',
          titleHighlight: 'حلولكم الرقمية',
          subtitle: 'تصاحبكم VinciCore في تحولكم الرقمي بحلول مبتكرة ومخصصة لدفع شركتكم نحو المستقبل.',
          ctaPrimary: 'اكتشف خدماتنا',
          ctaSecondary: 'اتصل بنا'
        },
        stats: {
          projects: 'مشاريع منجزة',
          satisfaction: 'عملاء راضون',
          support: 'دعم متاح',
          experience: 'سنوات من الخبرة'
        },
        features: {
          title: 'خبراتنا',
          subtitle: 'حلول شاملة لمرافقة نموكم وتحولكم الرقمي',
          development: {
            title: 'تطوير مخصص',
            description: 'حلول برمجية مكيفة حسب احتياجاتكم المحددة'
          },
          cloud: {
            title: 'السحابة والبنية التحتية',
            description: 'هجرة وتحسين بنيتكم التحتية'
          },
          security: {
            title: 'الأمن السيبراني',
            description: 'حماية شاملة لبياناتكم وأنظمتكم'
          },
          consulting: {
            title: 'استشارة خبيرة',
            description: 'مرافقة في تحولكم الرقمي'
          }
        },
        whyChoose: {
          title: 'لماذا تختار VinciCore؟',
          subtitle: 'نهجنا المتمحور حول الابتكار والجودة يسمح لنا بتقديم حلول تفوق توقعاتكم.',
          items: [
            'خبرة تقنية معترف بها',
            'حلول مخصصة وقابلة للتطوير',
            'مرافقة شخصية',
            'دعم سريع الاستجابة ومتاح',
            'نهج رشيق وتعاوني'
          ],
          innovation: {
            title: 'الابتكار والأداء',
            description: 'نجمع بين أحدث التقنيات ونهج عملي لإنشاء حلول تدفع أعمالكم نحو النجاح.'
          }
        },
        cta: {
          title: 'مستعد لتحويل شركتك؟',
          subtitle: 'لنناقش مشاريعكم ونكتشف معاً كيف يمكن لـ VinciCore مرافقتكم في نجاحكم.',
          button: 'ابدأ الآن'
        }
      },
      services: {
        hero: {
          title: 'خدماتنا',
          subtitle: 'حلول شاملة لمرافقة تحولكم الرقمي ودفع شركتكم نحو النجاح.'
        },
        main: {
          title: 'خبرتنا في خدمتكم',
          subtitle: 'اكتشفوا مجالات خبرتنا وكيف يمكننا مرافقتكم في تحقيق مشاريعكم الأكثر طموحاً.'
        },
        items: {
          development: {
            title: 'تطوير البرمجيات المخصصة',
            description: 'حلول ويب وموبايل وسطح المكتب مكيفة حسب احتياجاتكم المحددة',
            features: [
              'تطبيقات ويب حديثة (React, Node.js, Python)',
              'تطبيقات الهاتف المحمول (iOS, Android, React Native)',
              'برمجيات سطح المكتب متعددة المنصات',
              'واجهات برمجة التطبيقات والخدمات المصغرة',
              'تكامل الأنظمة'
            ]
          },
          consulting: {
            title: 'الاستشارة في المعلوماتية والتحول الرقمي',
            description: 'مرافقة استراتيجية لتحسين عملياتكم',
            features: [
              'تدقيق معلوماتي شامل',
              'استراتيجية التحول الرقمي',
              'تحسين العمليات التجارية',
              'هندسة النظام والتقنية',
              'إدارة التغيير'
            ]
          },
          cloud: {
            title: 'السحابة والبنية التحتية',
            description: 'هجرة وتحسين بنيتكم التحتية السحابية',
            features: [
              'الهجرة إلى السحابة (AWS, Azure, GCP)',
              'هندسة السحابة الأصلية',
              'DevOps و CI/CD',
              'المراقبة والملاحظة',
              'تحسين التكاليف'
            ]
          },
          security: {
            title: 'الأمن السيبراني',
            description: 'حماية شاملة لبياناتكم وأنظمتكم المعلوماتية',
            features: [
              'تدقيق الأمان واختبار الاختراق',
              'وضع سياسات الأمان',
              'تدريب الفرق',
              'إدارة حوادث الأمان',
              'الامتثال لـ GDPR ومعايير ISO'
            ]
          },
          support: {
            title: 'الدعم والصيانة',
            description: 'دعم تقني سريع الاستجابة وصيانة وقائية',
            features: [
              'دعم تقني 24/7',
              'صيانة وقائية وتصحيحية',
              'مراقبة استباقية',
              'تحديثات وتطويرات',
              'تدريب المستخدمين'
            ]
          }
        },
        process: {
          title: 'عملية عملنا',
          subtitle: 'نهج منظم ورشيق لضمان نجاح مشاريعكم',
          steps: [
            {
              title: 'تحليل الاحتياجات',
              description: 'نحلل احتياجاتكم ونحدد معاً أهداف مشروعكم.'
            },
            {
              title: 'التصميم والتخطيط',
              description: 'تصميم مفصل للحل وتخطيط مراحل التطوير.'
            },
            {
              title: 'التطوير',
              description: 'تطوير رشيق مع نقاط تحكم منتظمة وملاحظاتكم المستمرة.'
            },
            {
              title: 'النشر والدعم',
              description: 'نشر آمن في الإنتاج ودعم مستمر لضمان نجاح مشروعكم.'
            }
          ]
        },
        technologies: {
          title: 'التقنيات المتقنة',
          subtitle: 'نستخدم أحدث التقنيات وأكثرها إثباتاً'
        },
        cta: {
          title: 'لنناقش مشروعكم',
          subtitle: 'لديكم مشروع في الذهن؟ اتصلوا بنا للحصول على عرض أسعار مخصص واكتشفوا كيف يمكننا مساعدتكم في تحقيقه.',
          button: 'طلب عرض أسعار'
        }
      },
      about: {
        hero: {
          title: 'حول VinciCore',
          subtitle: 'اكتشفوا القصة والقيم والرؤية التي تحرك VinciCore في مهمتها لمرافقة تحولكم الرقمي.'
        },
        story: {
          title: 'قصتنا',
          paragraphs: [
            'وُلدت VinciCore من شغف التكنولوجيا والرغبة في إنشاء حلول رقمية تحول الشركات حقاً. تأسست بقناعة أن كل منظمة تستحق أدوات تكنولوجية على مستوى طموحاتها.',
            'منذ بداياتنا، تخصصنا في مرافقة الشركات من جميع الأحجام في تحولها الرقمي، بدمج الخبرة التقنية المتطورة مع نهج إنساني متمحور حول احتياجاتكم الحقيقية.',
            'اليوم، تواصل VinciCore النمو والتطور، مسترشدة بقيمنا الأساسية والتزامنا المستمر بالتميز والابتكار في خدمة عملائنا.'
          ]
        },
        mission: {
          title: 'مهمتنا',
          description: 'إضفاء الطابع الديمقراطي على الوصول إلى التقنيات المتطورة بجعل الحلول الرقمية المتقدمة في متناول جميع الشركات، مهما كان حجمها.'
        },
        values: {
          title: 'قيمنا',
          subtitle: 'المبادئ الأساسية التي توجه عملنا وتحدد نهجنا الفريد في خدمة العملاء.',
          items: [
            {
              title: 'الابتكار',
              description: 'نبقى في المقدمة التكنولوجية لنقدم لكم حلولاً مبتكرة وعالية الأداء.'
            },
            {
              title: 'الموثوقية',
              description: 'التزامنا بالجودة والموثوقية يجعلنا شريكاً موثوقاً طويل الأمد.'
            },
            {
              title: 'القرب من العميل',
              description: 'نفضل علاقة قريبة ومرافقة شخصية لكل عميل.'
            }
          ]
        },
        stats: {
          title: 'VinciCore بالأرقام',
          subtitle: 'بعض البيانات التي تشهد على التزامنا وخبرتنا',
          items: [
            'مشاريع منجزة بنجاح',
            'معدل رضا العملاء',
            'سنوات من الخبرة التقنية',
            'دعم العملاء المتاح'
          ]
        },
        founder: {
          title: 'تعرفوا على المؤسس',
          description: 'مروان الهلالي، مؤسس ومدير تنفيذي لـ VinciCore، خبير في التكنولوجيا مع أكثر من 5 سنوات من الخبرة في تطوير الحلول الرقمية المبتكرة.',
          bio: [
            'خريج في علوم الحاسوب ومتحمس للتقنيات الجديدة، أنشأ مروان VinciCore برؤية جعل الحلول التكنولوجية المتقدمة في متناول جميع الشركات.',
            'نهجه المتمحور حول العميل وخبرته التقنية يجعلانه قائداً معترفاً به في مجال التحول الرقمي.'
          ],
          position: 'المؤسس والمدير التنفيذي'
        },
        vision: {
          title: 'رؤيتنا للمستقبل',
          subtitle: 'أن نكون الشريك التكنولوجي المرجعي الذي يرافق الشركات في تحولها الرقمي، بإنشاء حلول تحدث فرقاً وتولد قيمة حقيقية.',
          pillars: [
            {
              title: 'الابتكار المستمر',
              description: 'البقاء في المقدمة التكنولوجية لتقديم الأفضل دائماً'
            },
            {
              title: 'الشراكة المستدامة',
              description: 'بناء علاقات ثقة طويلة الأمد'
            },
            {
              title: 'التأثير الإيجابي',
              description: 'إنشاء حلول تحول الشركات بشكل إيجابي'
            }
          ]
        }
      },
      contact: {
        hero: {
          title: 'اتصلوا بنا',
          subtitle: 'لديكم مشروع في الذهن؟ سؤال حول خدماتنا؟ فريقنا هنا لمرافقتكم وتلبية جميع احتياجاتكم.'
        },
        form: {
          title: 'أرسلوا لنا رسالة',
          subtitle: 'املأوا النموذج أدناه وسنتواصل معكم في أقرب وقت ممكن.',
          name: 'الاسم الكامل',
          email: 'البريد الإلكتروني',
          message: 'الرسالة',
          namePlaceholder: 'اسمكم',
          emailPlaceholder: 'your@email.com',
          messagePlaceholder: 'صفوا مشروعكم أو سؤالكم...',
          send: 'إرسال الرسالة',
          sending: 'جاري الإرسال...',
          success: 'تم إرسال الرسالة بنجاح! سنرد عليكم قريباً.',
          error: 'حدث خطأ أثناء إرسال الرسالة.'
        },
        info: {
          title: 'معلومات الاتصال',
          subtitle: 'نحن متاحون للإجابة على جميع أسئلتكم ومناقشة مشاريعكم. لا تترددوا في الاتصال بنا!',
          email: {
            title: 'البريد الإلكتروني',
            content: 'vinci.core360@gmail.com',
            description: 'نرد خلال 24 ساعة'
          },
        whatsApp: {
            title: 'واتساب',
            description: 'انقر للدردشة عبر الواتساب'
          }          
        },
        project: {
          title: 'لنتحدث عن مشروعكم',
          description: 'كل مشروع فريد. اتصلوا بنا للحصول على استشارة شخصية ولنكتشف معاً كيف يمكن لـ VinciCore مرافقتكم في نجاحكم.',
          features: [
            'استشارة مجانية',
            'عرض أسعار مخصص',
            'رد خلال 24 ساعة'
          ]
        },
        faq: {
          title: 'الأسئلة الشائعة',
          subtitle: 'اعثروا على إجابات للأسئلة الأكثر شيوعاً',
          items: [
            {
              question: 'ما هو الوقت المتوسط لمشروع؟',
              answer: 'يختلف الوقت حسب تعقيد المشروع. لموقع ويب بسيط، احسبوا 2-4 أسابيع. لتطبيق معقد، قد يستغرق 3-6 أشهر. نضع جدولاً زمنياً مفصلاً من البداية.'
            },
            {
              question: 'هل تقدمون دعماً بعد التسليم؟',
              answer: 'نعم، نقدم مستويات مختلفة من الدعم والصيانة. نبقى متاحين للتحديثات والتصحيحات وتطوير حلولكم.'
            },
            {
              question: 'كيف يسير مشروع نموذجي؟',
              answer: 'تحليل الاحتياجات ← التصميم والتخطيط ← التطوير التكراري ← الاختبار والتحقق ← النشر ← الدعم. أنتم مشاركون في كل مرحلة مع نقاط تحكم منتظمة.'
            },
            {
              question: 'هل تعملون مع الشركات الصغيرة؟',
              answer: 'بالطبع! نرافق الشركات من جميع الأحجام، من الشركات الناشئة إلى المؤسسات الكبيرة. حلولنا تتكيف مع ميزانيتكم واحتياجاتكم.'
            }
          ]
        }
      },
      footer: {
        description: 'في قلب حلولكم الرقمية. نرافق الشركات في تحولها الرقمي بالخبرة والابتكار.',
        contact: 'اتصال',
        services: 'الخدمات',
        servicesList: [
          'تطوير البرمجيات',
          'الاستشارة المعلوماتية',
          'السحابة والبنية التحتية',
          'الأمن السيبراني'
        ],
        copyright: 'جميع الحقوق محفوظة.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;