const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 8050;

if (process.env.NODE_ENV == "production") {
  app.use(express.static(__dirname + "/public/"));
}

const dbName = "quoteBox";
const url = `mongodb+srv://ricardopresto:ricardo123@cluster0-yuyny.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;
let dataBase;
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.log(err);
  dataBase = client.db(dbName);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

async function getQuotes(user) {
  return await dataBase.collection(user);
}

async function getUsers() {
  return await dataBase.collection("users");
}

async function getAdmin() {
  return await dataBase.collection("admin");
}

//Search by keyword
app.get("/quotes/wordsearch/:word/:user", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  const data = await quotes
    .find(
      { quote: { $regex: `\\b${req.params.word}\\b`, $options: "$i" } },
      { limit: 100 }
    )
    .toArray();
  res.send(data);
});

//Search by author
app.get("/quotes/authorsearch/:author/:user", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  const data = await quotes
    .find(
      { author: { $regex: `\\b${req.params.author}\\b`, $options: "$i" } },
      { limit: 100 }
    )
    .toArray();
  res.send(data);
});

//Search by keyword and author
app.get("/quotes/combinedsearch/:word/:author/:user", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  const data = await quotes
    .find(
      {
        quote: { $regex: `\\b${req.params.word}\\b`, $options: "$i" },
        author: { $regex: `\\b${req.params.author}\\b`, $options: "$i" }
      },
      { limit: 100 }
    )
    .toArray();
  res.send(data);
});

//Get whole user collection
app.get("/quotes/showall/:user", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  const data = await quotes.find({}).toArray();
  res.send(data);
});

//Get random quote
app.get("/quotes/random", async (req, res) => {
  const quotes = await getQuotes("main");
  const data = await quotes.aggregate([{ $sample: { size: 1 } }]).toArray();
  res.send(data);
});

//Register new user
app.post("/quotes/register/:username/:password", async (req, res) => {
  const users = await getUsers();
  const userArray = await users.find({}).toArray();
  let userExists = false;
  userArray.forEach(user => {
    if (user.username == req.params.username) {
      userExists = true;
    }
  });
  if (userExists == true) {
    res.send("taken");
  } else {
    dataBase.createCollection(`user.${req.params.username}`);
    var newUser = {
      username: req.params.username,
      password: req.params.password
    };
    users.insertOne(newUser);
    res.send("created");
  }
});

//Login user
app.post("/quotes/login/:username/:password", async (req, res) => {
  const users = await getUsers();
  let admin = await getAdmin();
  admin = await admin.find({}).toArray();
  const user = await users.find({ username: req.params.username }).toArray();
  if (
    req.params.username == admin[0].username &&
    req.params.password == admin[0].password
  ) {
    res.send("login-admin");
  } else if (user.length == 0) {
    res.send("fail");
  } else if (user[0].password == req.params.password) {
    res.send("success");
  } else {
    res.send("fail");
  }
});

//Add to user collection
app.post("/quotes/add/:user", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  quotes.insertOne(req.body);
  res.send("inserted");
});

//Add new quote
app.post("/quotes/addNew/:user", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  await quotes.insertOne(req.body);
  res.send("inserted");
});

//Update edited quote
app.put("/quotes/edit/:user", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  quotes.updateOne(
    {
      _id:
        req.params.user == "main"
          ? new mongodb.ObjectID(req.body.id)
          : req.body.id
    },
    {
      $set: {
        quote: req.body.quote,
        author: req.body.author,
        source: req.body.source
      }
    }
  );
  res.send("updated");
});

//Delete from collection
app.delete("/quotes/delete/:user/:id", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  await quotes.deleteOne({
    _id:
      req.params.user == "main"
        ? new mongodb.ObjectID(req.params.id)
        : req.params.id
  });
  res.send("deleted");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
