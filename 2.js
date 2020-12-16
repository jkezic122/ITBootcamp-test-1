// N = 3           N = 5

//     *    *      *        *   
//     **  **      **      **
//     ******      ***    ***
//     **  **      ****  ****
//     *    *      **********
//                 ****  ****
//                 ***    ***
//                 **      **
//                 *        *

let N = 5

for (let i = 1; i < N; i++) {
    console.log('*'.repeat(i) + ' '.repeat(2 * (N - i)) + '*'.repeat(i))
}

for (let i = N; i > 0; i--) {
    console.log('*'.repeat(i) + ' '.repeat(2 * N - 2 * i) + '*'.repeat(i))
}