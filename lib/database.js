const MongoClient = require("mongodb").MongoClient;

let cacheDb = null;

export const connectToDatabase = async () => {
    if (cacheDb) {
        console.log("Use existing connection");
        return Promise.resolve(cachedDb);
    } else {
        return MongoClient.connect(proces.env.MONGODB_URI, {
            native_parser: true,
            useUnifiedTopology: true,
        })
            .then((client) => {
                let db = client.db("sample_airbnb");
                console.log("New Database connection");
                cachedDb = db;
                return cachedDb;
            })
            .catch((err) => {
                console.error("Mongo Connection Error: ", err);
            });
    }
};
