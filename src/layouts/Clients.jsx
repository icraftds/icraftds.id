import Client from '@/components/Client'
import clsx from 'clsx'

export default function Clients() {
  const clients = [
    { name: 'PT. Bringin Karya Sejahtera', src: 'bks.png', url: 'bks.id' },
    { name: 'PT. Kereta Api Indonesia', src: 'kai.png', url: 'kai.id' },
    { name: 'PT. Charis Perkasa Amarta', src: 'charis.png', url: null },
    { name: 'PT. Pratama Handika Sukses', src: 'prahansu.png', url: 'prahansu.com' },
    { name: 'PT. Satu Visi Kreasi Indonesia', src: 'savikindo.png', url: 'savikindo.co.id' },
  ]

  return (
    <section class="px-8 py-16 sm:(px-16 py-32 gap-16) md:px-32 grid gap-8">
      <h2 class="fw-bold text-4xl md:text-5xl text-center">Client Kami</h2>
      <div
        class={clsx(
          "flex flex-wrap flex-col items-center justify-center gap-4",
          "sm:(flex-row gap-8) md:gap-16"
        )}
      >
        { clients.map((client) => <Client {...client} />)}
      </div>
    </section>
  )
}
