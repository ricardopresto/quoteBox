<template>
  <div id="footerContainer">
    <button
      id="collection"
      :disabled="!loggedIn"
      :class="{ selected: !myQuotes }"
      @click="$emit('collection-click')"
    >Collection</button>
    <div class="tooltip">
      <button
        id="myQuotes"
        :disabled="!loggedIn"
        :class="{ selected: myQuotes }"
        @click="$emit('myquotes-click')"
      >MyQuotes</button>
      <span class="tooltiptext" v-if="!loggedIn">Please log in or register to use MyQuotes</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["loggedIn", "myQuotes"]
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
.selected {
  box-shadow: 0 0 8px rgb(46, 69, 104) inset;
}
.tooltip {
  position: relative;
}
.tooltip .tooltiptext {
  visibility: hidden;
  opacity: 0.8;
  background-color: black;
  color: #fff;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  padding: 10px;
  border-radius: 6px;
  width: 100px;
  bottom: 100%;
  left: 50%;
  margin-left: -50px;
  position: absolute;
  z-index: 1;
}
.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
  opacity: 0.8;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
