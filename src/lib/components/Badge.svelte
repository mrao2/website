<script lang="ts">
	export let tone: 'neutral' | 'accent' = 'neutral';

	$: classes =
		tone === 'accent'
			? 'inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-700 dark:bg-accent-700/30 dark:text-accent-100'
			: 'inline-flex items-center rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200';
</script>

<span class={classes}>
	<slot />
</span>
