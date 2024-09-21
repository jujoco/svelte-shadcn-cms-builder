<script lang="ts">
	import { Origami } from 'lucide-svelte';
	import CenteredContainer from './layouts/CenteredContainer.svelte';
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

<footer id="footer">
	<hr />
	<CenteredContainer>
		<div class="grid grid-cols-2 gap-x-12 gap-y-8 py-20 md:grid-cols-4 xl:grid-cols-6">
			<div class="col-span-full xl:col-span-2">
				<a href="/" class="flex space-x-2">
					<Origami strokeWidth={1.5} class="h-6 w-6 lg:h-8 lg:w-8" />
					<span class="text-md text-xl font-bold">{companyName}</span>
				</a>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="text-lg font-bold">Follow US</h3>
				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> Github </a>
				</div>

				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> Twitter </a>
				</div>

				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> Dribbble </a>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="text-lg font-bold">Platforms</h3>
				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> Web </a>
				</div>

				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> Mobile </a>
				</div>

				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> Desktop </a>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="text-lg font-bold">About</h3>
				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> Features </a>
				</div>

				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> Pricing </a>
				</div>

				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> FAQ </a>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="text-lg font-bold">Community</h3>
				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> Youtube </a>
				</div>

				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> Discord </a>
				</div>

				<div>
					<a rel="noreferrer noopener" href="/" class="opacity-60 hover:opacity-100"> Twitch </a>
				</div>
			</div>
		</div>

		<div class="pb-14 text-center">
			<h3>
				&copy; 2024 Landing pages inspired by
				<a
					rel="noreferrer noopener"
					target="_blank"
					href="https://www.linkedin.com/in/leopoldo-miranda/"
					class="border-primary text-accent transition-all hover:border-b-2"
				>
					Leo Miranda
				</a>
			</h3>
		</div>
	</CenteredContainer>
</footer>
