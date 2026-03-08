const fs = require('fs');
const path = require('path');

const title = process.argv[2];
const folder = process.argv[3] || '';

if (!title) {
  console.error('Usage: node add_page.cjs "Page Title" ["folder/path"]');
  process.exit(1);
}

// Fixed slug generation: better support for non-ASCII (Thai)
const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\u0E00-\u0E7F\w-]/g, '');
const filename = `${slug}.md`;
const dirPath = path.join(__dirname, '..', '..', 'src', 'content', 'docs', folder);

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

const filePath = path.join(dirPath, filename);
const content = `---
title: ${title}
description: Description for ${title}
---

# ${title}

เนื้อหาใหม่เริ่มที่นี่
`;

fs.writeFileSync(filePath, content);
console.log(`Successfully created: ${filePath}`);
