<script>
    import Button from "./Button.svelte"
    import { cardDetails } from './store'


    function clearCardDisplayed(){
        cardDetails.update(store =>{
            store.month = '00'
            store.year = '00'
            store.cvc = '0000'
            store.name = ''
            store.creditCard = '0000 0000 0000 0000'
            return store
        })
    }
</script>

<div class="">
    <div class="lg:w-[372px] w-full flex flex-col items-center space-y-8">
        <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" 
            stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" 
            y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop 
            stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs>
        </svg>
    
        <div class="flex flex-col items-center"> 
            <h1 class="font-semibold">
                THANK YOU !
            </h1>
            <p class="text-gray-400 text-sm">We have added your credit card</p>
        </div>
        <Button additionalClass= 'mt-6' on:click= {clearCardDisplayed}>continue</Button>
    </div>
</div>