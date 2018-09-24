const debug = require('./debugger');
const Producer = require('sqs-producer');

module.exports.create = function(queueConfig) {
    var producer = Producer.create({
        queueUrl: queueConfig.queueUrl,
        region: queueConfig.region
    });

    return {
        async status() {
            debug('Checking queue status');

            return new Promise((resolve, reject) => {
                producer.queueSize(function (err, size) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(size);
                    }                    
                });
            });
        },
        async send(message) {
            debug('Sending queue producer request');

            return new Promise((resolve, reject) => {
                producer.send([message], function(err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(size);
                    }
                });
            })
        }
    }
};
