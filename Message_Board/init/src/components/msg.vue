<template>
  <!-- 留言栏 更删查改 -->
  <div class="msg" v-model="id">
    <p class="msgname" v-model="id">
      {{data.id}}
      <br />
      <br />
      {{data.word}}
      <button @click="tan">修改{{data.id}}</button>
      <button @click="del(data.id)">删除{{data.id}}</button>
    </p>

    <!-- 隐藏修改框 -->
    <div class="changek" v-if="show">
      <input class="changeinput" type="text" v-model="word2" placeholder="请输入修改内容..." />
      <button @click="send(data.word)">确定修改{{data.word}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      id: "",
      word: "",
      word2: "",
      show: !true,
      msgarr: [],
    };
  },

  methods: {
    // 删除的方法
    async del(e) {
      this.$axios
        .post("http://192.168.3.128:7001/delmsg", { id: e })
        .then((res) => {
          console.log(res);
        });
    },

    // 点击显示隐藏修改框
    async tan() {
      this.show = !this.show;
    },

    // 发送数据给后端
    async send(e) {
      this.$axios
        .post("http://192.168.3.128:7001/changemsg", {
          word: e,
          word2: this.word2,
        })
        .then((res) => {
          console.log(res.data);
        });

        this.show = !this.show;
    },
  },
};
</script>

<style>
.msg {
  width: 200px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  margin: 5px;
}
.msgname {
  width: 200px;
}

.changek {
  width: 200px;
  height: 200px;
  background-color: rgb(161, 245, 26);
}
</style>