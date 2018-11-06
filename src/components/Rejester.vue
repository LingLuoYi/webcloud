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
         <h2>用户注册</h2>
         <hr>
         <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
           <el-form-item  prop="tel">
             <el-input placeholder="请输入手机号" v-model.number="ruleForm2.tel"></el-input><i class="el-icon-mobile-phone"></i>
           </el-form-item>
           <el-form-item  prop="pass">
             <el-input type="password" placeholder="请输入密码" v-model="ruleForm2.password" auto-complete="off"></el-input><i class="el-icon-edit"></i>
           </el-form-item>
           <el-form-item  prop="checkPass">
             <el-input type="password" placeholder="请确认密码" v-model="ruleForm2.checkPass" auto-complete="off"></el-input><i class="el-icon-edit"></i>
           </el-form-item>
           <el-form-item>
             <el-input type="text" class="yan_z" v-model="ruleForm2.code" placeholder="验证码"/><span class="yan-img"><a v-on:click = "changeimg()"><img ref="get_img" :src="imgurl" ></a></span>
           </el-form-item>
           <el-form-item>
             <el-input type="text" v-model="verification" class="yan_z" placeholder="验证码"/><el-button type="primary" :disabled="disabled" @click="sendcode" class="btns">{{btntxt}}</el-button>
           </el-form-item>
           <el-form-item>
             <template slot-scope="scope"><el-button type="primary" @click="submitForm">注册</el-button></template>
           </el-form-item>
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      disabled: false,
      time: 0,
      btntxt: '获取验证码',
      imgurl: '/captcha/sig_up_code.jpg',
      formMess: {
        phone: this.phone},
      verification: '',
      ruleForm2: {
        password: '',
        checkPass: '',
        age: '',
        tel: '',
        code: ''
      },
      rules2: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        tel: [
          { validator: checkTel, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    sendcode: function () {
      var tel = this.ruleForm2.tel
      var s = '/captcha/' + tel
      var code = 'code=' + this.ruleForm2.code
      axios.post(s, code)
        .then(function (res) {
          console.log(res)
          if (res.data.date === 200) {
            console.log(res.data.date)
          } else if (res.data.date === 400) {
            alert(res.data.message)
          }
        })
      this.time = 60
      this.disabled = true
      this.timer()
    },
    submitForm () {
      var url = '/sign_up'
      var txt = 'phone=' + this.ruleForm2.tel + '&password=' + this.ruleForm2.password + '&phoneCode=' + this.verification
      console.log(txt)
      var _this = this
      axios.post(url, txt).then(function (res) {
        if (res.data.date === 0) {
          _this.$router.push('/Login')
        } else {
          alert(res.data.date)
        }
      })
    },
    timer () {
      if (this.time > 0) {
        this.time--
        this.btntxt = this.time + 's后重新获取'
        setTimeout(this.timer, 1000)
      } else {
        this.time = 0
        this.btntxt = '获取验证码'
        this.disabled = false
      }
    },
    changeimg () {
      this.$refs.get_img.src = `/captcha/sig_up_code.jpg?=${Math.random()}`
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
          }
          .el-form-item{
            margin: 20px auto 20px -50px;
            .el-input{
              width: 80%;
            }
            .yan_z{
              width: 40%;
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
