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
          <li><router-link to="/Personal">个人中心</router-link></li>
          <!--<li><router-link to="">退出</router-link></li>-->
        </ul>
      </div>
      <main>
        <div class="det-m">
          <div class="det-m-top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/opi' }">产品信息</el-breadcrumb-item>
              <el-breadcrumb-item>产品详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="det-m-m">
            <div><div class="det-photo"><img src="../assets/img/A9.jpg" alt=""></div></div>
            <div>
              <ul>
                <li><h1>lnnosilicon A9 ZEC云算力 永久合约</h1></li>
                <li>单价：<span>{{moneys}}</span>/M</li>
                <li>算&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;力 <span>50Ksol/s(+-8%)</span></li>
                <li>上线时间 <span>2018-08-17</span></li>
                <li>合约周期 <span>永久合约</span></li>
                <li>购&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;买 <p><el-button type="info" size="mini" plain @click="jian()">-</el-button><span ref="num_value" :data="numvalue">{{numvalue}}</span><el-button @click="jia()" type="info" size="mini" plain>+</el-button></p><span>M</span></li>
                <li><el-button type="primary" @click="order">立即购买</el-button></li>
              </ul>
            </div>
          </div>
          <div class="det-m-b">
            <img src="../assets/img/det.jpg" alt="">
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
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      id: this.$route.query.id,
      moneys: this.$route.query.moneys,
      loading: false,
      numvalue: 10,
      data: []
    }
  },
  created () {
    this.loading = true
    const id = this.id
    console.log(id)
    console.log(this.moneys)
    axios.get('/commodity/commodity_info_all', id).then(res => {
      this.data = res.data.date[id - 1].commodityId
      console.log(this.data)
    })

    this.loading = false
  },
  methods: {
    order: function () {
      // const date = 'id=' + this.data + '&num=' + this.numvalue
      axios.get('/s').then(res => {
        console.log(res)
        if (res.data.date !== null) {
          this.$router.push({path: '/Order', query: {goods: this.data, num: this.numvalue, mon: this.moneys}})
        } else if (res.data.date === null) {
          this.$router.push('/Login')
        }
      })
    },
    jian () {
      if (this.numvalue > 10) {
        console.log(this.numvalue)
        this.numvalue = this.numvalue - 1
      } else {
        this.numvalue = 10
      }
    },
    jia () {
      this.numvalue = this.numvalue + 1
    }
  }
}

</script>

<style lang="less">
  @import "../assets/style/style.less";
  @import "../assets/style/public.less";
  @import "../assets/style/normalize.less";
  @import "../assets/style/index.less";
  .det-m{
    width: 90%;
    margin: 3% 5%;
    .det-m-top{
      width: 100%;
      height: 60px;
      line-height: 60px;
      .el-breadcrumb{
        font-size: 16px;
      }
    }
    .det-m-m {
      width: 100%;
      display: flex;
      flex: 1;
      >div{
        flex: 1;
        .det-photo{
          width: 511px;
          height: 376px;
          margin: 20px auto;
          border: 1px solid #989898;
          img{
            width: 90%;
            height: 90%;
            display: block;
            margin: 5%;
          }
        }
        ul{
          width: 90%;
          display: block;
          margin: 20px auto;
          li{
            line-height: 40px;
            margin: 15px;
            color: #a9a9a9;
            span{
              color: #000;
              margin-left: 20px;
            }
            p{
              display: inline-block;
              margin-left: 20px;
              .el-button{
               width: 30px;
                height: 28px;
                text-align: center;
                padding: 0;
                line-height: 28px;
                background-color: #efefef;
                span{
                  margin: 0 auto;
                }
              }
              >span{
                width: 50px;
                height: 30px;
                border: 1px solid #efefef;
                display: inline-block;
                margin-left: 0;
                line-height: 30px;
                text-align: center;
              }
            }
          }
          li:nth-child(1){
            font-size: 30px;
            font-weight: bold;
            color: #000;
          }
          li:nth-child(2){
            background-color: #f4f4f4;
            font-size: 22px;
            padding-left: 20px;
            color: #000;
            span{
              color: #f00;
            }
          }
          li:last-child{
            .el-button{
              width: 200px;
              height: 40px;
              text-align: center;
              font-size: 20px;
              padding: 0;
              span{
                margin-left: 0;
                color: #fff;
              }
            }
          }
        }
      }
    }
    .det-m-b{
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
</style>
