export default (incomingData) => {
  const outObj = {};
  incomingData.forEach((element) => {
    Object.entries(element).forEach((ele) => {
      outObj[ele[0]] = ele[1];
    });
  });
  return outObj;
};
