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
        <h1 style="font-size: 32PX;font-weight: bolder">常见问题</h1>
        <h3>Frequently Asked Question</h3>
      </div>
      <div class="que">
        <el-tabs type="card">
          <el-tab-pane>
            <el-button slot="label" type="primary"> 账户管理</el-button>
            <div class="que-main">
              <ul>
                <li>
                  <p><img src="../assets/img/right.png" alt="">如何注册？</p>
                  <ul>
                    <li>1.登录麒麟算力网站首页，点击首页右上方【登陆/注册】进入注册页面。</li>
                    <li>2.填写账号信息，阅读并同意 《用户协议》。</li>
                    <li>3.进行手机号码验证，完成用户注册。</li>
                  </ul>
                </li>
                <li>
                  <p><img src="../assets/img/right.png" alt="">忘记密码怎么办？</p>
                  <ul>
                    <li>1.进入会员登录页面，点击登录按钮右上方的“忘记密码”链接，进入找回密码页面；</li>
                    <li>2.输入手机号等信息对登录密码进行重置。</li>
                  </ul>
                </li>
                <li>
                  <p><img src="../assets/img/right.png" alt="">未收到短信验证码怎么办？</p>
                  <b>当您在麒麟算力进行注册、充值、取现等操作获取短信验证码失败时，请检查手机号码是否输入正确，或通过官方在线客服进行沟通。</b>
                </li>
                <li>
                  <p><img src="../assets/img/right.png" alt="">未收到短信验证码怎么办？</p>
                  <b>用户完成注册之后，手机号不能修改，请谨慎选择。</b>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <el-button slot="label" type="primary"> 矿机挖矿</el-button>
            <div class="que-main">
              <ul>
                <li>
                  <p><img src="../assets/img/right.png" alt="">算力是什么？</p>
                  <b>算力指的是挖矿的能力，或者理解为挖矿的马力。现在比特币全网算力接近2000P，1P=1000T，这里P和T都是算力的单位。</b>
                </li>
                <li>
                  <p><img src="../assets/img/right.png" alt="">挖矿怎么产生收益？</p>
                  <b>通过为数字货币网络提供算力而获得奖励。每日奖励减去必要的维护费用（包括电费、维护费、托管费等），就是挖矿产生的收益。</b>
                </li>
                <li>
                  <p><img src="../assets/img/right.png" alt="">什么是维护费？</p>
                  <b>维护费由每日电费、维修费、托管费组成，具体需参照合约细则。</b>
                </li>
                <li>
                  <p><img src="../assets/img/right.png" alt="">是否保证投资收益？</p>
                  <b>由于是租赁的是“算力”产品，矿世云算确保所租赁算力的真实性。您获得的实际收入受算力买入价格、比特币价格等诸多因素影响，用户需自主充分理解其风险。</b>
                </li>
                <li>
                  <p><img src="../assets/img/right.png" alt="">挖矿合约什么时候结束？</p>
                  <b>各个合约的周期不同，由1年到3年不等。另外，按照合约的规定，当连续一段时间内，每日挖矿纯利小于日维护费后，合约也可能中途终止，具体请参考合约细则。</b>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <el-button slot="label" type="primary"> 费用标准</el-button>
            <div class="que-main">
              <ul>
                <li>
                  <p><img src="../assets/img/right.png" alt="">有哪些行为需要收费？收费标准是什么？</p>
                  <ul>
                    <li>1.充值0手续费 由麒麟算力团队承担</li>
                    <li>2.提现0.5% 用于支付通道费用</li>
                    <li>3.提币0.5% 用于支付通道费用</li>
                    <li>4.算力交易0.5% 用于支付通道费用</li>
                  </ul>
                  <b>（注：充值及提现手续费收费标准并非恒定不变，算力宝会根据实际运行情况稍作调整）</b>
                </li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
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
        {url: require('../assets/img/banner1.png')},
        {url: require('../assets/img/banner2.png')},
        {url: require('../assets/img/banner3.png')}
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

<style lang="less">
  @import "../assets/style/style.less";
  @import "../assets/style/public.less";
  @import "../assets/style/normalize.less";
  @import "../assets/style/index.less";
  .el-tabs--card>.el-tabs__header .el-tabs__nav{
    border: none;
  }
  .que{
    width: 65%;
    margin: 50px auto;
    border: 1px solid #f2f2f2;
    border-radius: 10px;
    padding: 30px;
    box-shadow:0 0 10px black;
    .el-tabs__content{
      padding: 10px 30px;
    }
    .el-button{
      margin: 20px auto;
      position: relative;
      top: -20px;
    }
    .el-tab-pane .que-main{
      width: 80%;
      >ul{
        >li{
          >p{
            font-size: 18px;
            margin: 20px 0;
            font-weight: bold;
            line-height: 30px;
            img{
              vertical-align: middle;
              margin-right: 15px;
            }
          }
          >ul{
            >li{
              margin-top: 20px;
              padding-left: 15px;
              line-height: 30px;
            }
          }
          >b{
            font-weight: normal;
            padding-left: 15px;
            line-height: 30px;
          }
        }
      }
    }
  }
</style>
