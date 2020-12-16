let N = 194
let M = 3

if (M > N) {
    let tmp = M
    M = N
    N = tmp
}
let counter = 0
let zbir = 0
let counter2 = 0
let zbir2 = 0

for (let i = M; i <= N; i++) {
    zbir += i
    counter++
}
console.log(`Prosek svih bojeva je: ${zbir / counter}`)

{
    for (let i = M; i <= N; i++) {
        let x = i + ''
        if (x.includes('2')) {
            zbir2 += i
            counter2++
        }
    }
}
console.log(`Prosek bojeva sa cifrom 2 je: ${zbir2 / counter2}`)