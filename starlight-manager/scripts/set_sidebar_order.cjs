const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', '..', 'src', 'content', 'docs');
const files = fs.readdirSync(docsDir).filter(f => /^\d+-/.test(f));

files.forEach(file => {
    const filePath = path.join(docsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the leading number
    const match = file.match(/^(\d+)-/);
    if (!match) return;
    const order = parseInt(match[1], 10);

    // Update frontmatter
    // This regex looks for the frontmatter block and injects/updates sidebar.order
    if (content.startsWith('---')) {
        const parts = content.split('---');
        let frontmatter = parts[1];
        
        // Remove existing sidebar block if any to avoid duplication
        frontmatter = frontmatter.replace(/sidebar:\s*\n\s+order: \d+\n/g, '');
        frontmatter = frontmatter.replace(/sidebar:[\s\S]*?(\n(?=\S)|$)/, '');
        
        frontmatter += `sidebar:\n  order: ${order}\n`;
        parts[1] = frontmatter;
        const newContent = parts.join('---');
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated order for ${file} to ${order}`);
    }
});
