<script lang="ts">
	import pilot from '@/images/pilot.png';
	import Section from './layouts/Section.svelte';

	const stats = [
		{
			quantity: '2.7K+',
			description: 'Users'
		},
		{
			quantity: '1.8K+',
			description: 'Subscribers'
		},
		{
			quantity: '112',
			description: 'Downloads'
		},
		{
			quantity: '4',
			description: 'Products'
		}
	];
</script>

<Section id="about" class="sm:py-30 py-24">
	<div class="rounded-lg border bg-card py-12">
		<div class="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
			<img src={pilot} alt="" class="w-[300px] rounded-lg object-contain" />
			<div class="bg-green-0 flex flex-col justify-between">
				<div class="pb-6">
					<h2 class="text-3xl font-bold md:text-4xl">
						<span class="bg-gradient-to-b from-accent/60 to-accent bg-clip-text text-transparent">
							About{' '}
						</span>
						Company
					</h2>
					<p class="mt-4 text-xl text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit.
					</p>
				</div>

				<div>
					<div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
						{#each stats as { quantity, description }}
							<div class="space-y-2 text-center">
								<h2 class="text-3xl font-bold sm:text-4xl">{quantity}</h2>
								<p class="text-xl text-muted-foreground">{description}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</Section>
