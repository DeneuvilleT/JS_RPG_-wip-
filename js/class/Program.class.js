import Perso from './Perso.class.js';


class Program {
    constructor() {

        // Instanciation
        this.hero = new Perso("Hero", 400, 100, undefined, 7, undefined);
        this.bahamut = new Perso("Bahamut", 400, 100, undefined, 7, undefined);
        this.display();
        // this.animation();

        // Gestion des événements
        $('#attaquer').on('click', (e) => this.onClickAttack(e));
        $('#defendre').on('click', (e) => this.onClickDefense(e));
        $('#sort').on('click', (e) => this.onClickSpell(e));
    };

    // animation() {
    //     const imgPerso = document.querySelector('.perso')
    //     imgPerso.classList.toggle('attack');
    // }

    display() {

        // Gestion des barres de HP et MP
        barHp.value = `${this.hero.hp / 2}`;
        barMp.value = `${this.hero.mp * 2}`;

        barHpD.value = `${this.bahamut.hp / 2}`;
        barMpD.value = `${this.bahamut.mp * 2}`;

        // Plus de MP
        if (this.hero.mp <= 0) {
            $('#info').append("<p>Vous n'avez plus assez de mana</p>");
            sort.disabled = true;
        };

        // Gestions de l'affichage des points de vie et Victoire/Défaite
        if (this.hero.hp > 0 && this.bahamut.hp > 0) {
            $('#perso1').text(`${this.hero.name} : ${this.hero.hp} / 400`);
            $('#perso2').text(`${this.bahamut.name} : ${this.bahamut.hp} / 400`);
            return;
        } else {
            if (this.bahamut.hp <= 0) {
                $('#commande').css("display", "none");
                $('#affichage').html(`<h2>Victoire de ${this.hero.name} !</h2>`);
                return;
            };
            if (this.hero.hp <= 0) {
                $('#commande').css("display", "none");
                $('#affichage').html(`<h2>Victoire de ${this.bahamut.name} !</h2>`);
                return;
            };
        };
    };

    // OnClick

    onClickAttack() {
        $("#info p").empty();
        this.hero.attackPerso(this.bahamut);
        this.contreAttack();
        this.display();
        // this.animation()
    };

    onClickDefense() {
        $("#info p").empty();
        this.hero.defensePerso(this.bahamut);
        this.contreAttack();
        this.display();
    };

    onClickSpell() {
        $("#info p").empty();
        this.hero.spellPerso(this.bahamut);
        this.contreAttack();
        this.display();
    };

    // Contre attaque
    contreAttack() {
        let possibilitiesAction = getRandomInteger(1, 5);
        switch (possibilitiesAction) {
            case 1:
                this.bahamut.attackPerso(this.hero);
                break;
            case 2:
                this.bahamut.defensePerso(this.hero);
                break;
            case 3:
                this.bahamut.spellPerso(this.hero);
                break;
            case 4:
                this.bahamut.attackPerso(this.hero);
                break;
            case 5:
                this.bahamut.spellPerso(this.hero);
                break;
        };
    };
};


export default Program;