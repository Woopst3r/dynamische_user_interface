let getal = prompt("Voer hier een nummer in:")
getal = parseInt(getal)
antwoord = "";
for(let x = 1; x <= getal; x++){
    console.log(`loop: ${x}`)
    for(let i = 1; i < x; i++){
        if(i != 1){
            antwoord += "-"
        }
        antwoord += i
        
    }
    antwoord += "\n"
}

for(let x = getal; x >= 1; x--){
    console.log(`loop-: ${x}`)
    for(let i = 1; i <= x; i++){
        if(i == 1){
            antwoord += `${i}`
        }
        else{
            antwoord += `-${i}`
        }
    }
    antwoord += "\n"
}
document.getElementById("antwoord").innerText = antwoord;