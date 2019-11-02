<template>
  <div>
    <Quote
      v-for="quote in quotes"
      :key="quote._id"
      :quote="quote.quote"
      :author="quote.author"
      :source="quote.source"
    />
  </div>
</template>

<script>
import Quote from "./Quote.vue";
export default {
  name: "QuoteBox",
  components: {
    Quote
  },
  props: ["quotes"]
};
</script>

<style>
</style>