<template>
  <div>
    <Header @register-click="registerClick" @login-click="loginClick" />
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
      showLogin: false
    };
  },
  methods: {
    async randomQuote() {
      const data = await ApiCalls.getRandomQuote();
      console.log(data);
      this.quotes = data;
    },
    async authorSearch() {
      if (this.author != "") {
        const data = await ApiCalls.authorSearch(this.author);
        console.log(data);
        this.quotes = data;
        this.author = "";
      }
    },
    async wordSearch() {
      if (this.word != "") {
        const data = await ApiCalls.wordSearch(this.word);
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
    userAdded() {
      this.showRegister = false;
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
