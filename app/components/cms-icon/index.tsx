import { cn } from "@/app/lib/utlis"

interface CMSIconProps {
    icon: string
    className: string
}

export const CMSIcon = ({ icon, className }: CMSIconProps) => {
  return (
    <div
        className={cn('', className)}
        dangerouslySetInnerHTML={{
            __html: icon
        }}
    />
  )
}
