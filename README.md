# Slides

Jeroen van Erp's [Slidev](https://sli.dev) decks in one repository, published to
<https://hierynomus.github.io/slides/>.

| Deck | Event(s) |
|---|---|
| [`mystery-meat`](decks/mystery-meat) | Cloud Native London, WeAreDevelopers NA, KubeCon NA |
| [`cnds-norway-2026`](decks/cnds-norway-2026) | Cloud Native Days Norway 2026 |
| [`gartner-iocs-2026`](decks/gartner-iocs-2026) | Gartner IOCS 2026 |

## Working on the decks

Tools (bun, node) are managed with [mise](https://mise.jdx.dev). Everything runs through mise tasks:

```shell
mise install                    # bun + node
mise run dev <deck>             # live preview, e.g. mise run dev mystery-meat
mise run build <deck>           # build one deck (plus the index) into site/
mise run build-all              # build every deck and the index page into site/
mise run preview                # serve site/ at http://localhost:4173/slides/
mise run export <deck>          # PDF export
mise run lint                   # markdownlint over the deck markdown
mise run new-deck <name> "Title"  # scaffold decks/<name>
mise tasks                      # list everything
```

## Layout

```text
decks/<name>/
├── deck.yaml        # title, description, events (drives the index page), hidden: true to unlist
├── package.json     # per-deck scripts; deck-specific deps go here
├── slides/          # slides.md, components/, layouts/, public/, style.css
└── README.md
```

Slidev, its default theme, Vue and Playwright are shared and live in the root `package.json`
(Bun workspaces). If a deck imports another package directly, add it to that deck's `package.json`.

## Adding a deck

1. `mise run new-deck <name> "Title"`
2. Edit `decks/<name>/slides/slides.md` and fill in `deck.yaml`. New decks start with `hidden: true`.
3. Remove `hidden: true` when it should appear on the index page. Push to `main`.

Each deck is published at `https://hierynomus.github.io/slides/<name>/`.

## Publishing

Every push to `main` runs `.github/workflows/pages.yml`, which builds all decks with
`mise run build-all` and deploys `site/` to GitHub Pages. In the repository settings, set
Pages > Source to "GitHub Actions".

## History

The decks were merged from the former `slides-*` repositories with their full commit history
(`git log -- decks/<name>`). Large recordings and other untracked files were not imported.
