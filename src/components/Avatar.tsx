import Image from 'next/image'

export function Avatar() {
  return (
    <Image
      src={'/avatar.png'}
      alt={'Foto de perfil'}
      priority
      quality={'high'}
      width={200}
      height={200}
      className="w-48 h-48 self-center mx-auto rounded-full bg-zinc-200 shadow-lg"
    />
  )
}
