# เทคนิคการทดลองในแปลงนาข้าว

หนังสือดิจิทัลว่าด้วยเทคนิคการทดลองภาคสนามสำหรับข้าว สร้างด้วย [Quarto](https://quarto.org/) (book project)

อ้างอิงจาก: **Techniques for field experiments with rice** โดย ดร. ขวัญชัย โกเมซ (Dr. Kwanchai Gomez), IRRI

เว็บ: <https://kanthjs.github.io/tech_rice_exp_book/>

---

## การพัฒนา

ต้องมี [Quarto](https://quarto.org/docs/get-started/) และ R พร้อมแพ็กเกจ `knitr`, `rmarkdown`, `agricolae`

```r
install.packages(c("knitr", "rmarkdown", "agricolae"))
```

```bash
# preview แบบ live reload
quarto preview

# render ทั้งเล่มไปที่ _book/
quarto render
```

ถ้า Quarto หา R ไม่เจอ ให้ตั้ง `QUARTO_R` ชี้ไปที่โฟลเดอร์ `bin` ของ R

Deploy อัตโนมัติไป GitHub Pages ผ่าน GitHub Actions เมื่อ push เข้า `main` (`.github/workflows/deploy.yml`)

## โครงสร้างโปรเจกต์

```
tech_rice_exp_book/
├── _quarto.yml          # การตั้งค่า book: ลำดับบท, theme, ภาษา
├── index.qmd            # คำนำ
├── 1-plotsize.qmd       # บทที่ 1
├── ...                  # บทที่ 2–23
├── references.qmd       # เอกสารอ้างอิง
├── references.bib       # BibTeX (อ้างอิงด้วย @key)
├── styles.scss          # ตัวแปร theme ที่ใช้ร่วมกัน (ฟอนต์)
├── light.scss           # สีนาข้าว (light theme)
├── fonts/               # ฟอนต์จุฬาภรณ์ลิขิต (woff2 + fonts.css)
├── images/              # รูปประกอบ ปก โลโก้ favicon
├── favicon-head.html    # <link> ของ favicon/manifest
├── site.webmanifest
├── _check-media.R       # หารูปที่ไม่ได้ใช้ / path รูปที่ไม่มีอยู่
└── skills/rice-exp-book # Claude skill: กติกาการเขียนเล่มนี้
```

## การเขียนเนื้อหา

กติกาทั้งหมด (การเพิ่มบท, ศัพท์, callout, รูป/ตาราง, การอ้างอิง, โค้ด R, การ build) อยู่ที่ [`skills/rice-exp-book/`](skills/rice-exp-book/SKILL.md)

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
