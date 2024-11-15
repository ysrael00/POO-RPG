module.exports =  class Character {
    constructor(name, Attack, HP, Def ){
        this.name = name
        this.HP = HP
        this.Attack = Attack
        this.Def = Def

    }
    Attack( targetCharacter){
        targetCharacter.HP -= this.Attack - targetCharacter.Def
    }
}