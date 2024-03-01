export default function Commitment({ i, title, text }) {
  return (
    <li class="flex gap-8">
      <p class="font-serif text-4xl">{ i }</p>
      <div class="">
        <h3 class="font-sans text-2xl fw-medium">{ title }</h3>
        <p>{ text }</p>
      </div>
    </li>
  )
}

