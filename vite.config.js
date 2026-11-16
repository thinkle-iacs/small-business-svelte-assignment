// Instructor starter, drafted with OpenAI Codex: configure Svelte and relative asset URLs for Pages.
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: './',
});
