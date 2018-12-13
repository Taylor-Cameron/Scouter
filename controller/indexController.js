const db = require('../server/server');

exports.render_homepage = async (req, res) => {
  await db.passToServer().then(function(data) {
    res.json(data);
  });
};
