import Image from 'next/image';

const Projects = () => {
    const projects = [
        {
            title: 'Bed Sheet Website',
            description: 'This is an e-commerce website for bed sheets, built using React, React Router DOM, and Material-UI. It includes features like product listings, cart functionality, and a responsive design.',
            image: '/bedsheet.png',
            link: 'https://bedsheet-website-19oj.vercel.app/',
        },
        {
            title: 'Todo App',
            description: 'A simple Todo app to manage tasks, built with React and localStorage for data persistence. Users can add, edit, and delete tasks.',
            image: '/todo_app.png',
            link: 'https://syed-hamza-ali-8.github.io/todo-app/',
        },
        {
            title: 'Weather App',
            description: 'A weather forecasting app that allows users to check the weather for any city using the OpenWeather API. Built with React and styled with CSS.',
            image: '/weather_app.jpg',
            link: 'https://syed-hamza-ali-8.github.io/weather/',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center text-gray-900">My Projects</h1>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer transform hover:scale-105 hover:rotate-3"
                        >
                            <div className="relative mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover rounded-md transition duration-300 ease-in-out transform hover:scale-110"
                                />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
                            <p className="mt-2 text-gray-700">{project.description}</p>
                            <a
                                href={project.link}
                                className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition duration-300"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
