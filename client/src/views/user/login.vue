<<template>
    <div class="login-container">
        <el-form 
            ref="loginForm"
            label-width="80px"
            class="login-form"
            :model="loginForm"
            :rules="loginRules"
        >
            <h1>登录</h1>
            <el-form-item prop="userName" label="用户名">
                <el-input type="text" v-model="loginForm.userName"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
                <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-button type="primary" :loading="loading" @click="login">登录</el-button>
            <div class="to-login">还未注册，前往<router-link to="/register">注册</router-link></div>
        </el-form>
    </div>
</template>
<script>
import userService from '../../services/UserServices';
export default{
    name: 'login',
    data() {
        return {
            loading: false,
            loginForm: {
                userName: '',
                password: ''
            },
            loginRules: {
                userName: [
                    {required: true,message: '用户名不能为空', trigger: 'blur'},
                    {min: 3, max: 10,message: '用户名长度在3-10之间', trigger: 'blur'}
                ],
                password: [
                    {required: true,message: '密码不能为空', trigger: 'blur'},
                    {min: 6, max: 16,message: '用户名长度在6-16之间', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        login() {
            this.$refs.loginForm.validate(valid => {
                if(valid) {
                    this.loading = true;
                    userService.login(this.loginForm).then(res => {
                        let data = res.data;
                        if(data.code === 0){
                            this.loading = false;
                            this.$message({message: data.msg,type: 'success'});
                            this.$store.dispatch("setToken",data.token);
                            this.$store.dispatch("setUserInfo",data.userInfo);
                            setTimeout(() => {
                                if(this.$route.query.redirect) {
                                    this.$router.push(this.$route.query.redirect);
                                }else{
                                    this.$router.push("/")
                                }
                            },1000)
                        }else{
                            this.loading = false;
                            this.$message({message: data.msg,type: 'warning'});
                        }
                    });
                }else{
                    return null;
                }
            })
        }
    }
}
</script>
<style scoped>
.login-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #2d3b4a;
}
.login-container .login-form{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 400px;
    height: 320px;
    padding: 20px;
    background-color: #fff;
    margin: 100px auto 0; 
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,255,0.5) inset;
}
.login-container .login-form h1{
    text-align: center;
    margin-bottom: 20px;
}
.login-container .login-form div.to-login{
    position: absolute;
    right: 20px;
}
.login-container .login-form div.to-login a{
    font-weight: bolder;
    color: aqua;
}
.el-button{
    width: 100%;
    margin-bottom: 10px;
}
</style>