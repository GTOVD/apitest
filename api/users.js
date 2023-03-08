import { connectToDatabase } from "../lib/database";

module.exports = async (req, res) => {
    if (req.method === "GET") {
        const db = await connectToDatabase();
        const database = db.db("sample_mflix");
        const collection = database.collection("movies");
        const users = await collection.find({}).toArray();

        res.status(200).json({ users });
    } else {
        const { name, location } = req.body;

        res.send({ status: "User Created", name, location });
    }
};
