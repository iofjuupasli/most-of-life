import Game from './src/reactive/Game';
import Field from './src/reactive/view/Field';

const element = document.getElementById('game');
const size = 100;
const scale = 8;

const game = Game(size);
Field(element, size, scale)(game.board$);
