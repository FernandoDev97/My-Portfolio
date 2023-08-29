import { cn } from '@/app/lib/utlis'
import NextLink from 'next/link'
import { ComponentProps } from 'react'

type LinkProps = ComponentProps<typeof NextLink>

export const Link = ({className, children, ...props}: LinkProps) => {
  return (
    <NextLink className={cn('flex items-center gap-2 text-gray-300 text-base hover:text-violet-500 transition-colors', className)} {...props}>
        {children}
    </NextLink>
  )
}
