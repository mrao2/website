export type Certification = {
	name: string;
	issuer: string;
	date: string;
	credentialUrl?: string;
};

export const certifications: Certification[] = [
	{
		name: 'AWS Certified Developer - Associate',
		issuer: 'Amazon Web Services',
		date: '2025',
		credentialUrl: 'https://www.credly.com/'
	},
	{
		name: 'Professional Scrum Master I',
		issuer: 'Scrum.org',
		date: '2024'
	}
];
