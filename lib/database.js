const MongoClient = require("mongodb").MongoClient;

let cacheDb = null;

export const connectToDatabase = async () => {
    if (cacheDb) {
        console.log("Use existing connection");
        return Promise.resolve(cacheDb);
    } else {
        return MongoClient.connect(process.env.MONGODB_URI, {
            native_parser: true,
            useUnifiedTopology: true,
        })
            .then((client) => {
                let db = client.db("sample_airbnb");
                console.log("New Database connection");
                cacheDb = db;
                return cacheDb;
            })
            .catch((err) => {
                console.error("Mongo Connection Error: ", err);
            });
    }
};
