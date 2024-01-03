class Warrior {
    constructor(name, power, life) {
        this.name = name;
        this.power = power;
        this.life = life;
    }
    attack(opponent) {
        opponent.life -= this.power;
        console.log(`${this.name} attaque ${opponent.name} et lui inflige ${this.power} points de dégâts`);
    }
    isAlive() {
        return this.life > 0;
    }
}
class WarriorAxe extends Warrior {

    attack(opponent) {
        if (opponent instanceof WarriorSword) {
            super.attack(opponent);
            opponent.life -= this.power * 2; // Double "power" contre WarriorSword
            console.log(`Dégâts supplémentaires! ${this.name} inflige ${this.power} points de dégâts supplémentaires à ${opponent.name}.`);
        } else {
            super.attack(opponent);
        }
    }
}

class WarriorSword extends Warrior {

    attack(opponent) {
        if (opponent instanceof WarriorSpear) {
            super.attack(opponent);
            opponent.life -= this.power * 2; // Double "power" contre WarriorSpear
            console.log(`Dégâts supplémentaires! ${this.name} inflige ${this.power} points de dégâts supplémentaires à ${opponent.name}.`);
        } else {
            super.attack(opponent);
        }
    }
}

class WarriorSpear extends Warrior {

    attack(opponent) {
        if (opponent instanceof WarriorAxe) {
            super.attack(opponent);
            opponent.life -= this.power * 2; // Double "power" contre WarriorAxe
            console.log(`Dégâts supplémentaires! ${this.name} inflige ${this.power} points de dégâts supplémentaires à ${opponent.name}.`);
        } else {
            super.attack(opponent);
        }
    }
}
export { Warrior, WarriorAxe, WarriorSpear, WarriorSword };