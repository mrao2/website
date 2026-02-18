export type ProjectLink = {
	label: string;
	href: string;
};

export type Project = {
	title: string;
	description: string;
	tags: string[];
	links: ProjectLink[];
	featured: boolean;
	year: number;
};

export const projects: Project[] = [
	{
		title: 'Realtime Metrics Dashboard',
		description:
			'Built a streaming analytics dashboard with live charting, role-based access, and audit-ready reporting.',
		tags: ['SvelteKit', 'TypeScript', 'WebSockets'],
		links: [
			{ label: 'GitHub', href: 'https://github.com/mrao2' },
			{ label: 'Live Demo', href: 'https://example.com' }
		],
		featured: true,
		year: 2025
	},
	{
		title: 'Developer Portfolio Platform',
		description:
			'Designed a multi-section portfolio framework with reusable content modules and fast static delivery.',
		tags: ['SvelteKit', 'Tailwind', 'SEO'],
		links: [{ label: 'GitHub', href: 'https://github.com/mrao2' }],
		featured: true,
		year: 2024
	},
	{
		title: 'Internal Workflow Automations',
		description:
			'Automated repetitive operations tasks through scripts and lightweight tools, reducing manual effort.',
		tags: ['Node.js', 'Automation', 'CLI'],
		links: [{ label: 'Case Study', href: 'https://example.com' }],
		featured: false,
		year: 2024
	},
	{
		title: 'Customer Feedback Insights',
		description:
			'Created a searchable feedback explorer with tagging and trend analysis for product and support teams.',
		tags: ['TypeScript', 'Data', 'UX'],
		links: [{ label: 'GitHub', href: 'https://github.com/mrao2' }],
		featured: false,
		year: 2023
	}
];
