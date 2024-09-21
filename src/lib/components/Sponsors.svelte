<script lang="ts">
	import { Radar } from 'lucide-svelte';
	import Section from './layouts/Section.svelte';

	const sponsors = [
		{
			icon: Radar,
			name: 'Sponsor 1'
		},
		{
			icon: Radar,
			name: 'Sponsor 2'
		},
		{
			icon: Radar,
			name: 'Sponsor 3'
		},
		{
			icon: Radar,
			name: 'Sponsor 4'
		},
		{
			icon: Radar,
			name: 'Sponsor 5'
		},
		{
			icon: Radar,
			name: 'Sponsor 6'
		}
	];
</script>

<Section id="sponsors" class="container pt-24 sm:py-32">
	<h2 class="text-md mb-8 text-center font-bold text-accent lg:text-xl">Investors and founders</h2>

	<div class="flex flex-wrap items-center justify-center gap-4 md:gap-8">
		{#each sponsors as { icon, name }}
			<div class="flex items-center gap-1 text-muted-foreground/60">
				<span>
					<svelte:component this={icon} size="32" />
				</span>
				<h3 class="text-xl font-bold">{name}</h3>
			</div>
		{/each}
	</div>
</Section>
