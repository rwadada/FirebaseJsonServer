import * as functions from 'firebase-functions';
import * as jsonServer from 'json-server';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(function (request, response, next) {
    if (request.method !== 'GET') {
        request.method = 'GET'
    }
    next()
})

server.use(router);

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const mock = functions.https.onRequest(server);
