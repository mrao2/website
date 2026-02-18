<script lang="ts">
	import Badge from '$lib/components/Badge.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Section from '$lib/components/Section.svelte';
	import { certifications } from '$lib/content/certifications';
	import { experience } from '$lib/content/experience';
	import { projects } from '$lib/content/projects';
	import { siteConfig } from '$lib/content/site';

	const selectedProjects = projects.filter((project) => project.featured).slice(0, 3);
</script>

<svelte:head>
	<title>About | Mohith Rao Resume</title>
	<meta
		name="description"
		content="Resume-style overview of Mohith Rao including experience, skills, education, certifications, and selected projects."
	/>
	<meta property="og:title" content="About | Mohith Rao Resume" />
	<meta
		property="og:description"
		content="Experience, education, certifications, and selected work by Mohith Rao."
	/>
	<meta property="og:image" content={siteConfig.ogImagePath} />
</svelte:head>

<section class="space-y-4">
	<p class="text-sm font-medium uppercase tracking-wide text-accent-700 dark:text-accent-200">
		About
	</p>
	<h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Resume</h1>
	<p class="max-w-3xl text-slate-600 dark:text-slate-300">{siteConfig.summary}</p>
	<div class="pt-2">
		<Button href={siteConfig.resumePdfPath} external variant="primary">Download Resume (PDF)</Button
		>
	</div>
</section>

<Section title="Skills">
	<div class="flex flex-wrap gap-2">
		{#each siteConfig.skills as skill}
			<Badge>{skill}</Badge>
		{/each}
	</div>
</Section>

<Section title="Experience">
	<div class="space-y-4">
		{#each experience as role}
			<Card>
				<div class="flex flex-wrap items-start justify-between gap-2">
					<div>
						<h3 class="text-lg font-semibold text-slate-900 dark:text-white">{role.title}</h3>
						<p class="text-sm font-medium text-slate-600 dark:text-slate-300">{role.company}</p>
					</div>
					<p class="text-sm text-slate-500 dark:text-slate-400">{role.start} - {role.end}</p>
				</div>
				<ul class="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
					{#each role.highlights as highlight}
						<li>{highlight}</li>
					{/each}
				</ul>
			</Card>
		{/each}
	</div>
</Section>

<Section title="Education">
	<Card>
		<h3 class="text-lg font-semibold text-slate-900 dark:text-white">
			{siteConfig.education.degree}
		</h3>
		<p class="mt-1 text-sm text-slate-700 dark:text-slate-200">{siteConfig.education.school}</p>
		<p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
			Graduated {siteConfig.education.graduation}
		</p>
	</Card>
</Section>

<Section title="Certifications">
	<div class="grid gap-4 md:grid-cols-2">
		{#each certifications as cert}
			<Card>
				<h3 class="text-base font-semibold text-slate-900 dark:text-white">{cert.name}</h3>
				<p class="mt-1 text-sm text-slate-600 dark:text-slate-300">{cert.issuer}</p>
				<p class="mt-1 text-sm text-slate-500 dark:text-slate-400">{cert.date}</p>
				{#if cert.credentialUrl}
					<a
						class="mt-3 inline-block text-sm font-medium text-accent-700 hover:underline dark:text-accent-200"
						href={cert.credentialUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						View credential
					</a>
				{/if}
			</Card>
		{/each}
	</div>
</Section>

<Section title="Selected Projects">
	<div class="grid gap-4 md:grid-cols-2">
		{#each selectedProjects as project}
			<Card>
				<div class="flex items-start justify-between gap-3">
					<h3 class="text-base font-semibold text-slate-900 dark:text-white">{project.title}</h3>
					<span class="text-sm text-slate-500 dark:text-slate-400">{project.year}</span>
				</div>
				<p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
			</Card>
		{/each}
	</div>
</Section>
