import { Link } from "react-router-dom";

export function ErrorPage(){
    return (
        <div className="w-full h-full bg-linear-to-b from-slate-900 to-zinc-900 from-50%">
            <div className="w-full min-h-screen flex items-center justify-center flex-col max-w-6xl text-neutral-200 mx-auto p-3">
                <h1 className="text-9xl font-bold">404</h1>
                <p className="my-4 max-w-10/12 sm:w-full sm:text-xl text-center">Ops! pagina não encontrada, talvez o que você procura sou eu na sua empresa! 😉</p>

                <Link to="/" className="bg-gray-600 font-semibold text-neutral-200 px-4 py-2 rounded-lg">
                    Voltar para Home
                </Link>
                
            </div>  
        </div>
    )
}

