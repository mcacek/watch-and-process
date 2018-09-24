exports.register = function (fastify) {
    fastify.route({
        method: 'GET',
        url: '/buildinfo',
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
            return { hello: 'world' }
        }
    })
}
