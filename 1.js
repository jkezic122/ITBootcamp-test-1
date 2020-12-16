// Написати функцију racun(cena,dan,penzioner)

// cena - Број већи од 0 - Проверити исправност (Функција враћа -1 ако је неисправно)
// dan - Број између 1 и 7 (означава дане у недељи) - Без провере
// penzioner - true / false (означава да ли је купац пензионер) - Без провере
// Функција враћа рачун на следећи начин:

// Ако је купац пензионер и недеља је: попуст од 25%
// Ако је купац пензионер и није недеља: попуст од 10%
// Ако купац није пензионер и среда је: попуст од 10%
// Ако купац није пензионер и није среда: нема попуста
// Напомена:

// Рад без функције - 70% поена
// Рад без Boolean информације (penzioner) - 70% поена


function racun(cena, dan, penzioner) {
    if (cena <= 0) return - 1
    if (penzioner && dan == 7) return cena * 0.75
    // if (penzioner && dan != 7) return cena * 0.9 
    // if (!penzioner && dan == 3) return cena * 0.9 
    if (penzioner || dan == 3) return cena * 0.9
    return cena
}


console.log(racun(150,1,false))
console.log(racun(100,7,true))
console.log(racun(100,3,true))
console.log(racun(1978, 7, true))