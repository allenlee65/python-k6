import ws from 'k6/ws';
import { check } from 'k6';

export default function () {
    const url = 'ws://your.websocket.server:PORT/path';
    const params = { tags: { my_tag: 'hello' } };
    const res = ws.connect(url, params, function (socket) {
        socket.on('open', () => {
            console.log('connected');
            socket.send('Hello!');
        });

        socket.on('message', (data) => {
            console.log('Received:', data);
            socket.close();
        });

        socket.on('close', () => console.log('disconnected'));
        socket.on('error', e => {
            if (e.error() !== 'websocket: close sent') {
                console.error('An unexpected error occured:', e.error());
            }
        });
    });

    check(res, { 'status is 101': (r) => r && r.status === 101 });
}

export let options = {
    stages: [
        { duration: "10s", target: 10 }, // Ramp-up to 10 VUs
        { duration: "30s", target: 10 },  // Stay at 10 VUs
        { duration: "10s", target: 0 },  // Ramp-down
    ],
};
