const { MongoClient } = require('mongodb')

let dbConnection
// username & password: ideafactory
let uri = 'mongodb+srv://ideafactory:ideafactory@cluster0.y6ysia6.mongodb.net/IdeaFactory?retryWrites=true&w=majority'


module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}
