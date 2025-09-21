import React from 'react';
import { Code2, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">VinciCore</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Au cœur de vos solutions numériques. Nous accompagnons les entreprises 
              dans leur transformation digitale avec expertise et innovation.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">contact@vincicore.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">Développement logiciel</span></li>
              <li><span className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">Conseil informatique</span></li>
              <li><span className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">Cloud & Infrastructure</span></li>
              <li><span className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">Cybersécurité</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} VinciCore. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;