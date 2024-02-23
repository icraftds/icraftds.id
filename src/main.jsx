import ReactLenis from '@studio-freight/react-lenis'
import { render } from 'preact'
import App from './app'
import '@unocss/reset/tailwind.css'
import '@fontsource-variable/caveat'
import '@fontsource-variable/playfair-display'
import 'virtual:uno.css'

const Main = () => (
  <ReactLenis root>
    <App />
  </ReactLenis>
)

render(<Main />, document.getElementById('app'))
