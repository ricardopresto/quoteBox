<template>
  <div id="footerContainer">
    <button id="collection" v-if="loggedIn == true" @click="$emit('collection-click')">Collection</button>
    <button id="myQuotes" v-if="loggedIn == true" @click="$emit('myquotes-click')">MyQuotes</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["loggedIn"]
};
</script>

<style scoped>
#footerContainer {
  width: 90%;
  height: 40px;
  margin: 8px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: rgb(197, 215, 255);
  box-shadow: 0 0 10px rgb(46, 69, 104) inset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
button {
  width: 80px;
  height: 25px;
  margin: 8px;
  appearance: none;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: white;
}
</style>
