---
name: rice-exp-book
description: "Conventions for the Thai Quarto book เทคนิคการทดลองในแปลงนาข้าว (tech_rice_exp_book). Use when adding or editing a chapter, adding figures, tables or citations, writing R code chunks, or rendering and deploying the book."
---

# เทคนิคการทดลองในแปลงนาข้าว — book conventions

A Quarto book, in Thai, adapted from Gomez (1972) *Techniques for field experiments with rice* (IRRI). Readers are rice researchers running field trials, so every claim, number and recommendation in the book is **traceable**: to Gomez, to another entry in `references.bib`, or to R output rendered in the chapter.

The source of truth for the structure is `_quarto.yml` (chapter order, parts, theme). Read it; don't rely on memory of it.

## Adding a chapter

1. Create `N-slug.qmd` at the repo root, with an ASCII snake_case slug spelled correctly (the slug becomes the URL `N-slug.html`, so renaming it later breaks links).
2. Frontmatter carries exactly `title` and `description`:
   ```yaml
   ---
   title: "ชื่อบทภาษาไทย"
   description: "หนึ่งประโยค สรุปสิ่งที่บทนี้มีอยู่จริง"
   ---
   ```
   `description` feeds `<meta name="description">` and `og:description`. Summarise only what the chapter actually contains.
3. Add the file under the right `part:` in `_quarto.yml` → `book.chapters`.
4. Start the body with a paragraph, not a heading: Quarto renders `title` as the chapter's H1. Body headings start at `##`.
5. Render (see `references/build.md`). The chapter is done when `quarto render` finishes with zero warnings and the page shows in the sidebar under its part.

## Editing content

Before writing prose, figures, tables or citations, read [`references/writing.md`](references/writing.md): terminology, callouts, cross-references, and the sourcing rule.

Before writing or changing an R chunk, read [`references/r-code.md`](references/r-code.md).

Before rendering, previewing or touching CI, fonts or the theme, read [`references/build.md`](references/build.md).
