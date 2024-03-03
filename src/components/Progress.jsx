import { m, useScroll, useSpring } from 'framer-motion'

export default function Progress() {
  const { scrollYProgress: progress } = useScroll()
  const spring = useSpring(progress, { stiffness: 300, damping: 50 })
  const onClick = (e) => {
    console.log(e)
  }

  return (
    <m.div
      class="fixed right-0 top-0 bottom-0 bg-black pl-2 m-1 backdrop-invert mix-blend-difference"
      style={{ scaleY: spring }}
      onClick={onClick}
    />
  )
}
