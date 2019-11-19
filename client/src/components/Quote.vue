<template>
  <div>
    <div id="background">
      <div v-if="editing == false">
        <div id="quote">{{ quote }}</div>
        <div id="author">
          <span>{{ author }}</span>
          <span id="source" v-if="source != undefined && source != ''"
            >, {{ source }}</span
          >
        </div>
        <div class="overlay" v-if="myQuote == false && loggedIn == true">
          <div class="icon" @click="addToMyQuotes">
            <span>Add to My Quotes</span>
          </div>
        </div>
        <div class="overlay" v-if="myQuote == true">
          <div class="icon">
            <span @click="editQuote">Edit</span>
            <span @click="$emit('delete-quote')">Delete</span>
          </div>
        </div>
      </div>
      <div v-if="editing == true">
        <div id="editBox">
          <div class="label">Quote:</div>
          <textarea
            class="editField"
            ref="quoteEdit"
            v-model="editedQuote"
            oninput="this.style.height=''; this.style.height =
          this.scrollHeight + 'px'"
          ></textarea>
          <div class="label">Author:</div>
          <textarea
            class="editField"
            ref="authorEdit"
            v-model="editedAuthor"
          ></textarea>
          <div class="label">Source:</div>
          <textarea
            class="editField"
            ref="sourceEdit"
            v-model="editedSource"
          ></textarea>
          <div id="buttons">
            <button @click="cancelEdit">Cancel</button>
            <button @click="saveEdit">Save</button>
          </div>
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
      editing: this.openEdit,
      editedQuote: this.quote,
      editedAuthor: this.author,
      editedSource: this.source
    };
  },
  props: ["quote", "author", "source", "id", "myQuote", "loggedIn", "openEdit"],
  methods: {
    addToMyQuotes() {
      this.$emit("add-to-myquotes");
    },
    editQuote() {
      this.editing = true;
      this.$nextTick(() => {
        this.$refs.quoteEdit.style.height =
          this.$refs.quoteEdit.scrollHeight + "px";
      });
    },
    cancelEdit() {
      this.editing = false;
      this.editedQuote = this.quote;
      this.editedAuthor = this.author;
      this.editedSource = this.source;
      this.$emit("hide-new-quote");
    },
    saveEdit() {
      this.editing = false;
      this.$emit("edit-quote", {
        quote: this.editedQuote,
        author: this.editedAuthor,
        source: this.editedSource,
        id: this.id
      });
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
  padding-top: 5px;
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
#editBox {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.editField {
  width: 90%;
  margin: 10px;
  padding: 5px;
  resize: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 1em;
}
.label {
  margin-left: 15px;
  align-self: flex-start;
}
button {
  width: 80px;
  height: 25px;
  margin: 5px;
}
</style>
