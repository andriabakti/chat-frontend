<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md" id="main">
        <div id="card">
          <div class="title">
            <span id="back" @click="toLogin">Back</span>
            <span>Register</span>
            <span></span>
          </div>
          <div class="form">
            <h5>Let's create your account!</h5>
            <div class="form-group">
              <label for="inputName">Name</label>
              <input type="text" v-model="username">
            </div>
            <div class="form-group">
              <label for="inputEmail">Email</label>
              <input type="email" v-model="email" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="inputPassword">Password</label>
              <input type="password" v-model="password">
            </div>
          </div>
          <div class="button">
            <button id="submit-btn" @click="handleRegister">Register</button>
            <h6 id="with">Register with</h6>
            <button id="google-btn">
              <span><img src="@/assets/google.png"></span>Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data: () => {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  methods: {
    handleRegister (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password,
        username: this.username
      }
      this.register(data)
        .then(() => {
          this.$router.push('/login')
        })
    },
    toLogin () {
      this.$router.push('/login')
    },
    ...mapActions(['register'])
  }
}
</script>

<style scoped>
/* Background */
#main {
    height: 635px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#E5E5E5;
}
/* Card */
#card {
    width: 400px;
    height: 520px;
    background: #FFFFFF;
    border-radius: 30px;
    box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
}
/* Title */
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #7E98DF;
}
#back {
  cursor: pointer;
}

/* Form Box */
.form {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.form h5 {
    font-size: 14px;
    font-weight: 500;
    margin: 15px 0 20px;
}
/* Form Input */
.form-group {
    display: flex;
    flex-direction: column;
}
.form-group label {
    font-size: 14px;
    color: #848484;
    opacity: 0.75;
    margin: 0;
}
.form-group input {
    border-style: none none solid;
    height: 30px;
}

/* Button Box */
.button {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.button button {
    width: 300px;
    height: 45px;
    border-radius: 70px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
}
#submit-btn {
    background: #7E98DF;
    border: none;
    color: #FFFFFF;
}
#with {
    font-size: 14px;
    color: #848484;
    margin: 10px 0;
}
#google-btn {
    background: #FFFFFF;
    border: 1px solid #7E98DF;
    color: #7E98DF;
}
#google-btn img {
    width: 14px;
    margin-right: 15px;
}
</style>
