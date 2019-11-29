<template>
  <div>
    <div id="container">
      <Header
        :loggedIn="loggedIn"
        :currentUser="currentUser"
        @register-click="registerClick"
        @login-click="loginClick"
        @logout-click="logoutClick"
      />
      <div id="controlPanel">
        <span>Author:</span>
        <input
          type="text"
          onClick="this.setSelectionRange(0, this.value.length)"
          v-model="author"
          v-on:keyup.enter="search"
        />
        <br />
        <span>Word:</span>
        <input
          type="text"
          onClick="this.setSelectionRange(0, this.value.length)"
          v-model="word"
          v-on:keyup.enter="search"
        />
        <br />
        <button @click="search">Search</button>
        <button v-if="!myQuotes" @click="randomQuote">Random</button>
        <button v-if="!myQuotes" @click="clear">Clear</button>
        <button v-if="myQuotes" @click="showAll">Show All</button>
        <button v-if="myQuotes" @click="addNewQuote">Add New Quote</button>
      </div>
      <QuoteBox
        :quotes="quotes"
        :showRegister="showRegister"
        :showLogin="showLogin"
        :loggedIn="loggedIn"
        :addQuote="addQuote"
        :noResults="noResults"
        @user-added="userAdded"
        @add-to-myquotes="addToMyQuotes($event)"
        @delete-quote="deleteQuote($event)"
        @edit-quote="saveEditedQuote($event)"
        @add-quote="saveNewQuote($event)"
        @user-logged-in="userLoggedIn($event)"
        @hide-new-quote="hideNewQuote"
        @cancel-login="cancelLogin"
      />
      <Footer
        :loggedIn="loggedIn"
        @collection-click="collectionClick"
        @myquotes-click="myQuotesClick"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import QuoteBox from "./components/QuoteBox.vue";
import ApiCalls from "../ApiCalls.js";
import uuid from "uuid/v4";

export default {
  name: "app",
  components: {
    QuoteBox,
    Header,
    Footer
  },
  data() {
    return {
      quotes: [],
      word: "",
      author: "",
      showRegister: false,
      showLogin: false,
      loggedIn: true,
      currentUser: "user1",
      myQuotes: false,
      addQuote: false,
      randomSearch: false,
      noResults: false
    };
  },
  methods: {
    async randomQuote() {
      let data = await ApiCalls.getRandomQuote();
      this.randomSearch ? this.quotes.unshift(data[0]) : (this.quotes = data);
      this.randomSearch = true;
      this.noResults = false;
    },
    async search() {
      if (this.word.trim() != "" && this.author.trim() != "") {
        let data = await ApiCalls.combinedSearch(
          this.word,
          this.author,
          this.myQuotes ? `user.${this.currentUser}` : "main"
        );
        this.quotes = data;
      } else if (this.word.trim() != "") {
        let data = await ApiCalls.wordSearch(
          this.word,
          this.myQuotes ? `user.${this.currentUser}` : "main"
        );
        this.quotes = data;
      } else if (this.author.trim() != "") {
        let data = await ApiCalls.authorSearch(
          this.author,
          this.myQuotes ? `user.${this.currentUser}` : "main"
        );
        this.quotes = data;
      } else {
        return;
      }
      this.quotes.length == 0
        ? (this.noResults = true)
        : (this.noResults = false);
      this.removeDuplicates();
      this.randomSearch = false;
    },
    removeDuplicates() {
      this.quotes.forEach(quote => {
        for (
          let n = this.quotes.indexOf(quote) + 1;
          n < this.quotes.length;
          n++
        ) {
          if (this.quotes[n].quote == quote.quote) {
            this.quotes.splice(n, 1);
          }
        }
      });
    },
    addToMyQuotes(id) {
      this.quotes.forEach(quote => {
        if (quote._id == id) {
          quote.myQuote = true;
          quote._id = quote._id + "MQ";
          ApiCalls.addToMyQuotes(`user.${this.currentUser}`, quote);
        }
      });
    },
    deleteQuote(id) {
      this.quotes = this.quotes.filter(quote => {
        return quote._id != id;
      });
      ApiCalls.deleteFromMyQuotes(`user.${this.currentUser}`, id);
    },
    saveEditedQuote(edit) {
      this.quotes.forEach(quote => {
        if (quote._id == edit.id) {
          quote.quote = edit.quote;
          quote.author = edit.author;
          quote.source = edit.source;
        }
        ApiCalls.updateEditedQuote(`user.${this.currentUser}`, edit);
      });
    },
    saveNewQuote(quote) {
      this.addQuote = false;
      quote.myQuote = true;
      quote._id = uuid();
      this.quotes.unshift(quote);
      ApiCalls.addNewQuote(`user.${this.currentUser}`, quote);
    },
    addNewQuote() {
      this.addQuote = true;
    },
    async showAll() {
      let data = await ApiCalls.showAll(`user.${this.currentUser}`);
      this.quotes = data;
      this.randomSearch = false;
      this.noResults = false;
    },
    clear() {
      this.quotes = [];
      this.noResults = false;
    },
    collectionClick() {
      this.myQuotes = false;
    },
    myQuotesClick() {
      this.myQuotes = true;
    },
    registerClick() {
      this.showLogin ? null : (this.showRegister = true);
    },
    loginClick() {
      this.showRegister ? null : (this.showLogin = true);
    },
    logoutClick() {
      this.loggedIn = false;
      this.currentUser = "";
    },
    cancelLogin() {
      this.showLogin = false;
    },
    hideNewQuote() {
      this.addQuote = false;
    },
    userAdded() {
      this.showRegister = false;
    },
    userLoggedIn(username) {
      this.showLogin = false;
      this.currentUser = username;
      this.loggedIn = true;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#controlPanel {
  width: 90%;
  border: 1px solid grey;
  border-radius: 20px;
  padding: 10px;
}

button {
  margin: 8px;
  width: 120px;
}
span {
  display: inline-block;
  margin: 8px;
  width: 60px;
}
</style>
