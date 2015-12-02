import http from 'http';
import path from 'path';

import express from 'express';
import SocketIo from 'socket.io';
import socket from 'most-socket-server';

import Vector from '../src/pure/Vector';
import Game from '../src/reactive/Game';

const app = express();
app.use(express.static(path.join(__dirname, '../client')));

const server = http.createServer(app);

const io = SocketIo(server);

const start$ = socket(io).input('/', 'start');
const stop$ = socket(io).input('/', 'stop');
const step$ = socket(io).input('/', 'step');
const random$ = socket(io).input('/', 'random');
const empty$ = socket(io).input('/', 'empty');
const toggle$ = socket(io).input('/', 'toggle').map(Vector.deserialize);

const size = 100;
const game = Game(size)(start$, stop$, step$, random$, empty$, toggle$);

socket(io).output('/', 'board')(game.board$);

server.listen(3000, () => console.log('ready'));
