// Instructor starter, drafted with OpenAI Codex: mount the Svelte application.
import { mount } from 'svelte';
import App from './App.svelte';
import './app.css';

const target = document.getElementById('app');
if (!target) throw new Error('Missing #app element');
mount(App, { target });
