export default function About() {
  return (
    <section
      id="about"
      class="my-16 px-16 py-32 bg-gray-100"
    >
      <div class="mx-auto max-w-7xl grid grid-cols-8 gap-16">
        <h2
          class="text-4xl fw-medium col-span-full tracking-wider flex gap-8"
        >
          <span>&gt;</span>
          <span><em>About</em></span>
          <span class="relative w-32 h-0.5 bg-black self-center" />
        </h2>
        <div
          class="flex flex-col gap-8 col-start-4 col-span-full text-2xl leading-12"
        >
          <p>
            Kami adalah perusahaan IT yang terpusat di Kota Bandung, berdiri sejak
            tanggal 14 Januari 2023.
          </p>
          <p>
            Dengan melayani layanan digital berupa pembuatan
            aplikasi perangkat lunak yang terintegrasi sehingga membuat proses bisnis
            menjadi mudah.
          </p>
        </div>
      </div>
    </section>
  )
}
