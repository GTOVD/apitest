const { MongoClient } = require("mongodb");
require("dotenv").config();

// const uri = process.env.MONGODB_URI;
const uri =
    "mongodb+srv://vercel-admin-user:H6iHPF1uS99AJmZk@cluster0.0f5pf1v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

module.exports = async (req, res) => {
    try {
        if (req.method === "GET") {
            const database = client.db("sample_mflix");
            const getMovies = database.collection("movies");
            const movies = await getMovies.find({}).toArray();
            res.status(200).json({ movies });
        } else {
            const { name, location } = req.body;
            res.send({ status: "User Created", name, location });
        }
    } finally {
        await client.close();
    }
};
