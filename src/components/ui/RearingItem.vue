<template>
    <div>
        <div 
        v-for="(item, index) in rearing"
        :key="index"
        class="list"
        >
            <div class="tit">
                <span  @click="routerToArticle(item.id)">{{index+1}}.</span>
                <span class="content" @click="routerToArticle(item.id)">{{ item.title }}</span>
                <i>{{ item.date | toDate }}</i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['rearing'])
    },
    methods: {
    routerToArticle(id){
        this.$router.push({name:'RearingArticles', params: {id: id}})
    }

    },
    filters:{
    subContent: (content) => {
        return content.substring(0, 30);
    },
    toDate: timestamp => {
        const date = new Date(timestamp);
        let Y = date.getFullYear();
        let M = date.getMonth();
        let D = date.getDate();
        let H = date.getHours();
        let min = (Array(2).join("0") + date.getMinutes()).slice(-2);
        return `${Y}/${M + 1}/${D} ${H}:${min}`;
        }
    },
}
</script>

<style lang="scss" scoped>
    .list{
        margin-bottom: 2rem;
            .tit{
                margin-bottom: 1rem;
                position: relative;
                border-bottom: 1px solid rgba(90, 84, 84, .2);
                padding-bottom: 1.2rem;
                text-align: left;
                span{
                    font-weight: 500;
                    font-size: 1rem;
                    cursor: pointer;
                }
                .content{
                    &:hover{
                    color:#888;
                    transition: all .2s;
                }
                }
                i{
                    position: absolute;
                    right: 0px;
                    top: 14px;
                    font-size: .3rem;
                    color:#888;
                }
            }
        }
@media screen and (min-width:767px) {
    .list{
        .tit{
            span{
                font-size: 1.2rem;
            }
        }
    }
}
</style>