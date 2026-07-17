import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from "emailjs-com";
import portfolioData from "../../data/PortfolioData";
import "../styles/Contact.css";

export default function Contact() {
    const { contact } = portfolioData;
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState({ type: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (status.message) {
            setStatus({ type: "", message: "" });
            setShowToast(false);
        }
    };

    const showNotification = (type, message) => {
        setStatus({ type, message });
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            setTimeout(() => setStatus({ type: "", message: "" }), 300);
        }, 5000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            showNotification("error", "Please fill in all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification("error", "Please enter a valid email address.");
            return;
        }

        setLoading(true);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        emailjs
            .send("service_r4pk6d8", "template_gxc5gmi", templateParams, "iNWFLkaTADqKzU1bH")
            .then(() => {
                emailjs
                    .send("service_r4pk6d8", "template_47ivz5s", templateParams, "iNWFLkaTADqKzU1bH")
                    .then(() => {
                        showNotification("success", "Message sent successfully! I'll get back to you soon.");
                        setFormData({ name: "", email: "", message: "" });
                        setLoading(false);
                    })
                    .catch(() => {
                        showNotification("error", "Failed to send confirmation. Your message was received though!");
                        setFormData({ name: "", email: "", message: "" });
                        setLoading(false);
                    });
            })
            .catch(() => {
                showNotification("error", "Failed to send message. Please try again later.");
                setLoading(false);
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="contact-header"
                >
                    <span className="section-tag">{contact.tag}</span>
                    <h2 className="section-title">
                        {contact.title} <span className="highlight">{contact.titleHighlight}</span>
                    </h2>
                    <p className="section-subtitle">{contact.description}</p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="contact-info"
                    >
                        <div className="info-item">
                            <span className="info-icon"><FiMail /></span>
                            <div>
                                <h4>Email</h4>
                                <p>{contact.info.email}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="info-icon"><FiPhone /></span>
                            <div>
                                <h4>Phone</h4>
                                <p>{contact.info.phone}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="info-icon"><FiMapPin /></span>
                            <div>
                                <h4>Location</h4>
                                <p>{contact.info.location}</p>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: "var(--text-light)", marginBottom: "12px", fontSize: "15px" }}>Connect with me</h4>
                            <div className="social-grid">
                                {contact.social.map((social, index) => {
                                    let Icon;
                                    let url;
                                    if (social.icon === "github") {
                                        Icon = FaGithub;
                                        url = "https://github.com/hasnaainali";
                                    } else if (social.icon === "linkedin") {
                                        Icon = FaLinkedinIn;
                                        url = "https://www.linkedin.com/in/hasnaainali";
                                    }
                                    return (
                                        <motion.a
                                            key={index}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`social-link ${social.icon}`}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Icon size={20} />
                                            <span className="social-name">{social.name}</span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="contact-form"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={contact.form.namePlaceholder}
                                required
                                disabled={loading}
                                autoComplete="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={contact.form.emailPlaceholder}
                                required
                                disabled={loading}
                                autoComplete="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={contact.form.messagePlaceholder}
                                rows="5"
                                required
                                disabled={loading}
                            />
                        </div>

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? (
                                <>
                                    <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                contact.form.submitText
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>

            {showToast && status.message && (
                <div className={`toast-notification ${status.type}`}>
                    <span className="toast-icon">
                        {status.type === "success" ? "✓" : "✕"}
                    </span>
                    <span className="toast-message">{status.message}</span>
                    <button
                        className="toast-close"
                        onClick={() => {
                            setShowToast(false);
                            setTimeout(() => setStatus({ type: "", message: "" }), 300);
                        }}
                    >
                        ×
                    </button>
                </div>
            )}
        </section>
    );
}