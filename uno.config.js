import { defineConfig, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  transformers: [
    transformerVariantGroup()
  ],
  theme: {
    fontFamily: {
      handwriting: '"Caveat Variable", cursive',
      serif: '"Playfair Display Variable", serif',
      sans: '"DM Sans Variable", sans-serif',
    }
  }
})
