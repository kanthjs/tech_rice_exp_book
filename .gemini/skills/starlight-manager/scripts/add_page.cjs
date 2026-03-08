const fs = require('fs');
const path = require('path');

const title = process.argv[2];
const folder = process.argv[3] || '';

if (!title) {
  console.error('Usage: node add_page.cjs "Page Title" ["folder/path"]');
  process.exit(1);
}

const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');
const filename = `${slug}.md`;
const dirPath = path.join(process.cwd(), '..', 'src', 'content', 'docs', folder);

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

const filePath = path.join(dirPath, filename);
const content = `---
title: ${title}
description: Description for ${title}
---

# ${title}

New content starts here.
`;

fs.writeFileSync(filePath, content);
console.log(`Successfully created: ${filePath}`);
