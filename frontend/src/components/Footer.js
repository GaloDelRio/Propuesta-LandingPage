import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  LinkedinIcon,
  Twitter,
  Github,
  Instagram,
  Heart
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Empresa": [
      { name: "Sobre Nosotros", href: "#about" },
      { name: "Nuestro Equipo", href: "#about" },
      { name: "Carreras", href: "#" },
      { name: "Blog", href: "#" },
    ],
    "Servicios": [
      { name: "Desarrollo Web", href: "#projects" },
      { name: "Apps Móviles", href: "#projects" },
      { name: "E-commerce", href: "#projects" },
      { name: "Consultoría", href: "#contact" },
    ],
    "Recursos": [
      { name: "Documentación", href: "#resources" },
      { name: "Tutoriales", href: "#resources" },
      { name: "Soporte", href: "#support" },
      { name: "FAQ", href: "#support" },
    ],
    "Legal": [
      { name: "Privacidad", href: "#" },
      { name: "Términos", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "GDPR", href: "#" },
    ]
  };

  const socialLinks = [
    { icon: <LinkedinIcon size={20} />, name: "LinkedIn", href: "#" },
    { icon: <Twitter size={20} />, name: "Twitter", href: "#" },
    { icon: <Github size={20} />, name: "GitHub", href: "#" },
    { icon: <Instagram size={20} />, name: "Instagram", href: "#" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      {/* Pre-Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 backdrop-blur-sm border-t border-blue-400/20 py-16 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Construir Algo{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Extraordinario?
            </span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transforma tu idea en una solución digital que marque la diferencia. 
            Nuestro equipo está listo para hacer realidad tu visión.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            Comenzar Proyecto
          </motion.button>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="bg-black/50 backdrop-blur-sm border-t border-gray-800/50 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="text-3xl font-bold text-white mb-6">
                <span className="text-blue-400">Lyra</span>Tech
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Creamos software extraordinario con diseño impecable, velocidad superior 
                y funcionalidad perfecta. Tu éxito digital es nuestra misión.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={18} className="text-blue-400" />
                  <span>hola@lyratech.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} className="text-blue-400" />
                  <span>+34 612 345 678</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-blue-400" />
                  <span>Madrid, España</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800/50 hover:bg-blue-600 text-gray-400 hover:text-white p-3 rounded-xl transition-all duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold text-lg mb-6">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block"
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black/80 backdrop-blur-sm border-t border-gray-800/50 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 LyraTech. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Hecho con <Heart size={16} className="text-red-500" /> en España
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800/50 hover:bg-blue-600 text-gray-400 hover:text-white p-2 rounded-full transition-all duration-300"
              title="Volver arriba"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;