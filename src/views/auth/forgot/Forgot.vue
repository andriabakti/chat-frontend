<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md" id="main">
                <div id="card">
                    <div class="title">
                        <span id="back" @click="toLogin">Back</span>
                        <span>Forgot Password</span>
                        <span></span>
                    </div>
                    <div class="form">
                        <h5>You'll get messages soon on your e-mail</h5>
                        <div class="form-group">
                            <label for="inputEmail">Email</label>
                            <input type="email" aria-describedby="emailHelp">
                        </div>
                        <button id="submit-btn">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Forgot',
  methods: {
    toLogin () {
      this.$router.push('/login')
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
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.form h5 {
    font-size: 14px;
    font-weight: 500;
    margin: 15px 0 10px;
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
/* Button */
.form button {
    width: 300px;
    height: 45px;
    border-radius: 70px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    background: #7E98DF;
    border: none;
    color: #FFFFFF;
}
</style>
