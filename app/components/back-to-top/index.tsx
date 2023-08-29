'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Button } from '../button'
import { TbArrowNarrowUp } from 'react-icons/tb'

export const BackToTop = () => {
    const [show, setShow] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleScroll = useCallback(() => {
        if (!show && window.scrollY > 500) setShow(true)
        if (show && window.scrollY <= 500) setShow(false)
    }, [show])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <div className='fixed right-4 bottom-4 z-20'>
            {show && (
                <Button onClick={scrollToTop} className='shadow-lg shadow-violet-400/20'>
                    <TbArrowNarrowUp size={20} />
                </Button>
            )}
        </div>
    )
}
