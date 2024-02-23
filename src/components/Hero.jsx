import { m } from 'framer-motion'
import Logo from "./Logo";

export default function Hero() {
  return (
    <div class="sticky top-0 h-screen flex justify-center items-center bg-white">
      <m.div
        initial={{ scale: 2.5 }}
        animate={{ scale: 1.5, x: -100 }}
        transition={{ delay: 1 }}
      >
        <Logo />
      </m.div>
      <m.div
        class="absolute text-[#6099aa]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 50 }}
        transition={{ delay: 1 }}
      >
        <h1 class="text-6xl">
          <span class="font-serif">i</span>Craft
        </h1>
        <h2 class="font-mono fw-thin text-xl">Digital Services</h2>
      </m.div>
      <m.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1.5, duration: 2 }}
        class="absolute bottom-16 w-16 animate-bounce"
        src="/chevron-down.svg"
        />
    </div>
  )
}
