<template>
  <div class="box">
    <div>
      <ul>
        <li v-for="item in listData" :key="item.id">
          <el-tooltip effect="dark" placement="bottom" popper-class="atooltip">
            <div
              slot="content"
              style="width: 300px !important;overflow: hidden!important;word-break: break-word!important;"
            >{{ item.description }}</div>
            <div class="font">{{ item.name }}</div>
          </el-tooltip>
        </li>
      </ul>
    </div>

    <div class="ul-box">
      <ul v-for="(value, name, index) in listShow" :key="index">
        <li v-for="(item, index) in value" :key="index" :class="item.align+'-style'">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listData1: [
        { name: '第一个', id: "TA0001" },
        { name: '第二个', id: "TA0002" },
        { name: '第三个', id: "TA0003" },
        { name: '第四个', id: "TA0004" },
        { name: '第五个', id: "TA0005" },
        { name: '第六个', id: "TA0006" },
      ],
      listShow: {},
      listData: [
        {
          id: 1,
          name: "名称1",
          description:
            "我是一个牛逼的第三方看来是大家佛is的见覅涉及到覅决胜巅峰靳绥东级sdaflsdklfjsdajfjsdafoijsdaiofjsaoi[d发圣诞节佛is交到if阿萨德打瞌睡龙卷风iOS大家佛is的金佛好靳绥东if解耦i考虑到房价多斯拉克荆防颗粒时代峻峰凉快圣诞节弗兰克斯鸡蛋里 施蒂利克荆防颗粒时代峻峰凉快圣诞节分类考试的缴费历史的离开时发动机凉快圣诞节放声大哭交付数量的会计法类似的的离开飞机上来看的减肥了快速的减肥了快速的减肥来看",
        },
        {
          id: 2,
          name: "名称2",
          description:
            "我是一个牛逼的第三方看来是大家佛is的见覅涉及到覅决胜巅峰靳绥东级sdaflsdklfjsdajfjsdafoijsdaiofjsaoi[d发圣诞节佛is交到if阿萨德打瞌睡龙卷风iOS大家佛is的金佛好靳绥东if解耦i考虑到房价多斯拉克荆防颗粒时代峻峰凉快圣诞节弗兰克斯鸡蛋里 施蒂利克荆防颗粒时代峻峰凉快圣诞节分类考试的缴费历史的离开时发动机凉快圣诞节放声大哭交付数量的会计法类似的的离开飞机上来看的减肥了快速的减肥了快速的减肥来看",
        },
      ],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.listShow = {}
      this.listData1.forEach(v => {
        this.listShow[v.id] = [ { align: 'top', name: v.name } ]
      })

      let data = [
        { ta: "TA0001", te: "T1007" },
        { ta: "TA0002", te: "T1002" },
        { ta: "TA0003", te: "T1004" },
        { ta: "TA0004", te: "T1001" },
        { ta: "TA0001", te: "T1001" },
        { ta: "TA0002", te: "T10023" },
      ]
      data.forEach(v => {
        this.listShow[v.ta].push( { align: 'center', name: v.te } )
      })

      let data2 = [
        { ta: "TA0001", te: "T1002" },
        { ta: "TA0004", te: "T10012" },
        { ta: "TA0004", te: "T100721" },
        { ta: "TA0002", te: "T100721" },
        { ta: "TA0001", te: "T100721" },
        { ta: "TA0001", te: "T100721" },
      ];

      data2.forEach(v => {
        this.listShow[v.ta].push( { align: 'buttom', name: v.te } )
      })
      console.log(this.listShow)

    },
  },
};
</script>

<style lang="less" scoped>
.font {
  text-align: center;
  border: 1px solid #ccc;
  width: 30%;
  margin: 10px auto;
  height: 100px;
  line-height: 100px;
}

.el-tooltip__popper[x-placement^="bottom"] {
  width: 300px !important;
  //   overflow: hidden!important;
  word-break: break-word !important;
}
.box > .atooltip {
  width: 300px !important;
  overflow: hidden !important;
  word-break: break-word !important;
}
.ul-box {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 100px auto;
  border: 1px solid #ccc;

}
.top-style {
  color: yellowgreen;
  font-weight: 700;
}
.center-style {
  color: red;
}
.buttom-style {
  color: pink;
}
</style>
