const db = require('../server/server');
const mathHelper = require('./formatHelpers/mathHelper');

exports.render_homepage = async (req, res) => {
  await db.passToServer().then(function(data) {
    const outData = data;
    outData.MATH = mathHelper.sumArray(data);
    res.json(outData);
  });
};

exports.render_graph = async (req, res) => {
  await db.passToServer().then(function(data) {
    const outData = data;
    const outTable = {
      'name': 'TABLE', 'children':
      [
        {'name': 'COAL', 'children': []},
        {'name': 'HYDRO', 'children': []},
        {'name': 'WIND', 'children': []},
        {'name': 'BIOMASS AND OTHER', 'children': []},
        {'name': 'GAS', 'children': [
          {'name': 'Simple Cycle', 'children': []},
          {'name': 'Cogeneration', 'children': []},
          {'name': 'Combined Cycle', 'children': []},
        ]},
      ],
    };
    for (let i = 0; i < outTable.children.length; i++) {
      if (outTable.children[i].name === 'GAS') {
        for (let j=0; j < outTable.children[4].children.length; j++) {
          console.log(outTable.children[4].children[j].name)
          const targetTable = outTable.children[4].children[j].name;
          const currentTable = outData['GAS'][j][targetTable];
          currentTable.forEach((tableEle) => {
            outTable.children[4].children[j].children.push({'name': tableEle.ASSET, 'size': parseInt(tableEle.TNG)});
          });
          //console.log(currentTable)
          // currentTable.forEach((tableEle) => {
          //   outTable.children[i].children.push({'name': tableEle.ASSET, 'size': parseInt(tableEle.TNG)});
          //   console.log(tableEle)
          // });
        };
      } else if (
        outTable.children[i].name === 'COAL' ||
        outTable.children[i].name === 'HYDRO' ||
        outTable.children[i].name === 'WIND' ||
        outTable.children[i].name === 'BIOMASS AND OTHER'
      ) {
        const targetTable = outTable.children[i].name;
        const currentTable = outData[targetTable];
        currentTable.forEach((tableEle) => {
          outTable.children[i].children.push({'name': tableEle.ASSET, 'size': parseInt(tableEle.TNG)});
        });
      }
    };
    res.json(outTable);
  });
};