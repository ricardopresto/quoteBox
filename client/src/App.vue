<template>
  <div>
    <QuoteBox />
    <button @click="authorSearch">Author Search</button>
    <input type="text" v-model="author" />
    <br />
    <button @click="wordSearch">Word Search</button>
    <input type="text" v-model="word" />
    <br />
    <button @click="randomQuote">Random</button>
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
      word: "",
      author: ""
    };
  },
  methods: {
    async randomQuote() {
      const data = await ApiCalls.getRandomQuote();
      console.log(data);
    },
    async authorSearch() {
      const data = await ApiCalls.authorSearch(this.author);
      console.log(data);
      this.author = "";
    },
    async wordSearch() {
      const data = await ApiCalls.wordSearch(this.word);
      console.log(data);
      this.word = "";
    }
  }
};
</script>

<style>
</style>
