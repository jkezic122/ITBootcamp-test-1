// Задатак

// Написати следеће функције:

// На основу температуре у °C враћа вредност у °F
// На основу температуре у °F враћа вредност у °C


function cToF(TC) {
    return TC * 1.8 + 32
}

function fToC(TF) {
    return (TF - 32) / 1.8
}

console.log(cToF(32))
console.log(fToC(74.2))