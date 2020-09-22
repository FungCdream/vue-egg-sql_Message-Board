<template>
  <div>
    <div class="liuyan">
      <div id="board">
        <div class="title">
          <h1>留言板</h1>
        </div>
        <div>
          <input class="m-input" type="text" v-model="word" placeholder="请输入留言内容..." />
          <span>&nbsp;</span>
          <button @click="send">提交</button>
        </div>
      </div>
      <msg v-for="msg in msgarr" :key="msg.id" :data="msg"></msg>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import msg from "@/components/msg.vue";

export default {
  name: "App",
  data() {
    return {
      id: "",
      word: "",
      msgarr: [],
    };
  },

  components: {
    msg,
  },

  async created() {
    var re = await axios.post("http://192.168.3.128:7001/list");
    this.msgarr = re.data;
  },

  async updated() {
    var msgre = await axios.get("http://192.168.3.128:7001/getmsg");
    this.msgarr = msgre.data;
  },

  methods: {
    async send() {
      //获取用户交互的结果  发给后端
      //1.这是传文件和字段的方式，一般用post
      // var f = new FormData();
      // f.append("word", this.word); 
      //2.这是传get字段的方式  this.$axios.get(url, {params:{pwd:123,等等}})
      // .then((res)=>{
      // console.log(res.data)
      // })

      //3.这是post传输字段的方式  this.$axios.post(url, {pwd:123,等等})
      // .then((res)=>{
      // console.log(res.data)
      // })
      this.$axios
        .post("http://192.168.3.128:7001/msg", { word: this.word })
    },
  },
};
</script>

<style>
.content {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: gray;
}
.liuyan {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: rgb(223, 141, 35);
}
</style>

