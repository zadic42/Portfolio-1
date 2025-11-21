import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Karikku",
            description: "Dynamic, responsive e-commerce platform with optimized React.js frontend, secure RESTful APIs, and enhanced UI/UX for seamless shopping experiences.",
            tech: ["React.js", "RESTful API", "TailwindCSS", "Firebase", "JWT", "OAuth 2.0"],
            period: "Aug '25 — Present",
            link: "#",
            image: "/projects/karikku.png",
            gradient: "from-purple-600 to-indigo-600"
        },
        {
            id: 2,
            title: "TharaCart",
            description: "A modern B2C/B2B e-commerce platform where I built the React.js frontend, optimized UI with Tailwind CSS, and integrated secure RESTful APIs with Firebase and JWT/OAuth for a smooth end-to-end shopping experience.",
            tech: ["React.js", "RESTful API", "TailwindCSS", "Firebase", "JWT", "OAuth 2.0"],
            period: "Aug '25 — Present",
            link: "#",
            image: "/projects/tharacart.png",
            gradient: "from-purple-600 to-indigo-600"
        },
        {
            id: 3,
            title: "TharaCart Seller",
            description: "A streamlined seller dashboard for managing products, orders, and inventory with a fast, responsive interface and secure API integration.",
            tech: ["React.js", "RESTful API", "TailwindCSS", "Firebase", "JWT", "OAuth 2.0"],
            period: "Aug '25 — Present",
            link: "#",
            image: "/projects/seller.png",
            gradient: "from-purple-600 to-indigo-600"
        },
        {
            id: 4,
            title: "Keynes",
            description: "Responsive static site built with modern tech stack, featuring modular components, fast performance, and clean UI design.",
            tech: ["React", "TypeScript", "TailwindCSS", "Render"],
            period: "Aug '25 — Aug '25",
            link: "#",
            image: "/projects/keynes.png",
            gradient: "from-purple-600 to-indigo-600"
        },
        {
            id: 5,
            title: "Ergonnex AI – Agentic Engineering Observability Platform",
            description: "Independently designed and implemented Resource Tracker module with resource planning and sprint management features, full-stack architecture with testing.",
            tech: ["Next.js", "Express.js", "PostgreSQL", "Playwright", "Jest", "Azure DevOps"],
            period: "May '25 — Aug '25",
            link: "#",
            image: "/projects/ergonnex.svg",
            gradient: "from-purple-600 to-indigo-600"
        },
        {
            id: 6,
            title: "Doctor Appointment Web Application",
            description: "MERN-based application with real-time booking, JWT-secured authentication, and role-based access for patients, doctors, and administrators.",
            tech: ["MERN Stack", "JWT", "Real-time", "Payment", "Role-based Access", "Admin", "Docter", "User"],
            period: "Dec '24 — Jan '25",
            link: "#",
            image: "/projects/doctor.png",
            gradient: "from-purple-600 to-indigo-600"
        }
    ];

    return (
        <>
            <div id='projects' className="min-h-screen text-white overflow-hidden relative p-4">

                {/* 🔥 Background Image */}
                <div
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-black"
                    style={{
                        backgroundImage: 'url(/home-bg.jpg)',
                    }}
                />

                {/* 🔥 Soft dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/50 z-0"></div>

                {/* 🔥 Animated gradient glow */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    <div
                        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-30 blur-3xl"
                        style={{
                            background: 'radial-gradient(circle, rgba(147,51,234,0.6) 0%, rgba(79,70,229,0.4) 50%, transparent 70%)',
                        }}
                    />
                </div>

                {/* 🔥 Main Content */}
                <div className="relative z-20 flex flex-col items-center justify-center px-8 pt-8 max-w-6xl mx-auto">

                    {/* Tagline */}
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 border-2 border-purple-500 rounded"></div>
                        <span className="text-sm text-purple-400">Explore My Work</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Projects</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-base text-gray-300 text-center max-w-2xl mb-16">
                        A collection of projects showcasing my expertise in full-stack development, UI/UX design, and modern web technologies.
                    </p>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className="group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 group-hover:border-purple-500/50"
                            >
                                {/* Project Image */}
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    {/* Dark Overlay on Image */}
                                    <div className="absolute inset-0 bg-black/30"></div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-300 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs px-2 py-1 rounded-full bg-purple-500/30 text-purple-200 border border-purple-500/60 backdrop-blur-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
                        <a href="https://github.com/zadic42"
                            target="_blank"
                            className="group relative px-8 py-4 rounded-full border border-purple-500/50 hover:border-purple-500 transition-all duration-300 overflow-hidden flex items-center gap-2">
                            <span className="relative z-10 font-medium">View on GitHub</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </a>

                        <a
                            href="mailto:zadic42@gmail.com"
                            className="group relative px-8 py-4 rounded-full border border-gray-500/50 hover:border-gray-500 transition-all duration-300 overflow-hidden flex items-center gap-2">
                            <span className="relative z-10 font-medium">Get In Touch</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </a>
                    </div>
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />

            </div>
        </>
    );
}