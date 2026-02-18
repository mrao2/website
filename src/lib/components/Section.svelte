<script lang="ts">
	export let id = '';
	export let title = '';
	export let intro = '';
</script>

<section {id} class="space-y-4 py-8">
	{#if title}
		<header class="space-y-2">
			<h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h2>
			{#if intro}
				<p class="max-w-2xl text-slate-600 dark:text-slate-300">{intro}</p>
			{/if}
		</header>
	{/if}
	<slot />
</section>
