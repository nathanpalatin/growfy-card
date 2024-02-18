'use client'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { WhatsappLogo } from '@phosphor-icons/react'

interface ButtonProps extends ComponentProps<'button'> {
  title: string
  link: string
  variant?: boolean
}

export function Button({ link, variant, title, ...rest }: ButtonProps) {
  return (
    <Link href={link}>
      <button
        type="button"
        className={` rounded-full items-center text-sm flex justify-center gap-2 w-full gradient-border  font-medium  ${variant ? 'gradient text-zinc-50 shadow-sm p-3' : 'gradient-text border-2 p-2 border-purple-900'} `}
        {...rest}
      >
        {variant ? (
          <>
            <WhatsappLogo size={20} /> {title}
          </>
        ) : (
          title
        )}
      </button>
    </Link>
  )
}
