import Project from "@/components/Project"

export default function Projects() {
  const projects = [
    {
      i: 1,
      name: 'Hubin 13',
      src: 'hubin-13.webp',
      desc: 'Aplikasi web untuk membantu dalam pemetaan praktik kerja lapangan'
    },
    {
      i: 2,
      name: 'Simak PPDB',
      src: 'simak-ppdb.webp',
      desc: 'Landing page perusahaan PT. Satu Visi Kreasi Indonesia'
    },
    {
      i: 3,
      name: 'svknd.id',
      src: 'savikindo.webp',
      desc: 'Landing page produk PT. Satu Visi Kreasi Indonesia'
    },
  ]

  return (
    <section class="px-8 py-32 bg-gray-100">
      <div class="mx-auto max-w-6xl grid gap-16">
        <h2 class="fw-bold text-6xl">Proyek</h2>
        <ul class="grid grid-cols-2 gap-8">
          { projects.map((project) => <Project key={project.i} {...project} />)}
        </ul>
      </div>
    </section>
  )
}
