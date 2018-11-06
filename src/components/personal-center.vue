<template>
  <div class="detail">
    <div class="nav">
      <span class="nav-lf"><img src="../assets/img/logo.png" alt=""></span>
      <ul class="nav-rg">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/Opi">产品信息</router-link></li>
        <li><router-link to="/Questions">服务中心</router-link></li>
        <li><router-link to="/Contact">联系我们</router-link></li>
        <li><router-link to="/About">关于我们</router-link></li>
      </ul>
      <ul class="cen-nav">
        <li><span class="fa fa-user-o"></span></li>
        <li><router-link to="/mycount">个人中心</router-link></li>
        <!--<li><router-link to="">退出</router-link></li>-->
      </ul>
    </div>
    <el-container style="position: relative;width: 100%;min-height: 600px;">
      <el-aside>
        <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>个人中心</template>
            <el-menu-item index="1">订单管理</el-menu-item>
            <el-menu-item index="2">账户管理</el-menu-item>
            <el-menu-item index="3">安全管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="home_main"><!--使用全局route-->
        <el-col :span="24" class="breadcrumb-container">
          <strong class="title">{{$route.name}}</strong>
        </el-col>
        <el-col :span="24">
          <div style="margin-top:10px">
            <router-view></router-view>
            <!-- 最重要的标签，用来显示跳转的页面 -->
          </div>
        </el-col>
      </el-main>
    </el-container>
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
              <li><router-link to="/">首页</router-link></li>
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
  data () {
    return {
      searchCriteria: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      switch (key) {
        case '1':
          this.$router.push('/myorder')
          break
        case '2':
          this.$router.push('/mycount')
          break
        case '3' :
          this.$router.push('/savecenter')
      }
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/style/style.less";
  @import "../assets/style/public.less";
  @import "../assets/style/normalize.less";
  @import "../assets/style/index.less";
  .el-aside{
    margin: 30px;
    width: 203px;
    flex: 0 0 130px;
    background: #3a8ee6;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px 5px #ccc;
    position: relative;
    right: 100px;
  }
  .home_main{
    width: 50%;
    min-height: 500px;
    position: absolute;
    top: 0;
    left: 580px;
    border: 1px solid #faecd8;
    box-shadow: 0 0 2px 2px #989898;
    padding: 20px;
    .title{
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
  .el-table tr td{
    text-align: center;
  }
</style>
