import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="gradient-top flex min-h-screen flex-col items-center p-12">
      <div className="flex w-[360px] justify-between ">
        <Image
          className="w-32 h-10 ml-28"
          src="/logo.png"
          alt=""
          quality={100}
          width={170}
          height={100}
        />
        <Link href={'/qrcode'}>
          <Image
            className="w-10 h-10"
            src="/qrcode-icon.png"
            alt=""
            quality={100}
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className="bg-zinc-100 absolute flex flex-col top-48 h-screen w-full">
        <div className=" absolute self-center left-auto -top-12  ">
          <Avatar />
          <h1 className="gradient-text mt-2 text-center text-2xl">
            Doug Alsant
          </h1>

          <div className="flex flex-col relative gap-3 top-4 w-[360px]">
            <h1 className="text-est text-center text-lg text-zinc-800">
              Estrategista em vendas digitais
            </h1>
            <p className="relative text-center text-sm text-zinc-600">
              Nossa missão é performar e simplificar processos para que
              especialistas e empresários cresçam e escalem suas vendas sem
              limites.
            </p>
            <div className="h-px w-[200px] my-10 bg-zinc-300 mx-auto justify-center items-center" />
            <Button
              link="https://wa.me/16892702316"
              variant
              title="ENTRAR EM CONTATO"
            />
            <Button link="https://growfy.digital" title="ACESSAR SITE" />
            <Button
              link="https://instagram.com/olagrowfy"
              title="ACESSAR INSTAGRAM"
            />
            <Button
              link="mailto:doug.alsant@gmail.com"
              title="ENVIAR UM E-MAIL"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
