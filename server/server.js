const etsAesoUrl = 'http://ets.aeso.ca/ets_web/ip/Market/Reports/CSDReportServlet';
const dataScraper = require('../ets_aeso_assets/scraper');
const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
require('dotenv').config();

const getDataFromScraper = async () => {
  const result = await (
    dataScraper.sendDataToServer(etsAesoUrl).then(function(data) {
      return data;
    })
  );
  return result;
};

function insertToDb(data, db) {
  db.collection('test').insertOne({data});
}

console.log(process.env.MONGODB_URI);
console.log(process.env.MONGODB_DBNAME);

const url = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DBNAME;


module.exports.passToServer = async () => {
  let client;
  let out = {};
  try {
    client = await MongoClient.connect(url);
    console.log('Connected correctly to server');
    const db = client.db(dbName);
    out = await getDataFromScraper().then(function(x) {
      // console.log(x);
      insertToDb(x, db);
      return x;
    });
  } catch (err) {
    console.log(err.stack);
  }
  // Close connection
  client.close();
  return out;
};
