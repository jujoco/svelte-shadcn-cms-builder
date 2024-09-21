<script lang="ts">
	import { Button } from '@components/ui/button';
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
</section>
