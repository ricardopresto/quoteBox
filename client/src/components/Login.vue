<template>
  <div>
    <div id="container">
      <div id="form">
        <div class="input">
          <label for="username">Username:</label>
          <input type="text" name="username" placeholder="Enter Username..." v-model="username" />
        </div>
        <div class="input">
          <label for="password">Password:</label>
          <input type="password" name="password" placeholder="Enter Password..." v-model="password" />
        </div>
        <div>
          <button>Cancel</button>
          <button>Log In</button>
        </div>
        <div id="messageBox">
          <div v-show="error == true">Please enter a username and password...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: false
    };
  },
  methods: {}
};
</script>

<style scoped>
#container {
  width: 400px;
  height: 200px;
  border: 1px solid grey;
  border-radius: 8px;
  margin: 5px;
  background-image: url("paper.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input {
  margin: 8px;
}
input {
  border: 1px solid grey;
  width: 200px;
  margin-left: 8px;
}
button {
  width: 80px;
  margin: 8px;
}
#messageBox {
  height: 20px;
}
</style>