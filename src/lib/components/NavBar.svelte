<script lang="ts">
	import { Menu, Origami, Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '@components/ui/button';
	import * as Sheet from '@components/ui/sheet';
	import { CenteredContainer } from '@components/layouts';

	let companyName = 'Company name';
	let routes = [
		{
			href: '#services',
			label: 'Services'
		},
		{
			href: 'pricing',
			label: 'Pricing'
		},
		{
			href: 'blog',
			label: 'Blob'
		}
	];
</script>

<header class="border-b-[1px] bg-background">
	<CenteredContainer>
		<div class="flex items-center justify-between py-2">
			<a href="/" class="flex space-x-2">
				<Origami strokeWidth={1.5} class="h-6 w-6 lg:h-8 lg:w-8" />
				<span class="text-md text-xl font-bold">{companyName}</span>
			</a>

			<!-- Mobile View -->
			<Sheet.Root>
				<Sheet.Trigger>
					<Button class="md:hidden" variant="ghost" size="icon"><Menu /></Button>
				</Sheet.Trigger>
				<Sheet.Content>
					<Sheet.Header>
						<Sheet.Title>{companyName}</Sheet.Title>
					</Sheet.Header>
					<nav class="mt-4 flex flex-col gap-y-2">
						{#each routes as item}
							<Button href={item.href} variant="ghost" class="justify-start">
								{item.label}
							</Button>
						{/each}
					</nav>
					<div class="flex items-center space-x-4 px-3 pt-4">
						<!-- Dark mode switch -->
						<span>Appearance</span>
						<Button on:click={toggleMode} variant="outline" size="icon">
							<Sun
								class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
							/>
							<Moon
								class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
							/>
							<span class="sr-only">Toggle theme</span>
						</Button>
					</div>
				</Sheet.Content>
			</Sheet.Root>

			<!-- Desktop View -->
			<nav class="hidden space-x-2 md:flex">
				{#each routes as item}
					<Button href={item.href} variant="ghost">
						{item.label}
					</Button>
				{/each}
				<Button href="/Appointments" variant="default">Book Now</Button>
				<!-- DarkMode Switch -->
				<Button on:click={toggleMode} variant="ghost" size="icon">
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</nav>
		</div>
	</CenteredContainer>
</header>
