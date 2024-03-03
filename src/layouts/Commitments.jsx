import Commitment from '@/components/Commitment'

export default function Commitments() {
  const commitments = [
    {
      title: 'Innovative',
      text: 'Kami akan berinovasi terhadap produk yang akan dibuat',
    },
    {
      title: 'Creative',
      text: 'Kami akan berkreasi terhadap produk yang akan dibuat',
    },
    {
      title: 'Responsible',
      text: 'Kami akan bertanggung jawab terhadap produk yang akan dibuat',
    },
    {
      title: 'Accurate',
      text: 'Kami akan membuat produk yang sesuai dengan keinginan',
    },
    {
      title: 'Facilitative',
      text: 'Sistem yang kami buat sudah teroptimisasi sehingga cepat saat dijalankan',
    },
    {
      title: 'Trustworthy',
      text: 'Kami terpercaya dalam menyajikan proses bisnis yang dibangun',
    },
  ]

  return (
    <section
      id="commitments"
      class="py-32 px-8 bg-gray-100"
    >
      <div class="mx-auto max-w-4xl grid grid-cols-8">
        <aside class="col-span-3 flex flex-col gap-2 sticky top-[40svh] self-start">
          <h2 class="font-serif fw-medium text-6xl">Pilar</h2>
          <p class="italic">Our commitments</p>
        </aside>
        <ol class="col-span-5 flex flex-col gap-6">
          { commitments.map((e, i) => <Commitment key={i} i={i+1} {...e} />)}
        </ol>
      </div>
    </section>
  )
}
