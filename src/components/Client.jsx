import clsx from "clsx";

export default function Client({ src, name, url }) {
  return (
    <div class="sm:relative group italic">
      <img
        class="m-2 w-48 aspect-video object-contain select-none"
        src={`./clients/${src}`}
        alt={`Logo ${name}`}
      />
      <a
        class={clsx(
          'sm:absolute bg-white/75 flex items-center justify-center inset-0',
          'mt-4 sm:mt-0 text-center underline underline-1 underline-offset-2',
          'transition-opacity,transform sm:opacity-0 sm:translate-y-8',
          'group-hover:opacity-100 group-hover:translate-y-0',
        )}
        href={url && 'https://' + url}
      >
        { name }
      </a>
    </div>
  )
}
