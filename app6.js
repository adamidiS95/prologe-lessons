function LogName(name , surname) {
        console.log(`moe imya ${name} ${surname} `)
}

LogName(`Gena`, `Kovalev`)

function countDepositSum(depositInUSD , month , rate){
    const sum = depositInUSD * (1 + rate / 12) ** month
    return sum
}

const example1 = countDepositSum(1000, 24, 0.12)
console.log (example1) 

console.log   = countDepositSum(1000, 48, 0.12)