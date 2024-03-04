import clsx from "clsx";

export default function About() {
  return (
    <section
      id="about"
      class="mt-16 px-8 py-32 sm:px-16 bg-black text-gray-100"
    >
      <div class="mx-auto max-w-4xl grid grid-cols-8 gap-8">
        <h2
          class={clsx(
            "text-4xl fw-medium col-span-full tracking-wider flex gap-8",
            "sm:text-5xl"
          )}
        >
          <span>&gt;</span>
          <span><em>About</em></span>
        </h2>
        <div
          class={clsx(
            "flex flex-col gap-8 col-span-full text-xl leading-10",
            "sm:col-start-2 md:col-start-3 lg:col-start-4",
            "sm:(text-2xl leading-12)"
          )}
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
