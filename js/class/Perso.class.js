class Perso {
    constructor(name, hp, mp, attack, defense, spell) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.attack = attack;
        this.defense = defense;
        this.spell = spell;
    };


    attackPerso(target) {
        this.attack = getRandomInteger(20, 40);
        target.hp -= this.attack;

        $('#info').append(`<p>L'attaque de ${this.name} a fait ${this.attack} points de dégats à ${target.name}.</p>`);

        if (target.hp <= 0) {
            this.hp = 0;
        } else {
            $('#perso1').text(`${this.hp}`);
        };
    };


    defensePerso(target) {
        this.attack = getRandomInteger(20, 40);
        let breakDefense = getRandomInteger(1, 2);
        if (breakDefense === 1) {
            this.defense = parseInt((this.defense /= 2).toFixed(1));
        } else if (this.defense === 0) {
            defendre.disabled = true;
        };

        let dmg = this.attack - this.defense;
        this.hp -= dmg;

        $('#info').append(`<p>${this.name} a encaissé ${this.defense} de l'attaque de ${target.name}</p>`);
        if (target.hp <= 0) {
            this.hp = 0;
        } else {
            $('#perso1').text(`${this.hp}`);
        };
    };


    spellPerso(target) {
        if (this.mp <= 0) {
            $('#info').append("<p>Vous n'avez plus assez de mana</p>");
            sort.disabled = true;
            return;
        } else {
            this.mp -= 20;
            this.spell = getRandomInteger(30, 60);
            target.hp -= this.spell;
        };

        $('#info').append(`<p>Le sort de ${this.name} a fait ${this.spell} points de dégats à ${target.name}
        </p>`);

        if (target.hp <= 0) {
            this.hp = 0;
        } else {
            $('#perso1').text(`${this.hp}`);
        };
    };
};

export default Perso;

