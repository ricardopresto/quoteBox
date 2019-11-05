import axios from "axios";

const url = "http://localhost:8050/quotes";

class ApiCalls {
	static async getRandomQuote() {
		var data = "";
		await axios.get(`${url}/random`).then(res => {
			data = res.data;
		});
		return data;
	}

	static async wordSearch(word) {
		var data = "";
		await axios.get(`${url}/search/${word}`).then(res => {
			data = res.data;
		});
		return data;
	}

	static async authorSearch(author) {
		var data = "";
		await axios.get(`${url}/author/${author}`).then(res => {
			data = res.data;
		});
		return data;
	}

	static async addToMyQuotes(user, quote) {
		await axios.post(`${url}/add/${user}`, quote);
	}

	static async registerUser(username, password) {
		await axios.post(`${url}/register/${username}/${password}`);
	}

	static async loginUser(username, password) {
		var result = "";
		await axios.post(`${url}/login/${username}/${password}`).then(res => {
			result = res.data;
		});
		return result;
	}
}

export default ApiCalls;
