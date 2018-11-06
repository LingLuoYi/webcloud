<template>
  <div>
    <div class="top">
      <ul>
        <li><img src="../assets/img/user.png" alt=""></li>
        <li>
          <router-link to="/Login">登录</router-link>
          <span>|</span>
          <router-link to="/Rejester">注册</router-link>
        </li>
        <!--<li>-->
          <!--<router-link to="">中文</router-link>-->
          <!--<span>|</span>-->
          <!--<router-link to="">英文</router-link>-->
        <!--</li>-->
      </ul>
    </div>
    <div class="nav">
      <span class="nav-lf"><img src="../assets/img/logo.png" alt=""></span>
      <ul class="nav-rg">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/Opi">产品信息</router-link></li>
        <li><router-link to="/Questions">服务中心</router-link></li>
        <li><router-link to="/Contact">联系我们</router-link></li>
        <li><router-link to="/About">关于我们</router-link></li>
      </ul>
    </div>
    <div class="banner">
      <el-button type="primary">开始挖矿</el-button>
      <el-carousel :height="bannerH +'px'">
        <el-carousel-item v-for="(img,index) in imglist" :key="index">
          <img class="ban-img" v-bind:src="img.url">
        </el-carousel-item>
      </el-carousel>
    </div>
    <main>
      <div class="H-TEXT">
        <h1 style="font-size: 32PX;font-weight: bolder">关于我们</h1>
        <h3>ABOUT US</h3>
        <p>麒麟算力是行业内Top级别的云算力合约平台，公司怀着对区块链产业的共识，<br>坚信区块链的无限未来，积极推动着社区和产业的发展和进步</p>
      </div>
      <div class="about">
        <img src="../assets/img/about.jpg" alt="">
      </div>
    </main>
    <footer>
      <div>
        <ul>
          <li>Kylin Hash</li>
          <li>Copyright © 2018 Bitmain.com.cn. All Rights Reserved. </li>
          <li>深圳蚂蚁区块链科技有限公司</li>
        </ul>
        <ul>
          <li>
            <ul>
              <li><router-link to="">首页</router-link></li>
              <li><router-link to="">产品信息</router-link></li>
              <li><router-link to="">新闻中心</router-link></li>
            </ul>
          </li>
          <li>
            <ul>
              <li><router-link to="">关于我们</router-link></li>
              <li><router-link to="">公司简介</router-link></li>
              <li><router-link to="/contact">联系我们</router-link></li>
            </ul>
          </li>
          <li>
            <ul>
              <li><router-link to="">服务中心</router-link></li>
              <li><router-link to="">常见问题</router-link></li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>客服热线</li>
          <li>12346577</li>
          <li>周一至周六8：00-21：00</li>
        </ul>
        <ul>
          <li><img src="../assets/img/befor.png" alt=""><p>售前客服</p></li>
          <li><img src="../assets/img/after.png" alt=""><p>售后客服</p></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      bannerH: 850 / 1920 * window.innerWidth,
      imglist: [
        {url: require('../assets/img/banner1.jpg')},
        {url: require('../assets/img/banner2.jpg')},
        {url: require('../assets/img/banner3.jpg')}
      ]
    }
  },
  // 轮播图自适应屏幕大小
  methods: {
    setSize: function () {
      this.bannerH = 850 / 1920 * this.screenWidth
      if (this.bannerH > 850) this.bannerH = 850
      if (this.bannerH < 531.25) this.bannerH = 531.25
    }
  },
  mounted () {
    this.setSize()
    console.log(this.setSize())
    const that = this
    window.addEventListener('resize', function () {
      that.screenWidth = window.innerWidth
      that.setSize()
    }, true)
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/style/style.less";
  @import "../assets/style/public.less";
  @import "../assets/style/normalize.less";
  @import "../assets/style/index.less";
  .about{
    width: 90%;
    margin: 30px 0;
    padding: 5%;
    img{
      display: block;
      margin: 20px auto;
      width: 100%;
    }
  }
</style>
