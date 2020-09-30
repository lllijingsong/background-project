<template>
<div>
    <h1>{{ title }}</h1>
    <el-input v-model="message" type="text" size="mini" @input="$emit('input', message)" />
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
    },
    created() {
        console.log(this.$attrs);
    },
    data() {
        return {
            message: "",
            messageTime: null,
        };
    },
    watch: {
        message(value) {
            if (this.messageTime) clearTimeout(this.messageTime);

            this.messageTime = setTimeout(() => {
                // console.log(value);
            }, 500);
        },
    },
};
</script>
