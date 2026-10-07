# MERV Consultora — sitio web

Next.js 16 (App Router, TypeScript) implementado a partir del mockup "Sitio web MERV Consultora".

```bash
npm install
cp .env.example .env.local   # WhatsApp, email, logo y backend de formularios
npm run dev                  # http://localhost:3000
```

## Estructura

- `src/app/page.tsx` — inicio: hero, caminos, búsquedas (filtro + buscador), carga de CV, empresas, sobre nosotros, contacto.
- `src/app/busquedas/[id]/page.tsx` — detalle de búsqueda + modal de postulación (prerenderizado por búsqueda).
- `src/lib/busquedas.ts` — **datos de ejemplo** de las búsquedas; reemplazar por el backend/panel.
- `src/lib/site.ts` — nombre, contacto, enlaces de WhatsApp y navegación.
- `src/lib/forms.ts` — validación y envío. Con `NEXT_PUBLIC_API_BASE` vacío los envíos se **simulan**;
  si se configura, hace `POST multipart` a `/candidatos`, `/postulaciones`, `/solicitudes-empresa` y `/contacto` (el PDF va en el campo `cv`).
- `src/app/globals.css` — tokens y estilos del diseño (colores, tipografías Sora + DM Sans, animaciones).

## Pendientes del diseño (placeholders)

Logo, foto del equipo/oficina, dirección, número de WhatsApp, correo, redes sociales y política de privacidad.
