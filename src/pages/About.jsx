import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
    return (
        <>
            <div id='about' className="min-h-screen text-white overflow-hidden relative p-4">

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
                <div className="relative z-20 flex flex-col items-center justify-center px-8 mt-8 max-w-6xl mx-auto">

                    {/* Tagline */}
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 border-2 border-purple-500 rounded"></div>
                        <span className="text-sm text-purple-400">Get to know me</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Me</span>
                    </h1>

                    {/* Bio Section */}
                    <div className="space-y-3 text-center mb-8">
                        <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
                            Full Stack Developer passionate about building beautiful, high-performance web applications using React, Next.js, and Node.js.
                            I specialize in creating smooth user experiences, scalable backend systems, and pixel-perfect UI designs.
                            Experienced in working with REST APIs, GraphQL, and modern tooling across the MERN stack.
                            Always learning, always building.
                        </p>

                    </div>

                    {/* Experience & Education Grid */}
                    <div className="grid md:grid-cols-2 gap-8 w-full mb-8">
                        {/* Experience Section */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-200 mb-3">Experience</h3>
                            <div className="space-y-3">
                                <div className="border-l-2 border-purple-500 pl-4">
                                    <p className="font-medium text-purple-300">Software Developer</p>
                                    <p className="text-sm text-gray-400">First Logic Meta Lab pvt ltd</p>
                                </div>
                                <div className="border-l-2 border-purple-500 pl-4">
                                    <p className="font-medium text-purple-300">MERN Stack Developer</p>
                                    <p className="text-sm text-gray-400">Techmaghi</p>
                                </div>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-200 mb-3">Education</h3>
                            <div className="space-y-3">
                                <div className="border-l-2 border-purple-500 pl-4">
                                    <p className="font-medium text-purple-300">Bachelor of Engineering in Computer Science and Engineering</p>
                                    <p className="text-sm text-gray-400">Vinayaka Missions Research Foundation University • 2024</p>
                                </div>
                                <div className="border-l-2 border-purple-500 pl-4">
                                    <p className="font-medium text-purple-300">Python Web Developer</p>
                                    <p className="text-sm text-gray-400">L&T EduTech(Online Program) • 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <a href='#projects' className="group relative px-8 py-4 rounded-full border border-purple-500/50 hover:border-purple-500 transition-all duration-300 overflow-hidden flex items-center gap-2">
                            <span className="relative z-10 font-medium">View My Projects</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </a>

                        <a
                            href="/resume_mohammed_sadik_Software Developer.pdf"
                            download className="group relative px-8 py-4 rounded-full border border-gray-500/50 hover:border-gray-500 transition-all duration-300 overflow-hidden flex items-center gap-2">
                            <span className="relative z-10 font-medium">Download Resume</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}