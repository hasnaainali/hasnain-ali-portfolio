import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Layers } from "lucide-react";
import portfolioData from "../../data/PortfolioData";
import "../styles/About.css";

export default function About() {
  const { about } = portfolioData;

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-header"
        >
          <span className="section-tag">{about.tag}</span>
          <h2 className="section-title">
            {about.title} <span className="highlight">{about.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-text" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}

            <div className="about-details">
              <div className="detail-item">
                <Calendar className="icon" size={20} />
                <span><strong>Experience:</strong> {about.details.experience}</span>
              </div>
              <div className="detail-item">
                <MapPin className="icon" size={20} />
                <span><strong>Location:</strong> {about.details.location}</span>
              </div>
              <div className="detail-item">
                <Layers className="icon" size={20} />
                <span><strong>Skills:</strong> {about.details.interests.join(", ")}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="skills-container-about"
          >
            {about.skills.map((skill, index) => (
              <div key={index} className="skill-item-about">
                <div className="skill-header-about">
                  <span className="skill-name-about">{skill.name}</span>
                  <span className="skill-percentage-about">{skill.level}%</span>
                </div>
                <div className="skill-bar-about">
                  <motion.div
                    className="skill-progress-about"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}