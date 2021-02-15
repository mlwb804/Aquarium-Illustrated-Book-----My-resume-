<template>
    <div class="nav">
        <nav>
        <div class="search_box">
            <i class="icon-search" @click.prevent="submitSearchKey"></i>
            <input type="text" id="search" placeholder="search..." v-model="searchKey" @keyup.enter="submitSearchKey">
        </div>
        <ul
        @click="freshToggle = !freshToggle"
        :class="freshToggle ? 'down' : 'right' "
        >淡水觀賞魚
            <transition-group name="list">
                <li
                v-for="(art, index) in filterByFresh"
                :key="art.id"
                class="list-item"
                v-if="freshToggle"
                @click="routerToArticle(art.id)"
                >
                    <a>
                        {{ art.title }}
                    </a>
                </li>
            </transition-group>
        </ul>
        <ul
        @click="saltToggle = !saltToggle"
        :class="saltToggle ? 'down' : 'right' "
        >海水觀賞魚
            <transition-group name="list">
                <router-link
                v-for="(art, index) in filterBySalt"
                :key="art.id"
                to="/"
                tag="li"
                class="list-item"
                v-if="saltToggle"
                >
                    <a>
                        {{ art.title }}
                    </a>
                </router-link>
            </transition-group>
        </ul>
        <ul
        @click="shrimpToggle = !shrimpToggle"
        :class="shrimpToggle ? 'down' : 'right' "
        >觀賞蝦
            <transition-group name="list">
                <router-link
                v-for="(art, index) in filterByShrimp"
                :key="art.id"
                to="/"
                tag="li"
                class="list-item"
                v-if="shrimpToggle"
                >
                    <a>
                        {{ art.title }}
                    </a>
                </router-link>
            </transition-group>
        </ul>
        </nav>
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            freshToggle: false,
            saltToggle: false,
            shrimpToggle: false,
            searchKey:""
        }
    },
    computed:{
        ...mapState(['articles']),
        filterByFresh(){
            return this.articles.filter( nam => nam.type === 'fresh');
        },
        filterBySalt(){
            return this.articles.filter( nam => nam.type === 'salt');
        },
        filterByShrimp(){
            return this.articles.filter( nam => nam.type === 'shrimp');
        }
    },
    methods: {
        routerToArticle(id) {
            this.$router.push({name:"Article", params: {id:id}});
        },
        ...mapActions(['changeSearchKey']),

        submitSearchKey() {
            this.changeSearchKey(this.searchKey);
        }
    },
    watch:{
        searchKey() {
            if(this.searchKey === "") {
                this.submitSearchKey();
            }
        }
    }



}
</script>

<style lang="scss" scoped>
@mixin pad{
    @media screen and (min-width: 768px) {
        @content
    }
};
    .nav{
        padding-top: 4rem;
        width: 100%;
        padding-left: 2rem;
        .search_box{
            position: relative;
            text-align: left;
                @include pad{
                    width: 150px;
                }
            .icon-search{
                background: url('../../assets/icon/search.png') no-repeat;
                position: absolute;
                top:5px;
                right:10px;
                width:24px;
                height:24px;
            }
            #search{
                width: 100%;
                height: 34px;
                border-radius: 8px;
                border:1px inset #fff;
                background-color: rgb(240, 240, 240);
                padding-left: 10px;
                &:focus{
                    outline: none;
                }
            }
        }
        nav{
            @include pad {
                margin: 0 auto;
            }
        }
        ul{
            width: 100%;
            text-align: left;
            color:#1b98e0;
            margin-top: 1rem;
            margin-left: .3rem;
            overflow: hidden;
            position: relative;
            font-size: 1.5rem;
            cursor: pointer;
            @include pad{
                font-size: 1rem;
            }
            .list-item{
                margin: 1rem auto;
                text-align: left;
                padding-left: .5rem;
                position: relative;
                overflow: hidden;
                &:hover a{
                    color:#1b98e0;
                }
                &::before {
                content: url('../../assets/icon/right.png');
                vertical-align: middle;
                position: relative;
                filter:drop-shadow(22px 0 #aaa);
                left: -20px;
                top:-1px
            }
                a{
                    color:rgb(85, 85, 85);
                    text-decoration: none;
                    font-size: 1rem;
                    transition: color .2s;
                    @include pad{
                        font-size: .7rem;
                    }
                }
            }
        }
        .right{
            &::before {
                content: url('../../assets/icon/right.png');
                vertical-align: middle;
                position: relative;
                filter:drop-shadow(10px 0 #aaa);
                left: -12px;
                top: -1px;
            }
        }
        .down{
            &::before {
                content: url('../../assets/icon/down.png');
                vertical-align: middle;
                position: relative;
                filter:drop-shadow(15px 0 #aaa);
                left: -15px;
                top: -2px;
            }
        }
    }

    .list-enter,
    .list-leave-to{
        opacity: 0;
    }
    .list-enter-active,
    .list-leave-active{
        transition: opacity .1s linear;
    }
    .list-enter-to,
    .list-leave{
        opacity: 1;
    }

</style>