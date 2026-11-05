# Writing content

## Sourcing

Every factual statement is **traceable**. Before adding a rice variety, an agency guideline, a statistic or a table of numbers, find its source and cite it with `[@key]` from `references.bib` (add the BibTeX entry if it's missing). When no source exists, leave the claim out and tell the user what is missing. This book has already had invented content removed (variety tables, agency "guidelines" with no reference); keep it clean.

Thai variety names, agency names and field-condition terms are checked against a real source, never guessed.

## Language and terminology

Write in Thai, with the English technical term in parentheses on first use in a chapter: `ความคลาดเคลื่อนของการทดลอง (experimental error)`.

Glossary (one Thai term per concept, used book-wide):

| Concept | Use |
|---|---|
| treatment | ทรีตเมนต์ |
| plot | พล็อต |
| replication | ซ้ำ / จำนวนซ้ำ |
| block | บล็อก |
| hill | กอ |
| missing hill | กอหาย |
| off-type | ต้นปน |
| border effect | อิทธิพลของขอบแปลง |
| coefficient of variation | ค่าสัมประสิทธิ์ของความแปรปรวน (CV) |

When editing a passage that uses another term for one of these concepts (กรรมวิธี, ตำรับ, แปลงย่อย), switch it to the glossary term.

## Callouts

Use Quarto callouts. Labels come from `language:` in `_quarto.yml`, so leave `title` off unless the box needs its own heading.

| Purpose | Syntax |
|---|---|
| practical tip | `::: {.callout-tip}` |
| background or definition | `::: {.callout-note}` |
| pitfall that biases results | `::: {.callout-warning}` |
| rule that must be followed | `::: {.callout-important}` |

## Figures

Images live in `images/`. Give every figure an id, a Thai caption and alt text, then reference it by id:

```markdown
![แผนผังการวางบล็อกตามแนวความอุดมสมบูรณ์ของดิน](images/fig4.1.png){#fig-blocking-layout fig-alt="แผนผังแปลงทดลองแบ่งเป็น 4 บล็อกตั้งฉากกับแนวความอุดมสมบูรณ์"}

ดังแสดงใน @fig-blocking-layout ...
```

Quarto numbers it as "รูปที่ N.M" and keeps the numbers right when figures move. Write the caption and the reference with the id; a hand-typed "รูปที่ 4.1" goes stale.

`Rscript _check-media.R` lists images nobody uses and image paths that don't exist; run it after adding, moving or removing figures.

## Tables

Same pattern: a caption line after the table and an id, referenced as `@tbl-...`:

```markdown
| จำนวนต้นต่อกอ | ผลผลิต (t/ha) |
|---|---|
| 1 | ... |

: ผลของจำนวนต้นต่อกอต่อผลผลิต {#tbl-seedlings-yield}
```

Numbers in a table come from a cited source or from an R chunk in the same chapter. Table numbers from the original Gomez book ("ตารางที่ 14") mean nothing to readers of this edition; replace them with `@tbl-` references to tables that exist here.

## Links between chapters

Link to `other-chapter.qmd` (Quarto rewrites it to `.html`), or use `@sec-` ids for sections. Previous/next navigation is automatic, so a chapter needs no hand-written "บทถัดไป" link.
