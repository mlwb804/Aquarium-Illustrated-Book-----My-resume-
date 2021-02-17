<template>
    <div class="container-fluid banner">
        <div class="row title no-gutters">
            <div class="bg"></div>
            <div class="over-lay"></div>
            <div class="txt col">
                <h1>
                    觀賞水族資訊網
                </h1>
                <p>
                    我們位於屏東農業生物科技園區-亞太水族營運中心， <br />
                    建設台灣成為亞太種苗中心，發展觀賞魚類成為新興外銷主力產業
                </p>
            </div>
        </div>
        
        <section class="top">
            <div class="row no-gutters pic-box">
                <div
                class="pic col-6 col-md-4 col-lg-2"
                v-for="(item, index) in items" :key="index"
                >
                <div class="row no-gutters">
                    <div class="dummy"></div>
                    <div class="block">
                    <img :src="item.src" :alt="item.alt">
                    </div>
                </div>
                </div>
            </div>
            <div class="txt">
                <div class="icon-box" @click="toNext">
                    <img src="../assets/icon/white-down.png" alt="">
                </div>
                <h2 @click="toNext">了解更多</h2>
            </div>
        </section>
        <section class="sec">
            <h1>觀賞水族圖鑑</h1>
            <div class="line">
                <img src="../assets/icon/home.png" alt="">
            </div>
            <div class="main row no-gutters">
                <div
                class="contain col-12 col-md-4"
                v-for="(secItem, sIndex) in secItems"
                :key="sIndex"
                >
                    <div class="pic">
                        <router-link :to="secItem.link">
                            <img :src="secItem.src" :alt="secItem.name">
                        </router-link>
                    </div>
                    <div class="txt">
                        <p><router-link class="rlink" :to="secItem.link">{{ secItem.name }}</router-link></p>
                    </div>
                </div>
                </div>
        </section>
        <HomeSwiper :items="items" v-show="false"></HomeSwiper>
    </div>
</template>

<script>
import HomeSwiper from '../components/ui/HomeSwiper.vue';
export default {
    data() {
        return {
            items:[
                {src:require('../assets/home/fish1.jpg'),alt:'黃三角'},
                {src:require('../assets/home/fish2.jpg'),alt:'貴賓蝦'},
                {src:require('../assets/home/fish4.jpg'),alt:'榔頭珊瑚'},
                {src:require('../assets/home/fish5.jpg'),alt:'硬骨珊瑚'},
                {src:require('../assets/home/fish3.jpg'),alt:'水晶蝦'},
                {src:require('../assets/home/fish8.jpg'),alt:'孔雀魚'},
            ],
            secItems:[
                {
                    name:'海水觀賞魚',
                    src:require('../assets/home/fish6.jpg'),
                    link:'aquarium/saltwaterFish'
                },
                {
                    name:'淡水觀賞魚',
                    src:require('../assets/home/fish7.jpg'),
                    link:'aquarium/freshwaterFish'
                },
                {
                    name:'觀賞蝦',
                    src:require('../assets/home/fish3.jpg'),
                    link:'aquarium/ornamentalShrimp'
                }
            ]
        }
    },
    methods:{
        toNext() {
            let height = document.body.clientHeight;
            console.log(height);
            if(height > 2300) {
                return window.scrollTo({
                top:840,
                behavior:"smooth",
            })
            } else{
                return window.scrollTo({
                top:630,
                behavior:"smooth"
            })
            }
        }
    },
    components:{
        HomeSwiper
    }
}
</script>

