'use strict'

let sum = 0
const argv = process.argv
for (let i=2; i < argv.length; i++){
    sum += Number(argv[i])
}
console.log(sum)