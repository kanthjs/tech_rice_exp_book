const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', '..', 'src', 'content', 'docs');

const pages = [
  {
    title: "การวางแผนการทดลอง",
    filename: "experimental-design.md", // Use English filename for stability
    content: `---
title: การวางแผนการทดลอง
description: การเลือกแผนการทดลองที่เหมาะสมกับพื้นที่และทรัพยากร
---

# การวางแผนการทดลอง

การเลือกแผนการทดลอง (Experimental Design) ที่เหมาะสมจะช่วยให้เราสามารถแยกแยะความแตกต่างระหว่างสิ่งทดลอง (Treatments) ได้อย่างชัดเจน

## แผนการทดลองพื้นฐาน

1. **CRD (Completely Randomized Design)**: เหมาะสำหรับการทดลองในห้องปฏิบัติการหรือเรือนทดลองที่สามารถควบคุมปัจจัยแวดล้อมได้ทั้งหมด
2. **RCBD (Randomized Complete Block Design)**: แผนการทดลองที่นิยมที่สุดในแปลงนา ช่วยลดความคลาดเคลื่อนจากความไม่สม่ำเสมอของดินในทิศทางเดียว

![](/fig2.1.png)
*รูปที่ 2.1: แผนผังการวางบล็อกในแปลงนา (RCBD)*
`
  }
];

pages.forEach(page => {
  const filePath = path.join(docsDir, page.filename);
  fs.writeFileSync(filePath, page.content, 'utf8');
  console.log(`Successfully created: ${filePath}`);
});
