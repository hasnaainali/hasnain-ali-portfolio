import React from "react";
import { motion } from "framer-motion";
import { Code2, PenTool, Smartphone, Database, Video } from "lucide-react";
import portfolioData from "../../data/PortfolioData";
import "../styles/Services.css";

export default function Services() {
  const { services } = portfolioData;

  const iconMap = {
    Code2: Code2,
    PenTool: PenTool,
    Smartphone: Smartphone,
    Database: Database,
    Video: Video
  };

  const allServices = [...services, ...services];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="services-header"
        >
          <span className="section-tag">Services</span>
          <h2 className="section-title">
            What I <span className="highlight">Offer</span>
          </h2>
          <p className="section-subtitle">Services I provide to help bring your ideas to life</p>
        </motion.div>

        <div className="services-scroll">
          <div className="services-track">
            {allServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <div key={index} className="service-card-scroll">
                  <div className="service-icon-wrapper">
                    <Icon />
                  </div>
                  <h3 className="service-title-scroll">{service.title}</h3>
                  <p className="service-desc-scroll">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}