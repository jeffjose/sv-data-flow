<script lang="ts">
	import Layout from '$lib/components/layout.svelte';
	import '../app.css';
	let { children, data } = $props();
</script>

<div class="p-2">
	<Layout name="/layout.svelte">
		{JSON.stringify(data)}
		{@render children()}
	</Layout>
</div>
