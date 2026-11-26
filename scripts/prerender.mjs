import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const { render, profile } = await import(pathToFileURL(resolve('.prerender/entry-server.js')).href);
const htmlPath = resolve('dist/index.html');
const html = await readFile(htmlPath, 'utf8');
const content = render();
const rawUrl = process.env.SITE_URL?.trim();
const siteUrl = rawUrl ? new URL(rawUrl.endsWith('/') ? rawUrl : `${rawUrl}/`) : null;
if (siteUrl && !['https:', 'http:'].includes(siteUrl.protocol))
  throw new Error('SITE_URL debe usar http o https.');

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  homeLocation: { '@type': 'Country', name: profile.location },
  alumniOf: { '@type': 'CollegeOrUniversity', name: profile.university },
  ...(siteUrl ? { url: siteUrl.href } : {}),
  ...(profile.email ? { email: profile.email } : {}),
  ...([profile.github, profile.linkedin].filter(Boolean).length
    ? { sameAs: [profile.github, profile.linkedin].filter(Boolean) }
    : {}),
};

const seo = [
  siteUrl ? `<link rel="canonical" href="${siteUrl.href}" />` : '',
  siteUrl ? `<meta property="og:url" content="${siteUrl.href}" />` : '',
  `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\\u003c')}</script>`,
]
  .filter(Boolean)
  .join('\n    ');

if (!html.includes('<div id="root"></div>'))
  throw new Error('No se encontró la raíz de React en dist/index.html.');
const output = html
  .replace('<div id="root"></div>', `<div id="root">${content}</div>`)
  .replace('</head>', `    ${seo}\n  </head>`);
await writeFile(htmlPath, output);

let robots = 'User-agent: *\nAllow: /\n';
if (siteUrl) {
  await writeFile(
    resolve('dist/sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl.href}</loc></url></urlset>\n`,
  );
  robots += `Sitemap: ${new URL('sitemap.xml', siteUrl).href}\n`;
}
await writeFile(resolve('dist/robots.txt'), robots);
console.log(`Prerender listo${siteUrl ? ` para ${siteUrl.href}` : ' (URL pública pendiente)'}.`);
