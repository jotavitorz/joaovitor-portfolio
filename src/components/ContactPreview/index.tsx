import { useState, type FormEvent} from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export function ContactPreview() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [buttonMessage, setButtonMessage] = useState("Enviar mensagem");

    function sendEmail(e: FormEvent){
        e.preventDefault();

        if(name.trim() === "" || email.trim() === "" || message.trim() === ""){
            toast.warn("Por favor, preencha todos os campos.");
            setButtonMessage("Enviar mensagem");
            return;
        }
        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        };

        emailjs.send("service_5mb95t1", "template_ou145x7", templateParams, "VvHSFIiq4-HfgkAcV")
        .then(() => {
            toast.success("Seu e-mail foi enviado com sucesso!");
            setName("");
            setEmail("");
            setMessage("");
        })
        .catch(() => {
            toast.error("Ops! Ocorreu um erro ao enviar o e-mail")
        })
        .finally(() => {
            setButtonMessage("Enviar mensagem")
        })
    }

    return (
        <section className="min-h-full w-full bg-linear-to-b from-slate-800 to-zinc-900 from-90% py-16">

            <h2 className="text-center text-5xl font-bold text-orange-600">Contato</h2>

            <form onSubmit={sendEmail} className=" flex flex-col mx-auto max-w-[680px] my-10 gap-6 p-4" >

                <input 
                    className="bg-slate-900 text-neutral-200 font-semibold h-12 rounded-md py-4 px-2.5 text-lg outline-none focus:border-cyan-800 focus:border-2 shadow-lg focus:shadow-cyan-700/50"
                    type="text" 
                    placeholder="Digite seu nome" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />

                <input
                    className="bg-slate-900 text-neutral-200 font-semibold h-12 rounded-md py-4 px-2.5 text-lg outline-none focus:border-cyan-800 focus:border-2 shadow-lg focus:shadow-cyan-700/50"
                    type="email" 
                    placeholder="Digite seu Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                    className="bg-slate-900 text-neutral-200 font-semibold rounded-md min-h-30 max-h-80 py-2 px-2.5 text-lg outline-none focus:border-cyan-800 focus:border-2 shadow-lg focus:shadow-cyan-700/50"
                    placeholder="Digite sua mensagem..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <input className="cursor-pointer bg-slate-900 text-amber-50 active:bg-slate-800 h-10 rounded-md font-semibold outline-none focus:border-cyan-800 focus:border-2 shadow-lg shadow-cyan-800/50" onClick={() => setButtonMessage("Enviando...")} type="submit" value={buttonMessage} />
            </form>
        </section>
    )
}
