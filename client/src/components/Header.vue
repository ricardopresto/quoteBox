<template>
  <div id="headerContainer">
    <div id="usernameDisplay" v-if="loggedIn">Logged in as: {{currentUser}}</div>
    <button id="register" v-if="!loggedIn" @click="$emit('register-click')">Register</button>
    <button id="login" v-if="!loggedIn" @click="$emit('login-click')">Log In</button>
    <button id="logout" v-if="loggedIn" @click="$emit('logout-click')">Log Out</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["loggedIn", "currentUser"],
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
  width: 90%;
  height: 40px;
  margin: 8px;
  padding: 0 10px;
  border: 1px solid grey;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
button {
  width: 80px;
  height: 25px;
  margin: 8px;
  appearance: none;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: white;
}
</style>