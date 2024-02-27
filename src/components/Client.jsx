import clsx from "clsx";

export default function Client({ src, name, url }) {
  return (
    <div class="relative group font-sans italic">
      <img
        class="m-2 h-24 w-64 object-contain select-none"
        src={src}
        alt={`Logo ${name}`}
      />
      <a
        class={clsx(
          'absolute bg-white/25 flex items-center justify-center inset-0',
          'transition-opacity,transform opacity-0 translate-y-8 backdrop-blur-sm',
          'group-hover:opacity-100 group-hover:translate-y-0'
        )}
        href={url ?? ''}
      >
        { name }
      </a>
    </div>
  )
}
