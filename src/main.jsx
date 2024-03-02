import { render } from 'preact'
import ReactLenis from '@studio-freight/react-lenis'
import App from './app'
import '@/assets/style.css'
import '@fontsource-variable/caveat'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/playfair-display'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const Main = () => (
  <ReactLenis root>
    <App />
  </ReactLenis>
)

render(<Main />, document.getElementById('app'))
