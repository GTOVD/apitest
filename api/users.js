import { connectToDatabase } from "../lib/database";

module.exports = async (req, res) => {
    if (req.method === "GET") {
        const db = await connectToDatabase();
        const collection = await db.collection("inspections");

        const users = await collection.find({}).toArray();

        res.status(200).json({ users });
    } else {
        const { name, location } = req.body;

        res.send({ status: "User Created", name, location });
    }
};
