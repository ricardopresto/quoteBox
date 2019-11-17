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
        v-for="quote in quotes"
        :key="quote._id"
        :id="quote._id"
        :quote="quote.quote"
        :author="quote.author"
        :source="quote.source"
        :myQuote="quote.myQuote"
        :loggedIn="loggedIn"
        @add-to-myquotes="$emit('add-to-myquotes', quote._id)"
        @edit-quote="$emit('edit-quote', $event)"
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
  props: ["quotes", "showRegister", "showLogin", "loggedIn"],
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