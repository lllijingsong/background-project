<template>
<div class="bg">
    <video style="width: 100%" src="static/video/Network03.mp4" autoplay loop>您的浏览器不支持 video 标签。</video>
    <div class="login">
        <div class="userInfo">
            <div class="userPhoto">
                <img src="static/icon/User.png" alt="user">
            </div>
            <h1>xxx后台管理系统</h1>
            <el-input placeholder="请输入用户名" v-model="userName" class="inp" size="mini" />
            <el-input placeholder="请输入密码" show-password v-model="userPaw" class="inp" size="mini" />
            <el-button size="mini" type="info" class="commitBtn" @click="login">login</el-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            userName: 'admin',
            userPaw: 'admin'
        }
    },
    methods: {
        login() {
            const data = {
                name: this.userName,
                paw: this.userPaw,
                superUser: true,
                img: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
            }
            this.$store.dispatch('setUser', data)
            this.$router.push({
                path: '/map/index'
            })
        }
    }
}
</script>

<style scoped>
video {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    z-index: -1;
}

.login {
    position: absolute;
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -35%);
}

.userPhoto {
    text-align: center;
}

.userPhoto>img {
    width: 150px;
    height: 150px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.userInfo {
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
}

.userInfo .inp {
    width: 100%;
    margin-bottom: 10px;
}

.userInfo>h1 {
    color: #fff;
    text-shadow: 1px 1px 12px #fff;
    font-size: 25px;
    padding: 30px 0;
    text-align: center;
}
</style>
