<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import NavBar from '@/components/NavBar.svelte';
	import Footer from '@/components/Footer.svelte';
</script>

<ModeWatcher />
<NavBar />
<slot />
<Footer />
