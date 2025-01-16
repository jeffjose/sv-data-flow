<script lang="ts">
	const { name, children = null } = $props();
</script>

<div class="p-4 bg-white">
	<p>{name}</p>
	{@render children?.()}
</div>
