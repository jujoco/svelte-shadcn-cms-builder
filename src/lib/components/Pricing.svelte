<script lang="ts">
	import { Badge } from '@/components/ui/badge';
	import { Button } from '@/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '@/components/ui/card';

	import { Check } from 'lucide-svelte';
	import Section from './layouts/Section.svelte';

	enum PopularPlanType {
		NO = 0,
		YES = 1
	}

	interface PricingProps {
		title: string;
		popular: PopularPlanType;
		price: number;
		description: string;
		buttonText: string;
		benefitList: string[];
	}

	const pricingList: PricingProps[] = [
		{
			title: 'Basic',
			popular: 0,
			price: 1200,
			description: 'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
			buttonText: 'Get Started',
			benefitList: [
				'1 Team member',
				'2 GB Storage',
				'Upto 4 pages',
				'Community support',
				'lorem ipsum dolor'
			]
		},
		{
			title: 'Premium',
			popular: 1,
			price: 3000,
			description: 'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
			buttonText: 'Start Free Trial',
			benefitList: [
				'4 Team member',
				'4 GB Storage',
				'Upto 6 pages',
				'Priority support',
				'lorem ipsum dolor'
			]
		},
		{
			title: 'All Inclusive',
			popular: 0,
			price: 6000,
			description: 'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
			buttonText: 'Contact US',
			benefitList: [
				'10 Team member',
				'8 GB Storage',
				'Upto 10 pages',
				'Priority support',
				'lorem ipsum dolor'
			]
		}
	];
</script>

<Section id="pricing" class="py-24 sm:py-32">
	<h2 class="text-center text-3xl font-bold md:text-4xl">
		Get
		<span class="bg-gradient-to-b from-accent/60 to-accent bg-clip-text text-transparent">
			{' '}
			Unlimited{' '}
		</span>
		Access
	</h2>
	<h3 class="pb-8 pt-4 text-center text-xl text-muted-foreground">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis.
	</h3>
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each pricingList as pricing}
			<Card
				class={pricing.popular === PopularPlanType.YES
					? 'shadow-black/10 drop-shadow-xl dark:shadow-white/10'
					: ''}
			>
				<CardHeader>
					<CardTitle class="item-center flex justify-between">
						{pricing.title}
						{#if pricing.popular === PopularPlanType.YES}
							<Badge variant="secondary" class="text-sm text-accent">Most popular</Badge>
						{/if}
					</CardTitle>
					<div>
						<span class="text-3xl font-bold">${pricing.price}</span>
						<span class="text-muted-foreground"> /month</span>
					</div>

					<CardDescription>{pricing.description}</CardDescription>
				</CardHeader>

				<CardContent>
					<Button class="w-full">{pricing.buttonText}</Button>
				</CardContent>

				<hr class="m-auto mb-4 w-4/5" />

				<CardFooter class="flex">
					<div class="space-y-4">
						{#each pricing.benefitList as benefit}
							<span class="flex">
								<Check class="text-accent" />{' '}
								<h3 class="ml-2">{benefit}</h3>
							</span>
						{/each}
					</div>
				</CardFooter>
			</Card>
		{/each}
	</div>
</Section>
