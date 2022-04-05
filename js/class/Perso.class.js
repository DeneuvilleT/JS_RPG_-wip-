class Perso {
    constructor(name, hp, mp, attack, defense, spell) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.attack = attack;
        this.defense = defense;
        this.spell = spell;
        this.barLife = function (bar, typeDegat) {
            if (this.name === "Hero") {
                let widthBar = bar.getBoundingClientRect();
                bar.style.width = `${widthBar.width - (typeDegat/2)}px`;
                console.log(widthBar, typeDegat)
            }
        };
    };


    



    attackPerso(target) {
        this.attack = getRandomInteger(20, 40);
        target.hp -= this.attack;

        this.barLife(barHp, this.attack);

        $('#info').append(`<p>L'attaque de ${this.name} a fait ${this.attack} points de dégats à ${target.name}.</p>`);

        //Gestion de fin de HP
        if (target.hp <= 0) {
            this.hp = 0;
            $('#barHp').css('display', 'none');
        } else {
            $('#perso1').text(`${this.hp}`);
        };
    };


    defensePerso(target) {
        this.attack = getRandomInteger(20, 40);
        let breakDefense = getRandomInteger(1, 2);

        // Gestion de l'usure de la defense
        if (breakDefense === 1) {
            this.defense = parseInt((this.defense /= 2).toFixed(1));
        } else if (this.defense === 0) {
            defendre.disabled = true;
        };

        let breakDmng = this.attack - this.defense;
        this.hp -= breakDmng;

        this.barLife(barHp, breakDmng)

        $('#info').append(`<p>${this.name} a encaissé ${this.defense} de l'attaque de ${target.name}</p>`);

        //Gestion de fin de HP
        if (target.hp <= 0) {
            this.hp = 0;
            $('#barHp').css('display', 'none');
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

        //Gestion de fin de HP
        if (target.hp <= 0) {
            this.hp = 0;
            $('#barMp').css('display', 'none');
        } else {
            $('#perso1').text(`${this.hp}`);
        };
    };
};

export default Perso;

