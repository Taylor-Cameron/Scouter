require('dotenv').config();
const rp = require('request-promise');
const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// Set up the redis client
const client = redis.createClient(6380, process.env.REDISCACHEHOSTNAME, {
  auth_pass: process.env.REDISCACHEKEY,
  tls: {servername: process.env.REDISCACHEHOSTNAME},
});

// Perform cache operations using the cache connection object...
const getNewData = () => {
  // Request data from Azure Function
  rp('https://scouterscrape.azurewebsites.net/api/RequestScrapeData?code=Fv2vV9aGCvlI2FK9/Dtv5CUPJlYUlrKGvYddEABqO/2baT5Eie7w3w==')
      .then(function(htmlString) {
        client.on('error', function(err) {
          console.log('Something went wrong ', err);
        });
        // Set a key value pair containing scrape data
        client.set('redisData', htmlString);
      })
      .catch(function(err) {
        console.log(err);
      });
};

getNewData();

// const redisDat = async () => {
//   client.on('error', function(err) {
//     console.log('Something went wrong ', err);
//   });
//   const freshData = await getNewData();
//   return client.setAsync('redisData', freshData).then(function(res) {
//     console.log(res);
//     const output = showData(res);
//     return output;
//   });
// };

