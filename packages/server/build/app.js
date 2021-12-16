"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _axios = _interopRequireDefault(require("axios"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isProd = process.env.NODE_ENV === 'production';
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.get('/data', async (req, res) => {
  const {
    id
  } = req.query;

  if (!id) {
    await _axios.default.get('https://www.dcard.tw/v2/posts?popular=true').then(response => res.send(response.data)).catch(err => console.error(err));
  } else {
    await _axios.default.get(`https://www.dcard.tw/v2/posts?before=${id}`).then(response => res.send(response.data)).catch(err => console.error(err));
  }
});

if (isProd) {
  // Compute the build path and index.html path
  const buildPath = _path.default.resolve(__dirname, '../../client/build');

  const indexHtml = _path.default.join(buildPath, 'index.html'); // Setup build path as a static assets path


  app.use(_express.default.static(buildPath)); // Serve index.html on unmatched routes

  app.get('*', (req, res) => res.sendFile(indexHtml));
}

var _default = app;
exports.default = _default;