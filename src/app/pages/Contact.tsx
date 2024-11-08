import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-center">Contact Me</h1>

                <p className="mt-4 text-base sm:text-xl text-center">
                    Feel free to connect with me through social media or shoot me a message!
                </p>

                <div className="mt-8 flex justify-center gap-6 sm:gap-8">
                    <Link
                        href="https://www.facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl sm:text-4xl text-blue-600 hover:text-blue-700 transition duration-300"
                    >
                        <FaFacebook />
                    </Link>
                    <Link
                        href="https://www.instagram.com/syed_hamza_228?igsh=bGtkNTBzd3hmc3dt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl sm:text-4xl text-pink-600 hover:text-pink-700 transition duration-300"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/hamza-ali-b72b582ab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl sm:text-4xl text-blue-700 hover:text-blue-800 transition duration-300"
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        href="https://github.com/Syed-Hamza-Ali-8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl sm:text-4xl text-gray-800 hover:text-black transition duration-300"
                    >
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
