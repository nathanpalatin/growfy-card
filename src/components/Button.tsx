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
        className={`rounded-full items-center flex justify-center gap-2 w-full border-2  ${variant ? 'gradient text-zinc-300 shadow-sm' : 'gradient-text border-purple-900'} p-3`}
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
