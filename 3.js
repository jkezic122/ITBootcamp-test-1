let N = 194
let M = 3

if(M > N){
    let tmp = M
    M = N
    N = tmp
}
let counter = 0
let zbir = 0
for(let i = M; i <= N; i++){
    counter++
    zbir += i
}
console.log('Prosek svih bojeva je: ', (zbir / counter))

{
    for(let i = M; i <= N; i++){
        let x = i + ''
        if(x.includes('2')){
            counter++
            zbir += i
        }
    }
    console.log('Prosek bojeva sa cifrom 2 je: ', (zbir / counter))
}