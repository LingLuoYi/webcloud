<template>
  <div class="login">
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
    <main class="lo-main">
      <img src="../assets/img/login-banner.jpg" alt="">
      <div class="lo-form">
        <div class="form-box">
          <h2>重置密码</h2>
          <hr>
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item  prop="tel">
              <el-input placeholder="请输入手机号" v-model.number="ruleForm2.tel"></el-input><i class="el-icon-mobile-phone"></i>
            </el-form-item>
            <el-form-item>
              <el-input type="text" class="yan_z" placeholder="验证码"/><el-button type="primary" :disabled="disabled" @click="sendcode" class="btns">{{btntxt}}</el-button>
            </el-form-item>
            <el-form-item  prop="pass">
              <el-input type="password" placeholder="重置密码" v-model="ruleForm2.pass" auto-complete="off"></el-input><i class="el-icon-edit"></i>
            </el-form-item>
            <el-form-item  prop="checkPass">
              <el-input type="password" placeholder="确认密码" v-model="ruleForm2.checkPass" auto-complete="off"></el-input><i class="el-icon-edit"></i>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">确认</el-button>
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
// import * as axios from 'axios'

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
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      disabled: false,
      time: 0,
      btntxt: '获取验证码',
      formMess: {
        phone: this.phone},
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: '',
        tel: ''
      },
      rules2: {
        pass: [
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
      this.time = 60
      this.disabled = true
      this.timer()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
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
    }
    // query () {
    //   var formMess = this.formMess
    //   axios.post('', formMess)
    //     .then(function (res) {
    //       if (res.data.code === 200) {
    //         console.log(res.data.data)
    //         this.productResult = res.data.data
    //         this.productResult.length = 3
    //       } else if (res.data.code === 400) {
    //         alert(res.data.message)
    //       }
    //     }.bind(this))
    // }
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
    .lo-main{
      width: 100%;
      position: relative;
      img{
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
              width: 50%;
            }
            i{
              font-size: 24px;
              color: cornflowerblue;
              margin: 5px 10px;
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
