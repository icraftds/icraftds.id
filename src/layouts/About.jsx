import { useLenis } from '@studio-freight/react-lenis'
import { m, useInView } from 'framer-motion'
import { useRef } from 'preact/hooks'

export default function About() {
  const lenis = useLenis()
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 1 })
  const onClick = () => !inView && lenis.scrollTo('#about', { duration: 2 })

  return (
    <div class="-mt-16">
      <m.div
        class="relative h-16 cursor-pointer bg-black rounded-t-16"
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={onClick}
      />
      <m.section
        ref={ref}
        id="about"
        class="relative px-8 py-32 h-[100svh] bg-black"
      >
        <p class="m-auto text-center max-w-2xl font-serif text-white text-5xl leading-14">
          Kami adalah perusahaan IT yang terpusat di Kota Bandung, berdiri sejak
          tanggal 14 Januari 2023 dengan melayani layanan digital berupa pembuatan
          aplikasi perangkat lunak yang terintegrasi sehingga membuat proses bisnis
          menjadi mudah.
        </p>
      </m.section>
    </div>
  )
}
