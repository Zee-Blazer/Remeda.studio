const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.get("*", (req, res) => {
    res.render("404.html", {error: "No page"}) // To send a 404 page
})

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on port:${port}`));
