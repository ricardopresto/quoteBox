<template>
  <div id="headerContainer">
    <div id="title">quoteBox</div>
    <div id="headerControls">
      <div id="usernameDisplay" v-if="loggedIn">
        <i class="fas fa-user"></i>
        {{ currentUser }}
      </div>
      <button id="register" v-if="!loggedIn" @click="$emit('register-click')">
        Register
      </button>
      <button id="login" v-if="!loggedIn" @click="$emit('login-click')">
        Log In
      </button>
      <button id="logout" v-if="loggedIn" @click="$emit('logout-click')">
        Log Out
      </button>
    </div>
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
  border-radius: 10px;
  background-color: rgb(197, 215, 255);
  box-shadow: 0 0 10px rgb(46, 69, 104) inset;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
}
#headerControls {
  display: flex;
  flex-direction: row;
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
#title {
  font-family: "Molle", cursive;
  font-weight: 400;
  font-style: italic;
  font-weight: 400;
  font-style: italic;
  font-size: 2em;
  padding: 0 10px;
}

@media screen and (max-width: 462px) {
  #headerContainer {
    height: 65px;
  }
  #title {
    font-size: 1.8em;
    padding: 0 5px;
  }
  #usernameDisplay {
    font-size: 0.9em;
    padding-top: 5px;
  }
  #headerControls {
    flex-direction: column;
    justify-content: space-around;
  }
  button {
    height: 24px;
    width: 70px;
    margin: 2px 8px;
  }
}
</style>
