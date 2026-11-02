# Your AI, Your Kingdom, Someone Else's Keys?

Gartner IOCS 2026 talk by Jeroen van Erp, as a [Slidev](https://sli.dev) deck.
Converted from the [Google Slides original](https://docs.google.com/presentation/d/1NI-JNX1CxDFTqPKzREA6Z-CuxxvCQydN24UVJlkEThU/edit).

## Setup

Tools (bun, node) are managed with [mise](https://mise.jdx.dev):

```bash
mise install
bun install
```

## Usage

```bash
bun run dev      # present / live edit at http://localhost:3030
bun run build    # static site in dist/
bun run export   # PDF export (uses playwright-chromium)
```

## Layout

The canvas is 720×405 (`canvasWidth: 720`), the same size in px as the original
Google Slides deck in points, so positions and font sizes can be copied 1:1 from it.

- `slides.md`: the deck. The main talk comes first, then an Appendix with the backup slides.
- `layouts/`: `suse` (content slide with footer; frontmatter `tone: light | fog | dark`, `source:`), `suse-cover`, `brand`
- `components/At.vue`: absolutely positioned box (`<At :x :y :w :h>`), used for most slide elements
- `components/`: also the SUSE logo/footer, the sovereignty grid and levels, the lock-in hexagon, the VMware chart and lessons, and icons
- `style.css`: SUSE palette (Pine, Jungle, Mint, Waterhole, Persimmon, Fog) and base type
- `public/images/`: images extracted from the original deck
