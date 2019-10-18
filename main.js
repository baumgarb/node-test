const express = require('express');
const app = express();
const port = 3333;
const nodeEnv = process.env.NODE_ENV;

app.get('/', (req, res) => res.send(`It works! Environment: ${nodeEnv}`));

app.listen(port, () => console.log('App is listening on port ', port));
