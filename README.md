# Matías Tapia · Portfolio

Portfolio profesional de una página con estética Lo-Fi Tech. Construido con React, Vite, TypeScript estricto, Tailwind CSS, Motion, Lucide React, marcas de Simple Icons y fuentes locales de Fontsource. No requiere backend.

## Requisitos

- Node.js 20.19 o posterior (recomendado: 24)
- npm

## Desarrollo

```bash
npm ci
npm run dev
```

Comprobaciones y compilación:

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run preview
```

`npm run build` compila la aplicación, genera HTML prerenderizado e incluye JSON-LD. Si `SITE_URL` está configurado, también genera canonical, URL de Open Graph y sitemap.

## Contenido y datos pendientes

Edita `src/data/profile.ts` para actualizar nombre, perfil y enlaces. Correo, GitHub, LinkedIn y CV son campos opcionales: las acciones correspondientes se ocultan si valen `null`. Para el CV, coloca el archivo en `public/documents/` y configura `cv: import.meta.env.BASE_URL + 'documents/cv.pdf'` (ajusta el nombre del archivo), o usa una URL absoluta. El período de Volta Ingeniería se añadirá en `src/data/experience.ts` cuando se confirme. Las experiencias, tecnologías, estudios y casos están en sus respectivos archivos de `src/data/`.

La terminal es una simulación local con comandos permitidos (`whoami`, `skills`, `education`, `experience`, `contact`, `help`, `clear`). No ejecuta comandos del sistema ni hace solicitudes a un servidor.

## Publicación en GitHub Pages

1. Crea un repositorio remoto para esta carpeta y súbelo a la rama `main`.
2. En GitHub, abre **Settings → Pages → Build and deployment** y elige **GitHub Actions** como fuente.
3. El workflow `.github/workflows/deploy.yml` instala con `npm ci`, verifica ESLint y TypeScript, compila y despliega `dist`.
4. De forma predeterminada, el workflow calcula `SITE_URL` y `BASE_PATH` desde el propietario y el nombre del repositorio. Para un repositorio de proyecto se usa `https://USUARIO.github.io/REPO/` y base `/REPO/`; para `USUARIO.github.io` se usa la raíz.

Para un dominio propio, configúralo también en **Settings → Pages** y en DNS según las indicaciones de GitHub. Define en **Settings → Secrets and variables → Actions → Variables**:

| Variable    | Valor                                                     |
| ----------- | --------------------------------------------------------- |
| `SITE_URL`  | URL pública definitiva, por ejemplo `https://ejemplo.cl/` |
| `BASE_PATH` | `/` para un dominio en la raíz                            |

Si utilizas un dominio con ruta, ajusta `BASE_PATH` a esa ruta. En compilaciones locales sin `SITE_URL`, se omiten canonical y sitemap para evitar URLs ficticias. La aplicación usa anclas y no necesita React Router.

## Estructura

- `src/data/`: contenido profesional editable y tipado.
- `src/components/sections/`: secciones de la página.
- `src/components/ui/`: terminal, tarjetas, modal, navegación auxiliar y piezas reutilizables.
- `src/components/illustrations/`: diagramas SVG originales.
- `src/hooks/`: tema, terminal, sección activa y preferencia de movimiento.
- `src/styles/`: tokens semánticos y estilos globales.
- `scripts/prerender.mjs`: prerender y archivos SEO.

## Accesibilidad

El sitio ofrece enlace para saltar al contenido, navegación por teclado, indicadores de foco, menú móvil, modales con Escape y recuperación del foco, y adaptación a `prefers-reduced-motion`. El tema oscuro es el predeterminado y la preferencia manual se guarda localmente.
