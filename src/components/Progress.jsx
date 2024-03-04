import clsx from 'clsx'
import { m, useScroll, useSpring } from 'framer-motion'

export default function Progress() {
  const { scrollYProgress: progress } = useScroll()
  const spring = useSpring(progress, { stiffness: 300, damping: 50 })

  return (
    <m.div
      class={clsx(
        "fixed right-0 top-0 bottom-0 bg-black pl-1 md:pl-2 m-0 sm:m-1",
        "backdrop-invert mix-blend-difference"
      )}
      style={{ scaleY: spring }}
    />
  )
}
