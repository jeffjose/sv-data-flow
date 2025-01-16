<script lang="ts">
	import Layout from '$lib/components/layout.svelte';
	let { children } = $props();
</script>

<Layout name="/one/two/layout.svelte">{@render children()}</Layout>
