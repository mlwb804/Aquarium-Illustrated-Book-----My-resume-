<template>
    <div class="footer">
    <div class="container">
        <div class="row no-gutters main">
            <div class="fir col-md-4">
                <h2>
                    About us
                </h2>
                <p class="content">
                    「觀賞水族產業資訊系統」進入觀賞魚(水族)繁養殖產業鏈，<br />
                    助益產官學合作能量，進行研發及協助產業解決生產面臨的問題，<br />
                    落實促進我國觀賞魚水族產業軟實力升級，提升產業競爭力。
                </p>
                <span></span>
                <p class="about">網站瀏覽簡介</p>
            </div>
            <div class="sec col-md-4">
                <h2>
                    觀賞水族圖鑑
                </h2>
                <div class="container-fluid wrap">
                    <div class="row no-gutters">
                        <div class="item no-gutters">
                            <div class="pic col-4">
                                <img src="../../assets/footer/fish1.jpg" alt="">
                            </div>
                            <div class="pic col-4">
                                <img src="../../assets/footer/fish2.jpg" alt="">
                            </div>
                            <div class="pic col-4">
                                <img src="../../assets/footer/fish3.jpg" alt="">
                            </div>
                            <div class="pic col-4">
                                <img src="../../assets/footer/fish4.jpg" alt="">
                            </div>
                            <div class="pic col-4">
                                <img src="../../assets/footer/fish5.jpg" alt="">
                            </div>
                            <div class="pic col-4">
                                <img src="../../assets/footer/fish6.jpg" alt="">
                            </div>
                            <div class="pic col-4">
                                <img src="../../assets/footer/fish7.jpg" alt="">
                            </div>
                            <div class="pic col-4">
                                <img src="../../assets/footer/fish8.jpg" alt="">
                            </div>
                            <div class="pic col-4">
                                <img src="../../assets/footer/fish9.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="thi col-md-4">
                <h2>
                    Contacts
                </h2>
                <ul class="contact">
                    <li><img src="../../assets/icon/map.png" alt="">908屏東縣長治鄉園西一路2號3樓</li>
                    <li><img src="../../assets/icon/telephone.png" alt="">(08)762-0163</li>
                    <li><img src="../../assets/icon/cellphone.png" alt="">(09)1234-5678</li>
                    <li><img src="../../assets/icon/email.png" alt="">pabp.ecoa@gmail.com</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="last">
        <p>©2016 PABP(Pingtung Agricultural Biotechnology Park). All Rights reserved.</p>
    </div>
    </div>
</template>

<style lang="scss" scoped>
$color1:#bbb;
$color2:#fff;
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
    .footer{
        background-color: rgba(28, 29, 32, 0.829);
        margin-top: 4rem;
        padding-top: 3rem;
        .fir,
        .sec,
        .thi{
            padding: 0 2rem 2rem;
            text-align: left;
            @include pad {
                padding: 0 1rem 2rem;
            }
        }
        .main{
            padding-top: 1rem;
            h2{
                color:$color2;
                margin-bottom:2rem;
            }
            .fir{
                .content{
                    color:$color1;
                }
                span{
                    display: block;
                    background-color: $color1;
                    width: 100%;
                    height: 1px;
                    margin: 1rem 0;
                }
                .about{
                    color:$color2;
                }
            }
            .sec{
                .wrap{
                    padding-left: 0;
                    padding-right: 0;
                    .row{
                        .item{
                            display: flex;
                            flex-wrap: wrap;
                            width: 25vw;
                            margin: 0 auto;
                            @include mobile {
                                width: 100vw;
                            }
                            @include mobile-lg{
                                width: 100vw;
                            }
                            .pic{
                                height: 14vh;
                                @include mobile-lg{
                                    height: 20vh;
                                }
                                @include pad{
                                    height: 9vh;
                                }
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
            }
            .thi{
                .contact{
                    color:$color1;
                    li{
                        & + li{
                            margin-top:1rem ;
                        }
                        img{
                            float: left;
                            margin-top: 5px;
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
        .last{
            background-color:#fff ;
            padding: 1rem;
            color: #999;
        }
    }
</style>