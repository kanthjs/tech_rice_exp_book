const fs = require('fs');
const files = [
  "src/content/docs/9-replanting.mdx",
  "src/content/docs/3-exp_design.mdx",
  "src/content/docs/2-number_rep.mdx",
  "src/content/docs/16-plot_sampling.mdx",
  "src/content/docs/15-micor.mdx",
  "src/content/docs/14-pest_disease.mdx",
  "src/content/docs/12-number_seedlings.mdx",
  "src/content/docs/11-residual_unplanted.mdx"
];

const importStmt = "\nimport { Aside } from '@astrojs/starlight/components';\n";

files.forEach(f => {
  try {
    let content = fs.readFileSync(f, 'utf8');
    if(!content.includes("import { Aside }")) {
      const parts = content.split('---');
      if (parts.length >= 3) {
        // Insert after the second '---'
        // Join the remaining parts in case '---' is used in the markdown body
        const beforeFrontmatter = parts[0];
        const frontmatter = parts[1];
        const markdownBody = parts.slice(2).join('---');
        
        const newContent = beforeFrontmatter + '---' + frontmatter + '---' + importStmt + markdownBody;
        fs.writeFileSync(f, newContent, 'utf8');
        console.log(`Fixed ${f}`);
      }
    }
  } catch (err) {
    console.error(`Error fixing ${f}:`, err);
  }
});
