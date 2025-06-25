import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Video, Code, BookOpen, ArrowRight } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Guía de Desarrollo Web Moderno",
      description: "Guía completa sobre las mejores prácticas en desarrollo web con React, Node.js y tecnologías actuales.",
      type: "PDF",
      icon: <FileText size={24} />,
      size: "2.3 MB",
      downloads: "1.2K",
      link: "#"
    },
    {
      id: 2,
      title: "Tutorial: API REST con FastAPI",
      description: "Video tutorial paso a paso para crear APIs robustas y escalables usando FastAPI y Python.",
      type: "Video",
      icon: <Video size={24} />,
      size: "120 MB",
      downloads: "850",
      link: "#"
    },
    {
      id: 3,
      title: "Plantillas de Código React",
      description: "Colección de componentes React reutilizables con Tailwind CSS y mejores prácticas incluidas.",
      type: "Código",
      icon: <Code size={24} />,
      size: "5.1 MB",
      downloads: "2.1K",
      link: "#"
    },
    {
      id: 4,
      title: "E-book: Arquitectura de Software",
      description: "Libro digital sobre patrones de diseño, arquitectura limpia y escalabilidad en aplicaciones modernas.",
      type: "E-book",
      icon: <BookOpen size={24} />,
      size: "8.7 MB",
      downloads: "680",
      link: "#"
    }
  ];

  const categories = [
    { name: "Documentación", count: "12", icon: <FileText size={20} /> },
    { name: "Tutoriales", count: "8", icon: <Video size={20} /> },
    { name: "Código", count: "15", icon: <Code size={20} /> },
    { name: "E-books", count: "5", icon: <BookOpen size={20} /> }
  ];

  return (
    <section id="resources" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-600 rounded-full blur-3xl"></div>
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
            <span className="text-white">Recursos</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Gratuitos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conocimiento compartido para impulsar tu crecimiento. Accede a nuestra 
            biblioteca de recursos técnicos gratuitos.
          </p>
        </motion.div>

        {/* Categories Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 text-center"
            >
              <div className="text-blue-400 mb-3 flex justify-center">
                {category.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{category.count}</div>
              <div className="text-gray-300 text-sm">{category.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 group"
            >
              {/* Resource Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-blue-400 bg-blue-500/10 p-3 rounded-xl">
                    {resource.icon}
                  </div>
                  <div>
                    <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <div>{resource.size}</div>
                  <div>{resource.downloads} descargas</div>
                </div>
              </div>

              {/* Resource Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {resource.description}
              </p>

              {/* Download Button */}
              <motion.a
                href={resource.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Download size={16} />
                Descargar Gratis
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Mantente Actualizado
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y recibe los últimos recursos, 
            tutoriales y noticias del mundo del desarrollo.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-gray-800/50 border border-gray-600/50 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-blue-400 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Suscribirse
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;