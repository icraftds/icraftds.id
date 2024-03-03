import Link from "@/components/Link"
import { useLenis } from "@studio-freight/react-lenis"

export default function Footer() {
  const lenis = useLenis()
  const scrollTop = (e) => {
    e.preventDefault()
    lenis.scrollTo('#top', { duration: 3 })
  }

  return (
    <footer class="px-32 py-16 grid gap-8 bg-black text-gray-100 text-center">
      <h2 class="text-4xl fw-bold">HUBUNGI KAMI</h2>
      <p class="mx-auto text-xl max-w-2xl">
        Diskusikan alur kerja sistem yang ingin Anda buat, lalu kami akan
        memberikan solusi yang dapat Anda terima.
      </p>
      <ul class="mx-auto flex">
        <Link href="https://wa.me/628999492334">WhatsApp</Link>
        <Link href="https://wa.me/628999492334">Instagram</Link>
        <Link href="https://wa.me/628999492334">Email</Link>
      </ul>
      <div class="mx-auto text-sm">
        <p class="fw-medium">Alamat Kantor</p>
        <a
          class="underline underline-1 underline-offset-2"
          href="https://map.com"
        >
          Jalan Cibiru Kanayakan Lama, Bogor, Dago Selatan, Jawa Barat, Indonesia
        </a>
      </div>
      <hr class="my-4" />
      <div class="flex justify-between text-sm">
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
