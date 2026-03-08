# Content Structure

Starlight projects follow a specific directory structure for content:

- `src/content/docs/`: All documentation files (.md or .mdx).
- `src/content/config.ts`: Defines the schema for Starlight content.
- `src/assets/`: Static assets like images and diagrams.
- `public/`: Assets served at the root (e.g., `favicon.svg`).

## Page Metadata (Frontmatter)

```yaml
---
title: My Page Title
description: A brief description for SEO.
sidebar:
  label: Short Label (Optional)
  order: 1 (Optional)
---
```
