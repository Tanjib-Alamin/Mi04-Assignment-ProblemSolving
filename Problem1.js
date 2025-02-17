
function calculateVAT( price ) {
     
    if (price < 0 || price != "number") {
        return 'Invalid';
    }
    let vat = 7.5 / 100;
    const totalVat = price * vat;
    return totalVat;
}

console.log(calculateVAT());
