import most from 'most';
import Board from '../pure/Board';

const rules = (v, vec, board) => {
    switch(board.countNeightboards(vec)){
        case 2: return v;
        case 3: return true;
        default: return false;
    }
}

export default (size) => (start$, stop$, step$, random$, empty$, toggle$) => {
    const randomBoard = Board
        .empty(size)
        .map(() => Math.random() > 0.5);

    const board$ = most.merge(
            most.merge(
                start$.constant(most.periodic(1000 / 60, true)),
                stop$.constant(most.empty()),
                step$.constant(most.of(true))
            )
            .switch()
            .constant(board => board.map(rules)),

            random$.constant(() => Board
                .empty(size)
                .map(() => Math.random() > 0.5)
            ),

            empty$.constant(() => Board.empty(size)),

            toggle$.map(toggleVec => board =>
                board.map((v, vec) => vec.equals(toggleVec) ? !v : v)
            )
        )
        .scan((board, fn) => fn(board), randomBoard);

    return {board$};
};
