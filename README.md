# Old Crow Coffee Company

Responsive, dependency-free website for Old Crow Coffee Company in Springfield, Oregon.

## Run locally

Requires Node.js. No package installation is needed.

```sh
npm run dev
```

Open http://localhost:3000. Public website files are in `dist/`.

```sh
npm run check
```

## Features

- Responsive warm coffeehouse design and mobile swipe slider
- Transparent brand logo and interactive crow flight, with reduced-motion support
- Business address, hours, and email supplied by the owner
- Full menu page at `/menu` (`dist/menu.html`), linked from the main navigation
- Working QR code (`dist/menu-qr.svg`) that points to https://oldcrowcoffee.vercel.app/menu

To change menu items, edit `dist/menu.html`. If the site domain changes, regenerate the QR code (for example with the Python `segno` package) for the new `/menu` URL.

## Deployment

Vercel serves `dist/` and runs `npm run check`, as configured in `vercel.json`.
The current live site is https://oldcrowcoffee.vercel.app.
Vercel account linking and credentials are not committed.

## Assets and attribution

The owner supplied the original logo in `dist/oldcrow.jpg`. The site uses the restored transparent version, `dist/oldcrow-transparent.png`, and separate bird/emblem layers. The Python asset scripts require Pillow and NumPy; they are not needed to run the website. Draft images are retained as inputs to the restoration scripts.

The coffee photograph is illustrative stock, not a photograph of the business or its products. Photo by Syauqy Ayyash: https://unsplash.com/photos/a-cup-of-coffee-on-a-saucer-on-a-black-table-S-ACh5HiDNE . Fonts and the photograph load from external services.

The airborne animation is a transparent, stabilized silhouette extracted from 36 frames of the user-supplied Tenor reference: https://tenor.com/view/epix-from-epix-crow-epix-from-gif-25283470 . `build_natural_flight.py` creates `dist/crow-natural-flight.webp` from `crow-flight-reference.gif`. The detailed logo crow remains visible while perched and transitions into the silhouette during flight.
