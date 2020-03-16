<template>
    <div class="movie-list">
        <div class="header">
            电影列表
            <div class="add_movie" @click="toAddMovie">
                +新增电影
            </div>
        </div>
        <div class="movie-list-item" v-for="item in movieList" :key="item._id">
            <h2>{{item.name}}<span class="text-info"> ({{item.year}})</span></h2>
            <div class="movie-item-content">
                <div class="poster">
                    <img :src="item.poster" :title="item.name" :alt="item.name">
                </div>
                <ul class="info">
                    <li><span class="text-info">导演：</span>{{item.director}}</li>
                    <li><span class="text-info">编剧：</span>{{item.screenwriter}}</li>
                    <li><span class="text-info">类型：</span>{{item.type}}</li>
                    <li><span class="text-info">评分：</span>
                        <el-rate
                                :value="item.rating"
                                :max="10"
                                disabled
                                show-score
                                text-color="#ff9900"
                        >
                        </el-rate>
                    </li>
                    <li><span class="text-info">片长：</span>{{item.timing}}</li>
                    <li><span class="text-info">IMDB_ID：</span>{{item.imdb_id}}</li>
                </ul>
            </div>
            <div class="movie-item-desc">
                {{item.description}}...<a class="text-success" href="javascript:;">查看详情</a>
            </div>
        </div>
        <div class="footer">
        </div>
    </div>
</template>
<script>
import movieService from '../../services/MovieService';
export default {
    name: 'list',
    data() {
        return {
            movieList: []
        }
    },
    created() {
        this.getMovieList();
    },
    methods: {
        toAddMovie() {
            this.$router.push("/movie/create").catch(err => {err} );
        },
        getMovieList() {
            movieService.getAllMovies().then(res => {
                let data = res.data;
                if (data.code === 0){
                    this.movieList = data.data;
                    this.movieList.map(item => {
                       item.rating = parseInt(item.rating);
                       return item;
                    });
                }
            });
        }
    }
}
</script>
<style scoped>
    .movie-list{
        margin: 20px auto 0;
        width: 100%;
    }
    .movie-list .header {
        position: relative;
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        border-top: 3px solid #409EFF;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        box-sizing: border-box;
    }
    .movie-list .header .add_movie{
        position: absolute;
        right: 20px;
        top: 0;
        color: #67C23A;
        cursor: pointer;
    }
    .movie-list .footer{
        width: 100%;
        height: 3px;
        border-bottom: 3px solid #909399;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    .movie-list .movie-list-item{
        width: 100%;
        margin: 20px 10px;
    }
    .movie-list .movie-list-item .movie-item-content {
        display: flex;
    }
    .movie-list .movie-list-item .movie-item-content .poster{
        margin: 20px 20px 0 0 ;
    }
    .movie-list .movie-list-item .movie-item-content .poster img{
        width: 135px;
        object-fit: cover;
    }
    .movie-list .movie-list-item .movie-item-content .info{
        margin-top: 20px;
        line-height: 1.5;
    }
    .movie-list .movie-list-item .movie-item-desc {
        margin: 20px;
        text-indent: 2em;
        line-height: 1.5;
        font-size: 14px;
    }
</style>