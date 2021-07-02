const mongoose = require('mongoose');

class MongoClient {

    constructor() {}

    connect() {
        mongoose.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
        const db = mongoose.connection;
        db.on('error', function(e) {
            console.log(e);
        });
        db.once('open', function() {
            console.log("MongoDB Connection Successful");
        });
        this.db = db;
    }

    disconnect() {
        this.db.close();
    }
}

module.exports = MongoClient;