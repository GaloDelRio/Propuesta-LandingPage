import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  MessageCircle, 
  Clock, 
  CheckCircle, 
  ChevronDown,
  Mail,
  Phone,
  MessageSquare
} from "lucide-react";

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const supportOptions = [
    {
      title: "Chat en Vivo",
      description: "Obtén ayuda inmediata con nuestro equipo de soporte técnico",
      icon: <MessageCircle size={32} />,
      availability: "24/7",
      responseTime: "< 5 min",
      action: "Iniciar Chat"
    },
    {
      title: "Soporte por Email",
      description: "Envía tu consulta detallada y recibe una respuesta completa",
      icon: <Mail size={32} />,
      availability: "Lun-Vie",
      responseTime: "< 2 horas",
      action: "Enviar Email"
    },
    {
      title: "Llamada Telefónica",
      description: "Habla directamente con nuestros expertos técnicos",
      icon: <Phone size={32} />,
      availability: "9:00-18:00",
      responseTime: "Inmediato",
      action: "Llamar Ahora"
    }
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto web?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que aplicaciones complejas pueden requerir 2-6 meses. Siempre proporcionamos un cronograma detallado después de la consulta inicial."
    },
    {
      question: "¿Ofrecen soporte técnico después del lanzamiento?",
      answer: "Sí, ofrecemos diferentes planes de soporte post-lanzamiento que incluyen mantenimiento, actualizaciones de seguridad, backups automáticos y soporte técnico continuo. Nuestro soporte básico incluye 3 meses gratuitos."
    },
    {
      question: "¿Pueden integrar mi proyecto con sistemas existentes?",
      answer: "Absolutamente. Tenemos experiencia integrando con una amplia variedad de sistemas existentes, APIs de terceros, bases de datos legacy y plataformas empresariales. Realizamos un análisis técnico previo para garantizar la compatibilidad."
    },
    {
      question: "¿Qué tecnologías utilizan para el desarrollo?",
      answer: "Utilizamos tecnologías modernas y probadas como React, Node.js, Python, FastAPI, MongoDB, PostgreSQL, y frameworks de diseño como Tailwind CSS. Seleccionamos la stack tecnológica más adecuada para cada proyecto específico."
    },
    {
      question: "¿Proporcionan el código fuente del proyecto?",
      answer: "Sí, al finalizar el proyecto entregamos todo el código fuente, documentación técnica, guías de despliegue y acceso completo a repositorios. Creemos en la transparencia total y la propiedad del cliente sobre su código."
    },
    {
      question: "¿Cómo manejan la seguridad de los datos?",
      answer: "La seguridad es nuestra prioridad. Implementamos cifrado end-to-end, autenticación robusta, auditorías de seguridad regulares, y cumplimos con estándares como GDPR. También firmamos acuerdos de confidencialidad para proteger tu información."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="support" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576272531110-2a342fe22342"
          alt="Tech Support Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-900/20 to-black/90"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Ayuda y</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Soporte
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte en cada paso del camino. Nuestro equipo de 
            soporte técnico está disponible cuando lo necesites.
          </p>
        </motion.div>

        {/* Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 text-center group"
            >
              <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {option.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{option.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Disponibilidad:</span>
                  <span className="text-blue-400 font-medium">{option.availability}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Tiempo de respuesta:</span>
                  <span className="text-green-400 font-medium">{option.responseTime}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                {option.action}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Preguntas Frecuentes
            </h3>
            <p className="text-gray-300 text-lg">
              Encuentra respuestas rápidas a las consultas más comunes
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-500/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={24} className="text-blue-400 flex-shrink-0" />
                    <h4 className="text-lg font-semibold text-white">{faq.question}</h4>
                  </div>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={24} className="text-gray-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-10 text-gray-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-red-900/20 to-orange-800/20 backdrop-blur-sm border border-red-400/20 rounded-2xl p-8 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-red-500/20 p-4 rounded-full">
              <Clock size={32} className="text-red-400" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Necesitas Soporte de Emergencia?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Para problemas críticos que requieren atención inmediata, nuestro 
            equipo de emergencia está disponible 24/7.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <MessageSquare size={20} />
            Contacto de Emergencia
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;