'use client'
import Image from "next/image"
export default function Header() {
  return (
    <header className="fixed w-full z-50 top-0 backdrop-blur border-b border-zinc-800 bg-white/70 dark:bg-zinc-900/70 px-8 py-4 flex justify-between items-center">

      <div className="text-xl font-bold tracking-tight flex flex-nowrap">
        {/* <Image
          src="https://firebasestorage.googleapis.com/v0/b/my-profile-95716.firebasestorage.app/o/dev_closing_tag_logo.svg?alt=media&token=7ab67a8a-69c5-4fce-88e0-1d356fec7375"
          alt="Tshidiso Modiko"
          width={160}
          height={160}
          className="h-12 w-12 text-black dark:text-zinc-200 px-2"
        /> */}
        <span className='flex items-center'> 
           Tshidiso Modiko
        </span>
      </div>
      <nav className="space-x-6 text-sm hidden md:flex">
        {['Projects', 'Skills', 'About', 'Contact'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:underline">
            {link}
          </a>
        ))}
      </nav>
    </header>
  )
}