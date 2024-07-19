import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin = {
  registerType: 'prompt' as const,
  includeAssets: [
    'favicon.ico',           // Include favicon
    'apple-touch-icon.png',  // Include apple touch icon
    'masked-icon.svg',       // Include masked icon
  ],
  manifest: {
    name: 'Castar Joke App',
    short_name: 'Castar web/app template',
    description: 'Castar Portfolio App',
    icons: [
      {
        src: './src/assets/img/dong.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      }

    ],
    theme_color: '#141e27',
    background_color: '#141e27',
    orientation: 'portrait',
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin as Partial<VitePWAOptions>)],
});
