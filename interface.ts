interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform: string[];
  getSimilars?: (title: string) => void;
}

interface DLC extends Game {
  originalGame: Game;
  content: string[];
}

const BF: Game = {
  title: 'BattleField 6',
  description: 'The best war gamming',
  genre: 'shot',
  platform: ['PC', 'PS5', 'PS4'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: COD3 , CSgo`);
  },
};
const BF1: DLC = {
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

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;
  platform: string[];
  constructor(t: string, d: string, g: string, p: string[]) {
    this.title = d;
    this.description = d;
    this.genre = g;
    this.platform = p;
  }
}
console.log(BF);
console.log(BF1);
