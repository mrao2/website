export type ExperienceRole = {
	company: string;
	title: string;
	start: string;
	end: string;
	highlights: string[];
};

export const experience: ExperienceRole[] = [
	{
		company: 'Acme Product Co.',
		title: 'Software Engineer',
		start: '2024',
		end: 'Present',
		highlights: [
			'Delivered end-to-end product features across frontend and backend with weekly releases.',
			'Improved core page load time by 35% through bundle and rendering optimizations.',
			'Partnered with design and product to establish accessible component patterns.'
		]
	},
	{
		company: 'BrightLabs',
		title: 'Full-Stack Engineer',
		start: '2022',
		end: '2024',
		highlights: [
			'Built internal tooling used by operations and support to reduce turnaround times.',
			'Introduced CI checks and lightweight code standards that improved deployment confidence.',
			'Supported API integrations and production incident response.'
		]
	}
];
