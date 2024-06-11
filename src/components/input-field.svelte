<script lang="ts">
	import type { FormActionFail } from "../types/form-action";

  export let form: FormActionFail<any> | null;
  export let name;
  export let type = "text";
  export let required = false;
  export let id;
  export let label;

  $: error = form?.issues.find(({ path: [path] }) => path === name)
</script>

<div class="input-field" class:field-error={!!error}>
  <label for={id}>{label}</label>
  <input 
    value={form?.data?.[name] ?? ''} 
    {name}
    {id}
    {type}
    {required}
  />
  {#if error}
    <span class="error">{error.message}</span>
  {/if}
</div>

<style>
	.field-error {
		color: red;
	}

  .field-error input {
		border-color: red;
		color: red;
	}
</style>