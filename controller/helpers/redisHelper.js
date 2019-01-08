require('dotenv').config();
const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// Blueprint Obj
const powerObj = {
  Asset: false,
  Mc: false,
  Tng: false,
  Dcr: false,
};

// Convert scrape obj to array of obj
const returnFormattedData = (obj) => {
  const outArr = [];
  Object.entries(obj).forEach((ele) => {
    const returnObj = Object.create(powerObj);
    returnObj.Asset = ele[0];
    returnObj.Mc = parseInt(ele[1][0]);
    returnObj.Tng = parseInt(ele[1][1]);
    returnObj.Dcr = parseInt(ele[1][2]);
    outArr.push(returnObj);
  });
  return outArr;
};

// Blueprint Obj
const specObj = {
  KEY: false,
  VALUE: false,
};

// Convert non standard scrape obj to array of KVP
const returnFormattedSpec = (obj) => {
  const outArr = [];
  Object.entries(obj).forEach((ele) => {
    const returnObj = Object.create(specObj);
    returnObj.KEY = ele[0];
    returnObj.VALUE = parseInt(ele[1]);
    outArr.push(returnObj);
  });
  return outArr;
};

// Cleans incoming data and prepares for react
module.exports.showData = (res) => {
  jObj = JSON.parse(res);
  const outArr = [];
  Object.keys(jObj).forEach((element) => {
    if (element === 'summary' || element === 'interchange') {
      outArr.push({[element]: returnFormattedSpec(jObj[element])});
    } else if (element === 'timestamp') {
      outArr.push({[element]: jObj[element]});
    } else {
      outArr.push({[element]: returnFormattedData(jObj[element])});
    }
  });
  return outArr;
};
