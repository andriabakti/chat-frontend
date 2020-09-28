<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <!-- list user -->
        <h4>Friend List</h4>
      </div>
      <div class="col-md-8">
        <!--chat -->
        <router-view :socket="socket"/>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'Main',
  components: {
  },
  data: () => ({
    socket: io(`${process.env.VUE_APP_BASE_URL}`)
  })
  // methods: {
  //   setupLogin (value) {
  //     this.socket.emit('setupLogin', {
  //       id: this.id,
  //       token: this.token
  //     }, (error) => {
  //       alert(error)
  //     })
  //   }
  // },
  // mounted () {
  //   this.setupLogin()
  // }
}
</script>

<style scoped>
.box-chat {
  background: #E5E5E5;
}
</style>
