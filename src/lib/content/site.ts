export const siteConfig = {
	siteName: 'mohithrao.me',
	tagline: 'Software engineer building reliable, human-centered web products.',
	description:
		'Portfolio and resume of Mohith Rao, focused on full-stack engineering, product-minded development, and scalable web experiences.',
	email: 'mohith@example.com',
	resumePdfPath: '/resume.pdf',
	ogImagePath: '/og.png',
	socialLinks: [
		{ label: 'GitHub', href: 'https://github.com/mrao2' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohithrao/' }
	],
	skills: [
		'Svelte/SvelteKit',
		'TypeScript',
		'Node.js',
		'APIs & Integrations',
		'PostgreSQL',
		'CI/CD',
		'Accessibility',
		'Performance Optimization'
	],
	education: {
		school: 'University Name',
		degree: 'B.S. in Computer Science',
		graduation: '2023'
	},
	summary:
		'Product-oriented software engineer with experience shipping fast, accessible web applications from concept to production. Strong collaborator with a bias for simple architecture and measurable outcomes.'
} as const;
