<template>
    <div class="movie-add">
        <div class="header">
            新增信息
            <el-button type="primary" size="mini" @click="$router.push('/movie')">电影列表</el-button>
        </div>
        <el-form 
            ref="createForm" 
            :model="createForm" 
            :rules="createFormRules"
            label-width="80px"
            >
            <el-row>
                <el-col :span="12">
                    <el-form-item label="电影名称" prop="name">
                        <el-input v-model="createForm.name" placeholder="请输入电影名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电影类别" prop="type">
                        <el-input v-model="createForm.type" placeholder="请输入电影类别"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="电影海报" prop="poster">
                        <el-input v-model="createForm.poster" placeholder="请输入电影海报地址"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电影评分" prop="rating">
                        <el-input v-model="createForm.rating" placeholder="请输入电影评分"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="电影编剧" prop="screenwriter">
                        <el-input v-model="createForm.screenwriter" placeholder="请输入电影海报地址"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="IMDB_ID" prop="imdb_id">
                        <el-input v-model="createForm.imdb_id" placeholder="请输入电影评分"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="电影导演" prop="director">
                        <el-input v-model="createForm.director" placeholder="请输入电影导演"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电影年份" prop="year">
                        <el-input v-model="createForm.year" placeholder="请输入电影年份"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="电影时长" prop="timing">
                        <el-input type="text" v-model="createForm.timing"
                                  placeholder="请输入电影时长"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="电影简介" prop="description">
                        <el-input type="textarea" :rows="5" v-model="createForm.description"
                            placeholder="请输入电影简介"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="form-button">
                <el-button
                    type="primary"
                    native-type="submit"
                    @click.prevent="createMovie">保存</el-button>
                <el-button type="warning" @click="resetCreateForm">重置</el-button>
            </el-row>
        </el-form>
        <div class="footer">
        </div>
    </div>
</template>
<script>
import movieService from '../../services/MovieService';
export default {
    name: 'create',
    data() {
        return {
            createForm: {
                name: '',
                director: '',
                year: '',
                screenwriter: '',
                type: '',
                rating: '',
                timing: '',
                imdb_id: '',
                poster: '',
                description: ''
            },
            createFormRules: {
                name: [
                    {required: true, message: '电影名称必填！',trigger: 'blur'}
                ],
                type: [
                    {required: true, message: '电影类别必填！',trigger: 'blur'}
                ],
                poster: [
                    {required: true, message: '电影海报地址必填！',trigger: 'blur'}
                ],
                rating: [
                    {required: true, message: '电影评分必填！',trigger: 'blur'}
                ],
                director: [
                    {required: true, message: '电影导演必填！',trigger: 'blur'}
                ],
                year: [
                    {required: true, message: '电影年份必填！',trigger: 'blur'}
                ],
                screenwriter: [
                    {required: true, message: '电影编剧必填！',trigger: 'blur'}
                ],
                imdb_id: [
                    {required: true, message: 'IMDB_ID必填！',trigger: 'blur'}
                ],
                timing: [
                    {required: true, message: '电影时长必填！',trigger: 'blur'}
                ],
                description: [
                    {required: true, message: '电影简介必填！',trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        createMovie(){
            this.$refs.createForm.validate(valid => {
                if(valid) {
                    movieService.addMovie(this.createForm).then(res => {
                        let data = res.data;
                        if (data.code === 0) {
                            this.$router.push("/");
                        }else{
                            this.resetCreateForm();
                            this.$message({
                                type: 'warning',
                                message: '创建电影信息失败'
                            })
                        }
                    });
                }else{
                    this.$message({
                        type: 'warning',
                        message: '请完善表单'
                    })
                }
            })
        },
        resetCreateForm() {
            this.$refs.createForm.resetFields();
        }
    }
}
</script>
<style scoped>
.movie-add{
    margin: 20px auto 0;
    width: 100%;
}
.movie-add .header {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    border-top: 3px solid #409EFF;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    box-sizing: border-box;
}
.movie-add .footer{
    width: 100%;
    height: 3px;
    border-bottom: 3px solid #909399;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}
.movie-add .el-form{
    padding: 10px 20px 0
}
.form-button{
    text-align: center;
    margin: 10px 0;
}
.form-button .el-button{
    margin-left: 30px;
}
</style>