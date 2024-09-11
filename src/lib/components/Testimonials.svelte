<script lang="ts">
	import * as Card from '$components/ui/card';
	import CenteredContainer from './layouts/CenteredContainer.svelte';
	import DynamicFlexLayout from './layouts/DynamicFlexLayout.svelte';

	interface TestimonialProps {
		image: string;
		name: string;
		userName: string;
		comment: string;
	}

	const testimonials: TestimonialProps[] = [
		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe React',
			userName: '@john_Doe',
			comment: 'This landing page is awesome!'
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe React',
			userName: '@john_Doe1',
			comment:
				'Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
		},

		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe React',
			userName: '@john_Doe2',
			comment:
				'Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe React',
			userName: '@john_Doe3',
			comment:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe React',
			userName: '@john_Doe4',
			comment:
				'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.'
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe React',
			userName: '@john_Doe5',
			comment:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
	];
</script>

<section id="testimonials" class="">
	<CenteredContainer>
		<h2 class="mb-8 text-center text-3xl">Testimonials</h2>
		<DynamicFlexLayout class="">
			{#each testimonials as testimonial}
				<Card.Root class="min-w-[200px]">
					<Card.CardTitle about="testTitle" />
					<Card.CardContent>test</Card.CardContent>
				</Card.Root>
			{/each}
		</DynamicFlexLayout>
	</CenteredContainer>
</section>
