<template>
    <div class="order detail">
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
          <li><router-link to="/Personal">个人中心</router-link></li>
          <!--<li><router-link to="">退出</router-link></li>-->
        </ul>
      </div>
      <div class="order-tit">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/opi' }">产品信息</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/detail'}">产品详情</el-breadcrumb-item>
          <el-breadcrumb-item>订单详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="order-main">
        <h1>订单信息</h1>
        <hr>
        <ul>
          <li>合约：<span>BTC</span></li>
          <li>电费：<span>$0.0148 / MHS / 天</span></li>
          <li>数量：<span>{{num}}&nbsp;T/s</span></li>
          <li>合约周期：<span>730Days</span></li>
          <li>管理费：<span>5%PPS</span></li>
          <li>收货人：<span>{{name}}</span></li>
          <li>订单金额：<span>{{price}}&nbsp;RMB</span></li>
        </ul>
        <p><el-checkbox v-model="checked">我已阅读并同意</el-checkbox><router-link to="/heyue">ETH-B3+ 合约</router-link></p>
        <el-button type="primary" @click="sbumit">确认订单</el-button>
      </div>
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
      checked: true,
      goods: this.$route.query.goods,
      num: this.$route.query.num,
      money: this.$route.query.mon,
      price: '',
      name: '',
      orderId: ''
    }
  },
  name: 'order',
  methods: {
    sbumit () {
      var orderlist = 'id=' + this.goods + '&num=' + this.num
      axios.post('/commodity/commodity_purchase', orderlist).then(res => {
        console.log(res)
        this.orderId = res.data.date.orderId
        console.log(this.orderId)
        this.$router.push({path: '/Uporder', query: {orId: this.orderId, price: this.price}})
      })
    }
  },
  created () {
    var b = this.num
    var c = this.money
    this.price = b * c
    axios.get('http://192.168.3.2').then(res => {
      this.name = res.data.date.name
    })
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/style/style.less";
  @import "../assets/style/public.less";
  @import "../assets/style/normalize.less";
  @import "../assets/style/index.less";
  .order-tit{
    width: 100%;
    height: 60px;
    line-height: 60px;
    .el-breadcrumb{
      width: 80%;
      float: left;
      margin-left: 10%;
     position: relative;
      bottom: 20px;
    }
  }
  .order-main{
    width: 80%;
    border: 1px solid #fff;
    border-radius: 20px;
    box-shadow: 0 0 5px #ccc;
    margin:  0 auto;
    hr{
      width: 90%;
      margin: 20px auto;
    }
    h1{
      line-height: 50px;
      font-size: 20px;
      font-weight: bold;
      padding-left: 5%;
    }
    ul{
      width: 90%;
      margin: 20px auto;
      display: block;
      li{
        line-height: 60px;
        color: #808080;
        border-bottom: 1px solid #f0f0f0;
        span{
          float: right;
          margin-right: 10px;
          color: #000;
        }
      }
    }
    p{
      width: 300px;
      float: right;
      margin-right: 20px;
      .el-checkbox_label{
        font-size: 16px;
        padding-right: 10px;
      }
      a{
        text-decoration: none;
        color: dodgerblue;
        font-size: 14px;
        margin-left: 10px;
      }
    }
    .el-button{
      width: 20%;
      margin: 20px 20px 20px 75%;
    }
  }
</style>
