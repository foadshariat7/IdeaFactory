const express = require('express')
const { connectToDb, getDb, closeDb } = require('./db/db')

// initialize app
const app = express()

// listening port 3000
app.listen(3000, () => {
    console.log('app listening on port 3000')
})

// database object
let db

//db connection function (use as middle ware for API that requires database access)
function connect(req, res, next) {
    connectToDb((err) => {
        if (!err) {
            db = getDb()
            next()
        }
    });
}

// sample route
app.get('/', (req, res) => {
    res.send('sample route');
});

// sample route to fetch stuff from user collection
app.get('/users', connect, (req, res) => {
    let result = []
    db.collection('Users')
        .find()
        .forEach(user => result.push(user))
        .then(() => {
            console.log('successful')
            res.status(200).json(result)
        }).then(closeDb)
        .catch(() => {
            console.log('err')
            res.status(500).json({err: '123'})
        })
})
