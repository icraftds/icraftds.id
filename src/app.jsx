import { LazyMotion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/layouts/About'
import Footer from '@/layouts/Footer'
import Clients from './layouts/Clients'
import Commitments from './layouts/Commitments'
import Contact from './layouts/Contact'

const features = () => import('@/utils/framer').then((i) => i.default)

export default function App() {
  return (
    <LazyMotion features={features} strict>
      <Hero />
      <About />
      <Commitments />
      <Clients />
      <Contact />
      <Footer />
    </LazyMotion>
  )
}
