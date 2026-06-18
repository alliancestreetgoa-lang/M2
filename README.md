# Lithos — Hero Section

A full-screen, dark-themed hero for the geology brand **Lithos**, featuring a
cursor-following spotlight that reveals a second image through a soft circular
mask layered over a base image.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- lucide-react

## Signature feature

A `RevealLayer` paints a soft radial gradient onto a hidden `<canvas>` at the
eased cursor position, exports it as a data URL, and uses it as a CSS mask on a
second background image — so the reveal image is visible only inside the glowing
circle that trails the cursor.

## Development

```bash
npm install
npm run dev      # start the Vite dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```
