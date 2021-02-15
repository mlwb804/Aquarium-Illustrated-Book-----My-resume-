<template>
    <div>
        <TheBanner :title="filterById.title"></TheBanner>
        <article v-if="articles.length" class="container">
            <div class="row no-gutters item">
                <div class="col-md-7 pic">
                    <div class="picture">
                        <swiper class="swiper" :options="swiperOption">
                            <swiper-slide><img :src="filterById.img1" :alt="filterById.id"></swiper-slide>
                            <swiper-slide><img :src="filterById.img2" alt="filterById.id"></swiper-slide>
                            <swiper-slide><img :src="filterById.img3" alt="filterById.id"></swiper-slide>
                            <swiper-slide><img :src="filterById.img4" alt="filterById.id"></swiper-slide>
                            <swiper-slide><img :src="filterById.img5" alt="filterById.id"></swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                        </swiper>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
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
import { mapState } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css';
export default {
    data() {
        return {
            artId: null,
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    mounted() {
        const id = this.$route.params.id;
        this.artId = id;
        this.$router.afterEach((to, from, next) => {
            window.scrollTo(0, 0)
        })
    },
    computed:{
        filterById() {
            return this.articles.filter(art => art.id === this.artId)[0];
        },
        ...mapState(['articles'])
    },
    components:{
        ArticleTable,
        swiper,
        swiperSlide
    },
    beforeRouteEnter (to, from, next) {
        const bread = to.meta.breadcrumb;
        for(let i = 0; i < bread.length; i++){
            if(bread[i].nam === ''){
                bread[i].name = to.params.id
            }
        }
        next();
    }

}
</script>

<style lang="scss" scoped>
.item{
    .pic{
        .picture{
            width: 80%;
            height: 350px;
            display: flex;
            margin: 1rem auto;
            position: relative;
                .swiper-button-prev{
                    // position: absolute;
                    left:0px;
                    background-image: url('../assets/icon/picleft.png');
                    background-size: contain;
                    &:focus{
                        outline: none;
                    }
                }
                .swiper-button-next{
                    // position: absolute;
                    right: 0px;
                    background-image: url('../assets/icon/picright.png');
                    background-size: contain;
                    &:focus{
                        outline: none;
                    }
                }
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
        }
        .sub-pic{
            width: 100%;
            margin: 0 auto;
            .sub-picture{
                display: flex;
                height: 100px;
                // justify-content: center;
            }
                img{
                    width: 20%;
                    height: 80%;
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
                line-height: 1.5;
                color:#666666;
            }
        }
    }
}

@media screen and (min-width:767px) {
    .item{
        .pic{
            .picture{
                margin-top: 10rem;
            }
            .sub-pic{
                width: 80%;
                height: 100%;
            }
        }
    }
}
</style>