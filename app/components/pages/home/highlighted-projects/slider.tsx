import React, { ReactNode } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import { Navigation, Autoplay, Pagination, A11y, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import 'swiper/css/autoplay'
import Link from 'next/link'
import { cn } from '@/app/lib/utlis'
import { Project } from '@/app/types/projects'

interface SliderProps {
    settings: SwiperProps
    children: ReactNode
    projects: Project[]
}

export const Slider = ({ settings, children, projects }: SliderProps) => {
    return (
        <Swiper className={cn(projects.length <= 3 ? 'max-w-[720px]' : 'w-auto')} modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]} {...settings}>
            {children}
        </Swiper>
    )
}
