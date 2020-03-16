<template>
    <div class="movie-list">
        <div class="header">
            电影列表
            <div class="add_movie" @click="toAddMovie">
                +新增电影
            </div>
        </div>
        <div class="movie-list-item" v-for="item in movieList" :key="item.id">
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
            this.movieList = [
                {
                    id: 1,
                    name: '哪吒之魔童降世',
                    director: '饺子',
                    year: '2019',
                    screenwriter: '饺子/易巧/魏芸芸',
                    type: '剧情/喜剧/动画/奇幻',
                    rating: 8.6,
                    timing: '110分钟',
                    imdb_id: 'tt10627720',
                    poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp',
                    description: '天地灵气孕育出一颗能量巨大的混元珠，元始天尊将混元珠提炼成灵珠和魔丸，灵珠投胎为人，助周伐纣时可堪大用；而魔丸则会诞出魔王，为祸人间。元始天尊启动了天劫咒语，3年后天雷将会降临，摧毁魔丸。太乙受命将灵珠托生于陈塘关李靖家的儿子哪吒身上。然而阴差阳错，灵珠和魔丸竟然被掉包。本应是灵珠英雄的哪吒却成了混世大魔王。调皮捣蛋顽劣不堪的哪吒却徒有一颗做英雄的心。然而面对众人对魔丸的误解和即将来临的天雷的降临，哪吒是否命中注定会立地成魔？他将何去何从？'
                },
                {
                    id: 2,
                    name: '三生三世枕上书',
                    director: '杨玄',
                    year: '2020',
                    screenwriter: '梁振华',
                    type: '剧情 / 爱情 / 奇幻',
                    rating: 9.9,
                    timing: '2520分钟', // 45*56
                    imdb_id: 'tt10759336',
                    poster: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2581729661.webp',
                    description: '青丘帝姬白凤九被东华帝君所救铭记在心，为报恩凤九去太晨宫做宫婢多年。后东华被锁入十恶莲花境，凤九化身灵狐救东华。此后，凤九便以灵狐身份相伴东华左右，得知东华要迎娶姬蘅做帝后，凤九伤心离去。后东华去凡间历劫，凤九亦相随。梵音谷中，凤九为取频婆果陷入阿兰若梦境，重历阿兰若与沉晔的过往，东华化身息泽救出凤九。和缈落的大战中，正义战胜邪恶，光明战胜黑暗，最终东华凤九终成眷属。'
                },
            ];
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