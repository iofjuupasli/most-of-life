import most from 'most';

import Game from './src/reactive/Game';
import Field from './src/reactive/view/Field';
import Panel from './src/reactive/view/Panel';

const element = document.getElementById('game');
const panelElement = document.getElementById('panel')
const size = 100;
const scale = 8;

const panel = Panel(panelElement);
const game = Game(size)(panel.start$, panel.stop$, panel.step$, panel.random$, panel.empty$);
Field(element, size, scale)(game.board$);
