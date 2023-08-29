"use client"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../button"
import { SectionTitle } from "../section-title"
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { HorizontalDivider } from "../divider/horizontal"
import axios from "axios"
import { toast } from "react-hot-toast"
import { motion } from "framer-motion"

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500)
})

const animationProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
    const { handleSubmit, register, reset, formState: { isSubmitting } } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })

    const onSubmit = async (data: ContactFormData) => {
        try {
            await axios.post('api/contact', data)
            reset()
            toast.success('Mensagem enviada com sucesso!')
        } catch (err) {
            console.log(err)
            toast.error('Ocorreu um erro inesperado, por favor tente novamente mais tarde!')
        }
    }
    return (
        <section id="contact" className="main-container pb-10">
            <HorizontalDivider className="my-16" />
            <motion.div
                {...animationProps}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[580px] mx-auto">
                <SectionTitle className="items-center text-center" subtitle="contato" title="Gostou do que viu? Entre em contato." />
                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-12 w-full flex flex-col gap-4"
                >
                    <input
                        {...register('name')}
                        placeholder="Nome"
                        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-500"
                    />
                    <input
                        {...register('email')}
                        placeholder="E-mail"
                        type="email"
                        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-500"
                    />
                    <textarea
                        {...register('message')}
                        placeholder="Mensagem"
                        maxLength={500}
                        className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-500"
                    />
                    <Button type="submit" className="w-max mx-auto mt-6" disabled={isSubmitting}>
                        Enviar mensagem
                        <HiArrowNarrowRight size={18} />
                    </Button>
                </motion.form>
            </motion.div>
        </section>
    )
}
