 <template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <hr />
    <el-upload
      class="upload"
      action
      :multiple="false"
      :show-file-list="false"
      accept="csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      :http-request="httpRequest"
    >
      <el-button size="small" type="primary">上传</el-button>
    </el-upload>
  </div>
</template>

<script>
import XLSX from "xlsx"; //引入xlsx
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    httpRequest(e) {
        console.log(e)
      let file = e.file; // 文件信息
      if (!file) {
        // 没有文件
        return false;
      } else if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
        // 格式根据自己需求定义
        this.$message.error("上传格式不正确，请上传xls或者xlsx格式");
        return false;
      }

      const fileReader = new FileReader();
      let this_ = this;
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: "binary", // 以字符编码的方式解析
          });
          console.log(workbook);
          const exlname = workbook.SheetNames[0]; // 取第一张表
          console.log(XLSX);
          let exl = XLSX.utils.sheet_to_json(workbook.Sheets[exlname]); // 生成json表格内容
          exl.map((item) => {
            let time = this_.getNextDate("1900-01-01", item.date - 2);
            return (item.date = time);
          });
          this.tableData = exl;
        } catch (e) {
          console.log("出错了：：");
          return false;
        }
      };
      fileReader.readAsBinaryString(file);
    },
    getNextDate(date, day) {
      var dd = new Date(date);
      dd.setDate(dd.getDate() + day);
      var y = dd.getFullYear();
      var m =
        dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return y + "-" + m + "-" + d;
    },
  },
};
</script>