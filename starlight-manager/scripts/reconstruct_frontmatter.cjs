const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', '..', 'src', 'content', 'docs');
const files = fs.readdirSync(docsDir).filter(f => /^\d+-/.test(f));

files.forEach(file => {
    const filePath = path.join(docsDir, file);
    let rawContent = fs.readFileSync(filePath, 'utf8');
    
    // Clean up if there's any broken frontmatter at the start
    // We'll remove everything from the first --- to the second --- if it exists at the very beginning
    let content = rawContent;
    if (content.trim().startsWith('---')) {
        const parts = content.split('---');
        if (parts.length >= 3) {
            // Remove the frontmatter part and keep the rest
            parts.shift(); // empty before first ---
            parts.shift(); // the frontmatter itself
            content = parts.join('---').trim();
        }
    }

    // Try to find a clean H1 title from the remaining content
    const h1Match = content.match(/^#\s+(.+)$/m);
    let title = h1Match ? h1Match[1].trim() : file.replace('.mdx', '');
    
    // Clean up title if it looks garbled (contains too many non-readable chars)
    // For now, we'll keep it as is but try to ensure UTF8
    
    const match = file.match(/^(\d+)-/);
    const order = parseInt(match[1], 10);

    const newFrontmatter = `---
title: "${title}"
description: "บทที่ ${order}: ${title}"
sidebar:
  order: ${order}
---

`;

    // Ensure we don't have double H1s if we already added one
    if (content.startsWith('# ')) {
        // Keep it
    }

    fs.writeFileSync(filePath, newFrontmatter + content, 'utf8');
    console.log(`Reconstructed frontmatter for ${file} (Order: ${order})`);
});
