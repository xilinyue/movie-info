<<template>
    <div class="register-container">
        <el-form 
            ref="registerForm"
            label-width="80px"
            class="register-form"
            :model="registerForm"
            :rules="registerRules"
        >
            <h1>注册</h1>
            <el-form-item prop="userName" label="用户名">
                <el-input type="text" v-model="registerForm.userName"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
                <el-input type="password" v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item prop="confirmPassword" label="确认密码">
                <el-input type="password" v-model="registerForm.confirmPassword"></el-input>
            </el-form-item>
            <el-button type="primary" :loading="loading" @click="register">注册</el-button>
            <div class="to-login">已注册，前往<router-link to="/login">登录</router-link></div>
        </el-form>
    </div>
</template>
<script>
import userService from '../../services/UserServices';
export default{
    name: 'register',
    data() {
        return {
            loading: false,
            registerForm: {
                userName: '',
                password: '',
                confirmPassword: '',
            },
            registerRules: {
                userName: [
                    {required: true,message: '用户名不能为空', trigger: 'blur'},
                    {min: 3, max: 10,message: '用户名长度在3-10之间', trigger: 'blur'}
                ],
                password: [
                    {required: true,message: '密码不能为空', trigger: 'blur'},
                    {min: 6, max: 16,message: '用户名长度在6-16之间', trigger: 'blur'}
                ],
                confirmPassword: [
                    {required: true,message: '确认密码不能为空', trigger: 'blur'},
                    {validator: (rule,value,callback) => {
                        if(value !== this.registerForm.password){
                            callback(new Error('两次输入密码不一致!'));
                        }else{
                            callback()
                        }
                    },trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        register() {
            this.$refs.registerForm.validate(valid => {
                if(valid) {
                    this.loading = true;
                    userService.register(this.registerForm).then(res => {
                        let data = res.data;
                        if(data.code === 0){
                            this.loading = false;
                            this.$message({message: data.msg,type: 'success'});
                            setTimeout(() => {
                                this.$router.push("/");
                            },1000)
                        }else{
                            this.loading = false;
                            this.$message({message: data.msg,type: 'warning'});
                        }
                    });
                }else{
                    return;
                }
            })
        }
    }
}
</script>
<style scoped>
.register-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #2d3b4a;
}
.register-container .register-form{
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
.register-container .register-form h1{
    text-align: center;
    margin-bottom: 20px;
}
.register-container .register-form div.to-login{
    position: absolute;
    right: 20px;
}
.register-container .register-form div.to-login a{
    font-weight: bolder;
    color: aqua;
}
.el-button{
    width: 100%;
    margin-bottom: 10px;
}
</style>