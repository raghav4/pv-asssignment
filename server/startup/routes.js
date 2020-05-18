const cors = require('cors');
const bodyParser = require('body-parser');
const welcome = require('../routes/welcome');
const user = require('../routes/user');

module.exports = (app) => {
  app.use(
    cors({
      exposedHeaders: ['Content-Length', 'x-auth-token'],
    }),
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/user', user);
  app.use('/', welcome);
};
