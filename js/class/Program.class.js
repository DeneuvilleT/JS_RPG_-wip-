import Perso from './Perso.class.js';
class Program {
    constructor() {
        this.hero = new Perso("Hero", 400, undefined, 7, undefined);
        this.bahamut = new Perso("Bahamut", 400, undefined, 7, undefined);
        this.display();


        $('#attaquer').on('click', (e) => this.onClickAttack(e));
        $('#defendre').on('click', (e) => this.onClickDefense(e));
        $('#sort').on('click', (e) => this.onClickSpell(e));
      
    }


    display() {
        if (this.hero.hp > 0 && this.bahamut.hp > 0) {
            $('#perso1').text(`${this.hero.name} : ${this.hero.hp} || `);
            $('#perso2').text(`${this.bahamut.name} : ${this.bahamut.hp} || `);
        } else {
            $('#commande').css("display", "none");
            if (this.hero.hp > 0) {
                $('#affichage').html(`<p>Victoire de ${this.hero.name}</p>`);
            } else {
                $('#affichage').html(`<p>Victoire de ${this.bahamut.name}</p>`);
            }
        }
    }

  
    onClickAttack(e) {
        $("#info p").empty();
        this.hero.attackPerso(this.bahamut);
        this.contreAttack();
        this.display();
    }


    onClickDefense(e) {
        $("#info p").empty();
        this.hero.defensePerso(this.bahamut);
        this.contreAttack();
        this.display();
    }


    onClickSpell(e) {
        $("#info p").empty();
        this.hero.spellPerso(this.bahamut);
        this.contreAttack();
        this.display();
    }



    contreAttack() {
        let possibilitiesAction = getRandomInteger(1, 3);
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
        }
    }
}
export default Program;