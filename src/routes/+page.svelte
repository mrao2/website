<script lang="ts">
	import Badge from '$lib/components/Badge.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Section from '$lib/components/Section.svelte';
	import { projects } from '$lib/content/projects';
	import { siteConfig } from '$lib/content/site';

	const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);
</script>

<svelte:head>
	<title>Mohith Rao | Full-Stack Software Engineer</title>
	<meta
		name="description"
		content="Mohith Rao builds fast, accessible, and scalable web applications. Explore background, experience, and contact links."
	/>
	<meta property="og:title" content="Mohith Rao | Full-Stack Software Engineer" />
	<meta
		property="og:description"
		content="Personal website of Mohith Rao with resume, experience, and selected work."
	/>
	<meta property="og:image" content={siteConfig.ogImagePath} />
</svelte:head>

<section class="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
	<div class="space-y-6">
		<Badge tone="accent">Open to software engineering opportunities</Badge>
		<h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
			Mohith Rao
		</h1>
		<p class="max-w-2xl text-lg text-slate-700 dark:text-slate-200">{siteConfig.tagline}</p>
		<p class="max-w-2xl text-slate-600 dark:text-slate-300">{siteConfig.summary}</p>
		<div class="flex flex-wrap gap-3">
			<Button href="/about" variant="primary">About / Resume</Button>
			<Button href={siteConfig.resumePdfPath} variant="secondary" external>Download Resume</Button>
			<Button href={`mailto:${siteConfig.email}`} variant="ghost">Email Me</Button>
		</div>
		<div class="flex flex-wrap gap-2">
			{#each siteConfig.socialLinks as social}
				<Button href={social.href} external variant="ghost" size="sm">{social.label}</Button>
			{/each}
		</div>
	</div>

	<Card>
		<h2 class="text-xl font-semibold text-slate-900 dark:text-white">Quick Snapshot</h2>
		<ul class="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
			<li>Based in the United States</li>
			<li>Focused on product engineering and reliable delivery</li>
			<li>Strong with SvelteKit, TypeScript, and API design</li>
			<li>Prioritizes performance, accessibility, and maintainability</li>
		</ul>
	</Card>
</section>

<Section
	title="Selected Work"
	intro="A brief sample of recent projects. A full projects page is implemented and can be enabled later via feature flags."
>
	<div class="grid gap-4 md:grid-cols-2">
		{#each featuredProjects as project}
			<Card>
				<div class="flex items-start justify-between gap-2">
					<h3 class="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
					<span class="text-sm text-slate-500 dark:text-slate-400">{project.year}</span>
				</div>
				<p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each project.tags as tag}
						<Badge>{tag}</Badge>
					{/each}
				</div>
			</Card>
		{/each}
	</div>
</Section>
