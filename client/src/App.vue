<template>
  <div>
    <button @click="authorSearch">Author Search</button>
    <input type="text" v-model="author" v-on:keyup.enter="authorSearch" />
    <br />
    <button @click="wordSearch">Word Search</button>
    <input type="text" v-model="word" v-on:keyup.enter="wordSearch" />
    <br />
    <button @click="randomQuote">Random</button>
    <br />
    <QuoteBox :quotes="quotes" />
  </div>
</template>

<script>
import QuoteBox from "./components/QuoteBox.vue";
import ApiCalls from "../ApiCalls.js";

export default {
  name: "app",
  components: {
    QuoteBox
  },
  data() {
    return {
      quotes: [],
      word: "",
      author: ""
    };
  },
  methods: {
    async randomQuote() {
      const data = await ApiCalls.getRandomQuote();
      console.log(data);
      this.quotes = data;
    },
    async authorSearch() {
      const data = await ApiCalls.authorSearch(this.author);
      console.log(data);
      this.quotes = data;
      this.author = "";
    },
    async wordSearch() {
      const data = await ApiCalls.wordSearch(this.word);
      console.log(data);
      this.quotes = data;
      this.word = "";
    }
  }
};
</script>

<style>
button {
  margin: 8px;
  width: 120px;
}
</style>
