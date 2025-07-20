import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row gap-12 md:gap-6 lg:gap-0 justify-between items-center container w-full max-w-[92%] px-12 py-24 mx-auto">
      <Link
        href="mailto:broken.contact.1211@gmail.com"
        className="font-display flex items-center gap-2 text-4xl text-white hover:text-gray-hover transition-all duration-150 ease-in-out-def"
      >
        SEND AN EMAIL <ArrowUpRightIcon className="w-10 h-10" />
      </Link>
      <div className="flex gap-12 text-white underline underline-offset-2">
        <Link
          href="https://x.com/TheBroken_XD"
          target="_blank"
          className="hover:text-gray-hover transition-all duration-150 ease-in-out-def"
        >
          Twitter
        </Link>
        <Link
          href="https://www.instagram.com/thebroken_xd/"
          target="_blank"
          className="hover:text-gray-hover transition-all duration-150 ease-in-out-def"
        >
          Instagram
        </Link>
        <Link
          href="https://discordapp.com/users/846291281746329601"
          target="_blank"
          className="hover:text-gray-hover transition-all duration-150 ease-in-out-def"
        >
          Discord
        </Link>
        <Link
          href="https://github.com/whonoahexe"
          target="_blank"
          className="hover:text-gray-hover transition-all duration-150 ease-in-out-def"
        >
          Github
        </Link>
      </div>
    </footer>
  )
}

export default Footer
