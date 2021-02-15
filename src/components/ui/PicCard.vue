<template>
    <div class="pic container">
        <div class="row no-gutters">
            <PicCardItem
            v-for="(art, index) in articles"
            :key="index"
            class="col-12 col-md-6 col-lg-4 col-2_5"
            >
            <div class="row no-gutters">
                <div class="dummy"></div>
                <div class="block" @click="routerToArticle(art.id)">
                    <img :src="art.img1" alt="">
                </div>
                <div class="tit"> {{ art.title }} </div>
            </div>
            </PicCardItem>
        </div>
    </div>
</template>

<script>
import PicCardItem from '../ui/PicCardItem.vue';
export default {
    props:['articles'],
    data() {
        return {
            
        }
    },
    components:{
        PicCardItem
    },
    methods:{
        routerToArticle(id) {
            this.$router.push({name:"Article", params: {id:id}})
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        .pic{
            margin-top: 2rem;
        }
        .col-2_5{
            position: relative;
            .dummy{
                margin-top: 100%;
            }
            .block{
                top: 4px;
                right: 4px;
                left: 4px;
                bottom: 4px;
                position: absolute;
                overflow: hidden;
                cursor: pointer;
                &:hover img{
                    transform: scale(1.2,1.2);
                    transition:  all .5s ease-out;
                    }
                &:hover ~ .tit{
                    color:rgba(32, 229, 255, 0.822);
                    transition: color .6s linear;
                }
                img{
                    width: 100%;
                    height: 100%;
                    transform: scale(1,1);
                    transition:  all .1s ease-out;
                }
            }
            .tit{
                z-index: 20;
                color:#fff;
                font-size: 1.3rem;
                position: absolute;
                bottom: 15%;
                left: 0;
                right: 0;
                cursor: pointer;

            }
        }
    }

@media (min-width:1140px) {
    .container{
        .col-2_5 {
            flex: 0 0 20%;
            max-width: 20%;
        }
    }
}
</style>