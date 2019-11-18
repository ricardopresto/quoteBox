<template>
  <div>
    <div id="container">
      <div id="form">
        <div class="input">
          <label for="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username..."
            v-model="username"
            @keyup.enter="registerUser"
          />
        </div>
        <div class="input">
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
            v-model="password"
            @keyup.enter="registerUser"
          />
        </div>
        <div>
          <button @click="cancelReg">Cancel</button>
          <button @click="registerUser">Register</button>
        </div>
        <div id="messageBox">
          <div v-show="created == true">New user created!</div>
          <div v-show="error == true">Please enter a username and password...</div>
          <div v-show="taken == true">Username already in use.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiCalls from "../../ApiCalls.js";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      created: false,
      error: false,
      taken: false
    };
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async registerUser() {
      if (this.username == "" || this.password == "") {
        this.error = true;
      } else {
        const result = await ApiCalls.registerUser(this.username, this.password);
        if (result == "created") {       
          this.error = false;
          this.taken = false;
          this.created = true;
          await this.sleep(1000);
          this.$emit("user-added");
          this.$emit("user-logged-in", this.username);
          this.username = "";
          this.password = "";
        } else if (result == "taken") {
          this.taken = true;
        }
      }
    },
    cancelReg() {
      this.username = "";
      this.password = "";
      this.$emit("user-added");
    }
  }
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