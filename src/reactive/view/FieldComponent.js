export default class FieldComponent {
    constructor(element, size, scale) {
        this.size = size;

        const canvas = element.getContext('2d');
        this.canvas = canvas;

        element.width = size * scale;
        element.height = size * scale;
        canvas.scale(scale, scale);
    }

    render(board) {
        this.canvas.clearRect(0, 0, this.size, this.size);
        board.map((v, {x, y}) => v && this.canvas.fillRect(x, y, 1, 1))
    }
}
