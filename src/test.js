const regex = /(\d{4}-?){4}/
let num = '1234567890123456'

if ( regex.test(num)) {
    console.log(num)
} else {
    console.log('different')
}