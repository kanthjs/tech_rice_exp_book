# Fonts

**Google Sans**: Regular, Bold, Italic (`.ttf`). Used everywhere: web (`fonts.css`), PDF (XeLaTeX `mainfont`/`sansfont` in `_quarto.yml`) and ggplot (`base_family = "Google Sans"`), the same as Plant_Epi_Thai_book.

- Copied from `Plant_Epi_Thai_book/fonts/` (23 Nov 2026).
- TODO: add the font's license file (`OFL.txt`) from the official Google Sans release. The `OFL.txt` in Plant_Epi_Thai_book is Sarabun's, not Google Sans's.

The `@font-face` rules live in plain CSS (`fonts.css`) rather than SCSS: Quarto compiles SCSS into `site_libs/`, which breaks relative `url()` paths. The `.ttf` files reach `_book/` via `project.resources`.

For R plots on Windows the font must also be installed in the system (or registered with `systemfonts::register_font()`), because `ragg` reads system fonts.
