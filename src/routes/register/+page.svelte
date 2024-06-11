<script>
	import InputField from '../../components/input-field.svelte';

	export let form;
</script>

<form method="POST">
	<legend>Registro</legend>

	<InputField 
		{form}
		label="Email:"
		name="email" 
		id="register-email" 
		type="email" 
	/>

	<InputField 
		{form}
		label="Senha:"
		name="password"
		id="register-password"
		type="password"
	/>

	<InputField 
		{form}
		label="Nome:"
		name="firstName" 
		id="register-first-name"
	/>
	<InputField 
		{form}
		label="Sobrenome:"
		name="lastName" 
		id="register-first-name"
	/>

	<button type="submit">Registrar</button>
	<a href="/login">Entrar</a>
</form>
