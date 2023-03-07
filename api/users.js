module.exports = (req, res) => {
    if (req.method === "GET") {
        res.json([
            { name: "thomas", location: "denver" },
            { name: "paul", location: "orlando" },
        ]);
    } else {
        const { name, location } = req.body;

        res.send({ status: "User Created", name, location });
    }
};
