import axios from "axios";

const url = "quotes";

class ApiCalls {
  static async getRandomQuote() {
    let data = "";
    await axios.get(`${url}/random`).then(
      res => {
        data = res.data;
      },
      error => {
        console.log(error);
      }
    );
    return data;
  }

  static async showAll(user) {
    let data = "";
    await axios.get(`${url}/showall/${user}`).then(
      res => {
        data = res.data;
      },
      error => {
        console.log(error);
      }
    );
    return data;
  }

  static async wordSearch(word, user) {
    let data = "";
    await axios.get(`${url}/wordsearch/${word}/${user}`).then(
      res => {
        data = res.data;
      },
      error => {
        console.log(error);
      }
    );
    return data;
  }

  static async authorSearch(author, user) {
    let data = "";
    await axios.get(`${url}/authorsearch/${author}/${user}`).then(
      res => {
        data = res.data;
      },
      error => {
        console.log(error);
      }
    );
    return data;
  }

  static async combinedSearch(word, author, user) {
    let data = "";
    await axios.get(`${url}/combinedsearch/${word}/${author}/${user}`).then(
      res => {
        data = res.data;
      },
      error => {
        console.log(error);
      }
    );
    return data;
  }

  static async addToMyQuotes(user, quote) {
    await axios.post(`${url}/add/${user}`, quote);
  }

  static async addNewQuote(user, quote) {
    await axios.post(`${url}/addNew/${user}`, quote);
  }

  static async updateEditedQuote(user, edit) {
    await axios.put(`${url}/edit/${user}`, edit);
  }

  static async deleteFromMyQuotes(user, id) {
    await axios.delete(`${url}/delete/${user}/${id}`);
  }

  static async registerUser(username, password) {
    let result = "";
    await axios.post(`${url}/register/${username}/${password}`).then(
      res => {
        result = res.data;
      },
      error => {
        console.log(error);
      }
    );
    return result;
  }

  static async loginUser(username, password) {
    let result = "";
    await axios.post(`${url}/login/${username}/${password}`).then(
      res => {
        result = res.data;
      },
      error => {
        console.log(error);
      }
    );
    return result;
  }
}

export default ApiCalls;
