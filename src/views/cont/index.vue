<template>
  <div style="padding: 5px; display: flex">
    <div class="table-box">
      <ul>
        <li v-for="(item, index) in data" :key="item.id">
          <h2>{{ item.title }}</h2>
          <span>time: {{ item.time }} / category: {{ item.category }}</span>
          <p ref="pInformation">{{ item.conten }}</p>
          <el-button size="mini" @click="pClick(item, index)">click</el-button>
        </li>
      </ul>
    </div>

    <div style="width: 500px;">
      <el-collapse
        v-model="activeName"
        accordion
        @change="handleChange"
        style="padding: 10px; height: 250px; overflow: auto;"
      >
        <el-collapse-item
          v-for="item in collapseData"
          :title="item.user"
          :name="item.id"
          :key="item.user"
        >
          <div v-for="(val, index) in item.operation" :key="index" class="collapse-box">
            <span>{{ item.user }}:</span>
            <span>{{ val }}</span>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

  </div>
</template>
<script>
import xlsx from 'node-xlsx'

export default {
  data() {
    return {
      collapseData: risk.data,
      activeName: ['1'],
      data: [],
      obj: {
        show1: [
          {
            s: 284,
            e: 292,
            n: "Facebook",
            k: "f",
          },
          {
            s: 2,
            e: 9,
            n: "Twitter",
            k: "t",
          },
        ],
        shwo2: [
          {
            s: 293,
            e: 295,
            n: "谷歌",
            k: "g",
          },
        ],
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const data = require("./json/index");
      this.data = data.data;
    },
    pClick(item, index) {
      var strLength = 0;
      var word = item.conten;

      for (let k in this.obj) {
        this.obj[k].forEach((item) => {
          console.log(item);
          let startContent = word.slice(0, item.s + strLength);
          let endContent = word.slice(
            item.e + strLength,
            word.length + strLength
          );
          word =
            startContent + "<mark class='s'>" + item.n + "</mark>" + endContent;
          strLength += 23;
        });
      }
      this.$refs.pInformation[index].innerHTML = word;
    },
    handleChange(data) {
      console.log(data)
    },
   importFileDemo(obj) {//1.onchange事件绑定方法出发
    //2.如果没有选中文件则取消
    if (!obj.starget.files){
        return
    }
    //3.获得选择的文件对象
    var f = obj.target.files[0]
    //4.初始化新的文件读取对象，浏览器自带，不用导入
    var reader = new FileReader();
    //5.绑定FileReader对象读取文件对象时的触发方法
    reader.onload = function(e){
        //7.获取文件二进制数据流
        var data = e.currentTarget.result;
        //8.利用XLSX解析二进制文件为xlsx对象
        var wb = XLSX.read(data,{type:'binary'})
        //9.利用XLSX把wb第一个sheet转换成JSON对象
        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[Sheet名]获取第一个Sheet的数据
        var j_data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
        //10.在终端输出查看结果
        console.log(j_data)
    }
    //6.使用reader对象以二进制读取文件对象f，
    reader.readAsBinaryString(f)
  }
  },
};
</script>
<style scoped lang="less">
.table-box {
  width: 600px;
  height: 500px;
  border: 1px solid #aaa;
  border-radius: 3px;
  overflow: auto;

  li {
    padding: 10px;
    h2 {
      font-weight: 700;
      font-size: 18px;
      padding: 10px 0;
    }
    span {
      margin: 10px 0;
      color: red;
    }
    p {
      padding: 10px 0;
      font-size: 14px;
    }
  }
}
.s {
  background-color: pink;
}
.collapse-box {
  padding: 5px;
  border-bottom: 1px solid #fff;
  background-color: #000;
  color: #fff;
}
.collapse-box span {
  padding: 0 5px;
  text-align: left;
}
</style>