<script lang="ts">
	import Section from './layouts/Section.svelte';
	import { Button } from './ui/button';
</script>

<Section id="cta" class="my-24 bg-card sm:my-32">
	<hr />
	<div class="place-items-center py-16 lg:grid lg:grid-cols-2">
		<div class="lg:w-3/4">
			<h2 class="text-3xl font-bold md:text-4xl">
				All Your
				<span class="bg-gradient-to-b from-accent/60 to-accent bg-clip-text text-transparent">
					{' '}
					Ideas & Concepts{' '}
				</span>
				In One Interface
			</h2>
			<p class="mb-8 mt-4 text-xl text-muted-foreground lg:mb-0">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, beatae. Ipsa tempore ipsum
				iste.
			</p>
		</div>

		<div class="space-y-3 lg:w-3/4">
			<Button class="w-full md:mr-3 md:w-auto">Request a Demo</Button>
			<Button variant="outline" class="w-full md:w-auto">View all features</Button>
		</div>
	</div>
	<hr />
</Section>
