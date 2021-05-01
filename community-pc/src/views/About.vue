<template>
<div>
  <div class="fatherBox">
    <div class="box">
      <h1 class="title">发表文章</h1>
      <p class="headLine">标题：</p>
      <input type="text" v-model="title" class="titleSon" />
      <p class="contentLine">内容：</p>
      <textarea
        class="content"
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="content"
      ></textarea>
      <button class="boxButton" @click="postBlog">发表</button>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      b: "",
    };
  },
  created() {},
  methods: {
    postBlog() {
      var Time = new Date();
      this.$http
        .post("/blog/post", {
          title: this.title,
          content: this.content,
          time: Time,
        })
        .then((res) => {
          let { q } = res.data;

          this.$router.push("/content/" + q);
          location.reload();
        });
    },
  },
};
</script>

<style scoped>

.box {
  position: absolute;
  height: 600px;
  top: 100px;
  left: 300px;
  right: 300px;
  background-color: blanchedalmond;
}

.title {
  text-align: center;
  color: cornflowerblue;
}

.titleSon {
  position: absolute;
  left: 80px;
  width: 750px;
  height: 60px;
  top: 80px;
  border-radius: 10px;
  border: cornflowerblue solid;
}

.headLine {
  display: inline-block;
  position: absolute;
  color: black;
  left: 10px;
  top: 80px;
  text-align: center;
  font-size: 25px;
  text-shadow: 10px 5px 20px mediumslateblue;
}

.content {
  position: absolute;
  top: 200px;
  width: 750px;
  height: 250px;
  left: 80px;
  border-radius: 20px;
  border: cornflowerblue solid;
}

.contentLine {
  display: inline-block;
  position: absolute;
  left: 10px;
  top: 200px;
  color: black;
  text-align: center;
  font-size: 25px;
  text-shadow: 10px 5px 20px mediumslateblue;
}

.boxButton {
  position: absolute;
  top: 500px;
  left: 10px;
  width: 80px;
  height: 45px;
  font-size: 15px;
  border-radius: 15px;
  text-shadow: 10px 5px 20px mediumslateblue;
}

.fatherBox {
  position: absolute;
  margin-top: -80px;
  top: 0;
  width: 100%;
  height: 1000px;
}

.left {
  position: absolute;
  top: 100px;
  width: 250px;
  height: 600px;
  background: url(https://img1.baidu.com/it/u=3256908995,2398718088&fm=26&fmt=auto&gp=0.jpg)
    no-repeat;
  background-size: cover;
}

.right {
  position: absolute;
  top: 100px;
  width: 250px;
  height: 600px;
  right: 0;
  background: url(https://img1.baidu.com/it/u=128384339,4166385545&fm=26&fmt=auto&gp=0.jpg)
    no-repeat;
  background-size: cover;
}
</style>