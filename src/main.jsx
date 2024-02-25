import '@fontsource-variable/caveat'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/playfair-display'
import ReactLenis from '@studio-freight/react-lenis'
import '@unocss/reset/tailwind.css'
import { render } from 'preact'
import 'virtual:uno.css'
import App from './app'

const Main = () => (
  <ReactLenis root>
    <App />
  </ReactLenis>
)

render(<Main />, document.getElementById('app'))