<style lang="scss" scoped>
$main-color:#fff;
@mixin mobile-lg {
    @media screen and (min-width:450px) and (max-width:738px) {
        @content
    }
};
@mixin pad {
    @media screen and (min-width:767px) {
        @content
    }
};
@mixin pad-lg {
    @media screen and (min-width:1000px) {
        @content
    }
}
.banner{
    margin: 120px auto;
    position: relative;
}
.title{
    // 背景圖片
    .bg{
        background: {
            image: url('../assets/home/background.jpg');
            repeat: no-repeat;
            position: center;
            size: cover;
        }
        width: 100%;
        height: 40%;
        overflow: hidden;
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -99;
        @include mobile-lg{
            height: 36%;
        }
        @include pad {
            height: 60%;
        }
        @include pad-lg{
            height: 50%;
        }
    }
    .over-lay{
        position: absolute;
        height: 40%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(53,47,35,0.4);
        z-index: -98;
        @include mobile-lg{
            height: 36%;
        }
        @include pad {
            height: 60%;
        }
        @include pad-lg{
            height: 50%;
        }
    }
    // 標題文字
    .txt{
        margin-top: 3rem;
        
        h1{
            color:$main-color;
            font-size: 2.5rem;
            font-weight: 500;
        }
        p{
            color: $main-color;
            font-size: 1.2rem;
            font-weight: 300;
            margin-top: 1.5rem;
            line-height: 1.5;
        }
    }
}
// 上層圖片部分
section.top{
    margin: 2rem auto;
    .pic-box{
        width: 80%;
        margin: 0 auto;
        @include mobile-lg{
            width: 45%;
        }
        @include pad {
            width: 70%;
        }
        @include pad-lg {
            width: 90%;
    }
    }
    .pic{
        position: relative;
        &:hover .block::after{
                opacity: .3;
            }
        .dummy{
            margin-top: 100%;
        }
        .block{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            &::after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #fff;
                    display: inline-block;
                    z-index: 2;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    cursor: zoom-in;
                }
            img{
                width: 100%;
                height: 100%;

            }
        }

    }
    .txt{
        @include pad-lg {
        margin-top: 3rem;
    }
        .icon-box{
            margin: 1rem auto .5rem;
            cursor: pointer;
            
        }
        h2{
            color:$main-color;
            font-size: 1.7rem;
            cursor: pointer;
        }
    }
}

section.sec{
    margin-top: 4rem;
    @include pad {
        margin-top: 7rem;
    }
    h1{
        color:#555555;
        font-size: 1.5rem;
        margin: 1rem auto;
    }
    // 分隔線
    .line{
        margin:2rem auto;
        color: $main-color;
        position: relative;
        &::before,
        &::after{
            content:'';
            display: inline-block;
            width: 40%;
            height: 1px;
            background-color: rgb(218, 218, 218);
            position: absolute;
            top: 50%;
            @include pad{
                width: 25%;
            }
        }
        &::before{
            left: 3%;
            @include pad{
                left: 20%;
            }
        }
        &::after{
            right: 3%;
            @include pad{
                right: 20%;
            }
        }
    }
    .main{
        .contain{
            .pic{
                margin: 1rem auto;
                width: 250px;
                height: 250px;
                @include pad {
                    width: 200px;
                    height: 200px;
                }
                @include pad-lg {
                    width: 250px;
                    height: 250px;
                }
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                }
            }
            .txt{
                p{
                    margin: 2rem auto;
                    font-size: 1.5rem;
                    &:hover .rlink{
                        color:rgb(14, 105, 223);
                    }
                }
                .rlink{
                    color: rgb(36, 169, 221);
                    text-decoration: none;
                }
            }
        }
    }
}
@media screen and (min-width:1200px){
.banner{
    .title{
    .txt{
        h1{
            font-size: 3rem;
        }
        p{
            font-size: 1.8rem;
        }
    }
}
}
section.top{
    margin-top: 5rem;
    .txt{
        margin-top: 5rem;
        h2{
            margin-top: 2rem;
        }
    }
}
section.sec{
    h1{
        font-size: 2.5rem;
    }
    .main{
        .contain{
            .pic{
                width: 350px;
                height: 350px;
            }
            .txt{
                p{
                    font-size: 1.8rem;
                }
            }
    }
    }
}
}
</style>