import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function SkillsPage() {
    const skillIcons = [
        { name: 'MongoDB', image: '/mongodb.png' },
        { name: 'Express', image: '/expressjs.png' },
        { name: 'React', image: '/react.png' },
        { name: 'Node', image: '/node.png' },
        { name: 'Next', image: '/next.png' },
        { name: 'MySQL', image: '/mysql.png' },
        { name: 'PostgresSQL', image: '/postgresql.png' },
        { name: 'Github', image: '/github.png' },
        { name: 'Firebase', image: '/firebase.png' },
        { name: 'Javascript', image: '/js.png' },
        { name: 'Typescript', image: '/ts.png' },
    ];

    const secondRowIcons = skillIcons.slice(0, 6);
    const thirdRowIcons = skillIcons.slice(6, 9);
    const fourthRowIcons = skillIcons.slice(9);

    return (
        <div
            id='skills'
            className="min-h-screen text-white overflow-hidden relative"
            style={{
                backgroundImage: "url('/skills-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
                {/* Tagline */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 border-2 border-purple-500 rounded"></div>
                    <span className="text-sm text-purple-400">Have better with NextJS 14</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
                    Making apps with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">modern technologies.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-slate-300 text-center mb-16 font-light">
                    Fluent, smart & tech-stacked on idea.
                </p>

                {/* First Row of Icons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {secondRowIcons.map((skill, idx) => (
                        <div
                            key={idx}
                            className="w-16 h-16 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-purple-500/60 bg-white backdrop-blur border border-purple-500"
                        >
                            <img 
                                src={skill.image} 
                                alt={skill.name}
                                className="w-12 h-12 object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Second Row of Icons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {thirdRowIcons.map((skill, idx) => (
                        <div
                            key={idx}
                            className="w-14 h-14 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-purple-500/60 bg-white backdrop-blur border border-purple-500"
                        >
                            <img 
                                src={skill.image} 
                                alt={skill.name}
                                className="w-10 h-10 object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Third Row of Icons */}
                <div className="flex flex-wrap justify-center gap-4">
                    {fourthRowIcons.map((skill, idx) => (
                        <div
                            key={idx}
                            className="w-14 h-14 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-purple-500/60 border border-purple-500 bg-white backdrop-blur"
                        >
                            <img 
                                src={skill.image} 
                                alt={skill.name}
                                className="w-10 h-10 object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating orbs for extra depth */}
            <div className="fixed top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse z-0 pointer-events-none"></div>
            <div className="fixed bottom-0 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse z-0 pointer-events-none"></div>
        </div>
    );
}