<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import { siteConfig } from '$lib/content/site';
	import { showProjectsPage, showServicesPage } from '$lib/config/features';
	import { theme } from '$lib/stores/theme';

	type NavLink = { label: string; href: string };

	const navLinks: NavLink[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		...(showProjectsPage ? [{ label: 'Projects', href: '/projects' }] : []),
		...(showServicesPage ? [{ label: 'Services', href: '/what-can-i-do-for-you' }] : [])
	];

	onMount(() => {
		theme.init();
	});

	$: currentPath = $page.url.pathname;
	$: pageTitle = `${siteConfig.siteName} | Personal Website`;
	$: isDark = $theme === 'dark';

	const isActive = (href: string, pathname: string) =>
		href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={siteConfig.description} />
	<meta property="og:title" content={siteConfig.siteName} />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mohithrao.me" />
	<meta property="og:image" content={siteConfig.ogImagePath} />
</svelte:head>

<a
	href="#main-content"
	class="sr-only z-50 rounded-md bg-accent-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
>
	Skip to content
</a>

<div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
	<header
		class="border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90"
	>
		<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
			<a class="text-lg font-semibold tracking-tight" href="/">{siteConfig.siteName}</a>
			<div class="flex items-center gap-2 sm:gap-4">
				<nav aria-label="Primary" class="flex items-center gap-1">
					{#each navLinks as link}
						<a
							href={link.href}
							aria-current={isActive(link.href, currentPath) ? 'page' : undefined}
							class={`rounded-md px-3 py-2 text-sm font-medium transition ${
								isActive(link.href, currentPath)
									? 'bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900'
									: 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
							}`}
						>
							{link.label}
						</a>
					{/each}
				</nav>
				<button
					type="button"
					class="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 dark:border-slate-700 dark:hover:bg-slate-800"
					on:click={() => theme.toggle()}
					aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
					aria-pressed={isDark}
				>
					{isDark ? 'Light' : 'Dark'}
				</button>
			</div>
		</div>
	</header>

	<main id="main-content" tabindex="-1" class="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
		<slot />
	</main>

	<footer class="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
		<div
			class="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
		>
			<p class="text-sm text-slate-600 dark:text-slate-300">
				© {new Date().getFullYear()}
				{siteConfig.siteName}. Built with SvelteKit.
			</p>
			<div class="flex flex-wrap items-center gap-3 text-sm">
				<a
					class="text-slate-700 hover:underline dark:text-slate-200"
					href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a
				>
				{#each siteConfig.socialLinks as social}
					<Button href={social.href} external variant="ghost" size="sm">{social.label}</Button>
				{/each}
			</div>
		</div>
	</footer>
</div>
