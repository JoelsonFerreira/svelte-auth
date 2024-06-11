<script>
	import InputField from "../../components/input-field.svelte";

	export let form;

  $: error = form?.issues.find(({ path }) => path.length === 0)
</script>

<form method="POST">
	<legend>Entrar</legend>

	<InputField 
		{form}
		label="Email:"
		name="email" 
		id="login-email"
		type="email" 
		required
	/>
	<InputField 
		{form}
		label="Senha:"
		name="password"
		id="login-password"
		type="password"
		required
	/>
	
  {#if error}
    <span class="error">{error.message}</span>
  {/if}

	<button type="submit">Entrar</button>
	<a href="/register">Registrar-se</a>
</form>

