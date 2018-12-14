const db = require('../server/server');
const to = require('../global/helpers').to;
const svgFormatter = require('./helpers/indexHelper').svgFormatter;
/**
 * Pulls data from the server, adds a sum to the data object.
 * Then display the data as JSON
 * @param {object} req request header
 * @param {object} res response header
 */
exports.render_homepage = async (req, res) => {
  [err, dbData] = await to(db.passToServer().then(function(data) {
    const outData = data;
    const taylorData = svgFormatter(data);
    const sendOutData = {...{"outData": outData}, ...{"taylorData": taylorData}}
    res.json(sendOutData);
  }));
  if (err) throw new Error(err.stack);
};

