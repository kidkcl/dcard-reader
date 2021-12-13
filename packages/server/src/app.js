import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ foo: 'bar' }));

export default app;
