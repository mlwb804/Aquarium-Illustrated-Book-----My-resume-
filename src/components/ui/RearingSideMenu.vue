<template>
    <nav>
        <ul class="wrap">
            <li
            v-for="(item, index) in rearing" :key="index"
            class="item"
            @click="routerToArticles(item.id)"
            >
            {{item.title | subContent}}..
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapState } from 'vuex';
export default {
    filters:{
        subContent: (content) => {
            return content.substring(0, 6);
        },
    },
    computed:{
        ...mapState(['rearing'])
    },
    methods: {
        routerToArticles(id){
            this.$router.push({name:'RearingArticles', params: {id: id}});
        }
    },
}
</script>

<style lang="scss" scoped>
    .wrap{
        padding:1rem 0;
        z-index: 999;
        font-size: .5rem;
        margin-left: 1.5rem;
        border-radius: 10px;
        width: 80%;
        border: 1px solid rgba(0, 0, 0, .6);
        .item{
            margin:1rem auto;
            position: relative;
            text-align: left;
            padding-left: .65rem;

            &::after{
                content:'';
                display: block;
                position: absolute;
                top:20px;
                left: 10px;
                right: 10px;
                height: 1px;
                width: 70%;
                background-color: rgba(138, 138, 138, .6);
            }
        }
    }
</style>