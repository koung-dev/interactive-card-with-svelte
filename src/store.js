import {writable} from 'svelte/store'

export const cardDetails = writable ({
    name : 'name',
    creditCard :'0000 0000 0000 0000',
    month : '00',
    year : '00',
    cvc : '0000',
})

// # [] {}