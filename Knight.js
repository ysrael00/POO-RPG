const Character = require ('./Character')

module.exports = class Knight extends Character {
    constructor(name, Attack, HP, Def, Shield){ 
        super(name, Attack, HP, Def, Shield)
        this.Shield = Shield
        this.stance = "Attacking"
    }

    Attack(targetCharacter) {
        if (this.stance === "Attacking") { //o cavaleiro so ira atacar, se estiver em posicao de ataque
            super.Attack(targetCharacter)
        }
    }

    switchStance() { //condicionando e mudando a estacia e verificando se estar atacando ou defendendo
        if (this.stance === "Attacking") {
            this.stance = "Defending"
            this.def += this.Shield //assim que ele estiver no modo de defesa, ira ser somado nos pontos de defesa 
        } else {
            this.stance = "Attacking"
            this.def -= this.Shield //entretando, se estiver no modo de ataque, ira ser subtraido 
        }
    }
}
