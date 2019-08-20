var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

router.get('/murat', function(req, res, next) {
    res.send('Hey Murat!');
});

router.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
  
router.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });

module.exports = router;