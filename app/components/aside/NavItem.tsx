'use client'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/app/lib/utlis'

interface NavItemProps {
    label: string
    href: string
    icon: ReactNode
}

export const NavItem = ({ label, href, icon }: NavItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={cn(
      'text-gray-400 text-sm sm:text-base flex items-center font-mono gap-2 font-medium',
      isActive && 'text-gray-50'
    )}>
        <span className={cn('text-gray-400', isActive && 'text-violet-400')}>{icon}</span>
        {label}
    </Link>
  )
}
