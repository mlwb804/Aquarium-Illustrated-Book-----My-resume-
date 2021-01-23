<template>
    <div class="header container-fluid">
        <div class="hamburger"  @click="isswitch = !isswitch">
            <div class="hamburger-line"></div>
        </div>
        <div class="logo">
            <h2><router-link class="logo1" to="/">觀賞水族資訊網</router-link></h2>
        </div>
        <Menu :items="items" :class="{ open : isswitch }" @close="closeMenu"></Menu>
    </div>
</template>

<script>
import Menu from '@/components/menu/Menu'
export default {
    data() {
        return {
            items: [
                {name: '首頁', tabLink: '/home'},
                {name: '最新消息', tabLink: '/new'},
                {name: '關於我們', tabLink: '/about'},
                {name: '觀賞水族圖鑑',
                tabLink: '/aquarium/aquariumHome',
                subItems: [
                    {name: '淡水觀賞魚', tabLink: '/aquarium/freshwaterFish'},
                    {name: '海水觀賞魚', tabLink: '/aquarium/saltwaterFish'},
                    {name: '觀賞蝦', tabLink: '/aquarium/ornamentalShrimp'}
                ],
                },
            ],
            isswitch: false
        };
    },
    methods:{
        closeMenu(){
            this.isswitch = this.val;
        }
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

.header{
    background-color: rgb(85, 172, 243);
    display: flex;
    position: relative;
    box-shadow: 0 7px 10px rgb(54, 160, 247);
    height: 80px;
    @include pc{
        justify-content: space-around;
    }
    .logo{
        padding: 1rem;
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
        top: 15px;
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
    // 導航欄開關
    .open{
        // transform: translateX(0%);
        opacity: 1;
        z-index: 20;
    }
}
</style>