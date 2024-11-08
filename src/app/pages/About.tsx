"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h1
                    className={`text-4xl font-bold text-center text-gray-900 transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate__fadeIn' : 'opacity-0'
                        }`}
                >
                    About Me
                </h1>

                <p className="mt-6 text-xl text-gray-700 text-justify max-w-3xl mx-auto leading-relaxed">
                    Hello! I&apos;m a passionate web developer with expertise in creating beautiful, responsive, and user-friendly websites.
                    My journey in web development began with curiosity and has grown into a deep passion for coding and design. I specialize
                    in front-end technologies like React, Next.js, and Tailwind CSS. My focus is on crafting clean, modern designs that provide
                    seamless user experiences. When I&apos;m not coding, I enjoy exploring new technologies or working on personal projects.
                </p>

                <div className="mt-12 flex justify-center">
                    <div className="w-64 h-64 relative transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3">
                        <Image
                            src="/about-img.jfif"
                            alt="Profile Image"
                            width={250}
                            height={250}
                            className="rounded-full shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
