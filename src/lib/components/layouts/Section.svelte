<script lang="ts">
	import { cn } from '@lib/utils';
	import CenteredContainer from './CenteredContainer.svelte';

	export let id: string | undefined = undefined;
	let className: string | undefined = undefined;
	export { className as class };
</script>

<section {id} class={cn(className)}>
	<CenteredContainer>
		<slot />
	</CenteredContainer>
</section>
