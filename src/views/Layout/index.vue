<template>
  <div class="all-views">
    <Header />
    <div class="router-style">
      <appMain/>
    </div>
  </div>
</template>
<script>
// import { Header, appMain } from './components'
import Header from './components/Header'
import appMain from './components/AppMain'
export default {
  components: {
    Header,
    appMain
  },
  data () {
    return {}
  }
}
</script>
<style scoped lang="less">
.all-views {
  height: 100vh;
}
.router-style {
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  position: relative;
}
.router-style .app-main {
  background: #fff;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  // background: linear-gradient(45deg, #5acaff, #8500ff);
}
</style>
