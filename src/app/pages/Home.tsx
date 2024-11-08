"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 py-12">
            <div className="text-center">
                <h1
                    className={`text-4xl md:text-5xl font-bold transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    Syed Hamza Ali
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-gray-400 text-justify">
                    I&apos;m a passionate web developer creating amazing web applications.
                </p>
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-center items-center">
                <div className="w-64 h-64 md:w-96 md:h-96 relative mb-6 md:mb-0">
                    <Image
                        src="/hamza.png"
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                    />
                </div>

                <div className="ml-0 md:ml-8 text-center md:text-left text-justify">
                    <p className="text-lg md:text-xl text-gray-400">
                        I specialize in front-end development and love creating responsive, interactive websites.
                        <br /> <br />
                        Explore my projects, skills, and get in touch if you&apos;re interested in collaborating!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
