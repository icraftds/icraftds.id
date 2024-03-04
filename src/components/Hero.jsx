import { m } from 'framer-motion'
import Logo from "./Logo";
import { useLenis } from '@studio-freight/react-lenis';

export default function Hero() {
  const lenis = useLenis()

  return (
    <section
      id="top"
      class="pb-16 h-[100svh] flex justify-center items-center bg-white"
    >
      <m.div
        initial={{ scale: 2.5 }}
        animate={{ scale: 1.5, x: -96, y: -32 }}
        transition={{ delay: 1 }}
      >
        <Logo />
      </m.div>
      <m.div
        class="absolute mr-4 sm:mr-0 text-[#6099aa]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 48, y: -32 }}
        transition={{ delay: 1 }}
      >
        <h1 class="text-5xl sm:text-6xl">
          <span class="font-serif">i</span>Craft
        </h1>
        <h2 class="font-mono fw-thin text-lg sm:text-xl">Digital Services</h2>
      </m.div>
      <m.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        class="mx-8 text-center font-handwriting absolute bottom-64 text-3xl sm:text-4xl"
      >
        Layanan IT solusi bisnis publik!
      </m.h2>
      <m.img
        class="absolute bottom-16 w-12 sm:w-16 animate-bounce cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1.5, duration: 2 }}
        src="/chevron-down.svg"
        onClick={() => lenis.scrollTo('#about', { duration: 1.5 })}
      />
    </section>
  )
}
