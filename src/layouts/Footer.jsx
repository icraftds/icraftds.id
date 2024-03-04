import { useLenis } from "@studio-freight/react-lenis"
import clsx from "clsx"

function Link({ children, href }) {
  return (
    <li class="group py-4 md:py-0">
      <a
        class={clsx(
          "px-8 py-4 b-r-0 b-b-2 text-2xl underline-0 underline-offset-2",
          "group-last:(b-r-0 b-b-0)",
          "md:(py-0 b-r-2 b-b-0 underline underline-1)"
        )}
        href={href}
      >
        { children }
      </a>
    </li>
  )
}

export default function Footer() {
  const lenis = useLenis()
  const scrollTop = (e) => {
    e.preventDefault()
    lenis.scrollTo('#top', { duration: 3 })
  }

  return (
    <footer
      class={clsx(
        "px-8 py-16 grid gap-8 bg-black text-(gray-100 center)",
        "sm:(px-16)"
      )}
    >
      <h2 class="text-3xl sm:text-4xl fw-bold">HUBUNGI KAMI</h2>
      <p class="mx-auto text-lg max-w-2xl md:(text-xl)">
        Diskusikan alur kerja sistem yang ingin Anda buat, lalu kami akan
        memberikan solusi yang dapat Anda terima.
      </p>
      <ul class="mx-auto flex flex-col md:flex-row gap-0">
        <Link href="https://wa.me/6285174264123">WhatsApp</Link>
        <Link href="https://instagram.com/icraft.ds">Instagram</Link>
        <Link href="mailto:icraft.digitals@gmail.com">Email</Link>
      </ul>
      <div class="mx-auto max-w-md">
        <p class="fw-medium text-sm sm:text-base">Alamat Kantor</p>
        <a
          class="underline underline-1 underline-offset-2 text-xs sm:text-sm"
          href="https://maps.app.goo.gl/k2oQJEFWfAhYGYff7"
        >
          Jl. Mitra Sejati Raya C2 No.6, Cinunuk, Kec. Cileunyi,
          Kab. Bandung, Jawa Barat 40624
        </a>
      </div>
      <hr class="my-4" />
      <div class="flex justify-between text-xs sm:text-sm">
        <p class="italic">
          <em>iCraft Digital Services &copy; 2024</em>
        </p>
        <a
          class="underline underline-offset-2"
          href="#top"
          onClick={scrollTop}
        >
          Scroll To Top
        </a>
      </div>
    </footer>
  )
}
