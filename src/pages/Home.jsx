import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code, Instagram, Menu, X } from 'lucide-react';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb, SiFirebase, SiHtml5, SiCpanel, SiTailwindcss } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

export default function Homepage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const techIcons = [
        { icon: <FaReact />, label: 'React', position: { top: '8%', left: '15%' }, delay: 0 },
        { icon: <IoLogoJavascript />, label: 'JavaScript', position: { top: '5%', left: '50%' }, delay: 0.2 },
        { icon: <RiNextjsLine />, label: 'Next', position: { top: '5%', left: '82%' }, delay: 0.4 },
        { icon: <SiMongodb />, label: 'MongoDB', position: { top: '28%', left: '70%' }, delay: 0.6 },
        { icon: 'TS', label: 'TypeScript', position: { top: '35%', left: '0%' }, delay: 0.8 },
        { icon: <SiHtml5 />, label: 'HTML5', position: { top: '50%', left: '82%' }, delay: 1 },
        { icon: <SiCpanel />, label: 'cPanel', position: { top: '30%', left: '30%' }, delay: 1.2 },
        { icon: <PiFileSql />, label: 'SQL', position: { top: '70%', left: '10%' }, delay: 1.4 },
        { icon: <SiFirebase />, label: 'Firebase', position: { top: '75%', left: '68%' }, delay: 2 },
        { icon: <SiTailwindcss />, label: 'TailwindCSS', position: { top: '57%', left: '42%' }, delay: 1.6 },
        { icon: <FaGithub />, label: 'Github', position: { top: '80%', left: '42%' }, delay: 1.6 },
    ];

    return (
        <>
            <div className="min-h-screen text-white overflow-hidden relative p-4">

                {/* 🔥 Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="home-bg.mp4" type="video/mp4" />
                </video>

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

                {/* 🔥 Navigation */}
                <nav className="relative z-30 flex items-center justify-between px-4 sm:px-8 py-4 shadow-2xl border-amber-50">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <Code size={20} className='w-8 h-8 text-3xl font-extrabold' />
                        </div>
                        <span className="font-semibold text-sm sm:text-lg truncate">Mohammed Sadik</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href='#about' className="text-gray-300 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5">About me</a>
                        <a href='#skills' className="text-gray-300 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5">Skills</a>
                        <a href='#projects' className="text-gray-300 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5">Projects</a>
                    </div>

                    {/* Social Links - Desktop */}
                    <div className="hidden sm:flex items-center space-x-4">
                        <a
                            href="https://www.instagram.com/zadic42?igsh=MW1tcmlkMWVhdGQzaw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition">
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/zadic42"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/zadic42"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition">
                            <Github size={20} />
                        </a>
                        <a
                            href="mailto:zadic42@gmail.com"
                            className="text-gray-400 hover:text-white transition">
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-400 hover:text-white z-40"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-50 md:hidden mt-16 bg-black/80 backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-start space-y-6 pt-8">
                            <a 
                                href='#about' 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-300 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5">
                                About me
                            </a>
                            <a 
                                href='#skills' 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-300 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5">
                                Skills
                            </a>
                            <a 
                                href='#projects' 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-300 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5">
                                Projects
                            </a>
                            
                            {/* Mobile Social Links */}
                            <div className="flex items-center space-x-6 pt-6">
                                <a
                                    href="https://www.instagram.com/zadic42?igsh=MW1tcmlkMWVhdGQzaw=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition">
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/zadic42"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://github.com/zadic42"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition">
                                    <Github size={20} />
                                </a>
                                <a
                                    href="mailto:zadic42@gmail.com"
                                    className="text-gray-400 hover:text-white transition">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* 🔥 Main Content */}
                <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 mt-12 sm:mt-20 max-w-7xl mx-auto gap-8 lg:gap-0">
                    <div className="max-w-2xl w-full lg:w-auto">
                        <div className="flex items-center space-x-2 text-purple-400 mb-6">
                            <Code size={18} />
                            <span className="text-sm font-medium">Fullstack Developer</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Ideas</span><br />
                            into Seamless User<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Experiences</span>
                        </h1>

                        <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-xl">
                            I'm a Full Stack Software Engineer specializing in building modern web applications. Check out my projects and skills.
                        </p>

                        <button className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-purple-500/50 hover:border-purple-500 transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 font-medium text-sm sm:text-base">Learn more</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </button>
                    </div>

                    {/* 🔥 Floating Tech Icons */}
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96 hidden lg:block">
                        {techIcons.map((tech, index) => (
                            <div
                                key={index}
                                className="absolute animate-float"
                                style={{
                                    ...tech.position,
                                    animationDelay: `${tech.delay}s`,
                                    animationDuration: `${3 + Math.random() * 2}s`,
                                }}
                            >
                                <div className="group relative">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16
                                            backdrop-blur-sm rounded-2xl border border-purple-500/20 
                                            flex items-center justify-center text-2xl sm:text-3xl font-bold 
                                            hover:border-purple-500/50 transition-all duration-300 hover:scale-110 
                                            cursor-pointer shadow-lg hover:shadow-purple-500/20">
                                        {tech.icon}
                                    </div>
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 
                                            group-hover:opacity-100 transition-opacity duration-300 
                                            whitespace-nowrap text-xs text-purple-400">
                                        {tech.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />

                {/* Floating Animation */}
                <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>

            </div>
        </>
    );
}