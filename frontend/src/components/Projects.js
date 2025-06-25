import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Smartphone, Globe, Zap } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ecommerce", name: "E-commerce" },
  ];

  const projects = [
    {
      id: 1,
      title: "ECommerce Pro",
      description: "Plataforma de comercio electrónico completa con gestión de inventario, pagos integrados y analytics en tiempo real.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "ecommerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Pagos seguros", "Dashboard analytics", "Gestión de inventario"],
      results: "300% aumento en ventas online",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "FinTech Mobile",
      description: "Aplicación móvil para gestión financiera personal con IA para recomendaciones de inversión y control de gastos.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      category: "mobile",
      technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
      features: ["IA integrada", "Seguridad bancaria", "Análisis predictivo"],
      results: "50K+ usuarios activos mensuales",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description: "Panel de control empresarial con visualización de datos en tiempo real, reportes automatizados y integración con múltiples APIs.",
      image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg",
      category: "web",
      technologies: ["Vue.js", "FastAPI", "PostgreSQL", "Redis"],
      features: ["Tiempo real", "Reportes automáticos", "Múltiples integraciones"],
      results: "85% reducción en tiempo de análisis",
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = selectedCategory === "todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-blue-600 rounded-full blur-3xl"></div>
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
            <span className="text-white">Proyectos</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Exitosos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una historia de éxito. Descubre cómo hemos transformado 
            ideas en soluciones digitales que superan expectativas.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-1 gap-12"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        <motion.a
                          href={project.link}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                        >
                          <Github size={20} />
                        </motion.a>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category === "web" && <Globe size={16} className="inline mr-1" />}
                        {project.category === "mobile" && <Smartphone size={16} className="inline mr-1" />}
                        {project.category === "ecommerce" && <Zap size={16} className="inline mr-1" />}
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Project Info */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500/10 border border-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Características clave:</h4>
                    <ul className="text-gray-300 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <ArrowRight size={16} className="text-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-400/30 rounded-xl p-4">
                    <div className="text-blue-400 font-semibold text-sm mb-1">RESULTADO</div>
                    <div className="text-white font-bold text-lg">{project.results}</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                    >
                      Ver Proyecto
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                    >
                      <Github size={16} />
                      Código
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para el siguiente proyecto exitoso?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Transformemos tu idea en una solución digital que supere todas tus expectativas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Iniciar Tu Proyecto
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;