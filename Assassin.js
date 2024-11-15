module.exports = Assassin

const Character = require ('./Character')

class Assassin extends Character {
    Attack (targetCharacter) {
        
        targetCharacter.HP -= (this.Attack - targetCharacter.def) * 2 //subtraindo o ataque do personagem e multiplica em 2x o valor do dano causado
    }
}