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

	static async registerUser(username, password) {
		await axios.post(`${url}/register/${username}/${password}`);
	}
}

export default ApiCalls;
