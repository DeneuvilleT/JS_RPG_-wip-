class Perso {
    constructor(name, hp, attack, defense, spell) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.spell = spell;
    };

    
    attackPerso(target) {
        this.attack = getRandomInteger(20, 40);
        target.hp -= this.attack;


        $('#info').append(`<p>L'attaque de ${this.name} a fait ${this.attack} points de dégats à ${target.name}.</p>`);

        if (target < 0) {
            this.hp = 0;
        };

        $('#perso1').text(`${this.hp}`);
    }



    defensePerso(target) {
        this.attack = getRandomInteger(20, 40);
        let dmg = this.attack - this.defense;
        this.hp -= dmg;


        $('#info').append(`<p>${this.name} a encaissé ${this.defense} de l'attaque de ${target.name}</p>`);
        if (target < 0) {
            this.hp = 0;
        };

        $('#perso1').text(`${this.hp}`);
    }





    spellPerso(target) {
        this.spell = getRandomInteger(30, 60);
        target.hp -= this.spell;


        $('#info').append(`<p>Le sort de ${this.name} a fait ${this.spell} points de dégats à ${target.name}
        </p>`);

        if (target < 0) {
            this.hp = 0;
        };

        $('#perso1').text(`${this.hp}`);
    };
};

export default Perso

