const express = require('express');
const rateLimiter = require('./middlewares/rateLimiter');
const testRoutes = require('./routes/testRoutes');

const app = express();

app.get('/', (req, res) => {
  res.send('Rate Limiter API is running ');
});

app.use(rateLimiter);


app.use('/api', testRoutes);

module.exports = app;
