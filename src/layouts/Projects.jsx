import Project from "@/components/Project"

export default function Projects() {
  const projects = [
    {
      name: 'Hubin 13',
      src: 'hubin-13.webp',
      desc: 'Aplikasi web untuk membantu dalam pemetaan praktik kerja lapangan'
    },
    {
      name: 'svknd.id',
      src: 'savikindo.webp',
      desc: 'Landing page perusahaan PT. Satu Visi Kreasi Indonesia'
    },
    {
      name: 'Simak PPDB',
      src: 'simak-ppdb.webp',
      desc: 'Landing page produk PT. Satu Visi Kreasi Indonesia'
    },
    {
      name: 'Simak Monitoring',
      src: 'simak-monitoring.webp',
      desc: 'Landing page produk PT. Satu Visi Kreasi Indonesia'
    },
  ]

  return (
    <section class="px-8 py-32 bg-gray-100">
      <div class="mx-auto max-w-6xl grid gap-16">
        <h2 class="fw-bold text-6xl">Proyek</h2>
        <ul class="grid grid-cols-2 gap-8">
          { projects.map((project, i) => <Project key={i} i={i+1} {...project} />)}
        </ul>
      </div>
    </section>
  )
}
