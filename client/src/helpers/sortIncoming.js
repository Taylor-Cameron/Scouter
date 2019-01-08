export default (incomingData) => {
  const outObj = {};
  incomingData.forEach((element) => {
    Object.entries(element).forEach((ele) => {
      outObj[ele[0]] = ele[1];
    });
  });
  outObj.summary = getSumArr(outObj.summary);
  outObj.breakdown = totalToPercent(outObj.total);
  return outObj;
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
