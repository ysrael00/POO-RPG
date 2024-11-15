const Character = require ('./Character')

module.exports = class Mage extends Character {
    constructor(name, Attack, HP, MP, Def ){
        super(name, Attack, HP, Def, MP)
        this.MP = MP
    }


    Attack(targetCharacter) {
        targetCharacter.HP -= (This.Attack + this.MP) - targetCharacter.Def //ele ira somar os pontos de atque e de magia e subtrair nos pontos de defesa e dano causado
    }

    heal(targetCharacter) {
        targetCharacter.HP += this.MP * 2 //ele ira somar os pontos de MP gasto, e multiplicar em 2x o valor para aumentar o HP do personagem alvo
    }

}