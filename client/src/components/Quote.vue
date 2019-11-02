<template>
  <div>
    <div id="background">
      <div id="quote">{{quote}}</div>
      <div id="author">{{author}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: ["quote", "author"]
};
</script>

<style scoped>
#background {
  width: 400px;
  height: min-content;
  border: 1px solid grey;
  border-radius: 8px;
  margin: 5px;
}
#quote {
  font-size: 1.1em;
  padding: 8px 20px 8px 20px;
}
#author {
  font-size: 0.8em;
  padding: 0 20px 8px 20px;
}
</style>