const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
let cacheDb = null;

export const connectToDatabase = async () => {
    try {
        return client.db("sample_mflix");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
};
