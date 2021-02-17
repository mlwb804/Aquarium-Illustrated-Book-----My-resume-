<template>
    <div class="header container-fluid" :class="{shrink: shrink}">
        <div class="hamburger" :class="{hamshrink: shrink}"  @click="tog" @close-menu="closeMenu">
            <div class="hamburger-line"></div>
        </div>
        <div class="logo">
            <h2><router-link class="logo1" to="/">觀賞水族資訊網</router-link></h2>
        </div>
        <Menu
        :items="items"
        :isswitch="isswitch"
        :move="move"
        @close="closeMenu"
        :class="{menList: shrinkMenu}"
        
        ></Menu>
    </div>
</template>

<script>
import Menu from '@/components/ui/Menu.vue';
export default {
    props:['shrinkMenu', 'shrink', 'move'],
    data() {
        return {
            items: [
                {name: '首頁', tabLink: 'Home', flag: false},
                {name: '文章分享', tabLink: 'RearingShare', flag: false},
                {name: '關於我們', tabLink: 'About', flag: false},
                {name: '觀賞水族圖鑑',
                tabLink: '',
                flag: true,
                subItems: [
                    {name:'彙整:水族圖鑑', tabLink: 'Unify'},
                    {name: '淡水觀賞魚', tabLink: 'FreshwaterFish'},
                    {name: '海水觀賞魚', tabLink: 'SaltwaterFish'},
                    {name: '觀賞蝦', tabLink: 'OrnamentalShrimp'}
                ],
                },
            ],
            isswitch: false,
            // shrink:false,
            // shrinkMenu:false,
            // move:false
        };
    },
    methods:{
        closeMenu(){
            this.isswitch = this.val;
        },
        tog(){
            return this.isswitch = !this.isswitch;
        },
    },
    components:{
        Menu
    },
}
</script>

<style lang="scss" scoped>
@mixin moblie {
    @media screen and (min-width: 400px) and (max-width: 767px) {
        @content    
    }
};
@mixin pad {
    @media screen and (min-width:768px) and (max-width:868px) {
        @content
    }
};
@mixin pc {
    @media screen and (min-width: 869px) {
        @content
    }
};
@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.header{
    background-color: rgb(85, 172, 243);
    display: flex;
    position: fixed;
    height: 120px;
    z-index: 10;
    @include pc{
        justify-content: space-around;
    }
    .logo{
        padding: 1rem;
        @include center;
        @include moblie{
            margin-left: 8vw;
        }
        @include pad{
            margin-left: 8vw;
        }
        .logo1{
            font-size: 1.5rem;
            color:#fff;
            vertical-align: middle;
            text-decoration: none;
            @include pad {
                font-size: 2rem;
            }
            @include pc {
                font-size: 2rem;
            }
        }
    }
    // 漢堡選單
    .hamburger{
        width: 50px;
        height: 50px;
        position: absolute;
        top: 35px;
        right: 50px;
        display: block;
        border-radius: 5px;
        @include moblie{
            right: 15vw;
        }
        @include pad{
            right: 15vw;
        }
        @include pc{
            display: none;
            
        }
            .hamburger-line{
                width: 40px;
                height: 3px;
                background-color: #fff;
                margin: auto;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                box-shadow: 0 10px 0 #fff, 0 -10px 0 #fff;
            }
    }
    .hamshrink{
    top:5.5px;
    }
    .menList{
        margin-top: -50px;
    }
}
.shrink{
    height: 61px;
}

</style>