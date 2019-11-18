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

  static async wordSearch(word, user) {
    var data = "";
    await axios.get(`${url}/wordsearch/${word}/${user}`).then(res => {
      data = res.data;
    });
    return data;
  }

  static async authorSearch(author, user) {
    var data = "";
    await axios.get(`${url}/authorsearch/${author}/${user}`).then(res => {
      data = res.data;
    });
    return data;
  }

  static async combinedSearch(word, author, user) {
    var data = "";
    await axios
      .get(`${url}/combinedsearch/${word}/${author}/${user}`)
      .then(res => {
        data = res.data;
      });
    return data;
  }

  static async addToMyQuotes(user, quote) {
    await axios.post(`${url}/add/${user}`, quote);
  }

  static async registerUser(username, password) {
    var result = "";
    await axios.post(`${url}/register/${username}/${password}`).then(res => {
      result = res.data;
    });
    return result;
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
