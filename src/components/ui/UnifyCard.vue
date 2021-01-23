<template>
    <div>
        <div
        v-for="(art, index) in articles"
        :key="index"
        class="row item"
        >
        <div class="pic col-md-4">
            <div class="picture" @click="routerToArticle(art.id)">
                <img :src="art.img1" :alt="art.title">
            </div>
        </div>
        <div class="txt col-md-8">
            <h3 @click="routerToArticle(art.id)">
                {{ art.title }}
            </h3>
            <p> {{ art.content | subContent }}... </p>
        </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    filters:{
        subContent: (content) => {
            return content.substring(0, 60);
        }
    },
    methods:{
        routerToArticle(id) {
            this.$router.push({name:"Article", params: {id:id}})
        }
    },
    computed:{
        ...mapState(['articles'])
    }
}
</script>

<style lang="scss" scoped>
.box{
    background-color: black;
    height: 300px;
}


        .item{
            margin: 2rem auto;
            .pic{
                .picture{
                    width: 300px;
                    height: 300px;
                    margin: 0 auto;
                    cursor: pointer;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 100%;
                    }
                }
            }
            .txt{
                margin: 2rem 0 0;
                
                h3{
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                    cursor: pointer;
                    color: rgb(88, 88, 88);
                }
                p{
                    font-size: 1.2rem;
                    line-height: 1.8rem;
                    text-align: left;
                    color:rgb(134, 134, 134);
                }
            }
        }
        
    @media screen and (min-width: 768px ){
        .item{
            margin: 4rem auto;
            .pic{
            .picture{
                width: 150px;
                height: 150px;
            }
        }
        .txt{
            margin: 0 auto;
            text-align: left;
            h3{
                margin-bottom: 1rem;
            }
            p{
                font-size: .8rem;
            }
        }
        }
    }
    @media screen and (min-width:1025px ) {
        .item{
            .pic{
                .picture{
                    width: 200px;
                    height: 200px;
                }
            }
        }
    }
</style>