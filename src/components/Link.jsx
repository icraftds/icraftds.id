export default function Link({ children, href }) {
  return (
    <li class="group">
      <a
        class="text-2xl underline underline-1 underline-offset-2 px-8 b-r-2 group-last:b-r-0"
        href={href}
      >
        { children }
      </a>
    </li>
  )
}
