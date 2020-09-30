<template>
<div>
    <header class="header-nav">
        <div class="outSide-nav" v-ChangeItem="{
                ind,
                activeClass: 'active',
                className: 'inSide-nav'
            }">
            <div class="inSide-nav" v-for="(item, index) in data" :key="index" @click="changeInd(index)">{{ item.name }}</div>
        </div>
    </header>
    <el-button @click="btnClick">click</el-button>
    <main class="user-box">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="地址">
                <template slot-scope="scope">
                    <el-select placeholder="请选择" size="mini" @change="selectChange" v-model="selectAllData[scope.row.id]">
                        <el-option v-for="(item, index) in scope.row.child" :key="index" :label="item.name" :value="item.name"></el-option>
                    </el-select>
                </template>
            </el-table-column>
        </el-table>
    </main>
    <el-button @click="initTable">click</el-button>
    <main class="new-table">
        <el-checkbox-group v-model="checkList">
            <template v-for="(value, name, index) of newTable">
                <el-checkbox :key="index" :label="name"></el-checkbox>
                <el-table :key="index" :data="value" style="width: 100%; padding: 10px;">
                    <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
                    <el-table-column align="center" prop="time" label="日期"></el-table-column>
                    <el-table-column align="center" prop="name" label="姓名"></el-table-column>
                    <el-table-column align="center" prop="user" label="用户"></el-table-column>
                    <el-table-column align="center" prop="info" label="描述"></el-table-column>
                </el-table>
            </template>
        </el-checkbox-group>
    </main>
</div>
</template>

<script>
import ChangeItem from "@/directive/ChangeItem";
export default {
    directives: {
        ChangeItem,
    },
    data() {
        return {
            checkList: [],
            tableData: [],
            data: [{
                    id: 1,
                    name: "选项1",
                },
                {
                    id: 2,
                    name: "选项2",
                },
                {
                    id: 3,
                    name: "选项2",
                },
                {
                    id: 4,
                    name: "选项4",
                },
            ],
            ind: 0,
            selectAllData: {},
            newTable: {}
        };
    },
    methods: {
        changeInd(index) {
            this.ind = index;
        },
        btnClick() {
            const data = [{
                id: 100,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                child: [{
                        name: '标题1',
                        value: 0
                    },
                    {
                        name: '标题2',
                        value: 1
                    },
                ]
            }, {
                id: 101,
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                child: [{
                        name: '标题1',
                        value: 0
                    },
                    {
                        name: '标题2',
                        value: 1
                    },
                ]

            }, {
                id: 102,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                child: [{
                        name: '标题1',
                        value: 0
                    },
                    {
                        name: '标题2',
                        value: 1
                    },
                ]

            }, {
                id: 103,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                child: [{
                        name: '标题1',
                        value: 0
                    },
                    {
                        name: '标题2',
                        value: 1
                    },
                ]

            }]
            this.tableData = data
            data.forEach(v => {
                // this.selectAllData[v.id] = v.child[0].name
                this.$set(this.selectAllData, v.id, v.child[0].name)
            })
            // console.log(this.selectAllData)
        },
        selectChange(data) {
            // console.log(this.selectAllData)
            // console.log(data)
        },
        initTable() {
            this.newTable = {
                '方案1': [{
                        name: 'ljs',
                        user: 'admin',
                        info: 'sdlkjflksdjlfjsdlajflsdajlfjsdalfjaldsjfldkasjflksdajfkdlsajflk',
                        time: '2020-9-28'
                    },
                    {
                        name: 'ljs',
                        user: 'admin',
                        info: 'sdlkjflksdjlfjsdlajflsdajlfjsdalfjaldsjfldkasjflksdajfkdlsajflk',
                        time: '2020-9-28'
                    },
                ],
                '方案2': [{
                        name: 'ljs',
                        user: 'admin',
                        info: 'sdlkjflksdjlfjsdlajflsdajlfjsdalfjaldsjfldkasjflksdajfkdlsajflk',
                        time: '2020-9-28'
                    },
                    {
                        name: 'ljs',
                        user: 'admin',
                        info: 'sdlkjflksdjlfjsdlajflsdajlfjsdalfjaldsjfldkasjflksdajfkdlsajflk',
                        time: '2020-9-28'
                    },
                ],
                '方案3': [{
                        name: 'ljs',
                        user: 'admin',
                        info: 'sdlkjflksdjlfjsdlajflsdajlfjsdalfjaldsjfldkasjflksdajfkdlsajflk',
                        time: '2020-9-28'
                    },
                    {
                        name: 'ljs',
                        user: 'admin',
                        info: 'sdlkjflksdjlfjsdlajflsdajlfjsdalfjaldsjfldkasjflksdajfkdlsajflk',
                        time: '2020-9-28'
                    },
                ]
            }

        }
    },
    watch: {
        checkList(value) {
            console.log(value)
        }
    }
};
</script>

<style lang="less" scoped>
.header-nav {
    width: 50%;
    height: 50px;
    margin: 10px auto;
    border: 2px solid #000;

    .outSide-nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .inSide-nav {
            height: 100%;
            font-size: 18px;
            flex: 1;
            color: #000;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .active {
            background: linear-gradient(45deg, #cecece, #000);
            color: #fff;
        }
    }
}

.user-box {
    padding: 10px;
}

.new-table {
    max-height: 300px;
    overflow: auto;
}
</style>
