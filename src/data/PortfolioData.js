const basePath = import.meta.env.BASE_URL;

export const portfolioData = {
    hero: {
        badge: "Available for work",
        name: "Hasnain Ali",
        title: "Full Stack Developer",
        description: "I build fast, accessible, and maintainable web applications using React and modern web technologies. I love clean UI, efficient code, and creating intuitive, user-friendly experiences.",
        buttons: {
            primary: "Download CV",
            secondary: "Contact Me"
        },
        stats: [
            { number: "20+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "12+", label: "Technologies" },
            { number: "500+", label: "Commits" }
        ],
        technologies: [
            "HTML5", "CSS3", "JavaScript", "React",
            "Node.js", "Express.js", "MongoDB", "React Native",
            "Git", "VS Code", "Postman", "REST APIs"
        ],
        social: {
            instagram: "https://www.instagram.com/comsats_atk_vibes",
            linkedin: "https://www.linkedin.com/in/hasnaainali",
            github: "https://github.com/hasnaainali"
        }
    },

    about: {
        tag: "About Me",
        title: "Passionate about creating",
        titleHighlight: "digital experiences",
        paragraphs: [
            "I'm a <strong>Full-Stack Developer</strong> with hands-on experience in building modern web applications. I specialize in React, Node.js, Express, MongoDB, and dynamic front-end design using HTML, CSS, and JavaScript.",
            "My mission is to craft scalable, robust, and visually appealing applications while constantly learning cutting-edge technologies.",
            "With a strong foundation in both frontend and backend development, I bring ideas to life through clean code and thoughtful design."
        ],
        details: {
            experience: "3+ years",
            location: "Islamabad, Pakistan",
            interests: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "AI/ML", "Web Development"]
        },
        skills: [
            { name: "HTML & CSS", level: 100 },
            { name: "JavaScript", level: 95 },
            { name: "React", level: 90 },
            { name: "Node.js", level: 80 },
            { name: "MongoDB", level: 90 },
            { name: "MySQL", level: 90 },
            { name: "VS Code", level: 100 }
        ],
        stats: [
            { number: "20+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "12+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" }
        ],
        timeline: [
            { year: "2025", title: "Full Stack Developer", description: "Built multiple full-stack web applications using React, Node.js, Express, and MongoDB." },
            { year: "2025", title: "Backend Developer", description: "Lead backend development projects for scalable APIs." },
            { year: "2024", title: "Frontend Developer", description: "Focused on React and modern JavaScript to create responsive web interfaces." }
        ]
    },

    skills: {
        tag: "Expertise",
        title: "My",
        titleHighlight: "Skills",
        description: "A detailed overview of my technical skills and expertise across key domains.",
        categories: [
            { id: "all", label: "All Skills" },
            { id: "frontend", label: "Frontend" },
            { id: "backend", label: "Backend" },
            { id: "database", label: "Database" },
            { id: "tools", label: "Tools & Others" }
        ],
        skills: {
            frontend: [
                { name: "React", level: 90, description: "Hooks, Context", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "JavaScript", level: 95, description: "ES6+, Async/Await, DOM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "HTML5", level: 90, description: "Semantic HTML, Accessibility", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", level: 90, description: "Flexbox, Grid, Animations", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "Tailwind CSS", level: 85, description: "Utility-first CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Bootstrap", level: 80, description: "Responsive Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
            ],
            backend: [
                { name: "Node.js", level: 80, description: "Express, REST APIs, Middleware", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", level: 80, description: "Routing, Authentication", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                { name: "Python", level: 75, description: "Basics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "PHP", level: 70, description: "Basics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
            ],
            database: [
                { name: "MongoDB", level: 85, description: "Mongoose, Aggregation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "MySQL", level: 80, description: "Queries, Relationships", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "Firebase", level: 70, description: "Firestore, Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" }
            ],
            tools: [
                { name: "Git", level: 85, description: "Version Control, GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Docker", level: 70, description: "Containerization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "Vercel", level: 85, description: "Deployment, CI/CD, Serverless Functions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
                { name: "VS Code", level: 90, description: "IDE, Extensions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "Linux", level: 75, description: "Command Line, Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
            ]
        },
        summary: [
            { number: "12+", label: "Technologies" },
            { number: "3+", label: "Years Experience" },
            { number: "20+", label: "Projects Delivered" },
            { number: "100%", label: "Client Satisfaction" }
        ]
    },

    services: [
        {
            title: "Web Development",
            description: "Building modern, responsive websites and web applications using the MERN stack.",
            icon: "Code2"
        },
        {
            title: "UI/UX Design",
            description: "Creating clean, user-friendly, and engaging designs with focus on accessibility and usability.",
            icon: "PenTool"
        },
        {
            title: "Mobile App Development",
            description: "Developing cross-platform mobile apps with React Native, delivering native-like performance.",
            icon: "Smartphone"
        },
        {
            title: "API Development",
            description: "Designing REST APIs and integrating third-party services for seamless functionality.",
            icon: "Database"
        },
        {
            title: "Video Editing",
            description: "Editing and producing high-quality videos with smooth transitions, effects, and storytelling techniques.",
            icon: "Video"
        }
    ],

    projects: {
        tag: "Portfolio",
        title: "Featured",
        titleHighlight: "Projects",
        description: "A selection of projects I've worked on, each with its own unique challenge and solution.",
        items: [
            {
                id: 1,
                title: "Quran Insights",
                description: "A web app to explore Quranic ayahs with reflection, meaning, and insights.",
                image: `${basePath}images/Quran Insights.png`,
                githubUrl: "https://github.com/hasnaainali/quran-ayah-reflector",
                videoUrl: "https://drive.google.com/file/d/1pyByYTqJJTXC1UW711lg74QtaL-BYkpW/preview",
                tags: ["React", "Node.js", "MongoDB"]
            },
            {
                id: 2,
                title: "Hot or Cold",
                description: "A fun number guessing game with instant Hot and Cold feedback, built using HTML, CSS, and JavaScript.",
                image: `${basePath}images/Hot or Cold.png`,
                githubUrl: "https://github.com/hasnaainali/Hot-OR-Cold-Game",
                videoUrl: "https://drive.google.com/file/d/1Wot6sz8d1aI9ttR5Uq3CRn89tIlV4PmQ/preview",
                tags: ["HTML", "CSS", "JavaScript"]
            },
            {
                id: 3,
                title: "Mood Detector",
                description: "An interactive project that guesses your mood from color, food, and number choices with fun animations.",
                image: `${basePath}images/Mood Detector.png`,
                githubUrl: "https://github.com/hasnaainali/Mood-Detector",
                videoUrl: "https://drive.google.com/file/d/139vrLyrZwDuN28GjWED7bNk8AXiClejD/preview",
                tags: ["HTML", "CSS", "JavaScript"]
            },
            {
                id: 4,
                title: "TaskFlow Web Page",
                description: "Built a clean, modern, and responsive one-page website for a fictional task management app.",
                image: `${basePath}images/TaskFlow.png`,
                githubUrl: "https://github.com/hasnaainali/Elevvo/tree/main/taskflow-app",
                videoUrl: "https://drive.google.com/file/d/1CaUNBVU8cPVLnjDfQ7PCdwppAqLsIwK5/preview",
                tags: ["React", "CSS", "Responsive"]
            },
            {
                id: 5,
                title: "My Blog",
                description: "Developed a fully responsive personal blog showcasing posts, navigation, and a professional layout.",
                image: `${basePath}images/My Blog.png`,
                githubUrl: "https://github.com/hasnaainali/Elevvo/tree/main/personal-blog",
                videoUrl: "https://drive.google.com/file/d/102oPCQc8kZFxghSS-CqSa1QhtuMxFyNH/preview",
                tags: ["React", "CSS", "Blog"]
            },
            {
                id: 6,
                title: "Weather Dashboard",
                description: "Created a real-time weather dashboard with search, forecasts, and dynamic weather updates.",
                image: `${basePath}images/Weather Dashboard.png`,
                githubUrl: "https://github.com/hasnaainali/Elevvo/tree/main/weather-dashboard",
                videoUrl: "https://drive.google.com/file/d/1X8Px2QccgggR3ubBcL6mfd7whjuO01F6/preview",
                tags: ["JavaScript", "API", "CSS"]
            },
            {
                id: 7,
                title: "BizDash",
                description: "A modern, responsive business dashboard built with HTML, CSS, and JavaScript for managing analytics, customers, and projects. Features interactive charts, statistics, contact forms, and a clean admin interface with a professional UI.",
                image: `${basePath}images/BizDash.png`,
                githubUrl: "https://github.com/hasnaainali/decodelabs_tasks/tree/main/business-dashboard",
                videoUrl: "https://drive.google.com/file/d/1fpL6TJCKiIU6v1_WV7jzKhMNw9bcF3Xt/preview",
                tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Dashboard", "UI/UX"]
            },
            {
                id: 8,
                title: "Task Manager Pro",
                description: "A full-stack task management application with secure JWT authentication and complete CRUD functionality. Built with React and Node.js, featuring analytics, responsive design, and a modern user experience.",
                image: `${basePath}images/Task Manager Pro.png`,
                githubUrl: "https://github.com/hasnaainali/decodelabs_tasks/tree/main/task-manager",
                videoUrl: "https://drive.google.com/file/d/1mYEFdYssoeZ1_fH6KvPDIexUzAe0pdcl/preview",
                tags: ["React", "Node.js", "JWT", "Authentication", "Tailwind CSS", "CRUD", "Full Stack"]
            }
        ]
    },

    contact: {
        tag: "Contact",
        title: "Let's work",
        titleHighlight: "together",
        description: "Open to new opportunities, let's collaborate and bring ideas to life.",
        info: {
            email: "hasnaainali5@gmail.com",
            phone: "+92 3140805655",
            location: "Islamabad / WorldWide"
        },
        social: [
            { name: "GitHub", icon: "github", url: "https://github.com/hasnaainali" },
            { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/hasnaainali" }
        ],
        form: {
            namePlaceholder: "Your name",
            emailPlaceholder: "your@gmail.com",
            messagePlaceholder: "Tell me about your project...",
            submitText: "Send Message"
        }
    }
};

export default portfolioData;