var suite = require('api-easy').describe('api');

process.env.MODE = 'test';
// starts the server.
require('../../app.js');

exports.thread = suite
    .use('localhost', 3000)
    .setHeader('Content-Type', 'application/json')
    .followRedirect(false)
    .discuss('When using the Thread API')
        .post('/thread', {title: 'title-test', author: 'John Doe'})
            .next();
