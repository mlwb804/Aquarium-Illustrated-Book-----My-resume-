<template>
    <div>
        <TheBanner title="七彩神仙"></TheBanner>
        <article v-if="articles.length" class="container">
            <div class="row no-gutters item">
                <div class="col-md-7 pic">
                    <div class="picture">
                            <img :src="filterById.img1" :alt="filterById.title">
                            <img :src="filterById.img2" alt="">
                            <img :src="filterById.img3" alt="">
                            <img :src="filterById.img4" alt="">
                            <img :src="filterById.img5" alt="">
                    </div>
                </div>
                <div class="col-md-5 txt">
                    <h3>  {{ filterById.title }}  </h3>
                    <ArticleTable :articles="filterById"></ArticleTable>
                    <div class="content">
                        <h5>簡介</h5>
                        <p>
                            {{ filterById.content }}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
import ArticleTable from '../components/ui/ArticleTable.vue';
import { mapState } from 'vuex'
export default {
    data() {
        return {
            artId: null,
        }
    },
    mounted() {
        const id = this.$route.params.id
        this.artId = id
    },
    computed:{
        filterById() {
            return this.articles.filter(art => art.id === this.artId)[0];
        },
        ...mapState(['articles'])
    },
    components:{
        ArticleTable
    }
}
</script>

<style lang="scss" scoped>
.item{
    .pic{
        .picture{
            width: 50px;
            height: 50px;
            display: flex;
                img{
                    width: 100%;
                    height: 100%;
                }
        }
    }
    .txt{
        h3{
            text-align: left;
            font-size: 1.5rem;
            padding-top: 1rem;
            color:#555555;
        }
        .content{
            text-align: left;
            h5{
                margin-top: 2rem;
                padding-left: 3rem;
                font-weight: 500;
                font-size: 1.4rem;
                color: #329af0;
                position: relative;
                &::before{
                    content: url('../assets/icon/dolphin.png');
                    position: absolute;
                    left: 15px;
                    top: -2px;
                }
                &::after{
                    content: url('../assets/icon/bluedown.png');
                    position: absolute;
                    right: 30px;
                    top: -2px;
                }
            }
            p{
                padding: 2rem 1.5rem;
                line-height: 2;
                color:#666666;
            }
        }
    }
}

</style>