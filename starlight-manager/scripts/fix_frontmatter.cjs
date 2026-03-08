const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', '..', 'src', 'content', 'docs');

const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.mdx') && f !== 'index.mdx');

files.forEach(file => {
    const filePath = path.join(docsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already has frontmatter
    if (content.startsWith('---')) {
        console.log(`Skipping ${file} - already has frontmatter`);
        return;
    }

    // Try to find the first H1 as title
    const h1Match = content.match(/^#\s+(.+)$/m);
    const title = h1Match ? h1Match[1].trim() : file.replace('.mdx', '');
    
    const newContent = `---
title: "${title}"
description: "${title}"
---

${content}`;

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed ${file}`);
});
