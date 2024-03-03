export default function Project({ i, name, src, desc }) {
  return (
    <li class="list-none bg-white shadow-lg rounded even:mt-16 even:-mb-16">
      <h3 class="px-8 py-4 flex justify-between">
        <span>{ `${i}`.padStart(2, '0') }</span>
        <span class="italic">{ name }</span>
      </h3>
      <img
        class="object-cover aspect-video"
        src={`./projects/${src}`}
        alt={`${name} screenshot`}
      />
      <p
        class="px-8 py-4 fw-medium text-center text-lg"
        children={desc}
      />
    </li>
  )
}
