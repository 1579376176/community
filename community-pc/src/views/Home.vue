<template>
  <div class="community">
    <!-- 顶部 -->
    <div class="head">
      <img src="../assets/logo.png" alt="" />

    </div>
    <!-- 主图片 -->
    <div class="pic">
      <!-- <img src="../assets/lg11.jpg" style="object-fit: fill" alt=""> -->
    </div>
    <!-- 内容区 -->
    <div class="content">
      <a href="/life">
        <div class="con1">
          <h1>生活区</h1>
        </div></a
      >
      <a href="/study">
        <div class="con2">
          <h1>学习区</h1>
        </div>
      </a>
      <a href="/game"
        ><div class="con3">
          <h1>娱乐区</h1>
        </div></a
      >
      <a class="asd"></a>
</div>
      <!-- 通知公告 -->
      <div class="aaa">

      </div>
      
      <div class="con11" v-for="item in aa" :key="item.blog_id">
        <div>
          <div class="title">
            <h3 style="float:left;" >
              <router-link :to="{name:'Content',params:{blogId:item.blog_id}}">ㅤ ㅤ{{item.title}}</router-link>
            </h3>
            <h3 >   ㅤ</h3>
            <span style="float:left;" >{{ item.content }}</span> <br>
            <span style="float:left;"> ㅤ ㅤ时间：{{item.time}} </span>  <span> ㅤ</span>  <span style="float:right;">用户名：{{item.nickname}} ㅤ ㅤ</span>       
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
      "/blog/list"
      ).then((res)=>{
        console.log(res.data);
        let {a} = res.data;
        this.aa = a;
        // console.log(this.aa);
      })
    },
    
    

  },
};
</script>

<style scoped>
.head {
  margin: 0;
  background: rgb(87, 87, 87);
  width: 80%;
  height: 76px;
  position: relative;
  left: 10%;
  top: 5px;

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
.head span:link {
  color: black;
}
.head span:visited {
  color: black;
}
.community {
  height: 3000px;
  position: absolute;
  top: 0px;
  margin: 0px;
  left: 0px;
  right: 0px;
  padding: 0px;
  background: url(../assets/img/1.jpg);
  background-size: cover;
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
  height: 300px;
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

.con11 {
  width: 1350px;
  background: rgb(252, 255, 207,0.7);
  border-radius: 10px;
  clear:both;
  position: relative;
  left: 170px;
  top: 500px;
  font-size: 20px;
  line-height: 2em;
}
.aaa{
  width: 1688px;
  height: 400px;
  position: absolute;
  margin-top:370px ;
  background: url(../assets/stu.png);
  background-size:cover ;
}
.router-link-active {
    text-decoration: none;
  }
  a {
    color: black;
  text-decoration: none;
}
</style>