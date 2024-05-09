<script>
    import { getContext } from "svelte";

    export let name= ''
    export let type= ''
    export let id = ''
    export let value = type === 'text' ? '' : null;
    export let placeholder = ''
    export let additionalClasses = ''
    export let maxLength 
    export let inputmode
    export let border = 'border-indigo-900'

</script>

<input 
    type={type}
    id={id} 
    class="border {border} flex flex-col rounded-md  {additionalClasses}" 
    {placeholder}
    {value}
    {name}
    maxlength = {maxLength}
    {inputmode}
    on:input
    on:blur
>