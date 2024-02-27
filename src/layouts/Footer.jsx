export default function Footer() {
  return (
    <footer class="m-8 p-16 font-sans grid gap-8">
      <img
        class="max-h-32"
        src="/icraft.png"
        alt="Logo iCraft Digital Services"
      />
      <div class="grid grid-cols-4">
        <span class="text-lg fw-bold">Hubungi Kami</span>
        <ul class="flex gap-8 col-span-3">
          <li>
            <a
              class="b-b-1 b-transparent hover:b-black"
              href="wa.me/62123456789"
            >
              +62 123 456 789
            </a>
          </li>
          <li>
            <a
              class="b-b-1 b-transparent hover:b-black"
              href="mail:icraft.ds@gmail.com"
            >
              icraft.ds@gmail.com
            </a>
          </li>
        </ul>
        <span class="text-lg fw-bold">Alamat</span>
        <ul class="flex gap-8">
          <li>
            <a
              class="b-b-1 b-transparent hover:b-black"
              href="wa.me/62123456789"
            >
              Jalan Cibiru Kanayakan Lama, Bogor, Dago Selatan, Jawa Barat, Indonesia
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <p class="text-end text-sm italic">
        <em>iCraft Digital Services &copy; 2024</em>
      </p>
    </footer>
  )
}
