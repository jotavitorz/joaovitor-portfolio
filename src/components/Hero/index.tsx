import { TypeAnimation } from "react-type-animation"
import bgImage from "../../assets/bg-image.jpg";

export function Hero(){
    return (
        <div className="h-screen w-full bg-cover bg-center bg-no-repeat "
            style={{backgroundImage: `url(${bgImage})`}}
        >
            <section className="w-full h-full bg-zinc-900/80 flex text-white flex-col items-center justify-center font-semibold">

                <TypeAnimation
                    sequence={[
                        'Hello 	🖖',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
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
            </section>
        </div>
    )
}

