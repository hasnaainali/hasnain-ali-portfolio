import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import portfolioData from "../../data/PortfolioData";
import "../styles/Hero.css";

export default function Hero() {
    const { hero } = portfolioData;
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["Full Stack Developer", "Web Developer", "React Developer"];
    const basePath = import.meta.env.BASE_URL;

    useEffect(() => {
        const current = words[wordIndex % words.length];
        let timer;

        if (!isDeleting) {
            timer = setTimeout(() => {
                setText(current.substring(0, text.length + 1));
                if (text.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            }, 120);
        } else {
            timer = setTimeout(() => {
                setText(current.substring(0, text.length - 1));
                if (text.length - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((w) => w + 1);
                }
            }, 60);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words]);

    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = `${basePath}resume/Hasnain_Ali_Resume.pdf`;
        link.download = "Hasnain_Ali_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-badge"
                    >
                        <span className="badge-dot" />
                        {hero.badge}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="hero-title"
                    >
                        Hello, I'm <span className="highlight">{hero.name}</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="hero-subtitle"
                        style={{ fontSize: "22px", fontWeight: "500", color: "var(--text-secondary)" }}
                    >
                        And I'm a <span style={{ color: "var(--majorelle-blue)" }}>{text}</span>
                        <span style={{ color: "var(--majorelle-blue)", animation: "blink 1s step-end infinite" }}>|</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        {hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hero-actions"
                    >
                        <button className="btn-primary" onClick={handleDownloadCV}>
                            Download CV
                            <span className="btn-glow-effect" />
                        </button>
                        <a href="#contact" className="btn-secondary">
                            Contact Me
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="tech-stack"
                    >
                        <div className="tech-grid">
                            {hero.technologies.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    className="tech-tag"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="hero-stats"
                    >
                        {hero.stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hero-right"
                >
                    <div className="profile-wrapper">
                        <img
                            src={`${basePath}profile.png`}
                            alt="Hasnain Ali"
                            className="profile-img"
                        />
                        <div className="profile-glow" />
                    </div>

                    <div className="profile-social-icons">
                        <a
                            href={hero.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-social-link github"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={hero.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-social-link linkedin"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href={hero.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-social-link instagram"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </section>
    );
}