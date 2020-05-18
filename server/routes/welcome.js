const express = express();

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ welcome: 'Welcome to the API' });
});

module.exports = router;
