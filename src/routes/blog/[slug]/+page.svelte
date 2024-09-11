<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	let title = 'Blog Page';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
<a href="/">Home</a>
