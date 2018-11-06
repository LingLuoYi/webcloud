<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="全部账户" name="first">
      <template>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="assetsNum"
            label="总算力（M/T）">
          </el-table-column>
          <el-table-column
            prop="assetsProfit"
            label="收益">
          </el-table-column>
          <el-table-column
            prop="assetsType"
            label="算力类型">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini">提现</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-tab-pane>
    <el-tab-pane label="分类账户" name="second">
      <template>
        <el-table
          :data="etcdata"
          border
          style="width: 100%">
          <el-table-column
            prop="assetsNum"
            label="总算力（M/T)">
          </el-table-column>
          <el-table-column
            prop="name"
            label="可用"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="冻结">
          </el-table-column>
          <el-table-column
            label="操作">
            <template>
              <el-button type="primary" size="mini"  @click="dialogFormVisible = true">提现</el-button>
              <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mycount',
  data () {
    return {
      activeName: 'first',
      tableData: [],
      etcdata: [],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  created () {
    axios.get('/assets/assets_info').then(res => {
      this.tableData = res.data.date.data
      for (var i = 0; i < this.tableData[i]; i++) {
        if (this.tableData[i].assetsValue === '') {
          this.tableData[i].assetsValue = '暂无收益'
        }
      }
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
