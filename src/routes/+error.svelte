<script lang="ts">
	import { page } from '$app/stores';
	import Section from '@/components/layouts/Section.svelte';
</script>

<Section>
	<div class="py-60 text-center">
		<h1 class="text-lg">{$page.status} {$page.error?.message}</h1>
	</div>
</Section>
