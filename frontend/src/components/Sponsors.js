import React from "react";
import { motion } from "framer-motion";
import { Star, Award, Users, TrendingUp } from "lucide-react";

const Sponsors = () => {
  const sponsors = [
    {
      name: "TechCorp",
      logo: "TC",
      description: "Líder en soluciones empresariales",
      partnership: "Partner Estratégico"
    },
    {
      name: "InnovateLab",
      logo: "IL",
      description: "Incubadora de startups tecnológicas",
      partnership: "Partner de Innovación"
    },
    {
      name: "CloudVentures",
      logo: "CV",
      description: "Especialistas en infraestructura cloud",
      partnership: "Partner Tecnológico"
    },
    {
      name: "DataFlow",
      logo: "DF",
      description: "Plataforma de análisis de datos",
      partnership: "Partner de Datos"
    },
    {
      name: "StartupHub",
      logo: "SH",
      description: "Aceleradora de empresas emergentes",
      partnership: "Partner de Desarrollo"
    },
    {
      name: "DevTools",
      logo: "DT",
      description: "Herramientas para desarrolladores",
      partnership: "Partner de Herramientas"
    }
  ];

  const achievements = [
    {
      icon: <Star size={24} />,
      title: "50+ Proyectos",
      description: "Completados con éxito"
    },
    {
      icon: <Award size={24} />,
      title: "Reconocimientos",
      description: "Por excelencia técnica"
    },
    {
      icon: <Users size={24} />,
      title: "100% Satisfacción",
      description: "De nuestros clientes"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Crecimiento",
      description: "Continuo e innovación"
    }
  ];

  return (
    <section id="sponsors" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1703166065586-f33f6c13c14d"
          alt="Business Partnership Background"
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
            <span className="text-white">Nuestros</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Colaboramos con las mejores empresas tecnológicas para ofrecer 
            soluciones integrales y de vanguardia a nuestros clientes.
          </p>
        </motion.div>

        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 text-center"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 text-center group hover:border-blue-400/40 transition-all"
            >
              {/* Logo */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                {sponsor.logo}
              </div>
              
              {/* Company Info */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {sponsor.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{sponsor.description}</p>
              
              {/* Partnership Badge */}
              <div className="bg-blue-500/10 border border-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                {sponsor.partnership}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Interesado en una Alianza Estratégica?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Estamos siempre abiertos a colaboraciones que generen valor mutuo. 
            Si tu empresa comparte nuestra visión de excelencia tecnológica, 
            hablemos sobre cómo podemos trabajar juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Proponer Alianza
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Descargar Info
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Confiado por más de 50 empresas en todo el mundo</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-500">TECH</div>
            <div className="text-2xl font-bold text-gray-500">INNOVATE</div>
            <div className="text-2xl font-bold text-gray-500">CLOUD</div>
            <div className="text-2xl font-bold text-gray-500">DATA</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;