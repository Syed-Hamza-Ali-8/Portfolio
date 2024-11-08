"use client"
import Image from 'next/image';
import { useState } from 'react';

const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const skills = [
        {
            title: 'HTML & CSS',
            description: 'I have experience with HTML and CSS to build structured, styled, and responsive web pages.',
            image: '/Html5-logo.svg',
        },
        {
            title: 'JavaScript',
            description: 'I use JavaScript to create dynamic and interactive web applications, leveraging ES6+ features.',
            image: '/JavaScript-logo.png',
        },
        {
            title: 'TypeScript',
            description: 'I use TypeScript for building robust applications with static typing and enhanced code quality.',
            image: '/Typescript_logo.svg',
        },
        {
            title: 'React.js',
            description: 'I use React.js for building interactive user interfaces and managing application state effectively.',
            image: '/React-icon.svg',
        },
        {
            title: 'Next.js',
            description: 'Next.js allows me to build fast, SEO-friendly, and optimized React applications with server-side rendering.',
            image: '/Nextjs-logo.svg',
        },
        {
            title: 'Firebase',
            description: 'I integrate Firebase for real-time databases, user authentication, and cloud storage in web applications.',
            image: '/Firebase_Logo.svg',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 py-10">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center text-white">My Skills</h1>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer transition duration-300 transform hover:scale-105 hover:rotate-3 ${hoveredIndex !== null && hoveredIndex !== index ? 'filter grayscale' : ''
                                }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative mb-4">
                                <Image
                                    src={skill.image}
                                    alt={skill.title}
                                    width={80}
                                    height={80}
                                    className="mx-auto transition duration-300 ease-in-out transform hover:scale-110"
                                />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">{skill.title}</h2>
                            <p className="mt-2 text-gray-700">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
