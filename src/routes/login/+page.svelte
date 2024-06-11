<script>
	import InputField from "../../components/input-field.svelte";

	export let form;
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

	<button type="submit">Entrar</button>
	<a href="/register">Registrar-se</a>
</form>

