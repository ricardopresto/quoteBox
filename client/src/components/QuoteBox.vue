<template>
  <div>
    <div id="container">
      <Register
        v-if="showRegister == true"
        @user-added="$emit('user-added')"
        @user-logged-in="$emit('user-logged-in', $event)"
      />
      <Login
        v-if="showLogin == true"
        @user-logged-in="$emit('user-logged-in', $event)"
        @cancel-login="$emit('cancel-login')"
      />
      <Quote
        v-if="addQuote == true"
        :quote="null"
        :author="null"
        :source="null"
        :myQuote="true"
        :openEdit="true"
        @edit-quote="$emit('add-quote', $event)"
        @hide-new-quote="$emit('hide-new-quote')"
      />
      <Quote
        v-for="quote in quotes"
        :key="quote._id"
        :id="quote._id"
        :quote="quote.quote"
        :author="quote.author"
        :source="quote.source"
        :myQuote="quote.myQuote"
        :loggedIn="loggedIn"
        :openEdit="false"
        @add-to-myquotes="$emit('add-to-myquotes', quote._id)"
        @delete-quote="$emit('delete-quote', quote._id)"
        @edit-quote="$emit('edit-quote', $event)"
      />
      <Quote
        v-if="noResults == true"
        :quote="noResultsMessage"
        :author="noResultsAuthor"
        :openEdit="false"
      />
    </div>
  </div>
</template>

<script>
import Register from "./Register.vue";
import Login from "./Login.vue";
import Quote from "./Quote.vue";
export default {
  name: "QuoteBox",
  components: {
    Quote,
    Register,
    Login
  },
  data() {
    return {
      noResultsMessage:
        "Sorry, we couldn't find anything matching that search.",
      noResultsAuthor: "quoteBox"
    };
  },
  props: [
    "quotes",
    "showRegister",
    "showLogin",
    "loggedIn",
    "addQuote",
    "noResults"
  ],
  methods: {
    addToMyQuotes(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
#container {
  width: 430px;
  height: 500px;
  overflow-y: scroll;
  border: 1px solid grey;
  margin: 8px;
}
</style>
