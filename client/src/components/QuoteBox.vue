<template>
  <div id="quoteBoxContainer">
    <transition name="drop">
      <Register
        v-if="showRegister == true"
        @user-added="$emit('user-added')"
        @user-logged-in="$emit('user-logged-in', $event)"
      />
    </transition>
    <transition name="drop">
      <Login
        v-if="showLogin == true"
        @user-logged-in="$emit('user-logged-in', $event)"
        @cancel-login="$emit('cancel-login')"
      />
    </transition>
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
    <transition-group name="drop" tag="div">
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
    </transition-group>
    <transition name="drop">
      <Quote
        v-if="noResults == true"
        :quote="noResultsMessage"
        :author="noResultsAuthor"
        :openEdit="false"
      />
    </transition>
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
  ]
};
</script>

<style scoped>
#quoteBoxContainer {
  width: 90vw;
  height: 70vh;
  overflow-y: scroll;
  border: 1px solid #ddd;
  margin: 8px;
}

#quoteBoxContainer div:first-child {
  display: flex;
  flex-flow: row wrap;
}

.drop-enter-active,
.drop-leave-active {
  transition: all 0.2s;
}

.drop-enter {
  transform: translateY(-100%);
  opacity: 0;
}

.drop-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
