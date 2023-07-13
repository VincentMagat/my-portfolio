export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col intems-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, I'm June.
                        <br className="hidden lg:inline-block"/> As a U.S. Navy Veteran with a B.S. in Computer Science, I excel in embedded systems development using C/C++ and Python. I also have proficiency in JavaScript, React, and Node.js for web development. Passionate about technology, I love learning and building innovative solutions. Let's collaborate on impactful projects that push technological boundaries.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Highly motivated and skilled Computer Science student and U.S. Navy veteran with a strong technical background in programming. Possessing leadership and problem-solving abilities honed through military service, I am passionate about technology and eager to apply my knowledge and learn new skills to develop innovative solutions for real-world challenges.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            classname="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Let's Collaborate
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                               Personal/Class Projects 
                            </a>

                    </div>
        
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img 
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                     
                </div>



            </div>

        </section>
    )
}