<script lang="ts">
	import Badge from '$lib/components/Badge.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import { projects } from '$lib/content/projects';
	import { siteConfig } from '$lib/content/site';

	let search = '';
	let selectedTag = 'All';

	$: tags = ['All', ...new Set(projects.flatMap((project) => project.tags))];
	$: normalizedSearch = search.trim().toLowerCase();
	$: filteredProjects = projects.filter((project) => {
		const matchesTag = selectedTag === 'All' || project.tags.includes(selectedTag);
		const matchesSearch =
			normalizedSearch.length === 0 ||
			`${project.title} ${project.description} ${project.tags.join(' ')}`
				.toLowerCase()
				.includes(normalizedSearch);
		return matchesTag && matchesSearch;
	});
</script>

<svelte:head>
	<title>Projects | Mohith Rao</title>
	<meta name="description" content="Filterable project archive for Mohith Rao." />
	<meta property="og:title" content="Projects | Mohith Rao" />
	<meta
		property="og:description"
		content="Browse selected engineering projects by tag and keyword."
	/>
	<meta property="og:image" content={siteConfig.ogImagePath} />
</svelte:head>

<section class="space-y-6">
	<header class="space-y-2">
		<h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Projects</h1>
		<p class="max-w-2xl text-slate-600 dark:text-slate-300">
			Search and filter across project work. This page is intentionally hidden from navigation until
			enabled.
		</p>
	</header>

	<div
		class="grid gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 md:grid-cols-[1fr_auto] md:items-end"
	>
		<div class="space-y-2">
			<label class="text-sm font-medium text-slate-700 dark:text-slate-200" for="project-search"
				>Search projects</label
			>
			<input
				id="project-search"
				type="search"
				bind:value={search}
				placeholder="Search by title, tag, or keyword"
				class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
			/>
		</div>
		<div class="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by tag">
			{#each tags as tag}
				<button
					type="button"
					class={`rounded-full px-3 py-1 text-xs font-medium transition ${
						selectedTag === tag
							? 'bg-accent-600 text-white'
							: 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
					}`}
					on:click={() => (selectedTag = tag)}
					aria-pressed={selectedTag === tag}
				>
					{tag}
				</button>
			{/each}
		</div>
	</div>

	{#if filteredProjects.length === 0}
		<p
			class="rounded-lg border border-dashed border-slate-300 p-6 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300"
		>
			No projects match your current filters.
		</p>
	{:else}
		<div class="grid gap-4 md:grid-cols-2">
			{#each filteredProjects as project}
				<Card>
					<div class="flex items-start justify-between gap-3">
						<h2 class="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h2>
						<span class="text-sm text-slate-500 dark:text-slate-400">{project.year}</span>
					</div>
					<p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each project.tags as tag}
							<Badge>{tag}</Badge>
						{/each}
					</div>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each project.links as link}
							<Button href={link.href} external variant="ghost" size="sm">{link.label}</Button>
						{/each}
					</div>
				</Card>
			{/each}
		</div>
	{/if}
</section>
