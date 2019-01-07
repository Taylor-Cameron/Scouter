const redis = require('redis');
const bluebird = require('bluebird');
const showData = require('./helpers/redisHelper').showData;

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(6380, process.env.REDISCACHEHOSTNAME, {
  auth_pass: process.env.REDISCACHEKEY,
  tls: {servername: process.env.REDISCACHEHOSTNAME},
});


// Perform cache operations using the cache connection object...
const redisDat = async () => {
  client.on('error', function(err) {
    console.log('Something went wrong ', err);
  });
  return client.getAsync('redisData').then(function(res) {
    const output = showData(res);
    return output;
  });
};

exports.render_redisData = async (req, res, next) => {
  data = await redisDat();
  res.send(data);
};
