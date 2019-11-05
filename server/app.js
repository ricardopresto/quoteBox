const mongodb = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 8050;

const dbName = "quoteBox";
const url = `mongodb+srv://ricardopresto:ricardo123@cluster0-yuyny.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Search by keyword
app.get("/quotes/search/:word", async (req, res) => {
	const quotes = await getQuotes();
	const data = await quotes
		.find({ quote: { $regex: req.params.word, $options: "$i" } })
		.toArray();
	res.send(data);
});

//Search by author
app.get("/quotes/author/:word", async (req, res) => {
	const quotes = await getQuotes();
	const data = await quotes
		.find({ author: { $regex: req.params.word, $options: "$i" } })
		.toArray();
	res.send(data);
});

//Get random quote
app.get("/quotes/random", async (req, res) => {
	const quotes = await getQuotes();
	const data = await quotes.aggregate([{ $sample: { size: 1 } }]).toArray();
	res.send(data);
});

//Register new user
app.post("/quotes/register/:username/:password", async (req, res) => {
	const client = await mongodb.MongoClient.connect(url, {
		useUnifiedTopology: true
	});
	client.db(dbName).createCollection(`user.${req.params.username}`);

	const users = await getUsers();
	var newUser = {
		username: req.params.username,
		password: req.params.password
	};
	users.insertOne(newUser);
	res.status(201).send("User Created");
});

//Add to user collection
app.post("/quotes/add/:user", async (req, res) => {
	const quotes = await getMyQuotes(req.params.user);
	req.body._id = new mongodb.ObjectID(req.body.id);
	quotes.insertOne(req.body);
	res.send("Inserted");
});

app.delete("/quotes/delete/:id", async (req, res) => {
	const quotes = await getQuotes();
	await quotes.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
	res.send("Deleted");
});

async function getQuotes() {
	const client = await mongodb.MongoClient.connect(url, {
		useUnifiedTopology: true
	});
	return client.db(dbName).collection("main");
}

async function getMyQuotes(user) {
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
