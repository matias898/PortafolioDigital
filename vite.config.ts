import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { profile } from './src/data/profile.ts';

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ??
      character,
  );
}

const metadata = {
  __PROFILE_NAME__: profile.name,
  __PROFILE_ROLE__: profile.role,
  __PROFILE_DESCRIPTION__: profile.seoDescription,
  __PROFILE_HEADLINE__: profile.headline,
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: env.BASE_PATH || '/',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'profile-metadata',
        transformIndexHtml(html) {
          return Object.entries(metadata).reduce(
            (result, [token, value]) => result.replaceAll(token, escapeHtml(value)),
            html,
          );
        },
      },
    ],
    build: { target: 'es2022' },
  };
});
