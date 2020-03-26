var express = require('express')
var router = express.Router()
var pool = require('./db')


router.post('/api/post/message', (req, res, next) => {
    const message = String(req.body.message)
    const values = [message]
    pool.query(`INSERT INTO
              messages(message, date_created)
              VALUES($1, NOW())`,
        values, (q_err, q_res) => {
            if (q_err) return next(q_err);
            res.json(q_res.rows);
        });
});

router.get('/api/get/messages', (req, res, next) => {
    pool.query(`SELECT * FROM messages ORDER BY date_created desc limit 5`,
        [], (q_err, q_res) => {
            if (q_res){
                res.json(q_res.rows)
            } else {
                res.json([])
            }

        });
});


module.exports = router
