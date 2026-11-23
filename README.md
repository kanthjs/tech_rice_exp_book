# เทคนิคการทดลองในแปลงนาข้าว

หนังสือดิจิทัลว่าด้วยเทคนิคการทดลองภาคสนามสำหรับข้าว สร้างด้วย [Quarto](https://quarto.org/) (book project)

อ้างอิงจาก: **Techniques for field experiments with rice** โดย ดร. ขวัญชัย โกเมซ (Dr. Kwanchai Gomez), IRRI

เว็บ: <https://kanthjs.github.io/tech_rice_exp_book/>

---

## การพัฒนา

โครงและหลักการทำงานยึดตาม Plant_Epi_Thai_book: ชื่อไฟล์ `NN-slug.qmd` หัวบทมี `{#sec-slug}` อ้างข้ามบทด้วย `@sec-` เลย์เอาต์ขอบกว้าง (socviz) ผลลัพธ์ทั้งเว็บและ PDF ฟอนต์ Google Sans และอภิธานศัพท์ท้ายเล่ม กติกาทั้งหมดอยู่ใน [`CLAUDE.md`](CLAUDE.md)

ต้องมี [Quarto](https://quarto.org/docs/get-started/) 1.11+, TinyTeX (`quarto install tinytex`) และ R พร้อมแพ็กเกจ

```r
install.packages(c("knitr", "rmarkdown", "agricolae", "ragg", "downlit", "xml2"))
```

```bash
quarto preview              # preview แบบ live reload
quarto render --to html     # เว็บ
quarto render --to pdf      # PDF (XeLaTeX)
quarto render               # ทั้งสองแบบไปที่ _book/
```

ถ้า Quarto หา R ไม่เจอ ให้ตั้ง `QUARTO_R` ชี้ไปที่โฟลเดอร์ `bin` ของ R

Deploy อัตโนมัติไป GitHub Pages ผ่าน GitHub Actions เมื่อ push เข้า `main` (`.github/workflows/deploy.yml`) หน้าเว็บมีปุ่มดาวน์โหลด PDF

## โครงสร้างโปรเจกต์

```
tech_rice_exp_book/
├── _quarto.yml              # การตั้งค่า book: ลำดับบท, layout, crossref ไทย, html + pdf
├── CLAUDE.md                # กติกาการเขียนและการทำงานของเล่มนี้
├── index.qmd                # คำนำ
├── 01-plot-size.qmd         # บทที่ 1 (หัวบท {#sec-plot-size})
├── ...                      # บทที่ 2–23
├── references.qmd           # เอกสารอ้างอิง
├── appendix-glossary.qmd    # ภาคผนวก อภิธานศัพท์ (ข้อตกลงศัพท์ทั้งเล่ม)
├── references.bib           # BibTeX (อ้างอิงด้วย @key)
├── custom.scss              # theme เว็บ: ฟอนต์ สีนาข้าว ขอบขวา
├── custom-dark.scss         # dark mode
├── preamble.tex             # ภาษาไทยใน PDF (ตัดคำ ป้ายไทย ฟอนต์ไทยในโค้ด)
├── fonts/                   # Google Sans (.ttf) + fonts.css
├── figures/chNN/            # รูปประกอบรายบท (scan-tbl-* = ภาพสแกนตารางต้นฉบับไว้ตรวจตัวเลข)
├── images/                  # ปก โลโก้ favicon
├── _freeze/                 # ผล R chunk ที่ render แล้ว (commit)
├── favicon-head.html, site.webmanifest
├── _check-media.R           # หารูปที่ไม่ได้ใช้ / path รูปที่ไม่มีอยู่
└── skills/rice-exp-book     # Claude skill: กติกาฉบับย่อภาษาอังกฤษ
```

## การเขียนเนื้อหา

กติกาเต็มอยู่ที่ [`CLAUDE.md`](CLAUDE.md) ฉบับย่อสำหรับ Claude skill อยู่ที่ [`skills/rice-exp-book/`](skills/rice-exp-book/SKILL.md)

ตรวจรูปหลังเพิ่ม/ย้าย/ลบ:

```bash
Rscript _check-media.R
```

### ใช้ skill กับ Claude Code

```
/plugin marketplace add kanthjs/tech_rice_exp_book
```

## เนื้อหา (23 บท)

| บท | หัวข้อ |
|----|--------|
| 1 | ขนาด รูปร่าง และการวางแนวแปลง |
| 2 | จำนวนซ้ำ |
| 3 | การออกแบบการทดลอง |
| 4 | บล็อก |
| 5 | การสุ่ม |
| 6 | ความไม่สม่ำเสมอของดิน |
| 7 | อิทธิพลของขอบแปลง |
| 8 | กอหาย |
| 9 | การปลูกซ่อม |
| 10 | ผลตกค้างของปุ๋ย |
| 11 | ผลตกค้างของทางเดินที่ไม่ได้ปลูก |
| 12 | จำนวนต้นต่อกอ |
| 13 | ต้นปน (Off-Types) |
| 14 | โรคและแมลงศัตรูพืช |
| 15 | แหล่งความแปรปรวนย่อยอื่น ๆ |
| 16 | การสุ่มตัวอย่างในพล็อต |
| 17 | การวัดผลผลิต |
| 18 | การวัดความสูงและจำนวนกอ |
| 19 | การวัดองค์ประกอบผลผลิต |
| 20 | การวัด Leaf Area Index |
| 21 | การวัดการระบาดของหนอนกอข้าว |
| 22 | การสุ่มตัวอย่างในนาหว่าน |
| 23 | การสุ่มตัวอย่างเพื่อหาปริมาณโปรตีน |
