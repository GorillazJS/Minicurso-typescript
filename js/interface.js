"use strict";
const BF = {
    title: 'BattleField 6',
    description: 'The best war gamming',
    genre: 'shot',
    platform: ['PC', 'PS5', 'PS4'],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: COD3 , CSgo`);
    },
};
const BF1 = {
    title: 'Warzone',
    description: 'You never plau before',
    genre: 'shot',
    platform: ['PC', 'PS5'],
    originalGame: BF,
    content: ['New weapon', 'New tanks'],
};
if (BF.getSimilars) {
    BF.getSimilars(BF.title);
}
class CreateGame {
    constructor(t, d, g, p) {
        this.title = d;
        this.description = d;
        this.genre = g;
        this.platform = p;
    }
}
console.log(BF);
console.log(BF1);
