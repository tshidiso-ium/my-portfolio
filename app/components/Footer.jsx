import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="py-6 mt-12 border-t border-zinc-800 text-xs text-zinc-400">
      <div className="flex flex-col items-center gap-3 md:gap-4">
        <span className="text-center">
          &copy; {new Date().getFullYear()} Tshidiso Modiko • Built with Next.js and Tailwind CSS
        </span>

        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/tshidiso-ium"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 hover:text-black  hover:scale-110 transition-transform"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tshidiso_dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 hover:text-pink-400 hover:scale-110 transition-transform"
          >
            <FaInstagram className="h-5 w-5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tshidiso-modiko-a63400212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 hover:text-sky-400 hover:scale-110 transition-transform"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/27711572045" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 hover:text-green-400 hover:scale-110 transition-transform"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>

          {/* Fiverr */}
          <a
            href="https://www.fiverr.com/tshidiso_modiko"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 hover:text-emerald-400 hover:scale-110 transition-transform"
          >
            <SiFiverr className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
