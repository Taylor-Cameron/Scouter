const getMostRecentData = require('../server').getMostRecentData;
// const svgFormatter = require('../../controller/helpers/indexHelper').svgFormatter;

/**
 * @param {object} obj
 * @return {array} Returns a sorted array of an objects keys
 */
function sort(obj) {
  return Object.keys(obj).sort(function(a, b) {
    return obj[b] - obj[a];
  });
}

const sortArrByMC = (arr) => {
  arr.sort(function(a, b) {
    return b.MC - a.MC;
  });
  return arr;
};
const returnSortedObject = (obj, bool) => {
  if (bool) {
    const jsonObject = breakDownContainerSchema(obj);
    const sorted = sort(jsonObject);
    const output = sorted.map(function(key) {
      return {[key]: jsonObject[key]};
    });
    return output;
  } else {
    const sorted = sort(jsonObject);
    const output = sorted.map(function(key) {
      return {[key]: jsonObject[key]};
    });
    return output;
  }
};

const getValuesAtArrayIndex = (summaryArray, requiredIndexArr) => {
  const outArr = [];
  requiredIndexArr.forEach((reqEle) => {
    outArr.push(summaryArray[reqEle]);
  });
  return outArr;
};
module.exports.getData = async () => {
  const outArr = [];
  const reqArr = [0, 2, 3, 5];
  const v = await getMostRecentData();
  // TODO
  const b = getTngSum(v[0].data.MATH.SUMS.sumObj);
  const a = v[0].data.TIME;
  const z = getValuesAtArrayIndex(v[0].data.SUMMARY, reqArr);
  const x = mainColRefac(v);
  const y = returnSortedObject(v, true);
  outArr.push(
      {'time': a},
      {'summaryContainer': z},
      {'breakdownContainer': [y, b]},
      {'plantBreakdown': x},
  );
  return outArr;
};

const getTngSum = (inputData) => {
  const targetValues = ['COAL', 'HYDRO', 'WIND', 'BIOMASS AND OTHER', 'GAS'];
  const gasVals = ['Simple Cycle', 'Cogeneration', 'Combined Cycle'];
  let outGas = 0;
  targetValues.forEach((element) => {
    if (element !== 'GAS') {
      inputData[element] = inputData[element].TNG;
    } else if (element === 'GAS') {
      for (let i = 0; i < inputData[element].length; i++) {
        outGas += inputData[element][i][gasVals[i]].TNG;
      };
    }
  });
  inputData.GAS = outGas;
  const sorted = sort(inputData);
  const output = sorted.map(function(key) {
    return {[key]: inputData[key]};
  });
  return output;
};

const breakDownContainerSchema = (inputData) => {
  const target = inputData[0].data['MATH']['SUMS']['percentObj'];
  let gasSum = 0;
  target['GAS'].forEach((element) => {
    gasSum += Object.values(element)[0];
  });
  target['GAS'] = gasSum;
  return target;
};

const plantBreakDownSchema = (inputData, targetVal) => {
  targetVal.forEach((element) => {
    delete element.DCR;
  });
  return targetVal;
};


const mainColRefac = (out) => {
  const targetValues = ['COAL', 'HYDRO', 'WIND', 'BIOMASS AND OTHER', 'GAS'];
  const gasVals = ['Simple Cycle', 'Cogeneration', 'Combined Cycle'];
  const outObj = {};
  // output = returnSortedObject(out)
  // console.log({"breakDownContainer": output})
  targetValues.forEach((element) => {
    if (element === 'GAS') {
      for (let i = 0; i < gasVals.length; i++) {
        // console.log(gasVals[i])
        const target = out[0].data['GAS'][i][gasVals[i]];
        outObj[gasVals[i]] = sortArrByMC(plantBreakDownSchema(out, target));
      }
    } else if (element !== 'GAS') {
      const target = out[0].data[element];
      outObj[element] = sortArrByMC(plantBreakDownSchema(out, target));
    }
  });
  return outObj;
  // console.log(sortArrByMC(plantBreakDownSchema(out)))
};
// Local Test Function
/*
getData().then(function(data) {
  console.log(data);
});
*/