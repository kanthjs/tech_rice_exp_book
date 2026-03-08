# Starlight Configuration

Common configuration in `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      sidebar: [
        { label: 'Introduction', link: '/intro' },
        {
          label: 'Guides',
          items: [
            { label: 'Setup', link: '/guides/setup' },
            { label: 'Advanced', autogenerate: { directory: 'guides/advanced' } },
          ],
        },
      ],
      social: {
        github: 'https://github.com/withastro/starlight',
      },
    }),
  ],
});
```
