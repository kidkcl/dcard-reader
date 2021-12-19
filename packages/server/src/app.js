import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

const app = express();

app.use(bodyParser.json());

app.get('/api/data', async (req, res) => {
  const { id } = req.query;
  if (!id) {
    await axios.get('https://www.dcard.tw/v2/posts?popular=true')
      .then((response) => res.send(response.data))
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: err.message });
      });
  } else {
    await axios.get(`https://www.dcard.tw/v2/posts?before=${id}`)
      .then((response) => res.send(response.data))
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: err.message });
      });
  }
});

if (isProd) {
  // Compute the build path and index.html path
  const buildPath = path.resolve(__dirname, '../../client/build');
  const indexHtml = path.join(buildPath, 'index.html');

  // Setup build path as a static assets path
  app.use(express.static(buildPath));
  // Serve index.html on unmatched routes
  app.get('*', (req, res) => res.sendFile(indexHtml));
}

export default app;
