module.exports = (req, res) => {
    if (req.method === "GET") {
        res.json([
            { name: "thomas", location: "denver" },
            { name: "paul", location: "orlando" },
        ]);
    } else {
    }
};
