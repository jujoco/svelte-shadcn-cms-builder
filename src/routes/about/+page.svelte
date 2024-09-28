<script lang="ts">
	import About from "@/components/About.svelte";
	import Team from "@/components/Team.svelte";
	let title = "About Us";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<About />
<Team />
