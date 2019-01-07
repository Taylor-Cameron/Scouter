export default (incomingData) => {
  const outObj = {};
  incomingData.forEach((element) => {
    Object.entries(element).forEach((ele) => {
      outObj[ele[0]] = ele[1];
    });
  });
  outObj.summary = getSumArr(outObj.summary);
  return outObj;
};
const getSumArr = (sumArr) => {
  const outArr = [];
  for (let i = 0; i < 4; i++) {
    outArr.push(sumArr[i].VALUE);
  }
  return outArr;
};
