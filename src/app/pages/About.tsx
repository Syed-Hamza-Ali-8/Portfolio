"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-6">
                {/* Title */}
                <h1 className={`text-4xl font-bold text-center text-gray-900 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                    About Me
                </h1>

                <p className="mt-6 text-xl text-gray-700 text-justify max-w-3xl mx-auto">
                    Hello! I'm a passionate web developer with expertise in creating beautiful, responsive, and user-friendly websites.
                    My journey in web development started out of curiosity and has evolved into a deep passion for coding and design.
                    I specialize in front-end technologies like React, Next.js, and Tailwind CSS. I love creating clean and modern designs
                    that provide seamless user experiences. When I'm not coding, you can find me exploring new technologies or working
                    on personal projects.
                </p>

                <div className="mt-10 flex justify-center">
                    <div className="w-64 h-55 relative transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3">
                        <Image
                            src="/about-img.jfif"
                            alt="Your Image"
                            width={250}
                            height={250}
                            className="rounded-full shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
