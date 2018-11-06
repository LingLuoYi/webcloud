<template>
  <div class="login">
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
    <main class="lo-main">
      <img src="../assets/img/login-banner.jpg" alt="">
      <div class="lo-form">
        <div class="form-box">
          <h2>用户登录</h2><span><router-link to="/Rejester">没有账号？立即注册</router-link></span>
          <hr>
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item  prop="tel">
              <el-input placeholder="请输入手机号" v-model.number="ruleForm2.tel"></el-input><i class="el-icon-mobile-phone"></i>
            </el-form-item>
            <el-form-item  prop="pass">
              <el-input type="password" placeholder="请输入密码" v-model="ruleForm2.pass" auto-complete="off"></el-input><i class="el-icon-edit"></i>
            </el-form-item>
            <el-form-item  prop="yanzheng">
              <el-input class="yan_z" type="text" placeholder="请输入验证码" v-model="ruleForm2.yanzheng" auto-complete="off"></el-input><span class="yan-img"><a v-on:click = "changeimg()"><img ref="get_img" :src="imgurl" ></a></span><i class="el-icon-edit"></i>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitFormup('ruleForm2')">登录</el-button>
            </el-form-item>
            <p><router-link to="/Reset">忘记密码？</router-link></p>
          </el-form>
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
  data () {
    const checkTel = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入电话号码'))
      } else if (!Number.isInteger(value)) {
        callback(new Error('电话号码必须是数字'))
      } else if (value.toString().length !== 11) {
        callback(new Error('电话号码必须是11位'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var chek = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        if (this.ruleForm2.yanzheng !== '') {
          this.$refs.ruleForm2.validateField('chek')
        }
        callback()
      }
    }
    return {
      disabled: false,
      time: 0,
      btntxt: '获取验证码',
      data: '',
      formMess: {
        phone: this.phone
      },
      imgurl: 'http://192.168.3.2/captcha/login_code.jpg',
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: '',
        tel: '',
        yanzheng: ''
      },
      rules2: {
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        tel: [
          {validator: checkTel, trigger: 'blur'}
        ],
        yangzheng: [
          {validator: chek, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitFormup () {
      var _this = this
      var url = '/login'
      var logintxt = 'phone=' + this.ruleForm2.tel + '&password=' + this.ruleForm2.pass + '&code=' + this.ruleForm2.yanzheng
      console.log(logintxt)
      axios.post(url, logintxt).then(function (res) {
        _this.data = res.data.state
        console.log(_this.data)
        if (_this.data === 200) {
          _this.$router.push({path: '/'})
        } else {
          alert(res.data.msg)
        }
      })
    },
    changeimg () {
      this.$refs.get_img.src = `/captcha/login_code.jpg?=${Math.random()}`
      console.log(this.$refs.get_img.src)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/style/style.less";
  @import "../assets/style/public.less";
  @import "../assets/style/normalize.less";
  .login{
    width: 100%;
    overflow: hidden;
   .nav{
     position: fixed;
     top: 0;
   }
    .lo-main{
      width: 100%;
      position: relative;
      >img{
        width: 100%;
        height: 100%;
        max-height: 850px;
        min-height: 620px;
      }
      .lo-form{
        width: 100%;
        height: 100%;
        max-height: 850px;
        position: absolute;
        top: 0;
        left: 0;
        .form-box{
          width: 450px;
          margin: 150px auto;
          background-color: #f2f2f2;
          border-radius: 10px;
          padding: 30px ;
          h2{
            font-size: 20px;
            font-weight: bold;
            display: inline-block;
          }
          >span{
            float: right;
          }
          a{
            text-decoration: none;
            color: #1e90ff;
          }
          .el-form-item{
            margin: 20px auto 20px -50px;
            .el-input{
              width: 80%;
            }
            .yan_z{
              width: 50%;
            }
            i{
              font-size: 24px;
              color: cornflowerblue;
              margin: 5px 10px;
            }
            .yan-img{
              width: 100px;
              height: 40px;
              display: inline-block;
              margin-left: 20px;
              img{
                width: 100%;
                height: 100%;
                vertical-align: middle;
                cursor: pointer;
              }
            }
          }
          .el-button{
            width: 90%;
            margin: 0 auto;
          }
          .btns{
            width: 30%;
            margin-left: 20px;
          }
        }
      }
    }
  }
</style>
