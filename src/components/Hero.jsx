import { m } from 'framer-motion'
import Logo from "./Logo";
import { useLenis } from '@studio-freight/react-lenis';

export default function Hero() {
  const lenis = useLenis()

  return (
    <div class="pb-16 h-[100svh] flex justify-center items-center bg-white">
      <m.div
        initial={{ scale: 2.5 }}
        animate={{ scale: 1.5, x: -96, y: -32 }}
        transition={{ delay: 1 }}
      >
        <Logo />
      </m.div>
      <m.div
        class="absolute text-[#6099aa]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 48, y: -32 }}
        transition={{ delay: 1 }}
      >
        <h1 class="text-6xl">
          <span class="font-serif">i</span>Craft
        </h1>
        <h2 class="font-mono fw-thin text-xl">Digital Services</h2>
      </m.div>
      <m.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        class="font-handwriting absolute bottom-64 text-4xl"
      >
        Layanan IT solusi bisnis publik!
      </m.span>
      <m.img
        class="absolute bottom-16 w-16 animate-bounce cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1.5, duration: 2 }}
        src="/chevron-down.svg"
        onClick={() => lenis.scrollTo('#about', { duration: 1.5, offset: -64 })}
      />
    </div>
  )
}
