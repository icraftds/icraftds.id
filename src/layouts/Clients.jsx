import Client from '@/components/Client'

export default function Clients() {
  const clients = [
    { name: 'PT. Bringin Karya Sejahtera', src: 'bks.png', url: 'bks.id' },
    { name: 'PT. Kereta Api Indonesia', src: 'kai.png', url: 'kai.id' },
    { name: 'PT. Charis Perkasa Amarta', src: 'charis_perkasa_amarta.jpg', url: null },
    { name: 'PT. Pratama Handika Sukses', src: 'prahansu.png', url: 'prahansu.com' },
    { name: 'PT. Satu Visi Kreasi Indonesia', src: 'savikindo.png', url: 'savikindo.co.id' },
  ]
  return (
    <section class="p-32 grid gap-16">
      <h1 class="font-sans fw-bold text-5xl text-center">Client Kami</h1>
      <div class="flex flex-wrap justify-center gap-8">
        { clients.map((client) => <Client {...client} />)}
      </div>
    </section>
  )
}
