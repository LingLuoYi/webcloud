<template>
    <div class="Index">
      <div ref="top" class="top">
        <ul>
          <li><router-link to="/myorder"><img src="../assets/img/user.png" alt=""></router-link></li>
          <li ref="none">
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
              <h1>我们的产品</h1>
              <h3>OUR PRODUCTS</h3>
              <p>我们的云算力产品致力于为用户打造便捷的云算力服务流程，<br>通过设备集中部署和管理，以及为用户提供专业全面的云算力维护，为用户提供一流的云算力体验。</p>
        </div>
        <div class="pro">
          <el-table
            :data="tableDatas"
            style="width: 100%">
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
              label="操作">
              <template slot-scope="scope">
                <el-button type="primary">立即查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="H-TEXT">
          <h1>为什么选择麒麟算力</h1>
          <h3>WHY CHOOSE US</h3>
        </div>
        <div class="why">
          <el-row :gutter="30">
            <el-col :span="12">
              <el-card>
                <ul>
                  <li><img src="../assets/img/bj.png"></li>
                  <li><span>便捷挖矿</span></li>
                  <li>轻松摆脱高电量 噪音大 <br>难维护等烦恼</li>
                </ul>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card>
                <ul>
                  <li><img src="../assets/img/wending.png"></li>
                  <li><span>稳定可靠</span></li>
                  <li>全球节点 专业化部署<br>让您省心省力</li>
                </ul>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card>
                <ul>
                  <li><img src="../assets/img/eyes.png"></li>
                  <li><span>公开透明</span></li>
                  <li> 透明化公开矿池 用户<br>和算力数据</li>
                </ul>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card>
                <ul>
                  <li><img src="../assets/img/touzi.png"></li>
                  <li><span>灵活投资</span></li>
                  <li>算力额度不设下限<br>新用户也能体验挖矿乐趣</li>
                </ul>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="how">
          <img src="../assets/img/howbuy.jpg" alt="">
          <div class="how-buy">
            <div class="H-TEXT">
              <h1>如何购买算力</h1>
              <h3>HOW TO BUY</h3>
            </div>
            <div class="step">
              <div>
                <ul>
                  <li><span>1</span></li>
                  <li>注册登录</li>
                  <li>按照指引完成官网账号注册登录</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><span>2</span></li>
                  <li>账户充值</li>
                  <li>目前合约支持BTC和LTC购买需要提前充值</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><span>3</span></li>
                  <li>选择合约</li>
                  <li>选择合约类型和数量 购买下单</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><span>4</span></li>
                  <li>查看收益</li>
                  <li>随时登录查看收益 实时掌握</li>
                </ul>
              </div>
            </div>
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
                <li><router-link to="/Questions">常见问题</router-link></li>
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
export default{
  data: function () {
    return {
      bannerH: 850 / 1920 * window.innerWidth,
      imglist: [
        {url: require('../assets/img/banner1.jpg')},
        {url: require('../assets/img/banner2.jpg')},
        {url: require('../assets/img/banner3.jpg')}
      ],
      tableDatas: [
        {item: ''}
      ]
    }
  },
  created: function () {
    axios.get('/commodity/commodity_info_all').then(res => {
      this.tableDatas = res.data.date
      for (let i = 0; i < this.tableDatas.length; i++) {
        this.tableDatas[i].item = `${this.tableDatas[i].commodityStock / this.tableDatas[i].commodityInitialStock * 100}`
      }
      console.log(this.tableDatas)
    })
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../assets/style/style.less";
  @import "../assets/style/public.less";
  @import "../assets/style/normalize.less";
  @import "../assets/style/index.less";
</style>
