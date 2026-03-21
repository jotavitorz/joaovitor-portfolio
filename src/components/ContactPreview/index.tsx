import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { emailConfig } from "../../constants";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().nonempty("O nome é obrigatório!"),
    email: z.string().email("Insira um email válido").nonempty("O Email é obrigatório"),
    message: z.string().nonempty("A mensagem é obrigatória"),
})

type FormData = z.infer<typeof schema>;

export function ContactPreview() {
    const { handleSubmit, register, reset, formState: {errors}} = useForm({
        resolver: zodResolver(schema),
        mode: "onChange",
    })
    const [loading, setLoading] = useState<boolean>(false);

    async function sendEmail(data: FormData){
        
        try {
            setLoading(true);
            const templateParams = {
                from_name: data.name,
                message: data.message,
                email: data.email,
            };

            await emailjs.send(emailConfig.serviceId, emailConfig.templateId, templateParams, emailConfig.publicKey)
            reset();
            toast.success("Seu e-mail foi enviado com sucesso!");

        }catch(error) {
            console.log(error);
            toast.error("Ops! Ocorreu um erro ao enviar o e-mail");

        }finally {
            setLoading(false);
        }
    }

    return (
        <section className="min-h-full w-full bg-slate-900 py-16">

            <h2 className="text-center text-4xl sm:text-5xl font-bold text-orange-600">Contato</h2>

            <form onSubmit={handleSubmit(sendEmail)} className=" flex flex-col mx-auto max-w-[680px] my-10 p-4" >

                <input 
                    className="bg-slate-850 text-neutral-200 font-semibold h-12 rounded-md py-4 px-2.5 text-lg outline-none focus:border-cyan-800 focus:border-2 shadow-lg focus:shadow-cyan-700/50 shadow-cyan-800/80"
                    {...register("name")}
                    type="text"
                    id="name"
                    placeholder="Digite seu nome"
                    style={{marginBottom: errors.name ? "0" : "24px"}}
                />
                {errors.name && (
                    <p className="text-red-700 font-bold pl-1 mb-4">{errors.name.message}</p>
                )}

                <input
                    className="bg-slate-850 text-neutral-200 font-semibold h-12 rounded-md py-4 px-2.5 text-lg outline-none focus:border-cyan-800 focus:border-2 shadow-lg focus:shadow-cyan-700 shadow-cyan-800/80"
                    type="email" 
                    placeholder="Digite seu Email" 
                    {...register("email")}
                    id="email"
                    style={{marginBottom: errors.email ? "0" : "24px"}}
                />
                {errors.email && (
                    <p className="text-red-700 font-bold pl-1 mb-4">{errors.email.message}</p>
                )}

                <textarea
                    className="bg-slate-850 text-neutral-200 font-semibold rounded-md min-h-30 max-h-80 py-2 px-2.5 text-lg outline-none focus:border-cyan-800 focus:border-2 shadow-lg focus:shadow-cyan-700/50 shadow-cyan-800/80"
                    placeholder="Digite sua mensagem..."
                    {...register("message")}
                    id="message"
                    style={{marginBottom: errors.message ? "0" : "24px"}}
                ></textarea>
                {errors.message && (
                    <p className="text-red-700 font-bold pl-1 mb-4">{errors.message.message}</p>
                )}

                <input className="cursor-pointer bg-slate-850 text-amber-50 active:bg-slate-800 h-10 rounded-md font-semibold outline-none focus:border-cyan-800 focus:border-2 shadow-lg shadow-cyan-800/50" style={{backgroundColor: loading ? "#273F4F" : ""}} disabled={loading} type="submit" value={loading ? "Enviando..." : "Enviar mensagem"} />
            </form>
        </section>
    )
}

