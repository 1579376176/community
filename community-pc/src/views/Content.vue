<template>
  <div>
    
    <div class="mainContent">  
      <button @click="back" style="position:relative;margin-left:-300px;" >回到首页</button>
      <aside>
        <div class="avatar">
          <a href="#"><span>崔瀚文</span></a>
        </div>
        <section class="topspaceinfo">
          <h1>软件18-X</h1>
          <p>XXX</p>
          <br />
          <p>1814010304</p>
        </section>
      </aside>
      <div class="blogitem">
        <article>
          <h2 class="title">{{ this.aa.title }}</h2>
          <ul class="text">
            {{
              this.aa.content
            }}
          </ul>
          <p>ㅤ ㅤ</p>
          <p>ㅤ ㅤ</p>
          <p>ㅤ ㅤ</p>
          <p>ㅤ ㅤ</p>
          <p>ㅤ ㅤ</p>
          <p>ㅤ ㅤ</p>
        </article>
        <textarea
          cols="99"
          rows="7"
          placeholder="来说几句吧......"
          class="mytextarea"
          v-model="content"
        ></textarea>
        <button @click="postCom">发表评论</button>
        <div
          class="comment-right"
          v-for="item in aa.comList"
          :key="item.blogId"
        >
          <h3>{{ item.nickname }}</h3>
          <div class="comment-content-header">
            <p class="content">{{ item.content }}</p>
            <span style="padding-right: 2em; color: #aaa; float: left">{{
              item.time
            }}</span>
            <span style="padding-right: 2em; color: #aaa; float: right"
              >软件工程</span
            >
            <p>ㅤ ㅤ</p>
            <hr />
            <p>ㅤ ㅤ</p>
          </div>
        </div>
        <p>ㅤ ㅤ</p>
      </div>
    </div>
    <footer>
      <div class="footavatar">
        <ul class="footinfo">
          <p class="fname"><a href="/dancesmile">崔瀚文</a></p>
          <p class="finfo">性别：男 专业：软件工程</p>
          <p>现居：哈尔滨</p>
        </ul>
      </div>
      <section class="visitor">
        <h2></h2>
        <ul>
          <li>
            <a href="#"><img src="./images/s0.jpg" /></a>
          </li>
          <li>
            <a href="#"><img src="./images/s1.jpg" /></a>
          </li>
          <li>
            <a href="#"><img src="./images/s2.jpg" /></a>
          </li>
          <li>
            <a href="#"><img src="./images/s3.jpg" /></a>
          </li>
          <li>
            <a href="#"><img src="./images/s5.jpg" /></a>
          </li>
          <li>
            <a href="#"><img src="./images/s6.jpg" /></a>
          </li>
          <li>
            <a href="#"><img src="./images/s7.jpg" /></a>
          </li>
          <li>
            <a href="#"><img src="./images/s8.jpg" /></a>
          </li>
        </ul>
      </section>
      <div class="Copyright">
        <ul>
          <a href="#">帮助中心</a
          ><a href="#">空间客服</a
          ><a href="#">投诉中心</a
          ><a href="#">空间协议</a>
        </ul>
        <p>Design by DanceSmile</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aa: {
        title: "",
        content: "",
        time: "",
        nickname: "",
      },
      b: "",
      comList: [],
      content:''
    };
  },
  created() {
    this.b = this.$route.params.blogId;
    this.getData();
  },
  methods: {
    getData() {
      console.log("55");
      this.$http
        .post("/blog/content", {
          blogId: this.b,
        })
        .then((res) => {
          let { bb } = res.data;
          this.aa.title = bb.title;
          this.aa.time = bb.time;
          this.aa.nickname = bb.nickname;
          this.aa.content = bb.content;
          this.aa.blog_id = bb.blog_id;
          this.aa.comList = bb.comment;
          console.log(this.aa);
        });
    },
    postCom() {
      let blogId = this.b;
      let postTime = new Date();
      this.$http
        .post("/blog/comment", {
          content: this.content,
          blogId: blogId,
          postTime: postTime,
        })
        .then((res) => {
          alert("评论成功！！！");
          let {bb} = res.data;
          console.log(bb);
            this.$router.push("/content/" + bb.blog_id);
             location.reload();
            
        });
    },
    back(){
      this.$router.push("/home");
    }
  },
};
</script>

<style src="./css/styles.css" scoped>
.mainContent{
  position: relative;
  margin-top:-100px;
  top:0px;
}
.mytextarea {
  width: 900px;
  height: 100px;
}

</style>