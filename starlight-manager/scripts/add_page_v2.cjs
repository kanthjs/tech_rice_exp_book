const fs = require('fs');
const path = require('path');

function addPage(title, folder = '') {
  const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\u0E00-\u0E7F\w-]/g, '');
  const filename = `${slug}.md`;
  const dirPath = path.join(__dirname, '..', '..', 'src', 'content', 'docs', folder);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, filename);
  const content = `---
title: ${title}
description: รายละเอียดเกี่ยวกับ ${title}
---

# ${title}

เนื้อหาเริ่มต้นสำหรับบทนี้

## หัวข้อย่อย 1

อธิบายเนื้อหาที่นี่

![](/fig2.1.png)
*รูปที่ 2.1: แผนผังการวางแผนการทดลอง*
`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully created: ${filePath}`);
}

const titleArg = process.argv[2];
const folderArg = process.argv[3];

if (titleArg) {
    addPage(titleArg, folderArg);
} else {
    console.error('Title is required');
}
