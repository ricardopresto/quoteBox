<template>
  <div>
    <div id="container">
      <Register v-if="showRegister == true" @user-added="$emit('user-added')" />
      <Login v-if="showLogin == true" />
      <Quote
        v-for="quote in quotes"
        :key="quote._id"
        :quote="quote.quote"
        :author="quote.author"
        :source="quote.source"
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
  props: ["quotes", "showRegister", "showLogin"]
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