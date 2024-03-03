import Link from "@/components/Link";

export default function Contact() {
  return (
    <section class="mx-auto my-32 px-8 max-w-4xl">
      <div class="p-16 bg-black text-gray-100 text-center grid gap-8 rounded-lt-xl rounded-rb-xl">
        <h2 class="text-4xl fw-medium">HUBUNGI KAMI</h2>
        <p class="text-xl">
          Diskusikan alur kerja sistem yang ingin Anda buat, lalu kami akan
          memberikan solusi yang dapat Anda terima.
        </p>
        <ul class="mx-auto mt-8 flex gap-8">
          <li>
            <Link href="https://wa.me/628999492334">E-mail</Link>
          </li>
          <li>
            <Link href="https://wa.me/628999492334">WhatsApp</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
