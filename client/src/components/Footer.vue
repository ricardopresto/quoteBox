<template>
  <div>
    <div id="footerContainer">
      <button id="collection" v-if="loggedIn == true" @click="$emit('collection-click')">
        Collection
      </button>
      <button id="myQuotes" v-if="loggedIn == true" @click="$emit('myquotes-click')">MyQuotes</button>
    </div>
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
  width: 430px;
  height: 40px;
  margin: 8px;
  border: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
button {
  width: 80px;
  height: 25px;
  margin: 8px;
}
</style>
