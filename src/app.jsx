import { LazyMotion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/layouts/About'
import Footer from '@/layouts/Footer'
import Clients from './layouts/Clients'
import Commitments from './layouts/Commitments'
import Progress from './components/Progress'
import Projects from './layouts/Projects'

const features = () => import('@/utils/framer').then((i) => i.default)

export default function App() {
  return (
    <LazyMotion features={features} strict>
      <Progress />
      <Hero />
      <About />
      <Commitments />
      <Clients />
      <Projects />
      <Footer />
    </LazyMotion>
  )
}
