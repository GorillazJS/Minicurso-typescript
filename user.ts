type AccountInfo = {
  id: number | string;
  name: string;
  email?: string;
};
// Ponto de interrogação deixa o email opcional.
// | a barra referencia OU.

type CharInfo = {
  nickname: string;
  level: number;
};

const acc: AccountInfo = {
  id: 123,
  name: 'Ygor',
};

const char: CharInfo = {
  nickname: 'Nick',
  level: 100,
};

type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: '123',
  name: 'nome',
  nickname: 'nick',
  level: 100,
};
