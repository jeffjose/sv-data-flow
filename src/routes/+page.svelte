<script lang="ts">
	import Page from '$lib/components/page.svelte';

	import { page } from '$app/state';

	const { data } = $props();
</script>

<Page name="/page.svelte">
	<pre class="text-xs font-mono">
data = {JSON.stringify(data, null, 2)}
page.data = {JSON.stringify(page.data, null, 2)}
		</pre>
</Page>
