import React from "react";
import { motion } from "framer-motion";
import { Users, Eye, Target, Award } from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "Proyectos Completados" },
    { number: "3+", label: "Años de Experiencia" },
    { number: "100%", label: "Clientes Satisfechos" },
    { number: "24/7", label: "Soporte Técnico" },
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: "Misión",
      description: "Transformar ideas en soluciones digitales extraordinarias que impulsen el crecimiento de nuestros clientes."
    },
    {
      icon: <Eye size={32} />,
      title: "Visión",
      description: "Ser la empresa líder en desarrollo de software, reconocida por la innovación y excelencia en cada proyecto."
    },
    {
      icon: <Award size={32} />,
      title: "Valores",
      description: "Calidad, innovación, compromiso y transparencia en cada línea de código que escribimos."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-600 rounded-full blur-3xl"></div>
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
            <span className="text-white">Quiénes</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Somos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos un equipo apasionado de desarrolladores y diseñadores dedicados a crear 
            experiencias digitales que marcan la diferencia.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestra Historia
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                LyraTech nació de una visión clara: crear software que no solo funcione, 
                sino que inspire. Fundada por un equipo de desarrolladores apasionados, 
                hemos crecido hasta convertirnos en una referencia en el desarrollo de 
                soluciones digitales innovadoras.
              </p>
              <p>
                Cada proyecto es una oportunidad de superar expectativas. Combinamos 
                tecnología de vanguardia con diseño excepcional para entregar productos 
                que realmente marquen la diferencia en el mercado de nuestros clientes.
              </p>
              <p>
                Nuestro enfoque se centra en tres pilares fundamentales: 
                <span className="text-blue-400 font-semibold"> diseño impecable</span>, 
                <span className="text-blue-400 font-semibold"> velocidad optimizada</span> y 
                <span className="text-blue-400 font-semibold"> funcionalidad robusta</span>.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052"
                alt="Equipo LyraTech trabajando"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-2xl shadow-lg shadow-blue-500/25"
            >
              <Users size={32} className="text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 text-center"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {value.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;