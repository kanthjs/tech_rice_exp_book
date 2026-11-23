# Writing content

## Sourcing

Every factual statement is **traceable**. Before adding a rice variety, an agency guideline, a statistic or a table of numbers, find its source and cite it with `[@key]` from `references.bib` (add the BibTeX entry if it's missing). When no source exists, leave the claim out and tell the user what is missing. This book has already had invented content removed (variety tables, agency "guidelines" with no reference, chapter 12 tables that didn't match Gomez); keep it clean. Example data you make up is labelled "ข้อมูลสมมติ" in the text or caption.

## Language and terminology

Write in Thai, academic prose first; use bullets only when the content is a real list. No emoji (✅ ❌ 💡), no bold inside headings. Advantages and disadvantages go in a table or in prose.

Give the English technical term in parentheses on first use in a chapter: `ความคลาดเคลื่อนของการทดลอง (experimental error)`.

The glossary lives in `appendix-glossary.qmd`, the one place where term agreements are kept (treatment → ทรีตเมนต์, plot → พล็อต, hill → กอ, …). When editing a passage that uses another word for a glossary concept (กรรมวิธี, ตำรับ, แปลงย่อย), switch it to the glossary term. When the author agrees on a new term, add it to `appendix-glossary.qmd` right away, with an `{#gl-...}` id.

## English inside the book

These are written in English: everything inside R chunks (comments, variable names, plot text), the contents of tables (headers and cells), and figure and table captions. The crossref labels ("รูปที่", "ตารางที่", "บทที่") stay Thai; they come from `_quarto.yml`.

## Callouts

Use Quarto callouts. Labels come from `language:` in `_quarto.yml`, so leave `title` off unless the box needs its own heading.

| Purpose | Syntax |
|---|---|
| practical tip | `::: {.callout-tip}` |
| background or definition | `::: {.callout-note}` |
| pitfall that biases results | `::: {.callout-warning}` |
| rule that must be followed | `::: {.callout-important}` |

## Margin layout

The book uses a wide right margin (socviz.co style): footnotes and figure captions go there automatically, and on the web citations do too. Put a side note in `::: {.column-margin}`, a small plot in the margin with `#| column: margin`, a wide one with `#| column: body-outset`. Don't stack so much in the margin that it overflows a PDF page.

## Figures

Figures live in `figures/chNN/`; `images/` holds only the cover, logo and icons. Prefer figures drawn with R (or mermaid for diagrams) over scans. Give every figure an id, an English caption and alt text, with a blank line before and after, then reference it by id:

```markdown
![Orienting plots within a block to reduce the effect of a fertility gradient. Source: @gomez1972techniques.](figures/ch06/fig6-2.png){#fig-plot-orientation fig-alt="Two blocks of five plots ..."}

ดังแสดงใน @fig-plot-orientation ...
```

Don't put `%` in `fig-alt` (Quarto reads the attribute as a URI and warns). A figure that is still a scan from Gomez carries the comment `<!-- ภาพสแกนจาก Gomez (1972) รอวาดใหม่ด้วย R หรือ mermaid -->` above it.

`Rscript _check-media.R` lists images nobody uses and image paths that don't exist; run it after adding, moving or removing figures.

## Tables

A caption line after the table, in English, with an id, referenced as `@tbl-...`:

```markdown
| Plants (no./hill) | Yield (t/ha) |
|:---:|---:|
| 1 | 2.87 |

: Grain yield as affected by the number of plants per hill. Source: @gomez1972techniques. {#tbl-seedlings-yield}
```

A table that Gomez printed is retyped as a markdown table, never pasted as an image; keep the scan as `figures/chNN/scan-tbl-*.png` so the numbers can be checked. Gomez's own table numbers ("ตารางที่ 14") mean nothing to readers of this edition: reference a table that exists here with `@tbl-`, or cite the source, `[@gomez1972techniques, ตาราง 14]`.

## Links between chapters

Reference another chapter by its id, `@sec-blocking`, which renders as "บทที่ 4" and stays right when chapters move. Never type "บทที่ 4" by hand. Pandoc needs a non-letter before `@`, so leave a space after Thai text: `อ้างอิง @sec-blocking`, not `อ้างอิง@sec-blocking`.
