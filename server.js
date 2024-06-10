const path = require('path');
const express = require('express');
const cors = require('cors');

require('dotenv').config(); // Using the .env configuration for these files

const app = express();

// App use instances
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "./public")));

app.post('/send-email', async (req, res) => {

})

app.get("*", (req, res) => {
    res.render("404.html", {error: "No page"}) // To send a 404 page
})

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on port:${port}`));
