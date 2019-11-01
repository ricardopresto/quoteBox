const mongodb = require("mongodb");
const fs = require("fs");

const url =
	"mongodb+srv://ricardopresto:ricardo123@cluster0-yuyny.gcp.mongodb.net/quoteBox?retryWrites=true&w=majority";

async function getQuotes() {
	const client = await mongodb.MongoClient.connect(url, {
		useUnifiedTopology: true
	});
	return client.db("quoteBox").collection("main");
}

async function addQuote(quote) {
	const quotes = await getQuotes();
	quotes.insertMany(quote);
}

const fileContents = fs.readFileSync("./sample8.json", "utf8");

try {
	var data = JSON.parse(fileContents);
} catch (err) {
	console.error(err);
}

addQuote(data);
