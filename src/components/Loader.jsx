import { m } from 'framer-motion'
import Logo from "./Logo";
import { useAnimate } from 'framer-motion';

export default function Loader() {
  const [scope, animate] = useAnimate()

  return (
    <div class="relative w-screen h-screen flex justify-center items-center bg-white">
      <m.div
        class="absolute"
        initial={{ scale: 2.5 }}
        animate={{ scale: 1.5, x: -125 }}
        transition={{ delay: 2 }}
      >
        <Logo />
      </m.div>
      <m.h1
        class="absolute fw-bold text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 75 }}
        transition={{ delay: 2 }}
      >
        icadgaming
      </m.h1>
      <m.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 2.5, duration: 2 }}
        class="absolute bottom-16 w-16 animate-bounce"
        src="/chevron-down.svg"
        />
    </div>
  )
}
