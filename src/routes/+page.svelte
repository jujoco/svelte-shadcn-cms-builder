<script lang="ts">
	import About from '@components/About.svelte';
	import CTA from '@components/CTA.svelte';
	import FAQ from '@components/FAQ.svelte';
	import Features from '@components/Features.svelte';
	import Hero from '@components/Hero.svelte';
	import HowItWorks from '@components/HowItWorks.svelte';
	import Newsletter from '@components/Newsletter.svelte';
	import Pricing from '@components/Pricing.svelte';
	import Services from '@components/Services.svelte';
	import Sponsors from '@components/Sponsors.svelte';
	import Team from '@components/Team.svelte';
	import Testimonials from '@components/Testimonials.svelte';

	let title = 'Home Page';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<Hero />
<Sponsors />
<About />
<HowItWorks />
<Features />
<Services />
<CTA />
<Testimonials />
<Team />
<Pricing />
<Newsletter />
<FAQ />
