<script>
	export let data;
</script>

{#if data.user}
	<h1>Hello, {data.user.firstName} {data.user.lastName}!</h1>
{/if}

