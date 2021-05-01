<template>
  <div class="community">
    <!-- 顶部 -->
    <div class="head">
      <img src="../assets/logo.png" alt="" />

      <span class="head1"><button><router-link to="/about">写文章</router-link></button></span>
    </div>
    <div class="yx"></div>
    <div class="con11" v-for="item in aa" :key="item.blog_id">
        <div>
          <div class="title">
            <h3>
              <router-link :to="{name:'Content',params:{blogId:item.blog_id}}">{{item.title}}</router-link>
            </h3>
            <p>{{ item.content }}</p>
            <span>时间：{{item.time}} </span>   <span>用户名：{{item.nickname}}</span>       
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aa:''
    };
  },
  created() {
    this.getData();
    
  },
  methods: {
    getData() {
      this.$http.get(
      "/blog/gamelist"
      ).then((res)=>{
        let {game} = res.data;
        this.aa = game;
        console.log(this.aa);
      })
    },
    
    

  },
};
</script>
<style scoped>
.yx{
   width: 1270px;
  height: 300px;
  margin-left:200px ;
  margin-top: 20px;
  border-radius:20px ;
  background: url(../assets/yx.jpg);
  background-size: contain;
}
.con11 {
  width: 1350px;
  background: rgb(252, 255, 207,0.7);
  border-radius: 10px;
  clear:both;
  position: relative;
  left: 170px;
  top: 50px;
  font-size: 20px;
  line-height: 2em;
}
.head {
  margin: 0;
  background: rgb(52, 186, 248);
  width: 80%;
  height: 76px;
  position: relative;
  left: 10%;
  top: 0px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
.head span {
  float: right;
  position: relative;
  top: 20px;
  right: 200px;
}
.head span:hover {
  color: white;
}
.community {
  height: 3000px;
  position: relative;
  top: -70px;
  margin: 0px;
  padding: 0px;
  background-color: rgb(233, 233, 233);
}

.pic {
  top: 20px;
  width: 80%;
  height: 500px;
  position: relative;
  left: 10%;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: url(../assets/lg11.jpg);
  background-size: cover;
}
content {
  position: relative;
  margin-top: 200px;
  background: url(../assets/bg.jpg);
}
.con1 {
  position: relative;
  top: 40px;
  left: 10%;
  float: left;
  width: 400px;
  height: 300px;
  background: url(../assets/shq.jpg);
  background-size: cover;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  color: white;

  -webkit-text-stroke: 1px black;

  letter-spacing: 0.04em;
}
.con2 {
  position: relative;
  top: 40px;
  left: 250px;
  float: left;
  width: 400px;
  height: 300px;
  background: url(../assets/xxq.jpg);
  background-size: cover;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  color: white;
  -webkit-text-stroke: 1px black;
  letter-spacing: 0.04em;
}
.con3 {
  position: relative;
  top: 40px;
  float: right;
  right: 10%;
  width: 400px;
  height: 300px;
  background: url(../assets/ylq.jpg);
  background-size: cover;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  color: white;
  -webkit-text-stroke: 1px black;
  letter-spacing: 0.04em;
}
.router-link-active {
    text-decoration: none;
  }
  a {
    color: black;
  text-decoration: none;
}
</style>