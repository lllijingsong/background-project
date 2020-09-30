<template>
<div>
    <header class="header">
        <div class="header-left">
            <img src="static/images/IDM00.ico" alt style="width: 50px; height: 50px;" />
            <h1>Twitter</h1>
        </div>
        <div class="header-right">
            <div class="user-data">
                <!-- <div>
            <img @mouseenter="imgComming" @mouseout="imgOut" :class="[userBool? 'img-active' : '','']"  src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="">
            <transition name="el-fade-in-linear">
              <div v-show="userBool">
                <div class="user-hover-box">123</div>
              </div>
            </transition>
          </div> -->

                <!-- <el-tag type="danger" class="tag">用户:{{ userName }}</el-tag> -->
            </div>

            <el-menu class="el-menu-demo menu-style" mode="horizontal" @select="handleSelect">
                <template v-for="item in router">
                    <el-menu-item v-if="!item.hide && item.isSingle" :key="item.name" :index="item.children[0].path+''">{{ item.name }}</el-menu-item>
                    <el-submenu v-else-if="!item.hide" :key="item.name" :index="item.path+''">
                        <template slot="title">{{ item.name }}</template>
                        <el-menu-item v-for="val in item.children" :key="val.name" :index="val.path+''">{{ val.name }}</el-menu-item>
                    </el-submenu>
                </template>
            </el-menu>

        </div>
    </header>
</div>
</template>

<script>
export default {
    created() {
        // console.log(this.router)
    },
    data() {
        return {
            router: this.$router.options.routes,
            userName: 'admin',
            userBool: false
        }
    },
    methods: {
        handleSelect(index) {
            this.$router.push({
                path: index
            })
        },
        imgComming(e) {
            console.log(e)
            this.userBool = true

        },
        imgOut(e) {
            console.log(e, 'out')
            this.userBool = false

        }
    }
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    background-color: @mainColor;
    color: @white;
    padding: 0 20px;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;

    .header-left {
        display: flex;
        align-items: center;
    }

    h1 {
        font-size: 20px;
        padding: 0 10px;
    }
}

// .header :nth-child(1) {
//   display: flex;
//   align-items: center;
// }
// .header :nth-child(1) > h1 {
//   font-size: 20px;
//   padding: 0 10px;
// }
.menu-style {
    background-color: @mainColor;
    border-bottom: 0;
    color: @black  !important;
}

.el-menu-item .is-active {
    color: #000 !important;
}

.user-data {
    display: flex;
    justify-content: center;
    align-items: center;

    img:nth-child(1) {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
}

.header-right {
    display: flex;
}

.user-hover-box {
    position: absolute;
    z-index: 1;
    top: 60px;
    right: 260px;
    width: 300px;
    height: 500px;
    border: 1px solid #aaa;
    background-color: #fff;
}

.img-active {
    position: absolute;
    z-index: 2;
    top: 10px;
    right: 370px;
    width: 100px !important;
    height: 100px !important;
    translate: initial 5s;
}
</style>
