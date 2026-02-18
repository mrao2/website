<script lang="ts">
	type Variant = 'primary' | 'secondary' | 'ghost';
	type Size = 'sm' | 'md';

	export let href: string | undefined = undefined;
	export let variant: Variant = 'primary';
	export let size: Size = 'md';
	export let external = false;
	export let ariaLabel: string | undefined = undefined;

	const baseClass =
		'inline-flex items-center justify-center rounded-lg font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950';

	const variantClasses: Record<Variant, string> = {
		primary: 'bg-accent-600 text-white hover:bg-accent-700',
		secondary:
			'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white',
		ghost:
			'border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
	};

	const sizeClasses: Record<Size, string> = {
		sm: 'px-3 py-2 text-sm',
		md: 'px-5 py-3 text-sm'
	};

	$: classes = `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]}`;
</script>

{#if href}
	<a
		{href}
		class={classes}
		aria-label={ariaLabel}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
	>
		<slot />
	</a>
{:else}
	<button class={classes} type="button" aria-label={ariaLabel}>
		<slot />
	</button>
{/if}
