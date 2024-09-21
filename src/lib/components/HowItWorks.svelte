<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
	import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from '@components/svg';
	import Section from './layouts/Section.svelte';

	const features = [
		{
			icon: MedalIcon,
			title: 'Accessibility',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum'
		},
		{
			icon: MapIcon,
			title: 'Community',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum'
		},
		{
			icon: PlaneIcon,
			title: 'Scalability',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum'
		},
		{
			icon: GiftIcon,
			title: 'Gamification',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum'
		}
	];
</script>

<Section id="howItWorks" class="container py-24 text-center sm:py-32">
	<h2 class="text-3xl font-bold md:text-4xl">
		How It{' '}
		<span class="bg-gradient-to-b from-accent/60 to-accent bg-clip-text text-transparent">
			Works{' '}
		</span>
		Step-by-Step Guide
	</h2>
	<p class="mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor pariatur sit!
	</p>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
		{#each features as { icon, title, description }}
			<Card class="bg-muted/50">
				<CardHeader>
					<CardTitle class="grid place-items-center gap-4">
						<svelte:component this={icon} />
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent>{description}</CardContent>
			</Card>
		{/each}
	</div>
</Section>
