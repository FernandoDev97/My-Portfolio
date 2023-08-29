"use client"
import Link from "next/link"
import { NavItem } from "./NavItem"
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineFileText } from 'react-icons/ai'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import { motion } from 'framer-motion'
import useCheckMobileScreen from "@/app/hooks/useCheckMobileScreen"

const CONTACTS = [
    {
        link: 'http://github.com/FernandoDev97',
        icon: <TbBrandGithub size={40} />
    },
    {
        link: 'https://www.linkedin.com/in/fernando-souza-6844341b7/',
        icon: <TbBrandLinkedin size={40} />
    },
    {
        link: 'https://w.app/ZutoDg',
        icon: <TbBrandWhatsapp size={40} />
    },
]


const NAV_ITENS = [
    {
        label: 'Home',
        href: '/',
        icon: <AiOutlineHome size={22} />
    },
    {
        label: 'Projetos',
        href: '/projects',
        icon: <AiOutlineFundProjectionScreen size={22} />
    },
    {
        label: 'Currículo',
        href: '/resume',
        icon: <AiOutlineFileText size={22} />
    }
]

export const Aside = () => {
    const isMobile = useCheckMobileScreen()

    const animationProps = {
        initial: {x: -450},
        animate: {x: -0}
    }

    return (
        <motion.aside 
            {...animationProps}
            transition={{duration: 0.4}}
            className="absolute md:fixed md:m-5 w-full md:w-[240px] lg:w-[300px] md:rounded-3xl md:h-[calc(100%-40px)] z-10 flex px-6 md:px-10 py-10 md:py-32 bg-gradient-to-l from-slate-950 to-violet-950">
            <div className="flex justify-center sm:justify-between w-full md:justify-normal md:flex-col gap-10 md:gap-28">
                <Link href='/' className="hidden sm:flex gap-[2px]">
                    <span className="text-fuchsia-50 font-bold text-2xl md:text-5xl font-mono"> {'<'} </span>
                    <span className="text-violet-700 font-bold text-2xl md:text-5xl font-mono">F</span>
                    <span className="mt-auto text-fuchsia-50 font-bold text-lg md:text-3xl font-mono">S</span>
                    <span className="text-violet-700 font-bold text-2xl md:text-5xl font-mono"> {'/>'} </span>
                </Link>
                <nav className="flex md:flex-col gap-4 sm:gap-10">
                    {NAV_ITENS.map(item => (
                        <NavItem {...item} key={`item label + ${item.label}`} />
                    ))}
                </nav>
                <div className="text-2xl mt-auto text-gray-400 hidden md:flex flex-col h-20 gap-3">
                    {CONTACTS.map((contact) => (
                        <a
                            href={contact.link}
                            key={contact.link}
                            target="_blank"
                            className="hover:text-gray-100 transition-colors"
                        >
                            {contact.icon}
                        </a>
                    ))}
                </div>
            </div>
        </motion.aside>
    )
}
