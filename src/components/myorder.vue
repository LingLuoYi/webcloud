<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="全部订单" name="first">
    <template>
      <div style="height: 500px;overflow-y: scroll;">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="payCommodityName"
            label="商品名称">
          </el-table-column>
          <el-table-column
            prop="payCommodityUnitPrice"
            label="单价">
          </el-table-column>
          <el-table-column
            prop="payNum"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="payCommodityMoney"
            label="总价">
          </el-table-column>
          <el-table-column
            prop="payName"
            label="购买人">
          </el-table-column>
          <el-table-column
            prop="voucherState"
            label="订单状态">
          </el-table-column>
        </el-table>
      </div>
    </template>
    </el-tab-pane>
    <el-tab-pane label="未上传凭证" name="second">
      <template>
        <div style="height: 500px;overflow-y: scroll;">
          <el-table
            :data="tableData1"
            border
            style="width: 100%">
            <el-table-column
              prop="payCommodityName"
              label="商品名称">
            </el-table-column>
            <el-table-column
              prop="payCommodityUnitPrice"
              label="单价">
            </el-table-column>
            <el-table-column
              prop="payNum"
              label="数量">
            </el-table-column>
            <el-table-column
              prop="payCommodityMoney"
              label="总价">
            </el-table-column>
            <el-table-column
              prop="payName"
              label="购买人">
            </el-table-column>
            <el-table-column
              prop="voucherState"
              label="订单状态">
            </el-table-column>
          </el-table>
        </div>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import axios from 'axios'
export default {
  name: 'myorder',
  data () {
    return {
      activeName: 'first',
      tableData: [],
      tableData1: []
    }
  },
  created () {
    axios.get('/pay/pay_user_info').then(res => {
      this.tableData = res.data.date
      for (var i = 0; i < res.data.date.length; i++) {
        if (this.tableData[i].voucherState === '2') {
          this.tableData[i].voucherState = '未上传凭证'
          this.tableData1.push(this.tableData[i])
        }
        if (this.tableData[i].voucherState === '1') {
          this.tableData[i].voucherState = '已上传待审核'
        }
        if (this.tableData[i].voucherState === '0') {
          this.tableData[i].voucherState = '审核已通过'
        }
      }
      console.log(this.tableData1)
      console.log(this.tableData)
    })
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/style/style.less";
  @import "../assets/style/public.less";
  @import "../assets/style/normalize.less";
  @import "../assets/style/index.less";
  .el-table .cell{
    text-align: center;
  }
</style>
