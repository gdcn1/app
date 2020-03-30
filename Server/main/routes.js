var express = require('express')
var router = express.Router()
var pool = require('./db')

function runQuery(sql, args ) {
    return new Promise( ( resolve, reject ) => {
        pool.query( sql, args, ( err, rows ) => {
            if ( err )
                return reject( err );
            resolve( rows );
        } );
    } );
}

router.post('/api/post/message', (req, res, next) => {
    const message = String(req.body.message)
    const values = [message]
    const sql = `INSERT INTO messages(message, date_created) VALUES($1, NOW())`
    runQuery(sql, values).then((result)=>{
        if (result.rows) {
            res.json(result.rows);
        }else {return next(result)}
    }).catch(err => next(err))
});

router.get('/api/get/messages', (req, res, next) => {
    const num = Number(req.query.record)? Number(req.query.record):20;
    const sql = `SELECT * FROM messages ORDER BY date_created desc limit $1`
    runQuery(sql, [num] )
        .then((result) => {
        if (result.rows){
            res.json(result.rows)
        } else {
            res.json([])
        }})
        .catch(err => next(err))
});

function checkDataBaseState() {
    const sql = `SELECT relname FROM pg_class WHERE relname = 'messages'`
    runQuery(sql, []).then((result) =>{
        if(result.rows.length===0){
            pool.query(`CREATE TABLE messages (id SERIAL PRIMARY KEY, message TEXT, date_created TIMESTAMP)`)
            console.log('Table was created')
        }
    }).catch((err) => console.log(err.message))

}

module.exports = {
    router,
    checkDataBaseState
}
