<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md" id="main">
        <div id="card">
          <span id="title">Login</span>
          <form>
            <h5>Hi, Welcome back!</h5>
            <div class="form-group">
              <label for="inputEmail">Email</label>
              <input type="email" v-model="email" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="inputPassword">Password</label>
              <input type="password" v-model="password">
            </div>
            <h6  @click="toForgot">Forgot Password?</h6>
          </form>
          <div class="button">
            <button id="submit-btn" @click="handleLogin">Login</button>
            <h6 id="with">Login with</h6>
            <button id="google-btn">
              <span><img src="@/assets/google.png"></span>Google
            </button>
              <div class="register">
              <span>
                Don't have an account?
                <span id="link" @click="toRegister">Sign Up</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
        .then(() => {
          this.$router.push('/main/')
        })
    },
    toRegister () {
      this.$router.push('/register')
    },
    toForgot () {
      this.$router.push('/forgot')
    }
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
#title {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: #7E98DF;
}

/* Form Box */
form {
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 10px;
}
form h5 {
    font-size: 14px;
    font-weight: 500;
    margin: 10px 0 20px;
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
.form h6 {
    font-size: 14px;
    color: #7E98DF;
    text-align: right;
    margin-top: 10px;
    cursor: pointer;
}

/* Button Box */
.button {
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 20px;
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
/* Register */
.register {
    margin: 15px 0 0;
}
.register span {
    font-size: 14px;
    color: #313131;
}
#link {
    font-size: 14px;
    font-weight: 500;
    color: #7E98DF;
    cursor: pointer;
}
</style>
