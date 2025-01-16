<script lang="ts">
	import { page } from '$app/state';
	import Layout from '$lib/components/layout.svelte';
	import '../app.css';
	let { children, data } = $props();
</script>

<div class="p-2">
	<Layout name="/layout.svelte">
		<pre class="text-xs font-mono">
data = {JSON.stringify(data, null, 2)}
page.data = {JSON.stringify(page.data, null, 2)}
		</pre>
		{@render children()}
	</Layout>
</div>
