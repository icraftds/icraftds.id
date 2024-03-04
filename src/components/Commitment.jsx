export default function Commitment({ i, title, text }) {
  return (
    <li class="flex items-center gap-8 sm:gap-12">
      <p class="font-serif text-2xl sm:text-4xl">{ i }</p>
      <figure>
        <figcaption class="text-xl sm:text-2xl fw-medium">{ title }</figcaption>
        <p class="mt-2">{ text }</p>
      </figure>
    </li>
  )
}

