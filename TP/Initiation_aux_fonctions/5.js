// le nombre de piles obtenus sur un lancé de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.

// le nombre de piles et de faces obtenus sur un lancé de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.

function nbPiles(n){
    let npile = 0;

    for (let i = 0; i < n; i++){
        
        let lance = Math.round(Math.random());
        if (lance == 1){
            npile++;
        }
    }
    
    return npile;
}

console.log(nbPiles(100));


function compteurlancebetter(n) {
    let npiles = 0;
    for(let i = 0; i < n; i++) {
        let lance = Math.round(Math.random());
        if(lance == 1) {
            npiles++;
        }
    }
    let npaires = n - npiles;
    console.log("Nombre de piles :")
    console.log(npiles);
    console.log("Nombre de paires :")
    console.log(npaires);
}

console.log(compteurlancebetter(10));