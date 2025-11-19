import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="w-full h-32 bg-linear-to-b from-zinc-900 from-100% flex items-center justify-around">
            <h2 className="text-gray-400 text-[22px] font-medium">© {new Date().getFullYear()} João Vitor — Todos os direitos reservados</h2>

            <div className="flex gap-4 mt-4 items-center">
                <a  
                    href="#"
                    target="_blank"
                >
                    <FaGithub className="w-8 h-8 text-gray-400 hover:-translate-y-2 duration-300 ease-in-out" />
                </a>
                <a 
                    href="#"
                    target="_blank"
                >
                    <FaInstagram className="w-8 h-8 text-gray-400 hover:-translate-y-2 duration-300 ease-in-out" />
                </a>
                <a 
                    href="#"
                    target="_blank"
                >
                    <FaLinkedin className="w-8 h-8 text-gray-400 hover:-translate-y-2 duration-300 ease-in-out"  />
                </a>

            </div>
        </footer>
    )
}



