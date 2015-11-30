import Game from './src/reactive/Game';
import Field from './src/reactive/view/Field';
import most from 'most';

const element = document.getElementById('game');
const size = 100;
const scale = 8;

const game = Game(size)(most.of(true), most.empty(), most.empty());
Field(element, size, scale)(game.board$);
