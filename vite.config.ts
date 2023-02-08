import React from '@vitejs/plugin-react';
import path from 'path';
import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-react-components/vite';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    React({
      include: [/\.tsx?$/, /\.mdx?$/],
    }),

    Components({
      dts: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['tsx', 'mdx'],
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['react', 'react-router-dom'],
      include: [/\.[tj]sx?$/, /\.mdx?$/],
      dts: true,

      dirs: ['src/hooks'],
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      configFile: 'unocss.config.ts',
    }),
  ],
});
