import React from "react";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            <div id="about" className="min-h-screen text-white overflow-hidden relative">
                {/* Background layers */}
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
                    <div
                        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 md:w-96 md:h-96 rounded-full opacity-30 blur-xl animate-pulse"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(147,51,234,0.6) 0%, rgba(79,70,229,0.3) 50%, transparent 80%)",
                        }}
                    />
                </div>

                {/* Content */}
                <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-12">
                    <div className="w-full max-w-6xl mx-auto">
                        {/* Header / Tagline */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                                About{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                                    Me
                                </span>
                            </h1>
                        </div>

                        {/* Main split: Profile + Bio (stacks on small screens) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            {/* Profile column */}
                            <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                                <div className="w-44 h-44 rounded-full overflow-hidden shadow-2xl ring-2 ring-purple-500/40">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/dp3.png"
                                        alt="Mohammed Sadik — Full Stack Developer"
                                        loading="lazy"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-semibold">Mohammed Sadik</h2>
                                    <p className="text-sm sm:text-base text-gray-400 mt-1">Full Stack Developer</p>
                                </div>

                                <p className="text-xs sm:text-sm text-gray-500 max-w-[18rem]">
                                    MERN Stack • Next.js • Scalable APIs
                                </p>

                                {/* Social / quick links (edit hrefs) */}
                                <div className="flex gap-3 mt-3">
                                    <a
                                        href="https://www.linkedin.com/in/zadic42"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-300 hover:text-white text-sm"
                                        aria-label="LinkedIn"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://github.com/zadic42"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-300 hover:text-white text-sm"
                                        aria-label="GitHub"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            {/* Bio + actions column */}
                            <div className="md:col-span-2">
                                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                                    Full-stack engineer specializing in building scalable, high-performance web applications using the MERN stack.
                                    I combine technical precision with user-focused design, delivering clean, maintainable code across React, Next.js, Node.js, Express, and MongoDB.
                                    Committed to continuous improvement and creating digital products that balance performance, reliability, and intuitive user experience.
                                </p>

                                {/* Experience & Education cards (responsive row) */}
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-white/3 p-5 rounded-2xl border border-white/6">
                                        <h3 className="text-lg font-semibold text-gray-100 mb-3">Experience</h3>
                                        <div className="space-y-4">
                                            <div className="pl-4 relative">
                                                <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-purple-400" />
                                                <p className="font-semibold text-purple-300">First Logic Meta Lab Pvt Ltd</p>
                                                <p className="text-sm text-gray-400">Software Developer</p>
                                            </div>

                                            <div className="pl-4 relative">
                                                <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-purple-400" />
                                                <p className="font-semibold text-purple-300">Techmaghi</p>
                                                <p className="text-sm text-gray-400">MERN Stack Developer</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/3 p-5 rounded-2xl border border-white/6">
                                        <h3 className="text-lg font-semibold text-gray-100 mb-3">Education</h3>
                                        <div className="space-y-4">
                                            <div className="pl-4 relative">
                                                <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-purple-400" />
                                                <p className="font-semibold text-purple-300">B.E. Computer Science & Engineering</p>
                                                <p className="text-sm text-gray-400">Vinayaka Missions Research Foundation • 2024</p>
                                            </div>

                                            <div className="pl-4 relative">
                                                <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-purple-400" />
                                                <p className="font-semibold text-purple-300">Python Web Developer</p>
                                                <p className="text-sm text-gray-400">L&T EduTech (Online) • 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center mt-8">
                                    <a
                                        href="#projects"
                                        className="group relative inline-flex items-center justify-center px-6 py-3 rounded-full border border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 text-sm sm:text-base font-medium"
                                        aria-label="View my projects"
                                    >
                                        <span>View My Projects</span>
                                        <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity" />
                                    </a>

                                    <a
                                        href="/resume_mohammed_sadik_Software Developer.pdf"
                                        download
                                        className="group relative inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-500/50 hover:bg-gray-500/10 transition-all duration-300 text-sm sm:text-base font-medium"
                                        aria-label="Download resume"
                                    >
                                        <span>Download Resume</span>
                                        <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-10 transition-opacity" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* small footnote or badges */}
                        <div className="text-center mt-10 text-sm text-gray-500">
                            <span>Open to collaboration • Available for interviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
