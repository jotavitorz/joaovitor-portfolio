import { Link } from "react-router-dom";

export function Header(){
    return (
        <header className="h-0 sticky top-5 z-50">
            <div className="bg-white/30 backdrop-blur-md text-white h-16 max-w-6xl flex justify-between items-center rounded-3xl m-auto font-medium select-none shadow-md">
                
                <h1 className="text-3xl pl-20">João Vitor</h1>

                <nav className="text-xl pr-20">
                    <Link className="px-3" to="/">Home</Link>
                    <Link className="px-3" to="/sobre">Sobre</Link>
                    <Link className="px-3" to="/projetos">Projetos</Link>
                    <Link className="px-3" to="/contato">Contato</Link>
                </nav>
            </div>
        </header>
    )
}
