import { Link } from "react-router-dom";

export function Header(){
    return (
        <header className="h-0 w-full sticky top-5 z-50 px-2">
            <div className="bg-white/30 backdrop-blur-md text-white h-[68px] max-w-6xl flex flex-col justify-center sm:justify-between items-center rounded-3xl m-auto font-medium select-none shadow-md md:flex-row">
                
                <h1 className="text-[22px] sm:text-3xl md:pl-20">João Vitor</h1>

                <nav className="text-lg sm:text-xl md:pr-20">
                    <Link className="px-2 sm:px-3" to="/">Home</Link>
                    <Link className="px-2 sm:px-3" to="/sobre">Sobre</Link>
                    <Link className="px-2 sm:px-3" to="/projetos">Projetos</Link>
                    <Link className="px-2 sm:px-3" to="/contato">Contato</Link>
                </nav>
            </div>
        </header>
    )
}
