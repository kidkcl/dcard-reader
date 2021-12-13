"use strict";

var _cors = _interopRequireDefault(require("cors"));

var _axios = _interopRequireDefault(require("axios"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 3001;

_app.default.use((0, _cors.default)());

_app.default.get('/data', async (req, res) => {
  const {
    id
  } = req.query;

  if (!id) {
    await _axios.default.get('https://www.dcard.tw/v2/posts?popular=true').then(response => res.send(response.data)).catch(err => console.error(err));
  } else {
    await _axios.default.get(`https://www.dcard.tw/v2/posts?before=${id}`).then(response => res.send(response.data)).catch(err => console.error(err));
  }
});

_app.default.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});