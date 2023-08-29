import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CMSRichText>

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => {
          return (
            <b className='text-gray-100 font-medium'>{children}</b>
          )
        },

        ul: ({ children }) => (
          <ul className='list-disc list-inside pl-4 flex flex-col gap-1 mt-4'>
            {children}
          </ul>
        ),
        
        p: ({ children }) => (
          <p className='mt-[1.2rem]'>
            {children}
          </p>
        ),

        a: ({ children, ...props }) => (
          <a {...props} className='hover:text-violet-500 transition-colors underline'>{children}</a>
        )
      }}
    />
  )
}
