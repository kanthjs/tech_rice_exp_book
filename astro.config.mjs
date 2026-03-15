// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://kanthjs.github.io',
	base: import.meta.env.BASE_URL || '/',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		starlight({
			title: 'เทคนิคการทดลองในแปลงนาข้าว',
			logo: {
				src: './src/assets/logo.png',
				alt: 'โลโก้เทคนิคการทดลองในแปลงนาข้าว',
			},
			favicon: '/quadrat-frame-favicon.ico',
			customCss: ['./src/styles/fonts.css', './src/styles/katex.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'ยินดีต้อนรับ', slug: 'introduction' },
					],
				},
				{
					label: 'เนื้อหาหนังสือ',
					items: [
						{ label: 'ขนาด รูปร่าง และการวางแนวแปลง', slug: '1-plotsize' },
						{ label: 'จำนวนซ้ำ', slug: '2-number_rep' },
						{ label: 'การออกแบบการทดลอง', slug: '3-exp_design' },
						{ label: 'บล็อก', slug: '4-blocking' },
						{ label: 'การสุ่ม', slug: '5-random' },
						{ label: 'ความไม่สม่ำเสมอของดิน', slug: '6-soil_het' },
						{ label: 'อิทธิพลของขอบแปลง', slug: '7-boarder_effect' },
						{ label: 'กอหาย', slug: '8-missing_hill' },
						{ label: 'การปลูกซ่อม', slug: '9-replanting' },
						{ label: 'ผลตกค้างของปุ๋ย', slug: '10-residual_fert' },
						{ label: 'ผลตกค้างของทางเดินที่ไม่ได้ปลูก', slug: '11-residual_unplanted' },
						{ label: 'จำนวนต้นต่อกอ', slug: '12-number_seedlings' },
						{ label: 'ต้นปน (Off-Types)', slug: '13-offtypes' },
						{ label: 'โรคและแมลงศัตรูพืช', slug: '14-pest_disease' },
						{ label: 'แหล่งความแปรปรวนย่อยอื่น ๆ', slug: '15-micor' },
						{ label: 'การสุ่มตัวอย่างในพล็อต', slug: '16-plot_sampling' },
						{ label: 'การวัดผลผลิต', slug: '17-measuring_yield' },
						{ label: 'การวัดความสูงและจำนวนกอ', slug: '18-measuring_height' },
						{ label: 'การวัดองค์ประกอบผลผลิต', slug: '19-measuring_component' },
						{ label: 'การวัด Leaf Area Index', slug: '20-measuring_lai' },
						{ label: 'การวัดการระบาดของหนอนกอข้าว', slug: '21-measuring_stemborer' },
						{ label: 'การสุ่มตัวอย่างในนาหว่าน', slug: '22-sampling_broadcast' },
						{ label: 'การสุ่มตัวอย่างเพื่อหาปริมาณโปรตีน', slug: '23-sampling_protein' },
					],
				},
			],
		}),
	],
});
