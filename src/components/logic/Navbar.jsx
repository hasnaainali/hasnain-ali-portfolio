import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ["home", "about", "skills", "services", "projects", "contact"];
            const scrollPosition = window.scrollY + 120;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setOpen(false);
        }
    };

    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = `${import.meta.env.BASE_URL}resume/Hasnain_Ali_Resume.pdf`;
        link.download = "Hasnain_Ali_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const navLinks = [
        { label: "Home", href: "home" },
        { label: "About", href: "about" },
        { label: "Skills", href: "skills" },
        { label: "Services", href: "services" },
        { label: "Projects", href: "projects" },
        { label: "Contact", href: "contact" }
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? "scrolled" : ""}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="nav-container">
                <div className="nav-left">
                    <div className="nav-brand" onClick={() => scrollToSection("home")}>
                        <span className="brand-dot" />
                        <span className="brand-text">Hasnain</span>
                    </div>
                </div>

                <ul className={`nav-links ${open ? "open" : ""}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={`#${link.href}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                                className={activeSection === link.href ? "active" : ""}
                            >
                                {link.label}
                                <span className="link-underline" />
                            </a>
                        </li>
                    ))}
                    <li className="mobile-cv">
                        <button className="cv-btn" onClick={handleDownloadCV}>
                            Download CV
                            <span className="btn-shimmer" />
                        </button>
                    </li>
                </ul>

                <div className="nav-right">
                    <button className="cv-btn" onClick={handleDownloadCV}>
                        Download CV
                        <span className="btn-shimmer" />
                    </button>
                    <button
                        className={`burger ${open ? "open" : ""}`}
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}