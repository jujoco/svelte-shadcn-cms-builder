<script lang="ts">
	import { Badge } from '@/components/ui/badge';
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
	import image from '@/images/growth.png';
	import image3 from '@/images/reflecting.png';
	import image4 from '@/images/looking-ahead.png';
	import Section from './layouts/Section.svelte';

	interface FeatureProps {
		title: string;
		description: string;
		image: string;
	}

	const features: FeatureProps[] = [
		{
			title: 'Responsive Design',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			image: image4
		},
		{
			title: 'Intuitive user interface',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			image: image3
		},
		{
			title: 'AI-Powered insights',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			image: image
		}
	];

	const featureList: string[] = [
		'Dark/Light theme',
		'Reviews',
		'Features',
		'Pricing',
		'Contact form',
		'Our team',
		'Responsive design',
		'Newsletter',
		'Minimalist'
	];
</script>

<Section id="features" class="py-24">
	<div class="space-y-8">
		<h2 class="text-3xl font-bold md:text-center lg:text-4xl">
			Many{' '}
			<span class="bg-gradient-to-b from-accent/60 to-accent bg-clip-text text-transparent">
				Great Features
			</span>
		</h2>

		<div class="flex flex-wrap gap-4 md:justify-center">
			{#each featureList as feature}
				<div>
					<Badge variant="default" class="text-sm">
						{feature}
					</Badge>
				</div>
			{/each}
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each features as { title, description, image }}
				<Card>
					<CardHeader>
						<CardTitle>{title}</CardTitle>
					</CardHeader>

					<CardContent>{description}</CardContent>

					<CardFooter>
						<img src={image} alt="About feature" class="mx-auto w-[200px] lg:w-[300px]" />
					</CardFooter>
				</Card>
			{/each}
		</div>
	</div>
</Section>
