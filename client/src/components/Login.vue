<template>
  <div>
    <div id="container">
      <div id="form">
        <div class="input">
          <label for="username">Username:</label>
          <input
            type="text"
            name="username"
            maxlength="10"
            v-model="username"
            @change="error = false"
            @keyup.enter="loginUser"
          />
        </div>
        <div class="input">
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password" @keyup.enter="loginUser" />
        </div>
        <div>
          <button @click="cancelLogin">Cancel</button>
          <button @click="loginUser">Log In</button>
        </div>
        <div id="messageBox">
          <div v-show="error == true">Please enter a username and password...</div>
          <div v-show="incorrect == true">Incorrect username or password.</div>
          <div v-show="success == true">Login successful!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiCalls from "../../ApiCalls.js";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: false,
      incorrect: false,
      success: false
    };
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async loginUser() {
      if (this.username == "" || this.password == "") {
        this.error = true;
        this.incorrect = false;
      } else {
        const result = await ApiCalls.loginUser(this.username, this.password);
        if (result == "fail") {
          this.error = false;
          this.incorrect = true;
        } else if (result == "success") {
          this.error = false;
          this.incorrect = false;
          this.success = true;
          await this.sleep(1000);
          this.$emit("user-logged-in", this.username);
          this.username = "";
          this.password = "";
        }
      }
    },
    cancelLogin() {
      this.username = "";
      this.password = "";
      this.$emit("cancel-login");
    }
  }
};
</script>

<style scoped>
#container {
  width: 95%;
  max-width: 400px;
  height: 200px;
  border: 1px solid grey;
  border-radius: 8px;
  box-shadow: 3px 3px 6px #777;
  margin: 5px;
  background-image: url("../assets/images/paper.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
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
  border-radius: 4px;
  width: 140px;
  margin-left: 8px;
  padding: 2px;
}
button {
  margin: 8px;
  width: 80px;
  height: 20px;
  appearance: none;
  border: 1px solid grey;
  border-radius: 6px;
  background-color: white;
}
#messageBox {
  height: 20px;
  padding-top: 5px;
}
</style>