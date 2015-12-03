import bus from 'most-bus';

import RemoteGame from './RemoteGame';
import Field from '../src/reactive/view/Field';
import Panel from '../src/reactive/view/Panel';

const element = document.getElementById('game');
const panelElement = document.getElementById('panel')
const size = 100;
const scale = 8;

const proxy = {
    toggle$: bus()
}

const panel = Panel(panelElement);
const game = RemoteGame(panel.start$, panel.stop$, panel.step$, panel.random$, panel.empty$, proxy.toggle$);
const field = Field(element, size, scale)(game.board$);
proxy.toggle$.plug(field.toggle$);
