import most from 'most';

import Vector from '../../pure/Vector';

export default class FieldComponent {
    constructor(element, size, scale) {
        this.size = size;

        const canvas = element.getContext('2d');
        this.canvas = canvas;

        element.width = size * scale;
        element.height = size * scale;
        canvas.scale(scale, scale);

        this.toggle$ = most.fromEvent('click', element)
            .map(e => new Vector(
                Math.floor((e.x - element.offsetLeft) / scale),
                Math.floor((e.y - element.offsetTop) / scale)
            ));
    }

    render(board) {
        this.canvas.clearRect(0, 0, this.size, this.size);
        board.map((v, {x, y}) => v && this.canvas.fillRect(x, y, 1, 1))
    }
}
