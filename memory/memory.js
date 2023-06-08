animallijst = ['dog','cat','bird','snake','rat','fly','duck','rock','grass','musk'];
animallijst = shuffle(animallijst);

function shuffle(array){
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
