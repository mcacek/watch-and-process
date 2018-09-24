const buildinfo = require('./buildinfo');
const queue = require('./queue');

module.exports.register = function(fastify) {
    buildinfo.register(fastify);
    queue.register(fastify);
}
