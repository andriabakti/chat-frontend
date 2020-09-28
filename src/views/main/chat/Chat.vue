<template>
  <div class="col-md-8">
    <div class="container-msg">
      <!-- <div class="list-group"> -->
      <ul class="list-group">
        <li class="list-group-item active"></li>
        <li v-for="(message, index) in messages" class="list-group-item" :key="index">{{message.body}} - {{formatDate(message.createdAt)}}</li>
      </ul>
    </div>
    <!-- </div> -->
    <InputMessage @handle-send="handleSendMessage"/>
  </div>
</template>

<script>
import InputMessage from '../../../components/_base/InputMessage'
import { mapGetters } from 'vuex'
import moment from 'moment'
moment.locale('id')

export default {
  name: 'Chat',
  props: ['socket'],
  components: {
    InputMessage
  },
  data () {
    return {
      receiverId: 3,
      messages: []
    }
  },
  computed: {
    ...mapGetters({
      userId: 'getUserId'
    })
  },
  mounted () {
    this.socket.emit('setupUserLogin', this.userId)
    this.socket.on('receiveMessage', data => {
      console.log(data)
      this.messages.push(data)
    })
  },
  methods: {
    handleSendMessage (data) {
      console.log(data.dom)
      data.dom.value = ''
      data.dom.focus()
      const dataMessage = {
        body: data.msg,
        senderId: this.userId,
        receiverId: this.receiverId
      }
      this.socket.emit('sendMessage', dataMessage, data => {
        this.messages.push(data)
      })
    },
    formatDate (date) {
      return moment(date).format('LT')
    }
  }
}
</script>

<style scoped>
.container-msg{
  height: calc(100vh - 100px);
  background-color: #eceaea;
}
</style>
