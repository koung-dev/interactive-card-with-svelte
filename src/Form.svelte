<script>
    import { cardDetails } from './store'
    import Button from './Button.svelte'
    import Input from './Input.svelte';
    import { createEventDispatcher } from 'svelte';
    import { setContext } from 'svelte'

    let dispatch = createEventDispatcher()
    let allErrorsAreFalse = false
    let name= ''
    let cardNumber = ''
    let errors= {
                    errorName: false,
                    errorNumber : false,
                    errorMY : false,
                    errorCvc : false
                }
    let month = ''
    let year = ''
    let cvc = ''
    const regexCard = /^(\d{4}\s?){4}$/
    const regexCvc = /^\d{3,4}$/
    let borders = {}

    // updating the store with inputs values
    function updateCardMonth(event){
        cardDetails.update(store =>{
            store.month = event.target.value
            return store
        })
    }
    function updateCardYear(event){
        cardDetails.update(store =>{
            store.year = event.target.value
            return store
        })
    }
    function updateCardCvc(event){
        cardDetails.update(store =>{
            store.cvc = event.target.value
            return store
        })
    }
    function updateCardName(event){
        cardDetails.update(store =>{
            store.name = event.target.value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            return store
        })
    }
    function updateCardNumber(event){
        // cardNumber= event.target.value
        cardDetails.update(store =>{
            store.creditCard = event.target.value
            return store
        })
    }

    function saveInput(event) {
        const field = event.target.name; // Obtenir le nom du champ
        const value= event.target.value
        switch(field) {
            case 'name':
                name = value
                break;
            case 'number':
                cardNumber = value
                break;
            case 'month':
                month = value
                break;
            case 'year':
                year = value
                break
            case 'cvc':
                cvc = value
                break;
            default:
                console.log("No value yet");
        }
    }

    //validation of the formular if so we send the confirmation to the App.svelte through the dispatch  
    function handleSubmit(){
        validation()  
        for (let error in errors) {
            if (errors[error]) {
                allErrorsAreFalse = false;
                break;
            }else {
                allErrorsAreFalse = true
            }
        }
        if(allErrorsAreFalse){
            dispatch('submit')
        }
    }

    // formating the credit card input to '0000 0000 0000 0000'
    $: cardNumber = cardNumber.match(/\d/g)
            ?.slice(0, 16)
            .map((d,i) => i==3||i==7||i==11 ? d+" " : d)
            .join("")
            ?? "";

    function validation (){
        if (name === ''){
            errors.errorName = true
            borders.name = 'border-red-500'
        } else {
            errors.errorName = false
            borders.name = 'border-indigo-900'
        } 
        if(!regexCard.test(cardNumber)) {
            errors.errorNumber= true
            borders.number = 'border-red-500'
        } else{
            errors.errorNumber= false
            borders.number = 'border-indigo-900'
        }
        if(month === '' || year === ''){
            errors.errorMY = true   
            borders.my = 'border-red-500'       
        } else {
            errors.errorMY = false
            borders.my = 'border-indigo-900'
        }
        if(cvc === ''){
            errors.errorCvc = true
            borders.cvc = 'border-red-500'
        } else {
            errors.errorCvc = false
            borders.cvc = 'border-indigo-900'
        } 
    }

</script>

<form class="">
    <div class="">
        <label for="name" class="capitalize block mb-1 lg:text-sm text-[10px]">cardholder name</label>
        <Input 
            bind:value={name}
            on:input={saveInput}
            on:input={updateCardName}
            type="text" 
            name= 'name'
            id= 'name'
            additionalClasses='lg:h-8 lg:w-[372px] lg:p-3 px-3 py-1 w-full' 
            maxLength = 50
            inputmode = 'text'
            border= {borders.name}
        >
        </Input>
    </div>
    {#if errors.errorName}
        <div class="">
            <p class="text-red-500 text-[10px]" id="format"> name is required </p>
        </div>
    {/if}

    <div class="mt-4">
        <label for="cardNumber" class="capitalize block mb-1 lg:text-sm text-[10px]">card number</label>
        <Input 
            bind:value={cardNumber} 
            on:input={saveInput}
            on:input={updateCardNumber}
            type="text" 
            name='number' 
            id='cardNumber'
            additionalClasses='lg:h-8 lg:w-[372px] lg:p-3 px-3 py-1 w-full' 
            maxLength= 19
            inputmode='numeric'
            border= {borders.number}
        >
        </Input>
    </div>
    {#if errors.errorNumber}
        <div class="">
            <p class="text-red-500 text-[10px] flex" id="format"> 
                wrong format
            </p>
        </div>
    {/if}

    <div class="mt-4">
        <div class="flex justify-between items-center lg:w-[372px] lg:pr-[152px] lg:text-sm w-full pr-[169px] text-[10px]">
            <p class="mb-1">Exp date (mm/yy)</p>
            <p class=""> CVC </p>
        </div>
        <div class=" lg:w-fit w-full flex justify-between items-center space-x-4">
            <div class="space-x-2 flex">
                <Input 
                    on:input={saveInput}
                    on:input={updateCardMonth} 
                    id='month' 
                    additionalClasses= 'h-8 lg:w-16 w-10 text-center' 
                    placeholder="MM" 
                    maxLength= 2 
                    inputmode = 'numeric'
                    name = 'month'
                    border= {borders.my}
                />
                <Input 
                    on:input={saveInput}
                    on:input={updateCardYear} 
                    id='year' 
                    additionalClasses= 'h-8 lg:w-16 w-10 text-center' 
                    placeholder="YY" 
                    maxLength= 2 
                    inputmode = 'numeric'
                    name= 'year'
                    border= {borders.my}
                />
            </div>
            <Input 
                on:input={saveInput}
                on:input={updateCardCvc} 
                id='cvc' 
                additionalClasses= 'lg:w-36 w-[190px] h-8 text-center' 
                placeholder="e.g. 123" 
                maxLength= 4 
                inputmode = 'numeric'
                name = 'cvc'
                border= {borders.cvc}
            />
        </div>
        <div class="flex justify-between relative mt-1 items-center lg:w-[372px] w-full text-[10px] text-red-500 pr-[116px]">
            {#if errors.errorMY}
                    <p class="">can't be blank</p>                
            {/if}
            {#if errors.errorCvc}
                    <p class="absolute right-[122px]">can't be blank</p>                
            {/if}            
        </div>
        <Button on:click={handleSubmit}>confirm</Button>
    </div>
</form>

