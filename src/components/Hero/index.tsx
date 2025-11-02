import { TypeAnimation } from "react-type-animation"
import bgImage from "../../assets/bg-image.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Hero(){
    return (
        <div className="h-screen w-full bg-cover bg-center bg-no-repeat "
            style={{backgroundImage: `url(${bgImage})`}}
        >
            <section className="w-full h-full bg-zinc-900/85 flex text-white flex-col items-center justify-center font-semibold px-2">

                <TypeAnimation
                    sequence={[
                        'Hello 	🖖',
                        2000,
                        'I’m João Vitor',
                        2000,
                        'Front-End Developer',
                        2000
                    ]}
                    wrapper="h2"
                    speed={30}
                    style={{ fontSize: '6em', display: 'inline-block' }}
                    repeat={Infinity}
                />

                <p className="text-2xl mt-4">Construo soluções web que conectam pessoas e tecnologia.</p>

                <div className="flex gap-4 mt-4 items-center">

                    <div className="w-22 h-1 bg-gray-500 rounded-2xl"></div>

                    <a 
                        href="#"
                        target="_blank"
                    >
                        <FaGithub className="w-8 h-8" />
                    </a>
                    <a 
                        href="#"
                        target="_blank"
                    >
                        <FaInstagram className="w-8 h-8" />
                    </a>
                    <a 
                        href="#"
                        target="_blank"
                    >
                        <FaLinkedin className="w-8 h-8" />
                    </a>

                    <div className="w-22 h-1 bg-gray-500 rounded-md"></div>
                </div>
            </section>
        </div>
    )
}

