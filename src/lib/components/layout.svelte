<script lang="ts">
	const { name, children = null } = $props();
</script>

<div class="p-4 bg-red-100 border border-dashed border-red-500">
	<p>{name}</p>
	{@render children?.()}
</div>
