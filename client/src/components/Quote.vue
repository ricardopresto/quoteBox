<template>
  <div>
    <div id="background">
      <div v-if="editing == false">
        <div id="quote">{{quote}}</div>
        <div id="author">
          <span>{{author}}</span>
          <span id="source" v-if="source != undefined">, {{source}}</span>
        </div>
        <div class="overlay" v-if="myQuote == false">
          <div class="icon" @click="addToMyQuotes">
          <span>Add to My Quotes</span>
          </div>
        </div>
        <div class="overlay" v-if="myQuote == true">
          <div class="icon" @click="editQuote">
          <span>Edit</span>
          </div>
        </div>
      </div>
      <div v-if="editing == true">
        <div>
          <textarea id="quoteEdit" v-model="quote"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote",
  data() {
    return {
      editing: false
    }
  },
  props: ["quote", "author", "source", "myQuote"],
  methods: {
    addToMyQuotes() {
      this.$emit('add-to-myquotes')
    },
    editQuote() {
      this.editing = true;
    }
  }
};
</script>

<style scoped>
#background {
  width: 400px;
  height: min-content;
  border: 1px solid grey;
  border-radius: 8px;
  margin: 5px;
  background-image: url("paper.jpg");
  position: relative;
}
#quote {
  font-size: 1.1em;
  padding: 8px 20px 8px 20px;
}
#author {
  text-align: right;
  font-size: 0.8em;
  padding: 0 20px 8px 20px;
}
#source {
  font-style: italic;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.overlay:hover {
  opacity: 1;
}
.icon {
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.8em;
  cursor: default;
}
.icon:hover {
  color: #fff;
}
#quoteEdit {
  
}
</style>