<template>
<div class="main" id="main">
    <div class="search">
        <Input @input="input" :title="title" :placeholer="placeholer" />
    </div>
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
</div>
</template>

<script>
import Input from "./components/InputInfo";
export default {
    components: {
        Input,
    },
    data() {
        return {
            arr: [],
            messageTime: null,
            placeholer: "随便你...",
            title: "假标题",
        };
    },
    created() {
        this.getJsonData();
    },
    methods: {
        getJsonData() {
            this.arr = JSON.parse(window.localStorage.getItem("playList"));
        },
        input(value) {
            // console.log(value);
            if (this.messageTime) clearTimeout(this.messageTime);

            this.messageTime = setTimeout(() => {
                console.log(value);
            }, 500);
        },
    },
};
</script>

<style lang="less" scoped>
#main {
    height: 100%;
    padding: 5px;
    position: relative;

    .search {
        width: 20%;
    }

    .main-album {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // border: 1px solid #fff;
        width: 90%;
        height: 85%;
        padding: 5px;
        overflow: auto;

        ul {
            display: flex;
            justify-content: space-between;
            // align-items: center;
            flex-wrap: wrap;
            width: 100%;

            li {
                text-align: center;
                padding: 10px;
                border: 1px solid #888888;
                box-shadow: 3px 3px 3px #888888;
                margin: 5px 0;
                width: 18%;
            }
        }
    }
}
</style>
