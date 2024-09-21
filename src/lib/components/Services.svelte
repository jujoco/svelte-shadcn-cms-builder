<script lang="ts">
	import { Card, CardDescription, CardHeader, CardTitle } from '@components/ui/card';
	import cubeLeg from '@lib/images/cube-leg.png';
	import { MagnifierIcon } from '@components/svg';

	const serviceList = [
		{
			title: 'Code Collaboration',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			icon: MagnifierIcon
		},
		{
			title: 'Project Management',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			icon: MagnifierIcon
		},
		{
			title: 'Task Automation',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			icon: MagnifierIcon
		}
	];
</script>

<section class="container py-20 sm:py-28">
	<div class="grid place-items-center gap-8 lg:grid-cols-[1fr,1fr]">
		<div>
			<h2 class="text-3xl font-bold md:text-4xl">
				<span class="bg-gradient-to-b from-accent/60 to-accent bg-clip-text text-transparent">
					Client-Centric{' '}
				</span>
				Services
			</h2>

			<p class="mb-8 mt-4 text-xl text-muted-foreground">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor.
			</p>

			<div class="flex flex-col gap-8">
				{#each serviceList as { icon, title, description }}
					<Card>
						<CardHeader class="flex items-start justify-start gap-4 space-y-1 md:flex-row">
							<div class="mt-1 rounded-2xl bg-accent/40 p-1">
								<svelte:component this={icon} />
							</div>
							<div>
								<CardTitle>{title}</CardTitle>
								<CardDescription class="text-md mt-2">
									{description}
								</CardDescription>
							</div>
						</CardHeader>
					</Card>
				{/each}
			</div>
		</div>

		<img
			src={cubeLeg}
			class="w-[300px] object-contain md:w-[500px] lg:w-[600px]"
			alt="About services"
		/>
	</div>
</section>
