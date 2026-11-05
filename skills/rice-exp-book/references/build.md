# Build, preview and deploy

## Render

```bash
quarto render      # whole book → _book/
quarto preview     # live reload while editing
```

A render is done when it finishes with zero warnings. Check the R output in the changed chapters too, not only that the render finished.

Use the standalone Quarto (`C:\Program Files\Quarto\bin`, same release as CI), not the older copy bundled with RStudio. Check with `quarto --version`. A `quarto preview` left running in RStudio locks `.quarto/` and makes a separate `quarto render` fail with a rename error; stop the preview first.

On Windows, if Quarto can't find R, point it at R's `bin` folder:

```bash
export QUARTO_R="/c/Program Files/R/R-4.6.1/bin"
```

Run `Rscript -e 'library(agricolae)'` once to confirm that the R install has the packages.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which installs Quarto and R and publishes `_book/` to GitHub Pages at https://kanthjs.github.io/tech_rice_exp_book/. The workflow doesn't run on pull requests, so a PR is only verified by a local render. `_book/` is gitignored and never committed.

## Theme and fonts

- `styles.scss`: Bootstrap variables shared by light and dark (font families, line height).
- `light.scss`: the rice-field palette, light theme only. Set colors here, so dark mode keeps darkly's contrast.
- `fonts/fonts.css`: the `@font-face` rules for Chulabhorn Likit (จุฬาภรณ์ลิขิต). They stay in a plain CSS file because Quarto compiles SCSS into `site_libs/`, which breaks relative `url()` paths; `fonts/*.woff2` reach `_book/` via `project.resources`.

## Metadata

- `llms-txt: true` writes `llms.txt` and a `.llms.md` for each chapter. It is set under both `website:` and `book:`, and both stay: Quarto ≥ 1.11 overwrites `website.llms-txt` with `book.llms-txt`, while older releases read only `website.llms-txt`.
- CI installs the latest Quarto release (`quarto-actions/setup@v2`), which can be newer than the local one, so after a deploy also check a live URL, e.g. `curl -I https://kanthjs.github.io/tech_rice_exp_book/llms.txt`.
- Open Graph uses each page's own `description`. The book-level description lives in `index.qmd` frontmatter, not in `book.description`; if it is set there, every page reports it as `og:description`.
