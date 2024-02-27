import { LazyMotion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/layouts/About'
import Footer from '@/layouts/Footer'
import Clients from './layouts/Clients'

const features = () => import('@/utils/framer').then((i) => i.default)

export default function App() {
  return (
    <LazyMotion features={features} strict>
      <Hero />
      <About />
      <Clients />
      <Footer />
    </LazyMotion>
  )
}
