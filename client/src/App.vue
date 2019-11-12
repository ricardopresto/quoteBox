<template>
  <div>
    <Header
      :loggedIn="loggedIn"
      :currentUser="currentUser"
      @register-click="registerClick"
      @login-click="loginClick"
      @logout-click="logoutClick"
    />
    <button @click="authorSearch">Author Search</button>
    <input type="text" v-model="author" v-on:keyup.enter="authorSearch" />
    <br />
    <button @click="wordSearch">Word Search</button>
    <input type="text" v-model="word" v-on:keyup.enter="wordSearch" />
    <br />
    <button @click="randomQuote">Random</button>
    <br />
    <QuoteBox
      :quotes="quotes"
      :showRegister="showRegister"
      :showLogin="showLogin"
      @user-added="userAdded"
      @add-to-myquotes="addToMyQuotes($event)"
      @user-logged-in="userLoggedIn($event)"
      @cancel-login="cancelLogin"
    />
    <Footer />
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
      currentUser: ""
    };
  },
  methods: {
    async randomQuote() {
      let data = await ApiCalls.getRandomQuote();
      data = this.addMyQuote(data);
      this.quotes = data;
    },
    async authorSearch() {
      if (this.author != "") {
        let data = await ApiCalls.authorSearch(this.author);
        data = this.addMyQuote(data);
        console.log(data);
        this.quotes = data;
        this.author = "";
      }
    },
    async wordSearch() {
      if (this.word != "") {
        let data = await ApiCalls.wordSearch(this.word);
        data = this.addMyQuote(data);
        console.log(data);
        this.quotes = data;
        this.word = "";
      }
    },
    registerClick() {
      this.showRegister = true;
    },
    loginClick() {
      this.showLogin = true;
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
    addMyQuote(array) {
      array.forEach(i => {
        i["myQuote"] = false;
      });
      return array;
    },
    addToMyQuotes(id) {
      this.quotes.forEach(async quote => {
        if (quote._id == id) {
          quote.myQuote = true;
          delete quote._id;
          await ApiCalls.addToMyQuotes("user.newUser", quote);
        }
      });
    },
    userLoggedIn(userObject) {
      this.showLogin = false;
      this.currentUser = userObject.username;
      this.loggedIn = true;
      console.log(this.currentUser);
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
</style>
