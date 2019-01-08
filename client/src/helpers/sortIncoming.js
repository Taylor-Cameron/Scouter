export default (incomingData) => {
  const outObj = {};
  incomingData.forEach((element) => {
    Object.entries(element).forEach((ele) => {
      outObj[ele[0]] = ele[1];
    });
  });
  outObj.summary = getSumArr(outObj.summary);
  outObj.percentTotal = totalToPercent(outObj.total);
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
  const percentArr = [];
  const totalObj = totalArr[5]
  for (let i = 0; i < 5; i++) {
    let percentObj = {};
    percentObj[totalArr[i].Asset] = {
      Mc: (totalArr[i].Mc / totalObj.Mc * 100).toFixed(2),
      Tng: (totalArr[i].Tng / totalObj.Tng * 100).toFixed(2),
      Dcr: (totalArr[i].Dcr / totalObj.Dcr * 100).toFixed(2),
    };
    percentArr.push(percentObj);
    // console.log(totalArr[i].Mc / totalObj.Mc);
  }
  return percentArr;
};
