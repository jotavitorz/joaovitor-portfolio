import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="w-full h-full bg-linear-to-b from-zinc-900 from-100%">
            <div className="w-full h-32 flex flex-col sm:flex-row items-center justify-center sm:justify-around p-1">
                <p className="text-gray-400 sm:text-lg md:text-[22px] font-medium">© {new Date().getFullYear()} João Vitor — Todos os direitos reservados</p>

                <div className="flex gap-4 mt-2 sm:mt-4 items-center">
                    <a  
                        href="https://github.com/jotavitorz"
                        target="_blank"
                        rel="external"
                    >
                        <FaGithub className="w-6 h-6 md:w-8 sm:h-8 text-gray-400 hover:-translate-y-2 duration-300 ease-in-out" />
                    </a>
                    <a 
                        href="https://www.instagram.com/jvtorzx/"
                        target="_blank"
                        rel="external"
                    >
                        <FaInstagram className="w-6 h-6 md:w-8 sm:h-8 text-gray-400 hover:-translate-y-2 duration-300 ease-in-out" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/devjoaovitor"
                        target="_blank"
                        rel="external"
                    >
                        <FaLinkedin className="w-6 h-6 md:w-8 sm:h-8 text-gray-400 hover:-translate-y-2 duration-300 ease-in-out"  />
                    </a>

                </div>
            </div>
        </footer>

    )
}



