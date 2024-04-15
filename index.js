const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("proyecto"));
app.use("*", (req, res) => res.sendFile(__dirname + "/proyecto/404.html"));
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});