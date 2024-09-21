<script lang="ts">
	import Bookings from '@components/features/bookings.svelte';

	let title = 'Appointment Page';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<Bookings />
