<template>
    <div class="header container-fluid">
        <input type="checkbox" name="menu-switcher" id="menu-switcher" />
        <label for="menu-switcher" class="hamburger">
            <div class="hamburger-line"></div>
        </label>
        <div class="logo">
            <h2><router-link class="logo1" to="/">觀賞水族資訊網</router-link></h2>
        </div>
                <ul class="menu">
                    <router-link
                    tag="li"
                    :to="item.tabLink"
                    v-for="(item, index) in items"
                    :key="index"
                    :class="activeClass == index ? 'active' : '' "
                    @click="getItem(index)"
                    >
                    <a>
                        {{ item.name }}
                    </a>
                    </router-link>
                </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {name: '首頁', tabLink: '/home'},
                {name: '最新消息', tabLink: '/new'},
                {name: '關於我們', tabLink: '/about'},
                {name: '觀賞水族圖鑑', tabLink: '/aquarium/aquariumHome'},
            ],
            activeClass: -1,
        };
    },
    methods:{
        getItem(index) {
            this.activeClass = index;
        }
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
    height: 80px;
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
        }
    }
    // 選單
    #menu-switcher{
        display: none;
        &:checked ~ .menu {
            transform: translateX(0%);
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
    // 側邊選單
    .menu{
        background-color: rgb(85, 172, 243);
        height: 300px;
        width: 200px;
        position: absolute;
        top: 80px;
        left: 0;
        z-index: 100;
        display: block;
        transform: translateX(-100%);
        transition: 1s;
        margin-left: 0;

        li{
            a{
                display: block;
                padding:10px;
                margin: 0 10px 10px;
                color:#fff;
                font-size: 20px;
                text-align: left;
                font-size: 1rem;
                text-decoration: none;
                border-bottom: 1px solid #888;
                
            }
        }
    }
}
.header{
    .menu{
        .router-link-exact-active{
            a{
                color:#ddd;
            }
        }
    }
}
@media screen and (min-width: 869px ) {
    .header{
        justify-content: space-around;
        .logo{
            .logo1{
                font-size: 2rem;
            }
        }
        .menu{
            position: static;
            transform: translateX(0%);
            transition: 0;
            display: flex;
            height: auto;
            width: auto;

            li{
                &:hover{
                    transform: translateY(-5%);
                    transition: .3s;
                    a{
                        color:#ccc;
                        &::after{
                            opacity: 1;
                            transition: .3s;
                        }
                    }
                }
                a{
                    display: inline;
                    font-size: 1.3rem;
                    line-height: 80px;
                    border-bottom: none;
                    position: relative;
                    &::after{
                        content:'';
                        width: 90%;
                        height: 2px;
                        background-color: #ccc;
                        position: absolute;
                        left: 10px;
                        top:90%;
                        opacity: 0;
                    }
                }
            }
        }
    }
}
</style>