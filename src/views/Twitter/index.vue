<template>
<div class="toTwitter">
    <header class="header">
        <div class="header-nav header-child">
            <i class="el-icon-platform-eleme"></i>
            <a href="#">Home</a>
            <a href="#">About</a>
        </div>
        <div class="search-nav header-child">
            <el-input width="50%" placeholder="Search Twitter" suffix-icon="el-icon-search" class="twitter-search" size="mini" />
            <div>
                <a href="#">Have an account? Login</a>
            </div>
        </div>
    </header>

    <main class="main-backgroundImg"></main>

    <section class="user-follow">
        <div class="user-photo">
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1547734384,590038364&fm=26&gp=0.jpg" alt />
        </div>
        <ul v-ChangeItem="{
                ind,
                activeClass: 'active',
                className: ''
            }">
            <li v-for="(value, name, index) of userTab" :key="index" @click="liClick(index)">
                <div>{{ name }}</div>
                <span>{{ value }}</span>
            </li>
        </ul>
        <div class="user-follow-btn">
            <el-button icon="el-icon-circle-plus-outline" size="mini">Follow</el-button>
        </div>
    </section>

    <main class="user-system-box">
        <section class="user-menu-btn">
            123
        </section>
        <!-- <main class="main" id="main">
            <div class="main-album">
                <ul>
                    <li v-for="(item) in arr" :key="item.id">
                        <img :src="item.picUrl" style="width: 200px; height: 200px;" />
                        <p>{{ item.id }}</p>
                        <p>{{ item.name }}</p>
                        <p>{{ item.duration }}</p>
                    </li>
                </ul>
            </div>
        </main> -->

    </main>

</div>
</template>

<script>
import ChangeItem from "@/directive/ChangeItem";
export default {
    directives: {
        ChangeItem
    },
    data() {
        return {
            userTab: {
                TWEETS: "1,832",
                FOLLOWING: 10,
                FOLLOWERS: "34.8K",
                LIKES: "11.2K",
                LISTS: 1,
            },
            ind: 0,
            arr: []
        };
    },
    mounted() {
        this.getJsonData()
    },
    methods: {
        liClick(e) {
            this.ind = e
        },
        getJsonData() {
            this.arr = JSON.parse(window.localStorage.getItem("playList"));
        },
    }
};
</script>

<style lang="less" scoped>
@import url('./index');
</style>
