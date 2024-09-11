<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import NavBar from '$components/NavBar.svelte';
</script>

<ModeWatcher />
<NavBar />
<slot />
