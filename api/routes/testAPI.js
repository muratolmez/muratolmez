var express = require('express');
const Pool = require('pg').Pool

var router = express.Router();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
})

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

  router.get("/users" ,(request, response) => {
      pool.query('SELECT * FROM nimbus."Account" ORDER BY user_id ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    });
  
    router.get("user/:id", (request, response) => {
      const id = parseInt(request.params.id)
      alert(id);
      pool.query('select * from nimbus."Account" where user_id=$1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    });
    

module.exports = router;