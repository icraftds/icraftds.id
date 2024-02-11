import { LazyMotion } from 'framer-motion'
import Loader from './components/Loader'

const features = () => import('@/utils/framer').then((i) => i.default)

export default function App() {
  return (
    <LazyMotion features={features} strict>
      <Loader />
    </LazyMotion>
  )
}
