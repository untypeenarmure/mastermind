function mastermind() {
    // Initialisation des variables
    var combinaison = new Array(4);
    var guess;
    var tGuess;
    var nbEssais = 8;
    var bon = 0;
    var mal = 0;
    var bGagne = false;
    var bPerdu = false;

    // Création de la combinaison. Génération aléatoire
    for (let i = 0; i < 4; i++) {
        combinaison[i] = Math.round((Math.random() * 7) + 1);
    }
console.log(combinaison);

    // Saisie par l'utilisateur de ses combinaisons.
    // Contrôle saisie
    do {
        do {
            guess = prompt("Saisir une combinaison de 4 chiffres, compris entre 1 et 8 (inclus)");
        } while (isNaN(guess) || guess.length != 4 || guess.includes(" ") || guess.includes("0") || guess.includes("9") && !bPerdu && !bGagne);
        
    // Création d'un tableau avec les données utilisateurs    
            tGuess = guess.split("").map(Number);  // Conversion de string vers number

    console.log(tGuess);
    // Comparaison des valeurs des 2 tableaux et de leurs index
            for (let i= 0; i < 4; i++) {
                if (combinaison.includes(tGuess[i])) {
                    if (combinaison[i] == tGuess[i]) {
                        bon ++;         // Si bien placé
                    } else {
                        mal ++;         // Si présent mais mal placé
                    }
                    if (bon == 4) {     // Condition de sortie
                        bGagne = true;
                    }
                }
            } 
            nbEssais --;                // MAJ Essais
            if (nbEssais == 1) {
                console.error("Attention, dernière chance !")
            }
            if (nbEssais == 0) {        // Condition de sortie
                bPerdu = true;
            }
    
    // Affichage entre les tours        
        console.log("Combinaison précédente: "+tGuess+" \nBien placés: "+bon+"\nMal placés: "+mal+"\nEssais restants: "+nbEssais);
            bon = 0;
            mal = 0;
    } while (!bPerdu && !bGagne)   // Condition pour boucler
            
    if (bGagne) {
        alert("Bravo ! Vous avez gagné !");
    }
    if (bPerdu) {
        alert("Game Over ! La bonne réponse était \n"+ combinaison.join(""));
    }


















}