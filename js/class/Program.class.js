import Perso from './Perso.class.js';
class Program {
    constructor() {
        this.hero = new Perso("Hero", 400, 100, undefined, 7, undefined);
        this.bahamut = new Perso("Bahamut", 400, 100, undefined, 7, undefined);
        this.display();


        $('#attaquer').on('click', (e) => this.onClickAttack(e));
        $('#defendre').on('click', (e) => this.onClickDefense(e));
        $('#sort').on('click', (e) => this.onClickSpell(e));

    }


    display() {

        barHp.style.width = `${this.hero.hp / 2}px`;
        barMp.style.width = `${this.hero.mp * 2}px`;

        barHpD.style.width = `${this.bahamut.hp / 2}px`;
        barMpD.style.width = `${this.bahamut.mp * 2}px`;

        if (this.hero.mp <= 0) {
            $('#info').append("<p>Vous n'avez plus assez de mana</p>");
            sort.disabled = true;
        }

        if (this.hero.hp > 0 && this.bahamut.hp > 0) {
            $('#perso1').text(`${this.hero.name} : ${this.hero.hp} / 400`);
            $('#perso2').text(`${this.bahamut.name} : ${this.bahamut.hp} / 400`);
        } else {
            $('#commande').css("display", "none");
            if (this.hero.hp > 0) {
                $('#affichage').html(`<p>Victoire de ${this.hero.name}</p>`);
            };
            if (this.hero.hp <= 0) {
                $('#affichage').html(`<p>Victoire de ${this.bahamut.name}</p>`);
            };
        };
    };

    onClickAttack() {
        $("#info p").empty();
        this.hero.attackPerso(this.bahamut);
        this.contreAttack();
        this.display();
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