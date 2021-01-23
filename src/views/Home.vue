<template>
    <div class="container-fluid banner">
        <div class="row title no-gutters">
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
            <div class="row no-gutters">
                <div class="pic col-6 col-md-3">
                <img src="../assets/home/fish1.jpg" alt="">
                </div>
                <div class="pic col-6 col-md-3">
                    <img src="../assets/home/fish2.jpg" alt="">
                </div>
                <div class="pic col-6 col-md-3">
                    <img src="../assets/home/fish8.jpg" alt="">
                </div>
                <div class="pic col-6 col-md-3">
                    <img src="../assets/home/fish4.jpg" alt="">
                </div>
            </div>
        </section>
        <div class="bg"></div>
        <section class="sec container">
            <div class="sec-part">
                <div class="sectitle">
                    <h1>觀賞水族圖鑑</h1>
                </div>
                <div class="line"><img src="../assets/icon/home.png" alt=""></div>
                <div class="main row no-gutters">
                <div class="contain col-12 col-md-4">
                    <div class="pic">
                        <img src="../assets/home/fish6.jpg" alt="">
                    </div>
                    <div class="txt">
                        <p>海水觀賞魚</p>
                    </div>
                </div>
                <div class="contain col-12 col-md-4">
                    <div class="pic">
                        <img src="../assets/home/fish7.jpg" alt="">
                    </div>
                    <div class="txt">
                        <p>淡水觀賞魚</p>
                    </div>
                </div>
                <div class="contain col-12 col-md-4">
                    <div class="pic">
                        <img src="../assets/home/fish3.jpg" alt="">
                    </div>
                    <div class="txt">
                        <p>觀賞蝦</p>
                    </div>
                </div>
                </div>
            </div>
        </section>


    </div>
</template>

<style lang="scss" scoped>
@mixin mobile {
    @media screen and (max-width:450px) {
        @content
    }
};
@mixin mobile-lg {
    @media screen and (min-width:451px) and (max-width:767px) {
        @content
    }
};
@mixin pad {
    @media screen and (min-width:768px) and (max-width:1024px) {
        @content
    }
};
$first-color:rgb(28, 174, 231);

    .banner{
        margin: 0 auto;
        position: relative;
        padding-left: 0;
        padding-right: 0;
        .bg{
            background: {
                image: url('../assets/home/background.jpg');
                repeat: no-repeat;
                position: center;
                size: cover;
            }
            width: 100%;
            height: 100vh;
            z-index: -99;
            opacity:.7 ;
            overflow: hidden;
        }
        .title{
            position: absolute;
            top: 3vh;
            left: 0;
            right: 0;
            z-index: 1;
            .txt{
                margin-top: 3rem;
                h1{
                    color:$first-color;
                    font-size: 3rem;
                    font-weight:bold;
                }
                p{
                    color:$first-color;
                    font-size: 1.4rem;
                    font-weight:bold;
                    margin-top: 3rem;

                }
            }
        }
        section.top{
            display: flex;
            margin: 4rem auto;
            width: 70vw;
            position: absolute;
            top: 40vh;
            left: 0;
            right: 0;
            z-index: 1;
            @include mobile-lg{
                top: 28vh;
            }
            .pic{
                    width: 20%;
                    height: 30vh;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }

        section.sec{
            margin: 0 auto;
            .sec-part{
                display: flex;
                flex-direction: column;
                .sectitle{
                    margin: 3rem auto 1rem;
                    h1{
                        color:$first-color;
                    }
                }
                .line{
                    color:$first-color;
                    position: relative;
                        &::before,
                        &::after
                        {
                            content: '';
                            display: inline-block;
                            width:25%;
                            height: 1px;
                            background-color:#ccc;
                            position: absolute;
                            top: 50%;

                            @include mobile{
                                width: 34%;
                            }
                        }
                        &::before{
                            left: 20%;
                            @include mobile{
                                left: 10%;
                            }
                        }
                        &::after{
                            right: 20%;
                            @include mobile{
                                right: 10%;
                            }
                        }
                }
                .main{
                    display: flex;
                    margin-top: 3rem;
                    .contain{
                        display: flex;
                        flex-direction: column;
                        .pic{
                            width: 300px;
                            height: 300px;
                            margin: 0 auto;
                            @include pad{
                                width: 210px;
                                height: 210px;
                            }
                            img{
                                width: 100%;
                                height: 100%;
                                border-radius: 100%;
                            }
                        }
                        .txt{
                            color:$first-color;
                            font-size: 2rem;
                            margin-top: 2rem;
                        }
                    }
                }
            }
        }
    
    }
@media screen and (max-width:450px) {
    .banner{
        .title{
            .txt{
                margin-top: 1rem;
                h1{
                    font-size: 2rem;
                }
            }
        }
        section.top{
            top: 33vh;
            .pic{
                width: 30vw;
                height: 20vh;
            }
        }
        .sec{
            .main{
                p{
                    font-size: 1.5rem;
                }
            }
        }
    }
}

</style>