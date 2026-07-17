# Hasnain Ali · Full Stack Developer Portfolio

[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.1.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.42.0-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-181717?style=flat&logo=github&logoColor=white)](https://hasnaainali.github.io/hasnain-ali-portfolio)
[![License](https://img.shields.io/badge/License-MIT-4ade80?style=flat&logo=mit&logoColor=white)](LICENSE)

A modern, responsive portfolio website built with React, Vite, and Framer Motion. Showcases projects, skills, and professional experience as a Full Stack Developer.

[View Live Demo](https://hasnaainali.github.io/hasnain-ali-portfolio)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Deployment](#deployment)
- [Contact Form Setup](#contact-form-setup)
- [Contributing](#contributing)
- [License](#license)
- [Connect](#connect)

---

## Overview

This portfolio serves as a comprehensive showcase of my work as a Full Stack Developer. It features a clean, dark-themed interface with smooth animations, responsive design, and an intuitive user experience.

The website is built using modern frontend technologies and follows best practices for performance, accessibility, and maintainability.

---

## Features

| Feature | Description |
|---------|-------------|
| Interactive UI | Smooth animations and transitions using Framer Motion |
| Fully Responsive | Optimized for desktop, tablet, and mobile devices |
| Project Showcase | Dynamic project cards with detailed modal previews |
| Modern Design | Glass-morphism UI with a consistent dark theme |
| Contact Form | Functional email integration using EmailJS |
| Skill Visualization | Interactive progress bars with category filtering |
| Infinite Scroll | Services section with horizontal auto-scrolling cards |
| CV Download | One-click resume download functionality |
| Clean Aesthetic | Scrollbar removed for a minimalist experience |

---

## Tech Stack

### Frontend Framework
- **React 19.2.7** — UI library for building component-based interfaces
- **Vite 8.1.0** — Next-generation build tool with fast HMR

### Animation & Interaction
- **Framer Motion 12.42.0** — Production-ready animation library for React
- **AOS 2.3.4** — Scroll-triggered animations (optional)

### Styling
- **CSS3** — Custom styles with CSS variables and modules
- **Google Fonts** — DM Serif Display (headings) + Manrope (body)

### Icons & Assets
- **Lucide React 0.544.0** — Clean, consistent icon set
- **React Icons 5.6.0** — Social media and additional icons

### Functionality
- **EmailJS 4.4.1** — Direct email delivery from contact form
- **React Router DOM 7.18.0** — Navigation and routing

---

## Project Structure
``` 
portfolio/
├── public/
│ ├── images/
│ │ ├── BizDash.png
│ │ ├── Task Manager Pro.png
│ │ ├── Quran Insights.png
│ │ ├── Hot or Cold.png
│ │ ├── Mood Detector.png
│ │ ├── TaskFlow.png
│ │ ├── My Blog.png
│ │ └── Weather Dashboard.png
│ ├── resume/
│ │ └── Hasnain_Ali_Resume.pdf
│ ├── favicon.svg
│ ├── logo-32.png
│ ├── logo.png
│ └── profile.png
├── src/
│ ├── components/
│ │ ├── logic/
│ │ │ ├── Navbar.jsx
│ │ │ ├── Hero.jsx
│ │ │ ├── About.jsx
│ │ │ ├── Skills.jsx
│ │ │ ├── Services.jsx
│ │ │ ├── Projects.jsx
│ │ │ └── Contact.jsx
│ │ ├── styles/
│ │ │ ├── variables.css
│ │ │ ├── Navbar.css
│ │ │ ├── Hero.css
│ │ │ ├── About.css
│ │ │ ├── Skills.css
│ │ │ ├── Services.css
│ │ │ ├── Projects.css
│ │ │ └── Contact.css
│ │ └── index.js
│ ├── data/
│ │ └── PortfolioData.js
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
└── README.md

```

---

## Installation

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### Setup Instructions


1. **Clone the repository**
```bash
git clone https://github.com/hasnaainali/hasnain-ali-portfolio.git
```
2.  **Navigate  to project directory**
```bash
cd hasnain-ali-portfolio
```
3.  **Install dependencies**
```bash
npm install
```
4.  **Start development server**
```bash
npm run dev
```
5. **Build for production**
```bash
npm run build
```
6.  **Preview production build locally**
```bash
npm run preview
```
# Deployment
This project is deployed using GitHub Pages.

# Automatic Deployment

1. **Build the project**
```bash
npm run build
```
2. **Deploy to GitHub Pages**
```bash
npm run deploy
```
# Manual Deployment Steps
1. Ensure the homepage field in package.json points to your GitHub Pages URL

2. Configure vite.config.js with the correct base path

3. Run npm run build to generate the dist folder

4. Run npm run deploy to push to the gh-pages branch

5. In GitHub repository settings, enable Pages and select the gh-pages branch

# Live URL
https://hasnaainali.github.io/hasnain-ali-portfolio

# Contact Form Setup
The contact form uses EmailJS for email delivery.

## Configuration Steps
1. Sign up at EmailJS

2. Create a new Email Service (Gmail, Outlook, etc.)

3. Create a new Email Template

4. Obtain your Service ID, Template ID, and Public Key

# Environment Variables
Create a .env file in the root directory:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
# Template Variables
The contact form sends the following data:

| # | Variable | Description |
|---|------------|--------|
| 1 | name | Sender's full name |
| 2 | email | Sender's email address |
| 3 | message | Message content |
| 4 | time| Current date and time |
| 5 | year | Current year |


# Contributing
Contributions are welcome. Please follow these guidelines:

1. Fork the repository

2. Create a feature branch (git checkout -b feature/amazing-feature)

3. Commit your changes (git commit -m 'Add some amazing feature')

4. Push to the branch (git push origin feature/amazing-feature)

5. Open a Pull Request

# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Connect
https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white
https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white
https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white

