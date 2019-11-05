<template>
  <div>
    <div id="headerContainer">
      <button id="register" @click="$emit('register-click')">Register</button>
      <button id="login" @click="$emit('login-click')">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style scoped>
#headerContainer {
  width: 430px;
  height: 40px;
  margin: 8px;
  border: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
button {
  width: 80px;
  height: 25px;
  margin: 8px;
}
</style>