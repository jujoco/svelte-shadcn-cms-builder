<script>
	export let title = 'Default Title';
	export let subtitle = 'Default Subtitle';
</script>

<header class="header">
	<h2>{title}</h2>
	{#if subtitle}
		<p>{subtitle}</p>
	{/if}
</header>
