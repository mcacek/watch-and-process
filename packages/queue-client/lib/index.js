const debug = require('./debugger');
const client = require('./client');

exports.configure = function(clientConfig) {
    debug('Configuring new client');
    return client.create(clientConfig);
};
