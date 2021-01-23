<template>
    <div>
        <TheBanner title="關於我們"></TheBanner>
        <div class="container main">
            <div class="row main-part">
                <div class="pic col-md-6">
                        <img src="@/assets/about.jpg" alt="">
                </div>
                <div class="txt col-md-6">
                    <p>
                        目前我國水生動物(觀賞魚)繁養殖產業技術仍在領先全球之優勢中。推算台灣全年生產觀賞魚之銷售量每年約為新台幣20億以上，且主要集中於屏東地區，其產量約佔70%，而每年生產觀賞魚之銷售量約為16億5千萬元，顯見屏東地區儼然成為台灣觀賞魚產業重鎮。
                    </p>
                    <p>
                        因此，規劃「觀賞水族產業資訊系統」進入觀賞魚(水族)繁養殖產業鏈，助益產官學合作能量，進行研發及協助產業解決生產面臨的問題，落實促進我國觀賞魚水族產業軟實力升級，提升產業競爭力。
                    </p>
                    <p>
                        未來政府規劃將台灣打造成「亞太水族中心」時，農科園區有助擴大台灣在觀賞魚科技產業之產學群聚效應，共同打造台灣精緻農業「亞太觀賞魚產銷平台」。
                    </p>
                </div>
            </div>
        </div>
        <div class="line"><img src="@/assets/icon/about/water.png" alt=""></div>
        <div class="container contact">
            <div class="row contact-part">
                <div class="item col-md-3">
                    <div class="pic">
                        <img src="@/assets/icon/about/phone.png" alt="">
                    </div>
                    <div class="txt">
                        <h5>contact</h5>
                        <p>電話：08-7623205 <br />
                            傳真：08-7623235</p>
                    </div>
                </div>
                <div class="item col-md-3">
                    <div class="pic">
                        <img src="@/assets/icon/about/home.png" alt="">
                    </div>
                    <div class="txt">
                        <h5>visit us</h5>
                        <p>908屏東縣長治鄉德和村神農路1號</p>
                    </div>
                </div>
                <div class="item col-md-3">
                    <div class="pic">
                        <img src="@/assets/icon/about/email.png" alt="">
                    </div>
                    <div class="txt">
                        <h5>mail address</h5>
                        <p>npust@mail.npust.edu.tw</p>
                    </div>
                </div>
                <div class="item col-md-3">
                    <div class="pic">
                        <img src="@/assets/icon/about/facebook.png" alt="">
                    </div>
                    <div class="txt">
                        <h5><a href="https://m.facebook.com/pabptaiwan">Facebook</a></h5>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @mixin pad {
        @media screen and (min-width:767px) and (max-width:1024px) {
            @content
        }
    };
    @mixin pc {
        @media screen and (min-width:1025px) {
            @content
        }
    };
    // 主要內容
    .main{
            .main-part{
                margin: 2rem 0 0;
                .pic{
                img{
                    width: 100%;
                    @include pad {
                        height: 300px;
                    }
                }
            }
            .txt{
                margin-top: 2rem;
                text-align: left;
                @include pad {
                    margin-top: 0;
                }
                @include pc {
                    margin-top: 0;
                }
                p{
                    margin-bottom: 2rem;
                }
            }
            }
        }
    // 分隔線
    .line{
        position: relative;
        margin: 1rem 0 2rem;
        @include pc {
            margin-top: 3rem;
        }
        &::before,
        &::after{
            content:'';
            width: 32%;
            height: 1px;
            background-color: #e3e3e3;
            position: absolute;
            top: 50%;
        }
        &::before{
            left: 10%;
        }
        &::after{
            right: 10%;
        }
    }
    // 聯繫方式
    .contact{
        .contact-part{
            .item{
                margin: 1rem auto;
                // Icon
                &:nth-child(odd) .pic {
                        background-color: #55acf3;
                    }
                
                .pic{
                    width: 100px;
                    height: 100px;
                    border-radius: 100%;
                    border:3px solid #55acf3;
                    margin: 0 auto;
                        img{
                            margin: 32px auto;
                        }
                }
                // 文字部分
                .txt {
                    margin: 1rem auto;
                    h5{
                        margin: 1rem auto;
                        a{
                            text-decoration: none;
                        }
                    }
                    p{
                        @include pad {
                            font-size: .7rem;
                        }
                    }
                }
            }
        }
    }

    
</style>