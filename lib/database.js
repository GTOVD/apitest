const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
let cacheDb = null;

export const connectToDatabase = async () => {
    if (cacheDb) {
        console.log("Use existing connection");
        return Promise.resolve(cacheDb);
    } else {
        return MongoClient.connect(uri, {
            native_parser: true,
            useUnifiedTopology: true,
        })
            .then((client) => {
                let db = client.db("sample_mflix");
                console.log("New Database connection");
                cacheDb = db;
                return cacheDb;
            })
            .catch((err) => {
                console.error("Mongo Connection Error: ", err);
            });
    }
};
