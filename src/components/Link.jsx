import clsx from "clsx";

export default function Link({ children, href }) {
  return (
    <a
      class={clsx(
        "px-8 py-4 bg-black ring-1 ring-gray-100 transition",
        "hover:bg-white hover:text-black hover:ring-3"
      )}
      href={href}
    >
      { children }
    </a>
  )
}
