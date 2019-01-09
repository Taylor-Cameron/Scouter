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
const showData = (res) => {
  const outArr = [];

  Object.keys(res).forEach((element) => {
    if (element === 'summary' || element === 'interchange') {
      outArr.push({[element]: returnFormattedSpec(res[element])});
    } else if (element === 'timestamp') {
      outArr.push({[element]: res[element]});
    } else {
      outArr.push({[element]: returnFormattedData(res[element])});
    }
  });
  return outArr;
};
export default showData;
