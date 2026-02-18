<script lang="ts">
	export let padded = true;
</script>

<article
	class={`rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 ${padded ? 'p-6' : ''}`}
>
	<slot />
</article>
