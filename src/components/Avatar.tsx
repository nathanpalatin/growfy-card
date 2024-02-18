import Image from 'next/image'

export function Avatar() {
  return (
    <Image
      src={'/profile.png'}
      alt={'Foto de perfil'}
      priority
      quality={100}
      width={200}
      height={200}
      className="w-52 h-52 self-center mx-auto rounded-full bg-zinc-200 border-4 border-zinc-200 shadow-lg object-cover"
    />
  )
}
