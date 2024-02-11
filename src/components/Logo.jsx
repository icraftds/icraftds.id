import { m } from 'framer-motion'

export default function Logo() {
  const initial = { opacity: 0, y: -200 }
  const animate = { opacity: 1, y: 0 }

  const transition = (delay) => ({
    delay: delay + 1
  })

  const style = (fill) => ({
    paintOrder: 'stroke',
    fill
  })

  return (
    <svg
      class="w-64 h-64"
      viewBox="0 -60 60.438 285.85"
      xmlns="http://www.w3.org/2000/svg"
    >
      <m.polygon
        initial={initial}
        animate={animate}
        transition={transition(0)}
        style={style('#70aece')}
        points="25.077 0 24.855 130.117 47.722 118.631 47.643 13.15"
        />
      <m.polygon
        initial={initial}
        animate={animate}
        transition={transition(0.1)}
        style={style('#22485f')}
        points="0.222 10.211 0 140.328 22.867 128.842 22.788 23.361"
        />
      <m.polygon
        initial={initial}
        animate={animate}
        transition={transition(0.05)}
        style={style('#5e8ca4')}
        points="11.529 35.733 11.307 165.85 34.174 154.364 34.095 48.883"
        />
      <m.polygon
        initial={initial}
        animate={animate}
        transition={transition(0.15)}
        style={style('#4499b3')}
        points="37.793 16.794 37.571 146.911 60.438 135.425 60.359 29.944"
        />
    </svg>

  )
}
