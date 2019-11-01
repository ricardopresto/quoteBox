const mongodb = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 8000;

const dbName = "quoteBox";
const url =
	"mongodb+srv://ricardopresto:ricardo123@cluster0-yuyny.gcp.mongodb.net/quoteBox?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/quotes/search/:word", async (req, res) => {
	const quotes = await getQuotes();
	const data = await quotes
		.find({ quote: { $regex: req.params.word, $options: "$i" } })
		.toArray();
	res.send(data);
});

app.get("/quotes/author/:word", async (req, res) => {
	const quotes = await getQuotes();
	const data = await quotes
		.find({ author: { $regex: req.params.word, $options: "$i" } })
		.toArray();
	res.send(data);
});

app.get("/quotes/random", async (req, res) => {
	const quotes = await getQuotes();
	const data = await quotes.find({}).toArray();
	var index = Math.floor(Math.random() * data.length);
	res.send(data[index]);
});

app.post("/quotes", async (req, res) => {
	const quotes = await getQuotes();
	quotes.insertOne(req.body);
	res.redirect("/quotes");
});

app.delete("/quotes/:id", async (req, res) => {
	const quotes = await getQuotes();
	await quotes.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
});

async function getQuotes() {
	const client = await mongodb.MongoClient.connect(url, {
		useUnifiedTopology: true
	});
	return client.db(dbName).collection("main");
}

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
