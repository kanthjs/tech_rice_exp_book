# เทคนิคการทดลองในแปลงนาข้าว

หนังสือดิจิทัลว่าด้วยเทคนิคการทดลองภาคสนามสำหรับข้าว สร้างด้วย [Astro Starlight](https://starlight.astro.build/)

อ้างอิงจาก: **Techniques for field experiments with rice** โดย ดร. ขวัญชัย โกเมซ (Dr. Kwanchai Gomez), IRRI

---

## การพัฒนา

```bash
# ติดตั้ง dependencies
npm install

# รัน dev server
npm run dev

# build สำหรับ production
npm run build

# preview build
npm run preview
```

## โครงสร้างโปรเจกต์

```
star_book/
├── public/                  # Static assets (รูปภาพประกอบบท)
│   ├── cover.jpg            # หน้าปกหนังสือ
│   ├── quadrat-frame-favicon.ico
│   └── fig*.png             # รูปภาพประกอบแต่ละบท
├── src/
│   ├── assets/              # Assets ที่ Astro optimize
│   │   ├── cover.jpg        # หน้าปก (hero image)
│   │   └── logo.png         # โลโก้
│   ├── content/
│   │   └── docs/            # เนื้อหาหนังสือ (.mdx)
│   │       ├── index.mdx    # Landing page
│   │       ├── introduction.mdx
│   │       ├── 1-plotsize.mdx
│   │       ├── 2-number_rep.mdx
│   │       └── ...          # บทที่ 3–23
│   └── styles/
│       ├── fonts.css        # Noto Sans Thai
│       └── katex.css        # KaTeX math rendering
└── astro.config.mjs         # การตั้งค่า Astro + Starlight
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
