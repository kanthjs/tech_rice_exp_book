# Build, preview and deploy

## Render

```bash
quarto render --to html   # web → _book/
quarto render --to pdf    # print version → _book/เทคนิคการทดลองในแปลงนาข้าว.pdf
quarto render             # both
quarto preview            # live reload while editing
```

A render is done when it finishes with zero warnings and the PDF compiles. Check the R output in the changed chapters too, not only that the render finished. `execute.freeze: auto` stores chunk results in `_freeze/`, which is committed.

Use the standalone Quarto (`C:\Program Files\Quarto\bin`, same release as CI), not the older copy bundled with RStudio. Check with `quarto --version`. A `quarto preview` left running in RStudio locks `.quarto/` and makes a separate `quarto render` fail with a rename error; stop the preview first.

On Windows, if Quarto can't find R or xelatex, put them on the path:

```bash
export QUARTO_R="/c/Program Files/R/R-4.6.1/bin"
export PATH="$HOME/AppData/Roaming/TinyTeX/bin/windows:$PATH"
```

## PDF

- XeLaTeX, KOMA-Script `scrbook`, A4, wide outer margin. Never switch to pdflatex: it can't set Thai.
- `preamble.tex` sets Thai line breaking (`\XeTeXlinebreaklocale "th"`), Thai labels, and a Thai fallback (Google Sans) for monospace text, because DejaVu Sans Mono has no Thai glyphs.
- Citations sit in the margin on the web only. In the PDF, Quarto 1.11's margin-citation filter crashes on a citation inside a table caption, so `citation-location: margin` is set under `format.html`.
- In math, escape `%` as `\%` even inside `\text{}`, and close inline math with `$`, not `\$`; either mistake stops the LaTeX build.
- To check for missing glyphs, run xelatex on the kept `.tex` and search its log for "Missing character"; there should be none.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which installs Quarto, TinyTeX and R, renders both formats and publishes `_book/` to GitHub Pages at https://kanthjs.github.io/tech_rice_exp_book/. The workflow doesn't run on pull requests, so a PR is only verified by a local render. `_book/` is gitignored and never committed.

## Theme and fonts

- `custom.scss`: font, sizes and the rice-field palette, shared by light and dark.
- `custom-dark.scss`: dark-mode overrides, layered after `custom.scss`.
- `fonts/fonts.css`: the `@font-face` rules for Google Sans. They stay in a plain CSS file because Quarto compiles SCSS into `site_libs/`, which breaks relative `url()` paths; `fonts/*.ttf` reach `_book/` via `project.resources`. The PDF reads the same `.ttf` files through `mainfontoptions: Path=./fonts/`.

## Metadata

- `llms-txt: true` writes `llms.txt` and a `.llms.md` for each chapter. It is set under both `website:` and `book:`, and both stay: Quarto ≥ 1.11 overwrites `website.llms-txt` with `book.llms-txt`, while older releases read only `website.llms-txt`.
- CI installs the latest Quarto release (`quarto-actions/setup@v2`), which can be newer than the local one, so after a deploy also check a live URL, e.g. `curl -I https://kanthjs.github.io/tech_rice_exp_book/llms.txt`.
- Open Graph uses each page's own `description`. The book-level description lives in `index.qmd` frontmatter, not in `book.description`; if it is set there, every page reports it as `og:description`.
