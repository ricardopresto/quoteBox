const mongodb = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid/v4");

const app = express();

const port = 8050;

const dbName = "quoteBox";
const url = `mongodb+srv://ricardopresto:ricardo123@cluster0-yuyny.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Search by keyword
app.get("/quotes/wordsearch/:word/:user", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  const data = await quotes
    .find({ quote: { $regex: req.params.word, $options: "$i" } })
    .toArray();
  res.send(data);
});

//Search by author
app.get("/quotes/authorsearch/:author/:user", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  const data = await quotes
    .find({ author: { $regex: req.params.author, $options: "$i" } })
    .toArray();
  res.send(data);
});

//Search by keyword and author
app.get("/quotes/combinedsearch/:word/:author/:user", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  const data = await quotes
    .find({
      quote: { $regex: req.params.word, $options: "$i" },
      author: { $regex: req.params.author, $options: "$i" }
    })
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
  const client = await mongodb.MongoClient.connect(url, {
    useUnifiedTopology: true
  });
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
    client.db(dbName).createCollection(`user.${req.params.username}`);
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
  const user = await users.find({ username: req.params.username }).toArray();
  if (user.length == 0) {
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
  req.body._id = uuid();
  await quotes.insertOne(req.body);
  res.send("inserted");
});

//Update edited quote
app.put("/quotes/edit/:user", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  quotes.updateOne(
    { _id: req.body.id },
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

//Delete from user collection
app.delete("/quotes/delete/:user/:id", async (req, res) => {
  const quotes = await getQuotes(req.params.user);
  await quotes.deleteOne({ _id: req.params.id });
  res.send("deleted");
});

async function getQuotes(user) {
  const client = await mongodb.MongoClient.connect(url, {
    useUnifiedTopology: true
  });
  return client.db(dbName).collection(user);
}

async function getUsers() {
  const client = await mongodb.MongoClient.connect(url, {
    useUnifiedTopology: true
  });
  return client.db(dbName).collection("users");
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
