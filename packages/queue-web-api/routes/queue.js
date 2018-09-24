const QueueClient = require('queue-client');

exports.register = function (fastify) {
    const config = {
        "queueUrl": "https://sqs.eu-west-1.amazonaws.com/account-id/queue-name",
        "region": "eu-west-1"
    };
    const client = QueueClient.configure(config)
    fastify.route({
        method: 'GET',
        url: '/queue/status',
        schema: {
            // request needs to have a querystring with a `name` parameter
            querystring: {
                name: { type: 'string' }
            },
            // the response needs to be an object with an `hello` property of type 'string'
            response: {
                200: {
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        },
        // this function is executed for every request before the handler is executed
        beforeHandler: async (request, reply) => {
            // E.g. check authentication
        },
        handler: async (request, reply) => {
            return 'queue status';
        }
    });

    fastify.route({
        method: 'GET',
        url: '/queue/add',
        schema: {
            // request needs to have a querystring with a `name` parameter
            querystring: {
                name: { type: 'string' }
            },
            // the response needs to be an object with an `hello` property of type 'string'
            response: {
                200: {
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        },
        // this function is executed for every request before the handler is executed
        beforeHandler: async (request, reply) => {
            // E.g. check authentication
        },
        handler: async (request, reply) => {
            return 'adding to queue';
        }
    });
}
