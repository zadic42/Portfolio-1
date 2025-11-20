import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
    return (
        <>
            <div id='about' className="min-h-screen text-white overflow-hidden relative">

                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-black"/>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                {/* Animated Gradient Glow */}
                <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
                    <div
                        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 md:w-96 md:h-96 rounded-full opacity-30 blur-xl animate-pulse"
                        style={{
                            background: 'radial-gradient(circle, rgba(147,51,234,0.6) 0%, rgba(79,70,229,0.3) 50%, transparent 80%)',
                        }}
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

                    <div className="w-full max-w-5xl mx-auto text-center space-y-10 sm:space-y-12">

                        {/* Tagline */}
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-10 border-2 border-purple-500 rounded-lg"></div>
                            <span className="text-sm sm:text-base text-purple-400 tracking-wider">Get to know me</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">Me</span>
                        </h1>

                        {/* Bio */}
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
                            Full Stack Developer passionate about building beautiful, high-performance web applications using React, Next.js, and Node.js. 
                            I specialize in creating smooth user experiences, scalable backend systems, and pixel-perfect UI designs. 
                            Experienced in working with REST APIs, GraphQL, and modern tooling across the MERN stack. Always learning, always building.
                        </p>

                        {/* Experience & Education Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mt-12 w-full max-w-4xl mx-auto px-4">
                            {/* Experience */}
                            <div className="text-left space-y-6">
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-100">Experience</h3>
                                <div className="space-y-6">
                                    <div className="relative pl-8 border-l-4 border-purple-500">
                                        <p className="font-semibold text-purple-300 text-lg">First Logic Meta Lab Pvt Ltd</p>
                                        <p className="text-sm sm:text-base text-gray-400">Software Developer</p>
                                    </div>
                                    <div className="relative pl-8 border-l-4 border-purple-500">
                                        <p className="font-semibold text-purple-300 text-lg">Techmaghi</p>
                                        <p className="text-sm sm:text-base text-gray-400">MERN Stack Developer</p>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="text-left space-y-6">
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-100">Education</h3>
                                <div className="space-y-6">
                                    <div className="relative pl-8 border-l-4 border-purple-500">
                                        <p className="font-semibold text-purple-300 text-lg">
                                            B.E. Computer Science and Engineering
                                        </p>
                                        <p className="text-sm sm:text-base text-gray-400">
                                            Vinayaka Missions Research Foundation • 2024
                                        </p>
                                    </div>
                                    <div className="relative pl-8 border-l-4 border-purple-500">
                                        <p className="font-semibold text-purple-300 text-lg">Python Web Developer</p>
                                        <p className="text-sm sm:text-base text-gray-400">
                                            L&T EduTech (Online Program) • 2023
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8">
                            <a
                                href="#projects"
                                className="group relative px-8 py-4 rounded-full border-2 border-purple-500 hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-3 text-base sm:text-lg font-medium w-full sm:w-auto justify-center"
                            >
                                <span>View My Projects</span>
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-30 transition-opacity" />
                            </a>

                            <a
                                href="/resume_mohammed_sadik_Software Developer.pdf"
                                download
                                className="group relative px-8 py-4 rounded-full border-2 border-gray-500 hover:bg-gray-500/10 transition-all duration-300 flex items-center gap-3 text-base sm:text-lg font-medium w-full sm:w-auto justify-center"
                            >
                                <span>Download Resume</span>
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-30 transition-opacity" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}