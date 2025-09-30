import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  // Validation avancée de l'email
  const validateEmail = (email: string): boolean => {
    // Regex pour validation stricte
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(email)) {
      return false;
    }

    // Vérifier les domaines suspects
    const suspiciousDomains = ['tempmail.com', 'guerrillamail.com', '10minutemail.com', 'mailinator.com'];
    const domain = email.split('@')[1]?.toLowerCase();
    
    if (suspiciousDomains.includes(domain)) {
      setEmailError('Les emails temporaires ne sont pas autorisés');
      return false;
    }

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Validation en temps réel pour l'email
    if (name === 'email') {
      setEmailError('');
      if (value && !validateEmail(value)) {
        setEmailError('Format d\'email invalide');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    setEmailError('');

    // Validation finale
    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Veuillez saisir une adresse email valide');
      return;
    }

    try {
      const response = await fetch('https://vincicore-fullstack-project.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur inattendue est survenue');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      content: t('contact.info.email.content'),
      description: t('contact.info.email.description')
    }
  ];

  return (
    <div className="dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-950 dark:via-blue-950 dark:to-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.hero.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm transition-colors duration-300">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('contact.form.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('contact.form.subtitle')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors dark:bg-gray-600 dark:text-white"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border ${emailError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors dark:bg-gray-600 dark:text-white`}
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                  {emailError && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {emailError}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors dark:bg-gray-600 dark:text-white resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="text-green-700 dark:text-green-300">
                      {t('contact.form.success')}
                    </span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <span className="text-red-700 dark:text-red-300">
                      {errorMessage || t('contact.form.error')}
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading' || !!emailError}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>{t('contact.form.send')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info - reste identique */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('contact.info.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                  {t('contact.info.subtitle')}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-8 rounded-2xl text-white">
                <MessageSquare className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{t('contact.project.title')}</h3>
                <p className="text-blue-100 mb-6">
                  {t('contact.project.description')}
                </p>
                <ul className="space-y-2 text-blue-100">
                  {(t('contact.project.features', { returnObjects: true }) as string[]).map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - reste identique */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.faq.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('contact.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {(t('contact.faq.items', { returnObjects: true }) as { question: string; answer: string }[]).map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
