<script>
    import { cardDetails } from './store'
    import Button from './Button.svelte'
    import Input from './Input.svelte';


    let name = ''
    let cardNumber = ''
    let month = ''
    let year = ''
    let cvc = ''
    let showError= false

    function updateCardMonth(event,month){
        month = event.target.value 
        cardDetails.update(store =>{
            store.month = month
            return store
        })
    }
    function updateCardYear(event,year){
        year = event.target.value 
        cardDetails.update(store =>{
            store.year = year
            return store
        })
    }
    function updateCardCvc(event,cvc){
        cvc = event.target.value 
        cardDetails.update(store =>{
            store.cvc = cvc
            return store
        })
    }
    function updateCardName(event,name){
        name = event.target.value 
        cardDetails.update(store =>{
            store.name = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            return store
        })
    }

    

    // function updateCardNumber(event){
    //     if(cardNumber.length !== 19) {
    //         showError=true
    //     }
    //     cardDetails.update(store =>{
    //         return store
    //     })
    // }

    // function validation(number){
    //     if (regex.test(number)) {
    //         showError= false
    //     } else{
    //         let numberE = document.getElementById('cardNumber')
    //         numberE.classList.remove('border-violet-900')
    //         numberE.classList.add('border-red-500')
    //         showError= true
    //         console.log(showError)
    //     }
    // }
</script>

<div class=" box-border px-28 pt-60 h-full w-[100%] text-xs font-semibold">
    <div class="">
        <label for="name" class="capitalize block mb-1 ">cardholder name</label>
        <Input on:input={updateCardName} bind:value={name} type="text" id='name' additionalClasses='h-8 w-[372px] box-border p-3' maxLength = 50></Input>
    </div>

    <div class="mt-4">
        <label for="cardNumber" class="capitalize block mb-1 ">card number</label>
        <!-- <input type="text" id="cardNumber" class="border border-violet-900 rounded-md h-8 w-[372px] box-border p-3" bind:value={number} on:input={updateCardNumber}> -->
        <Input bind:value={cardNumber} type="text" id='number' additionalClasses='h-8 w-[372px] box-border p-3' maxLength= 19></Input>
    </div>
    {#if showError}
        <div class="">
            <p class="text-red-500 text-[10px]" id="format"> wrong formats, numbers only </p>
        </div>
    {/if}

    <div class="mt-4">
        <div class="flex justify-between items-center w-[372px] box-border pr-[152px]">
            <p class="mb-1">Exp date (mm/yy)</p>
            <p class=""> CVC </p>
        </div>
        <div class="flex justify-between items-center w-fit space-x-4">
            <div class="space-x-2 flex">
                <Input on:input={updateCardMonth} id='month' additionalClasses= 'h-8 w-16 text-center' placeholder="MM" maxLength= 2></Input>
                <Input on:input={updateCardYear} id='year' additionalClasses= 'h-8 w-16 text-center' placeholder="YY" maxLength= 2></Input>
            </div>
            <!-- <input type="text" id="CVC" class="border border-violet-900 rounded-md w-36 h-8 text-center" on:input={updateCardCvc} placeholder="e.g. 123"> -->
            <Input on:input={updateCardCvc} id='cvc' additionalClasses= 'w-36 h-8 text-center' placeholder="e.g. 123" maxLength= 3></Input>
        </div>
        <div class="flex justify-between mt-1 items-center w-[372px] text-[10px] text-red-500 box-border pr-[116px]">
            <p class="">can't be blank</p>
            <p class=""> can't be blank </p>
        </div>
        <!-- <Button on:click={validation}>confirm</Button> -->
    </div>
</div>



