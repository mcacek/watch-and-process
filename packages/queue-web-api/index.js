const debug = require('debug')('watch-and-process:queue-web-api');
const fastify = require('fastify')()
const routes = require('./routes');
const config = require('rc')('queue-web-api');

routes.register(fastify);

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();
