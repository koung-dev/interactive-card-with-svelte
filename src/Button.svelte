<script>
    export let additionalClass= ''
</script>

<button 
    class="lg:w-[372px] w-full text-white bg-indigo-900 mt-4 rounded-md h-8 {additionalClass}"
    on:click|preventDefault>
    <slot/>
</button>
