import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  theme: {
    fontFamily: {
      handwriting: '"Caveat Variable", cursive',
      serif: '"Playfair Display Variable", serif',
      sans: '"DM Sans Variable", sans-serif',
    }
  }
})
