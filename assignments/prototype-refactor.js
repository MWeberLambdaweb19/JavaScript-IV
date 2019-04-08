/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// Classes
class GameObject {
    constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
    };
    destroy(){
    return `${this.name} was removed from the game.`
    };
}
class CharacterStats extends GameObject {
    constructor(statAttributes){
        super(statAttributes);
        this.healthPoints = statAttributes.healthPoints;
        this.strength = statAttributes.strength;
    };
    takeDamage(){
        return `${this.name} took damage ${this.strength}.`
    };
    giveDamage(){
        return `${this.name} gave damage ${this.strength}.`
    };
}
class Humanoid extends CharacterStats {
    constructor(characterAttributes){
        super(characterAttributes);
        this.team = characterAttributes.team;
        this.weapons = characterAttributes.weapons;
        this.language = characterAttributes.language;
    };
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    };
    attack(target){
        target.healthPoints -= 5;
        if (target.healthPoints === 0){
          return target.destroy();
        } else {
        return target.healthPoints;
        };
    };
}
class Hero extends Humanoid {
    constructor(heroAttributes){
        super(heroAttributes)
        this.title = heroAttributes.title;
        this.motivation = heroAttributes.motivation;
        this.saying = heroAttributes.saying;
    };
    shout(){
        return `The ${this.title} ${this.name}, calls out their famous saying: ${this.saying}`;
    };
    motive(){
        return `The ${this.title} ${this.name}, calls out their motivation, ${this.motivation}`;
    };
    attack(target){
        target.healthPoints -= 10;
        if (target.healthPoints === 0){
          return target.destroy();
        } else {
        return `${target.name} has ${target.healthPoints} hit points left!`;
        }
    };
    screech(){
        return `${this.name}, the Hero, gave out a loud victory screech over the land at Jabba's defeat!`;
    };
}
class Villain extends Hero {
    constructor(villianAttributes){
        super(villianAttributes);
        this.evilplan = villianAttributes.evilplan;
    };
    cackle(){
        return `Forever a villain, foolish and procrastinating, ${this.name} gives their evil plan: ${this.evilplan}!`
    };
}
// Characters
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
    strength: 5,
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
    strength: 5,
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
    strength: 5,
  });

  // Stretch Goals!

  const mweber = new Hero ({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 5,
    },
    healthPoints: 50,
    name: 'Mack',
    team: 'Heroes Guild',
    weapons: [
      'Dragon Scimitar',
      'Dragon Kite-Shield',
    ],
    language: 'l33tsp3@k',
    strength: 10,
    title: 'Ultra Captain-Knight Class Five',
    motivation: "To be the best, like no one ever was!",
    saying: "'I am referencing Runescape and Pokemon in my character!'"
  });

  const jabba = new Villain ({
    createdAt: new Date(),
    dimensions: {
      length: 9,
      width: 9,
      height: 9,
    },
    healthPoints: 50,
    name: 'Jabba the Script',
    team: 'The Bad Crew featuring Jabba',
    weapons: [
      'The Staff of Frustration',
      'The Dagger of False-Euphoria',
    ],
    language: 'c0d3sp3@k',
    strength: 10,
    title: 'Ultra Jerk',
    motivation: "'No truly evil person needs motivation!'",
    saying: "'I want to trick others into not getting references!'",
    evilplan:"'You weren't expecting a Jojo reference, but it was me, Dio!'",
  })
// Console Logs
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(mweber.giveDamage(jabba))
console.log(jabba.takeDamage(mweber));
console.log(mweber.attack(jabba));
console.log(jabba.giveDamage(mweber));
console.log(mweber.takeDamage(jabba));
console.log(jabba.attack(mweber));
console.log(mweber.shout());

console.log(mweber.giveDamage(jabba))
console.log(jabba.takeDamage(mweber));
console.log(mweber.attack(jabba));
console.log(jabba.giveDamage(mweber));
console.log(mweber.takeDamage(jabba));
console.log(jabba.attack(mweber));
console.log(jabba.shout());

console.log(mweber.giveDamage(jabba))
console.log(jabba.takeDamage(mweber));
console.log(mweber.attack(jabba));
console.log(jabba.giveDamage(mweber));
console.log(mweber.takeDamage(jabba));
console.log(jabba.attack(mweber));
console.log(mweber.motive());

console.log(mweber.giveDamage(jabba))
console.log(jabba.takeDamage(mweber));
console.log(mweber.attack(jabba));
console.log(jabba.giveDamage(mweber));
console.log(mweber.takeDamage(jabba));
console.log(jabba.attack(mweber));
console.log(jabba.motive());

console.log(jabba.cackle());
console.log(mweber.giveDamage(jabba))
console.log(jabba.takeDamage(mweber));
console.log(mweber.attack(jabba));
console.log(mweber.screech());
