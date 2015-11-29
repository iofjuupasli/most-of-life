import most from 'most';
import Board from '../pure/Board';

const rules = (v, vec, board) => {
    switch(board.countNeightboards(vec)){
        case 2: return v;
        case 3: return true;
        default: return false;
    }
}

export default (size) => {
    const randomBoard = Board
        .empty(size)
        .map(() => Math.random() > 0.5);

    const board$ = most.periodic(1000 / 60, true)
        .scan(board => board.map(rules), randomBoard);

    return {board$};
};
