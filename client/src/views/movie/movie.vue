<template>
    <el-container class="movie">
        <el-header>
            <h1>Vue+Element+Express</h1>
            <el-dropdown  @command="handleCommand">
                <!--未登录-->
                <template v-if="!$store.state.isUserLogin">
                    <router-link to="/login">登录</router-link> | <router-link to="/register">注册</router-link>
                </template>
                <template v-else>
                    <el-button type="info">
                        更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <!-- 是否已登录 -->
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
export default {
    name: 'create',
    data() {
        return {

        }
    },
    methods: {
        handleCommand(command) {
            if (command === 'logout') {
                this.$store.dispatch('setToken','');
                this.$store.dispatch('setUserInfo','');
                this.$router.push("/").catch(err => {err});
            }
        }
    }
}
</script>
<style scoped>
.el-header{
    display: flex;
    justify-content: space-between;
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
}
.el-header h1{
    font-size: 26px;
}
</style>