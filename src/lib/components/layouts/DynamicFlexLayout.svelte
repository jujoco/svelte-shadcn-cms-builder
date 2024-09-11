<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined;

	export { className as class };
</script>

<div class={cn('flex flex-wrap', className)}>
	<slot />
</div>
