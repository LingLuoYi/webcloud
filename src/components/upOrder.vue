<!--suppress ALL -->
<template>
  <div class="uporder detail">
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
    <div class="up-order-main">
       <div class="o-m-t">
         <h2><span>订单已提交，请尽快付款。</span></h2>
         <h6>订单已提交成功，点击确定后请在30分钟内完成付款，并于24小时内上传付款凭证，否则订单将过期</h6>
         <p>总金额 <span>{{money}}</span>元</p>
         <el-button type="primary" @click="pay()">确定</el-button>
       </div>
      <div class="o-m-m">
        <el-tabs type="border-card">
          <el-tab-pane>
            <el-radio slot="label" label="对公转账">
              <template slot-scope="scope">
                <img src="../assets/img/zhifu1.png" alt="">
              </template></el-radio>
            <div class="duigong kuaijie">
              <ul>
                <li>
                  <p>1.打款至麒麟算力指定收款账户</p>
                  <p>开户名称&nbsp;&nbsp;&nbsp;深圳市蚂蚁区块链科技有限公司</p>
                  <p>开户银行&nbsp;&nbsp;&nbsp;交通银行 湖北随州分行</p>
                  <p>汇款账户&nbsp;&nbsp;&nbsp;6222 6247 6000 0008 762</p>
                  <p>账户名&nbsp;&nbsp;&nbsp;苏光菊</p>
                </li>
                <li>
                  <p>2.提交汇款信息</p>
                  <el-form label-width="100px" :model="formLabelAlign">
                    <el-form-item label="汇款人姓名">
                      <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="开户行名称">
                      <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item label="汇款账号">
                      <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                    <el-form-item label="汇款金额">
                      <el-input v-model="formLabelAlign.price"></el-input>
                    </el-form-item>
                  </el-form>
                </li>
                <li>
                  <p>3.提交支付成功截图</p>
                  <p>请提交支付成功的截图或照片</p>
                  <el-upload
                    class="avatar-uploader"
                    action="upurl"
                    :data="upId"
                    :auto-upload="false"
                    :show-file-list="true"
                    :on-change="imgPreview"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                     ref="upload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </li>
                <li>
                  <p>3.支付核实</p>
                  <p>提交支付信息后，您可以在个人中心查看汇款处理进度，如有疑问请拨打咨询热线：18771379973</p>
                </li>
              </ul>
              <p>请谨慎提交打款信息，提交后不可更改 <br />
                <el-button type="primary" @click="submitForm()">提交信息</el-button>
              </p>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
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
  data () {
    return {
      orderid: this.$route.query.orId,
      money: this.$route.query.price,
      imageUrl: '',
      upurl: '',
      upId: {
        id: ''
      },
      radio: '快捷支付',
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
        price: ''
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    submitForm () {
      this.$refs.upload.submit()
      this.$router.push({path: '/myorder'})
    },
    beforeAvatarUpload (file) {
      const fd = new FormData()
      fd.append('pay_img', file)
      fd.append('id', this.upId.id)
      axios.post('/pay/file_img', fd).then(res => {
        console.log(res)
      })
      const isJPG = file.type === 'image/jpeg'
      const isGIF = file.type === 'image/gif'
      const isPNG = file.type === 'image/png'
      const isBMP = file.type === 'image/bmp'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG && !isGIF && !isPNG && !isBMP) {
        this.common.errorTip('上传图片必须是JPG/GIF/PNG/BMP 格式!')
      }
      if (!isLt2M) {
        this.common.errorTip('上传图片大小不能超过 2MB!')
      }
      return (isJPG || isBMP || isGIF || isPNG) && isLt2M
    },
    pay () {
      var id = 'id=' + this.orderid
      axios.post('/pay/pay', id).then(res => {
        this.upId.id = res.data.date.data.payId
        console.log(id)
        console.log(res)
        if (res.data.date.code === 202) {
          alert('订单已存在，请勿重复提交')
        }
      })
    },
    imgPreview (file, fileList) {
      let fileName = file.name
      let regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/
      if (regex.test(fileName.toLowerCase())) {
        this.imageUrl = file.url
      } else {
        this.$message.error('请选择图片文件')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/style/style.less";
  @import "../assets/style/public.less";
  @import "../assets/style/normalize.less";
  @import "../assets/style/index.less";
  .o-m-t{
    width: 80%;
    line-height: 30px;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 5px #989898;
    margin: 20px auto;
    position: relative;
    h2{
      position: relative;
      width: 100%;
      height: 60px;
      span{
        width: 50%;
        line-height: 60px;
        font-size: 24px;
        text-align: left;
        padding-left:25px;
        position: absolute;
        left: 20px;
        top:0;
      }
    }
    h6{
      padding-left: 20px;
      color: #fd7220;
      line-height: 40px;
    }
    p{
      position: absolute;
      right: 30px;
      top: 35px;
      font-size: 30px;
     span{
       color: #fd7220;
     }
    }
    .el-button{
      width: 200px;
      margin: 20px;
    }
  }
  .o-m-m{
    width: 70%;
    margin:  30px auto;
      .el-radio img{
        width: 40px;
        height: 30px;
        margin: 0 20px;
        vertical-align: middle;
      }
      .el-radio{
        font-size: 26px;
        font-weight: bold;
      }
  }
  .avatar-uploader .el-upload {
    border: 2px solid #000;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 2px solid #faecd8;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .kuaijie{
    margin-top: 20px;
    margin-left: 30px;
    ul{
      width: 100%;
      li{
        line-height: 30px;
        p{
          margin-top: 10px;
          >span{
            display: inline-block;
            text-align: center;
            margin: 0 30px;
            img{
              width: 180px;
              height: 180px;
              display: block;
            }
          }
        }
      }
    }
    .el-form-item{
      margin-top: 30px;
      .el-input{
        width: 50%;
      }
    }
    >p{
      margin: 30px;
      text-align: right;
      .el-button{
        margin-top: 20px;
      }
    }
  }
</style>
