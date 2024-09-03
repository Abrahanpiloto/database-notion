const express = require("express");
const { client } = require("@notionhq/client");
const cors = require("cors");
let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const PORT = 4000;
const HOST = "localhost";

const client = new Client({
  auth: "secret_LXK1bjp4pBMw5V9Kj34llEivFnzX5zDP0TwEQrSWKlt",
});

const databaseId = "4115d1be63d64683a19113699419a3af";

app.listen(PORT, HOST, () => {
  console.log("Starting proxy at " + HOST + ":" + PORT); //localhost:4000
});
