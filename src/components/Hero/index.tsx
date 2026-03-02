import { TypeAnimation } from "react-type-animation"
import bgImage from "../../assets/images/bg-image.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Hero(){
    return (
        <div className="h-screen w-full bg-cover bg-center bg-no-repeat "
            style={{backgroundImage: `url(${bgImage})`}}
        >
            <section className="w-full h-full bg-zinc-900/85 flex text-white flex-col items-center justify-center font-semibold px-2">

                <TypeAnimation
                    sequence={[
                        'Hello 🖖',
                        2000,
                        'I’m João Vitor',
                        2000,
                        'Front-End Developer',
                        2000
                    ]}
                    wrapper="h2"
                    speed={30}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl inline-block" 
                    repeat={Infinity}
                />

                <p className="w-full text-center text-[14px] sm:text-lg md:text-xl lg:text-2xl mt-4">
                    Construo soluções web que conectam pessoas e tecnologia.
                </p>

                <div className="flex gap-4 mt-4 items-center">

                    <div className="w-16 sm:w-22 h-1 bg-gray-500 rounded-2xl"></div>

                    <a 
                        href="https://github.com/jotavitorz"
                        target="_blank"
                        rel="external"
                    >
                        <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
                    </a>
                    <a 
                        href="https://www.instagram.com/jvtorzx/"
                        target="_blank"
                        rel="external"
                    >
                        <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/devjoaovitor"
                        target="_blank"
                        rel="external"
                    >
                        <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                    </a>

                    <div className="w-16 sm:w-22 h-1 bg-gray-500 rounded-md"></div>
                </div>
            </section>
        </div>
    )
}

