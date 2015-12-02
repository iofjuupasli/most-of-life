import socket from 'most-socket-client';
import Board from '../src/pure/Board';

const ioPath = 'http://localhost:3000/';
export default (start$, stop$, step$, random$, empty$, toggle$) => {
    socket.output(ioPath, 'start')(start$);
    socket.output(ioPath, 'stop')(stop$);
    socket.output(ioPath, 'step')(step$);
    socket.output(ioPath, 'random')(random$);
    socket.output(ioPath, 'empty')(empty$);
    socket.output(ioPath, 'toggle')(toggle$);

    return {
        board$: socket.input(ioPath, 'board').map(Board.deserialize)
    };
}
