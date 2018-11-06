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
        <h1 style="font-size: 32PX;font-weight: bolder">联系我们</h1>
        <h3>CONTACT US</h3>
      </div>
      <div class="cont-m">
        <div>
          <ul>
            <li>公司地址</li>
            <li><img src="../assets/img/sj.png" alt=""></li>
            <li>深圳市南山区</li>
          </ul>
        </div>
        <div>
          <img src="../assets/img/map.jpg" alt="">
        </div>
      </div>
      <div class="our-number">
        <div class="H-TEXT">
          <h1 style="font-size: 32PX;font-weight: bolder">联系方式</h1>
         <b></b>
        </div>
        <div class="con-way">
          <ul>
            <li><span><img src="../assets/img/phone.png" alt=""></span><span>客服热线：183-2078-6789</span></li>
            <li><span><img src="../assets/img/eamil.png" alt=""></span><span>邮箱：KylinHash@163.com</span></li>
            <li><span><img src="../assets/img/time.png" alt=""></span><span>时间：周一到周六8：00-21：00</span></li>
          </ul>
        </div>
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
              <li><router-link to="">联系我们</router-link></li>
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
  .cont-m{
    width: 100%;
    display: flex;
    margin-top: 30px;
    >div:nth-child(1){
      flex: 1;
      text-align: center;
      >ul{
        display: block;
        margin-top:200px;
        li{
          line-height: 50px;
        }
        li:nth-child(1){
          font-size: 28px;
          font-weight: bold;
        }
      }
    }
    >div:nth-child(2){
      flex: 1.5;
      img{
        display: block;
        margin: 30px auto;
        width: 90%;
      }
    }
  }
  .our-number{
    width: 100%;
    .con-way{
      width: 100%;
      ul{
        display: flex;
        flex: 1;
        li{
          flex: 1;
          text-align: center;
          line-height: 70px;
          span{
            font-size: 20px;
            img{
              vertical-align: middle;
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
</style>
