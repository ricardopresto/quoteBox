<template>
  <div>
    <Header
      :loggedIn="loggedIn"
      :currentUser="currentUser"
      @register-click="registerClick"
      @login-click="loginClick"
      @logout-click="logoutClick"
    />
    <span>Author:</span>
    <input type="text" v-model="author" v-on:keyup.enter="search" />
    <br />
    <span>Word:</span>
    <input type="text" v-model="word" v-on:keyup.enter="search" />
    <br />
    <button @click="randomQuote">Random</button>
    <button @click="search">Search</button>
    <br />
    <QuoteBox
      :quotes="quotes"
      :showRegister="showRegister"
      :showLogin="showLogin"
      :loggedIn="loggedIn"
      @user-added="userAdded"
      @add-to-myquotes="addToMyQuotes($event)"
      @edit-quote="saveEditedQuote($event)"
      @user-logged-in="userLoggedIn($event)"
      @cancel-login="cancelLogin"
    />
    <Footer 
      :loggedIn="loggedIn" 
      @collection-click="collectionClick" 
      @myquotes-click="myQuotesClick" 
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import QuoteBox from "./components/QuoteBox.vue";
import ApiCalls from "../ApiCalls.js";

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
      loggedIn: false,
      currentUser: "",
      myQuotes: false
    };
  },
  methods: {
    async randomQuote() {
      let data = await ApiCalls.getRandomQuote();
      this.quotes = data;
      this.currentSearch = "";
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
      }
      this.removeDuplicates();
    },

    removeDuplicates() {
      this.quotes.forEach(quote => {
        for (let n = this.quotes.indexOf(quote) + 1; n < this.quotes.length; n++) {
          if (this.quotes[n].quote == quote.quote) {
            this.quotes.splice(n, 1);
          }
        }
      })
    },

    registerClick() {
      this.showRegister = true;
      this.showLogin = false;
    },
    loginClick() {
      this.showLogin = true;
      this.showRegister = false;
    },
    logoutClick() {
      this.loggedIn = false;
      this.currentUser = "";
    },
    cancelLogin() {
      this.showLogin = false;
    },
    userAdded() {
      this.showRegister = false;
    },
    addToMyQuotes(id) {
      this.quotes.forEach(async quote => {
        if (quote._id == id) {
          quote.myQuote = true;
          quote._id = quote._id + "MQ";
          await ApiCalls.addToMyQuotes(`user.${this.currentUser}`, quote);
        }
      });
    },
    saveEditedQuote(edit) {
      this.quotes.forEach(async quote => {
        if (quote._id == edit.id) {
          quote.quote = edit.quote;
          quote.author = edit.author;
          quote.source = edit.source;
        }
      });
    },
    collectionClick() {
      this.myQuotes = false;
      this.search();
    },
    myQuotesClick() {
      this.myQuotes = true;
      this.search();
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
}
</style>

<style scoped>
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
