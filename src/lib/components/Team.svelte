<script lang="ts">
	import { buttonVariants } from '@components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '@components/ui/card';
	import { Facebook, Instagram, Linkedin } from 'lucide-svelte';
	import Section from './layouts/Section.svelte';

	interface TeamProps {
		imageUrl: string;
		name: string;
		position: string;
		socialNetworks: SocialNetworksProps[];
	}

	interface SocialNetworksProps {
		name: string;
		url: string;
	}

	const teamList: TeamProps[] = [
		{
			imageUrl: 'https://i.pravatar.cc/150?img=35',
			name: 'Emma Smith',
			position: 'Product Manager',
			socialNetworks: [
				{
					name: 'Linkedin',
					url: 'https://www.linkedin.com/in/leopoldo-miranda/'
				},
				{
					name: 'Facebook',
					url: 'https://www.facebook.com/'
				},
				{
					name: 'Instagram',
					url: 'https://www.instagram.com/'
				}
			]
		},
		{
			imageUrl: 'https://i.pravatar.cc/150?img=60',
			name: 'John Doe',
			position: 'Tech Lead',
			socialNetworks: [
				{
					name: 'Linkedin',
					url: 'https://www.linkedin.com/in/leopoldo-miranda/'
				},
				{
					name: 'Facebook',
					url: 'https://www.facebook.com/'
				},
				{
					name: 'Instagram',
					url: 'https://www.instagram.com/'
				}
			]
		},
		{
			imageUrl: 'https://i.pravatar.cc/150?img=36',
			name: 'Ashley Ross',
			position: 'Frontend Developer',
			socialNetworks: [
				{
					name: 'Linkedin',
					url: 'https://www.linkedin.com/in/leopoldo-miranda/'
				},

				{
					name: 'Instagram',
					url: 'https://www.instagram.com/'
				}
			]
		},
		{
			imageUrl: 'https://i.pravatar.cc/150?img=17',
			name: 'Bruce Rogers',
			position: 'Backend Developer',
			socialNetworks: [
				{
					name: 'Linkedin',
					url: 'https://www.linkedin.com/in/leopoldo-miranda/'
				},
				{
					name: 'Facebook',
					url: 'https://www.facebook.com/'
				}
			]
		}
	];

	function socialIcon(iconName: string) {
		switch (iconName) {
			case 'Linkedin':
				return Linkedin;
			case 'Facebook':
				return Facebook;
			case 'Instagram':
				return Instagram;
			default:
				return null;
		}
	}
</script>

<Section id="team" class="py-24 sm:py-32">
	<h2 class="text-3xl font-bold md:text-4xl">
		<span class="bg-gradient-to-b from-accent/60 to-accent bg-clip-text text-transparent">
			Our Dedicated{' '}
		</span>
		Crew
	</h2>

	<p class="mb-10 mt-4 text-xl text-muted-foreground">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor pariatur sit!
	</p>

	<div class="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
		{#each teamList as { imageUrl, name, position, socialNetworks }}
			<Card class="relative mt-8 flex flex-col items-center justify-center bg-muted/50">
				<CardHeader class="mt-8 flex items-center justify-center pb-2">
					<img
						src={imageUrl}
						alt={`${name} ${position}`}
						class="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover"
					/>
					<CardTitle class="text-center">{name}</CardTitle>
					<CardDescription class="text-accent">
						{position}
					</CardDescription>
				</CardHeader>

				<CardContent class="pb-2 text-center">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</CardContent>

				<CardFooter>
					{#each socialNetworks as { name, url }}
						<div>
							<a
								rel="noreferrer noopener"
								href={url}
								target="_blank"
								class={buttonVariants({
									variant: 'ghost',
									size: 'sm'
								})}
							>
								<span class="sr-only">{name} icon</span>
								<svelte:component this={socialIcon(name)} size={20} />
							</a>
						</div>
					{/each}
				</CardFooter>
			</Card>
		{/each}
	</div>
</Section>
