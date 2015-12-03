import Vector from './Vector';

const offsets = [
    new Vector(-1, -1), new Vector(0, -1), new Vector(1, -1),
    new Vector(-1, 0) /*            */ , new Vector(1, 0),
    new Vector(-1, 1), new Vector(0, 1), new Vector(1, 1)
];

export default class Board {
    constructor(state) {
        this.state = state;
    }

    map(f) {
        let x = -1,
            y = -1,
            v;
        const state = this.state;
        const xLength = state.length;
        const yLength = state[0].length;
        const result = Array(xLength);
        while (++x < xLength) {
            result[x] = Array(yLength);
            while (++y < yLength) {
                v = new Vector(x, y);
                result[x][y] = f(this.get(v), v, this);
            }
            y = -1;
        }
        return new Board(result);
    }

    get({
        x, y
    }) {
        const length = this.state.length;
        return this.state[(x + length) % length][(y + length) % length];
    }

    countNeightboards(vec) {
        let i = -1;
        const length = offsets.length;
        let result = 0;
        while (++i < length) {
            if (this.get(offsets[i].concat(vec))) {
                ++result;
            }
        }
        return result;
    }

    static empty(size) {
        let x = -1;
        let y = -1;
        const result = Array(size);
        while (++x < size) {
            result[x] = Array(size);
            while (++y < size) {
                result[x][y] = false;
            }
            y = -1;
        }
        return new Board(result);
    }

    static deserialize(obj) {
        return new Board(obj.state);
    }
}
