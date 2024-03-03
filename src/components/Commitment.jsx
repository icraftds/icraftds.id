export default function Commitment({ i, title, text }) {
  return (
    <li class="flex items-center gap-12">
      <p class="font-serif text-4xl">{ i }</p>
      <figure>
        <figcaption class="text-2xl fw-medium">{ title }</figcaption>
        <p class="mt-2">{ text }</p>
      </figure>
    </li>
  )
}

