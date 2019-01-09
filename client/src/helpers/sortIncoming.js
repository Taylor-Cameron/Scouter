export default (incomingData) => {
  console.log(incomingData.Response)
  const outObj = {};
  incomingData.forEach((element) => {
    Object.entries(element).forEach((ele) => {
      outObj[ele[0]] = ele[1];
    });
  });
  const combin = outObj.combined;
  const cogen = outObj.cogeneration;
  const simp = outObj.simple;
  const gasObj = {...combin, ...cogen, ...simp};
  outObj.gas = [];
  Object.values(gasObj).forEach((ele) => {
    outObj.gas.push(ele);
  });
  outObj.summary = getSumArr(outObj.summary);
  outObj.breakdown = totalToPercent(outObj.total);
  outObj.sunburstData = {"name": "Total", "children": siblings(outObj, combin, cogen, simp)};
  console.log(outObj.sunburstData)
  return outObj;
  }

const siblings = (outObj, combin, cogen, simp) => {
  const outArr = []
  const coal = outObj.coal;
  const hydro = outObj.hydro;
  const wind = outObj.wind;
  const biomass = outObj.biomass;
  outObj.svg = { combin, cogen, simp, coal, hydro, wind, biomass };
  Object.values(outObj.svg).forEach((element, index) => {
    const fuelArr = ["combined", "cogeneration", "simple cycle", "coal", "hydro", "wind", "biomass"];
    const outObj = { "name": fuelArr[index], "children": [] }
    element.forEach(ele => {
      outObj.children.push({ "name": ele.Asset, "size": ele.Tng });
    });
    outArr.push(outObj);
  });
  const outGas = outArr.splice(0, 3);
  outArr.push({"name": "gas", "children": outGas})
  return outArr;
};
const getSumArr = (sumArr) => {
  const outArr = [];
  for (let i = 0; i < 4; i++) {
    outArr.push(sumArr[i].VALUE);
  }
  return outArr;
};
const totalToPercent = (totalArr) => {
  const totalObj = totalArr[5];
  totalArr[3].Asset = 'BIOMASS';
  for (let i = 0; i < 5; i++) {
    totalArr[i].percentTng = (totalArr[i].Tng/totalObj.Tng * 100).toFixed(2);
  }
  totalArr.pop();
  return totalArr;
};
