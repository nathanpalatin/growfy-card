'use client'
import { CaretLeft } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

export default function QrCode() {
  return (
    <main className="bg-card flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-col w-[380px]">
        <div className="flex justify-between items-center mb-20">
          <Link href={'/'}>
            <CaretLeft size={32} color={'#fff'} />
          </Link>
          <Image src={'/logo.png'} width={120} height={80} alt="" />
        </div>
        <h1 className="text-zinc-100 text-center w-[300px] self-center text-sm ">
          Por favor, escaneie o QR Code com a câmera de seu smartphone:
        </h1>
        <Image
          src={'/qrcode.png'}
          width={350}
          height={350}
          quality={100}
          className="bg-zinc-100 p-4 rounded-lg mx-auto my-11"
          alt=""
        />
      </div>
    </main>
  )
}
