<script lang="ts">
	import { Button, buttonVariants } from '@/components/ui/button';
	import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
	import { Badge } from '@/components/ui/badge';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle,
		CardFooter
	} from '@/components/ui/card';
	import { Check, Linkedin, Github } from 'lucide-svelte';
	import { LightBulbIcon } from '@/components/svg';
</script>

<section class="container grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2">
	<div class="space-y-6 text-center lg:text-start">
		<main class="text-5xl font-bold md:text-6xl">
			<h1 class="inline">
				<span
					class="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent"
				>
					Shadcn
				</span>
				landing page
			</h1>
			for
			<h2 class="inline">
				<span
					class="inline bg-gradient-to-r from-[#fca461] via-[#f18f1f] to-accent bg-clip-text text-transparent"
				>
					Svelte
				</span>
				developers
			</h2>
		</main>

		<p class="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
			Build your Svelte website effortlessly with the required sections to your project.
		</p>

		<div class="space-y-4 md:space-x-4 md:space-y-0">
			<Button class="w-full md:w-1/3">Get Started</Button>
		</div>
	</div>

	<!-- {/* Hero cards sections */} -->
	<div class="z-10">
		<div class="relative hidden h-[500px] w-[700px] flex-row flex-wrap gap-8 lg:flex">
			<!-- {/* Testimonial */} -->
			<Card
				class="absolute -top-[15px] w-[340px] shadow-black/10 drop-shadow-xl dark:shadow-white/10"
			>
				<CardHeader class="flex flex-row items-center gap-4 pb-2">
					<Avatar>
						<AvatarImage alt="" src="https://github.com/shadcn.png" />
						<AvatarFallback>SH</AvatarFallback>
					</Avatar>

					<div class="flex flex-col">
						<CardTitle class="text-lg">John Doe React</CardTitle>
						<CardDescription>@john_doe</CardDescription>
					</div>
				</CardHeader>

				<CardContent>This landing page is awesome!</CardContent>
			</Card>

			<!-- {/* Team */} -->
			<Card
				class="absolute right-[20px] top-4 flex w-80 flex-col items-center justify-center shadow-black/10 drop-shadow-xl dark:shadow-white/10"
			>
				<CardHeader class="mt-8 flex items-center justify-center pb-2">
					<img
						src="https://i.pravatar.cc/150?img=58"
						alt="user avatar"
						class="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover grayscale-[0%]"
					/>
					<CardTitle class="text-center">Leo Miranda</CardTitle>
					<CardDescription class="font-normal text-accent">Frontend Developer</CardDescription>
				</CardHeader>

				<CardContent class="pb-2 text-center">
					<p>
						I really enjoy transforming ideas into functional software that exceeds expectations
					</p>
				</CardContent>

				<CardFooter>
					<div>
						<a
							rel="noreferrer noopener"
							href="https://github.com/leoMirandaa"
							target="_blank"
							class={buttonVariants({
								variant: 'ghost',
								size: 'sm'
							})}
						>
							<span class="sr-only">Github icon</span>
							<Github />
						</a>
						<a
							rel="noreferrer noopener"
							href="https://twitter.com/leo_mirand4"
							target="_blank"
							class={buttonVariants({
								variant: 'ghost',
								size: 'sm'
							})}
						>
							<span class="sr-only">X icon</span>
							<svg
								role="img"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 fill-foreground"
							>
								<title>X</title>
								<path
									d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
								/>
							</svg>
						</a>

						<a
							rel="noreferrer noopener"
							href="https://www.linkedin.com/in/leopoldo-miranda/"
							target="_blank"
							class={buttonVariants({
								variant: 'ghost',
								size: 'sm'
							})}
						>
							<span class="sr-only">Linkedin icon</span>
							<Linkedin size="20" />
						</a>
					</div>
				</CardFooter>
			</Card>

			<!-- {/* Pricing */} -->
			<Card
				class="absolute left-[50px] top-[150px] w-72  shadow-black/10 drop-shadow-xl dark:shadow-white/10"
			>
				<CardHeader>
					<CardTitle class="item-center flex justify-between">
						Free
						<Badge variant="secondary" class="text-sm text-accent">Most popular</Badge>
					</CardTitle>
					<div>
						<span class="text-3xl font-bold">$0</span>
						<span class="text-muted-foreground"> /month</span>
					</div>

					<CardDescription>
						Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
					</CardDescription>
				</CardHeader>

				<CardContent>
					<Button class="w-full">Start Free Trial</Button>
				</CardContent>

				<hr class="m-auto mb-4 w-4/5" />

				<CardFooter class="flex">
					<div class="space-y-4">
						{#each ['4 Team member', '4 GB Storage', 'Upto 6 pages'] as benefit}
							<span class="flex">
								<Check class="text-accent" />{' '}
								<h3 class="ml-2">{benefit}</h3>
							</span>
						{/each}
					</div>
				</CardFooter>
			</Card>

			<!-- {/* Service */} -->
			<Card
				class="absolute -right-[10px] bottom-[35px] w-[350px]  shadow-black/10 drop-shadow-xl dark:shadow-white/10"
			>
				<CardHeader class="flex items-start justify-start gap-4 space-y-1 md:flex-row">
					<div class="mt-1 rounded-2xl bg-accent/50 p-1">
						<LightBulbIcon />
					</div>
					<div>
						<CardTitle>Light & dark mode</CardTitle>
						<CardDescription class="text-md mt-2">
							Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur natusm.
						</CardDescription>
					</div>
				</CardHeader>
			</Card>
		</div>
	</div>

	<!-- {/* Shadow effect */} -->
	<div class="shadow"></div>
</section>

<style>
	/* HeroCards background shadow */
	.shadow {
		position: absolute;
		background: hsl(var(--accent) / 0%);
		border-radius: 24px;
		rotate: 35deg;
		z-index: -1;
		width: 260px;
		top: 200px;
		height: 400px;
		filter: blur(150px);
		animation: shadow-slide infinite 4s linear alternate;
		will-change: transform;
	}

	@keyframes shadow-slide {
		from {
			background: hsl(var(--accent) / 40%);
			right: 460px;
		}
		to {
			background: hsl(var(--accent) / 80%);
			right: 160px;
		}
	}

	@media (max-width: 1024px) {
		.shadow {
			top: 70px;
		}

		@keyframes shadow-slide {
			from {
				background: hsl(var(--accent) / 40%);
				right: 460px;
			}
			to {
				background: hsl(var(--accent) / 80%);
				right: 160px;
			}
		}
	}

	@media (max-width: 768px) {
		.shadow {
			top: 70px;
			width: 160px;
			height: 350px;
			filter: blur(60px);
		}

		@keyframes shadow-slide {
			from {
				background: hsl(var(--accent) / 20%);
				right: 280px;
			}
			to {
				background: hsl(var(--accent) / 80%);
				right: 100px;
			}
		}
	}
</style>
