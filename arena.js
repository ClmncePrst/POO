import { Warrior, WarriorAxe, WarriorSpear, WarriorSword } from './Warrior.js';

// Création de deux guerriers
const guerrier1 = new Warrior('Joan', 20, 100);
const guerrier2 = new Warrior('Leon', 18, 100);

// Affichage des états initiaux
console.log(`${guerrier1.name} - Points de vie : ${guerrier1.life}`);
console.log(`${guerrier2.name} - Points de vie : ${guerrier2.life}`);

// Test de la méthode "attack"
guerrier1.attack(guerrier2);

// Vérification de l'état après l'attaque
console.log(`${guerrier1.name} - Points de vie : ${guerrier1.life}`);
console.log(`${guerrier2.name} - Points de vie : ${guerrier2.life}`);

// Vérification de la méthode isAlive
console.log(`${guerrier1.name} est ${guerrier1.isAlive() ? 'vivant' : 'mort'}`);
console.log(`${guerrier2.name} est ${guerrier2.isAlive() ? 'vivant' : 'mort'}`);


function battle(guerrier1, guerrier2) {
    // Boucle de l'attaque jusqu'à ce qu'un des guerriers meure
    while (guerrier1.isAlive() && guerrier2.isAlive()) {
        guerrier1.attack(guerrier2);
        guerrier2.attack(guerrier1);
    }
    // Vérification de l'état après l'attaque
    console.log(`${guerrier1.name} - Points de vie : ${guerrier1.life}`);
    console.log(`${guerrier2.name} - Points de vie : ${guerrier2.life}`);

    // Vérification de la méthode isAlive
    console.log(`${guerrier1.name} est ${guerrier1.isAlive() ? 'vivant' : 'mort'}`);
    console.log(`${guerrier2.name} est ${guerrier2.isAlive() ? 'vivant' : 'mort'}`);
    // Vérification du résultat de la bataille
    if (!guerrier1.isAlive() && !guerrier2.isAlive()) {
        console.log("It's a draw.");
    } else if (!guerrier1.isAlive()) {
        console.log(`${guerrier2.name} wins!`);
    } else {
        console.log(`${guerrier1.name} wins!`);
    }
}

// Bataille entre les deux guerriers
battle(guerrier1, guerrier2);



//  Bataille avec des guerriers spécifiques

// Création de deux guerriers avec des armes différentes
const warriorAxe = new WarriorAxe('Gimli', 25, 100);
const warriorSword = new WarriorSword('Aragorn', 20, 100);

// Bataille entre les deux guerriers armés 
battle(warriorAxe, warriorSword);