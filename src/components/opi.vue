<template>
<div class="opi">
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
    <div class="m-t">
      <p><span class="el-icon-menu"></span><span>产品项目列表</span></p>
      <el-table
        :data="tableData"
        style="width: 100%"  @row-click="openDetails">
        <el-table-column
          prop="commodityTime"
          label="切割日期"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="commodityName"
          label="产品名称">
        </el-table-column>
        <el-table-column
          label="产品库存">
          <template slot-scope="scope">
            <el-progress :percentage=scope.row.hhhhh></el-progress>
          </template>
        </el-table-column>
        <el-table-column
          prop="commodityMoney"
          label="产品价格">
        </el-table-column>
        <el-table-column
          prop="commodityType"
          label="产品类型">
        </el-table-column>
        <el-table-column
          prop="commodityTerm"
          label="期限">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="操作">
          <template slot-scope="scope">
           <el-button type="primary">立即购买</el-button>
          </template>
        </el-table-column>
      </el-table>
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
import axios from 'axios'
export default {
  data: function () {
    return {
      bannerH: 850 / 1920 * window.innerWidth,
      imglist: [
        {url: require('../assets/img/banner1.jpg')},
        {url: require('../assets/img/banner2.jpg')},
        {url: require('../assets/img/banner3.jpg')}
      ],
      tableData: []
    }
  },
  created: function () {
    axios.get('/commodity/commodity_info_all').then(res => {
      this.tableData = res.data.date
      console.log(res)
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].commodityTime === '0') {
          this.tableData[i].commodityTime = '即时交割'
        }
        if (this.tableData[i].commodityTerm === '0') {
          this.tableData[i].commodityTerm = '永久'
        }
      }
    })
  },
  // 轮播图自适应屏幕大小
  methods: {
    setSize: function () {
      this.bannerH = 850 / 1920 * this.screenWidth
      if (this.bannerH > 850) this.bannerH = 850
      if (this.bannerH < 531.25) this.bannerH = 531.25
    },
    openDetails (row) {
      var goodsid = row.id
      var money = this.tableData[goodsid].commodityMoney
      this.$router.push({path: '/detail', query: {id: goodsid, moneys: money}})
      console.log(goodsid)
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
}
</script>

<style lang="less">
  @import "../assets/style/style.less";
  @import "../assets/style/public.less";
  @import "../assets/style/normalize.less";
  @import "../assets/style/index.less";
  .m-t{
    width: 92%;
    padding: 4%;
    p{
      width: 100%;
      background-color: silver;
      line-height: 40px;
      font-size: 20px;
      .el-icon-menu{
        color: cornflowerblue;
        margin-left: 20px;
        font-size: 20px;
      }
      span{
        margin-right: 20px;
      }
    }
    .el-table td{
      text-align: center;
    }
    .opi-table{
      width: 1200px !important;
      margin: 0 auto !important;
      >tr.el-table_row{
        margin-top: 30px !important;
      }
    }
    .row_style{
      border: 1px solid #000;
      box-shadow: -5px -5px 5px #ccc;
    }
    .row_style .cell{
      margin: 30px auto;
    }
    .row_style td:nth-child(1){
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>
