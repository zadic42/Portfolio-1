import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function SkillsPage() {
    const skillIcons = [
        { name: 'MongoDB', image: '/mongo.svg' },
        { name: 'Next', image: '/next.png' },
        { name: 'React', image: '/react.png' },
        { name: 'Node', image: '/node.png' },
        { name: 'Express', image: '/expressjs.png' },
        { name: 'GraphQl', image: '/graphql.png' },
        { name: 'MySQL', image: '/mysql.png' },
        { name: 'PostgresSQL', image: '/postgresql.png' },
        { name: 'Github', image: '/github.png' },
        { name: 'Firebase', image: '/firebase.png' },
        { name: 'Typescript', image: '/ts.png' },
    ];

    return (
        <div
            id="skills"
            className="min-h-screen text-white overflow-hidden relative"
            style={{
                backgroundImage: "url('/skills-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Floating Orbs */}
            <div className="fixed top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none -z-10"></div>
            <div className="fixed bottom-20 right-10 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none -z-10"></div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 sm:py-20 lg:py-24">

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight px-4">
                    Making apps with{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                        modern technologies.
                    </span>
                </h1>
                {/* Responsive Skills Grid */}
                <div className="mt-16 w-full max-w-5xl px-4">
                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
                        {skillIcons.map((skill, idx) => (
                            <div
                                key={idx}
                                className={`
                                    relative group
                                    w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24
                                    rounded-2xl
                                    flex items-center justify-center
                                    shadow-xl hover:shadow-2xl hover:shadow-purple-500/40
                                    transform hover:scale-110 transition-all duration-300
                                    overflow-hidden
                                `}
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain transition-transform group-hover:scale-125 duration-300"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                                {/* Optional tooltip on hover (desktop) */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-10 transition-all duration-300 text-xs bg-black/80 px-2 py-1 rounded whitespace-nowrap pointer-events-none z-20">
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}