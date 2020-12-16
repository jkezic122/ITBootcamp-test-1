
function racun(cena, dan, penzioner) {
    if (cena <= 0) return -1
    if (penzioner && dan == 7) return cena * 0.75
    if (penzioner && dan != 7) return cena * 0.9
    if (!penzioner && dan == 3) return cena * 0.9
    return cena
}

console.log(racun(150, 1, false))
console.log(racun(100, 7, true))
console.log(racun(100, 3, true))
console.log(racun(1978, 7, true))