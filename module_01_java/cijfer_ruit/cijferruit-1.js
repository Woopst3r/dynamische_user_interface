let getal = prompt("Voer hier een nummer in:")
getal = parseInt(getal)
antwoord = "";
for(let x = 1; x < getal; x++){
    console.log(`loop: ${x}`)
    for(let i = 0; i < x; i++){
        if(i < 1){
            antwoord += `${i + 1}`
        }
        else{
            antwoord += `-${i + 1}`
        }
    }
    antwoord += "\n"
}

for(let x = getal; x > 0; x--){
    console.log(`loop-: ${x}`)
    for(let i = 0; i < x; i++){
        if(i < 1){
            antwoord += `${i + 1}`
        }
        else{
            antwoord += `-${i + 1}`
        }
    }
    antwoord += "\n"
}
document.getElementById("antwoord").innerText = antwoord;