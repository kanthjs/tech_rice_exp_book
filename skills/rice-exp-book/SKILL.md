---
name: rice-exp-book
description: "Conventions for the Thai Quarto book เทคนิคการทดลองในแปลงนาข้าว (tech_rice_exp_book). Use when adding or editing a chapter, adding figures, tables or citations, writing R code chunks, or rendering and deploying the book."
---

# เทคนิคการทดลองในแปลงนาข้าว — book conventions

A Quarto book, in Thai, adapted from Gomez (1972) *Techniques for field experiments with rice* (IRRI). Readers are rice researchers running field trials, so every claim, number and recommendation in the book is **traceable**: to Gomez, to another entry in `references.bib`, or to R output rendered in the chapter.

The book follows the same structure and principles as its sibling project Plant_Epi_Thai_book. `CLAUDE.md` at the repo root holds the full rule set (in Thai); this skill is the short English version. The source of truth for chapter order, parts, layout and formats is `_quarto.yml`. Read it; don't rely on memory of it.

## Adding a chapter

1. Create `NN-slug.qmd` at the repo root: two-digit number, ASCII slug in kebab-case (`24-seed-sampling.qmd`). The slug becomes the URL `NN-slug.html`, so renaming it later breaks links.
2. Frontmatter carries only `description`, then the body opens with the chapter heading and its id, `sec-` + the slug:
   ```markdown
   ---
   description: "หนึ่งประโยค สรุปสิ่งที่บทนี้มีอยู่จริง"
   ---

   # ชื่อบทภาษาไทย {#sec-seed-sampling}
   ```
   `description` feeds `<meta name="description">` and `og:description`. Summarise only what the chapter actually contains.
3. Add the file under the right `part:` in `_quarto.yml` → `book.chapters`.
4. Body headings start at `##`. Don't end the chapter with a hand-written "บทถัดไป" link; `page-navigation` adds previous/next links.
5. Render both formats (see `references/build.md`). The chapter is done when `quarto render` finishes with zero warnings, the page shows in the sidebar under its part, and the PDF compiles.

## Editing content

Before writing prose, figures, tables or citations, read [`references/writing.md`](references/writing.md): terminology, callouts, cross-references, captions, and the sourcing rule.

Before writing or changing an R chunk, read [`references/r-code.md`](references/r-code.md).

Before rendering, previewing or touching CI, fonts, the theme or the PDF setup, read [`references/build.md`](references/build.md).
