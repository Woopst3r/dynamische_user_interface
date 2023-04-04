var drank = ["fris", "bier", "wijn"];
var prijzen = {
    fris: 2,
    bier: 3,
    wijn: 4
};

function bon(bestelling) {
    var totaal = 0;
    console.log("Bon:");
    for (var i = 0; i < bestelling.length; i++) {
        var item = bestelling[i];
        var prijs = prijzen[item.drink];
        var subtot = prijs * item.quantity;
        console.log(`${item.quantity} x ${item.drink} = €${subtot.toFixed(2)}`);
        totaal += subtot;
    }
    console.log(`Totaal: €${totaal.toFixed(2)}`);
}

function bestelling() {
    var order = [];
    var extra = "Y";
    while (extra != "N") {
        var aantal = prompt("Wat wilt u bestellen?: ");
        var hoeveel = prompt(`Hoeveel ${aantal}?: `);
        order.push({drink: aantal, quantity: hoeveel});
        extra = prompt("Wil je nog meer bestellen? Y/N: ");
    }
    console.log(order);
    bon(order);
}