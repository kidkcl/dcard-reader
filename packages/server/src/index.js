// import cors from 'cors';
import axios from 'axios';

import app from './app';

const PORT = process.env.PORT || 3001;

// app.use(cors());

app.get('/data', async (req, res) => {
  const { id } = req.query;
  if (!id) {
    await axios.get('https://www.dcard.tw/v2/posts?popular=true')
      .then((response) => res.send(response.data))
      .catch((err) => console.error(err));
  } else {
    await axios.get(`https://www.dcard.tw/v2/posts?before=${id}`)
      .then((response) => res.send(response.data))
      .catch((err) => console.error(err));
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
