const express = require('express')
const { connectToDb, getDb } = require('./db/db')

// init app & middleware
const app = express()

let db

//db connection
connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('app listening on port 3000')
        })
        db = getDb()
    }
})

// sample route
app.get('/', (req, res) => {
    res.send('hihi');
});

app.get('/users', (req, res) => {
    let result

    db.collection('Users')
        .find()
        .forEach(user => result.push(user))
        .then(() => {
            console.log('successful')
            res.status(200).json(result)
        })
        .catch(() => {
            console.log('err')
            res.status(500).json({err: '123'})
        })
})
