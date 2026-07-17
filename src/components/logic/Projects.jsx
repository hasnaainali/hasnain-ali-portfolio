import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Play, X } from "lucide-react";
import portfolioData from "../../data/PortfolioData";
import "../styles/Projects.css";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <span className="section-tag">{projects.tag}</span>
          <h2 className="section-title">
            {projects.title} <span className="highlight">{projects.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{projects.description}</p>
        </motion.div>

        <div className="projects-grid">
          {projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200/6e44ff/ffffff?text=Project";
                  }}
                />
              </div>
              <div className="project-content-card">
                <h3 className="project-title-card">{project.title}</h3>
                <p className="project-desc-card">{project.description}</p>
                <div className="project-tags-card">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag-card">{tag}</span>
                  ))}
                </div>
                <button
                  onClick={() => openModal(project)}
                  className="project-link-btn"
                >
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>

              <div className="modal-image">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/560x200/6e44ff/ffffff?text=Project";
                  }}
                />
              </div>

              <div className="modal-body">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.description}</p>

                <div className="modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="modal-tag">{tag}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn secondary"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <button
                    className="modal-btn primary"
                    onClick={() => window.open(selectedProject.videoUrl, "_blank")}
                  >
                    <Play size={20} />
                    Watch Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}