<template>
    <div class="footer">
    <div class="container-fulid">
        <div class="row no-gutters main">
            <div class="fir col-sm-4">
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
            <div class="sec col-sm-4">
                <h2>
                    觀賞水族圖鑑
                </h2>
                    <div class="row no-gutters">
                        <div class="item no-gutters row">
                            <div class="col-4 pic"
                            v-for="(item, index) in items"
                            :key="index"
                            >
                            <div class="dummy"></div>
                            <div class="block">
                                <div class="txt" @click.prevent="routerToArticle(item.id)">
                                    <p>{{ item.title }}</p>
                                    <img :src="item.src" :alt="item.title">
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="thi col-sm-4">
                <h2>
                    Contacts
                </h2>
                <ul class="contact">
                    <li><img src="../../assets/icon/map.png" alt="">908屏東縣長治鄉園西一路2號3樓</li>
                    <li><img src="../../assets/icon/telephone.png" alt="">(08)762-0163</li>
                    <li><img src="../../assets/icon/cellphone.png" alt="">(09)1234-5678</li>
                    <li><img src="../../assets/icon/email.png" alt="">pabp.ecoa@gmail.com</li>
                </ul>
                <div id="map" class="google-map"></div>
                <!-- <button class="route" @click.prevent="routerToAdd">Add</button> -->
            </div>
        </div>
    </div>
    <div class="last">
        <p>©2016 PABP(Pingtung Agricultural Biotechnology Park). All Rights reserved.</p>
    </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            items:[
                {src:require('../../assets/footer/fish1.jpg'),id:'小丑魚', title:'公子小丑'},
                {src:require('../../assets/footer/fish2.jpg'),id:'皇后神仙', title:'皇后神仙'},
                {src:require('../../assets/footer/fish3.jpg'),id:'蘇蝦', title:'白襪蝦'},
                {src:require('../../assets/footer/fish4.jpg'),id:'螯蝦', title:'天空藍魔蝦'},
                {src:require('../../assets/footer/fish5.jpg'),id:'七彩神仙', title:'七彩神仙'},
                {src:require('../../assets/footer/fish6.jpg'),id:'青蛙', title:'青蛙'},
                {src:require('../../assets/footer/fish7.jpg'),id:'女王神仙', title:'女王神仙'},
                {src:require('../../assets/footer/fish8.jpg'),id:'魟魚', title:'珍珠魟'},
                {src:require('../../assets/footer/fish9.jpg'),id:'異形', title:'熊貓異形'}
            ],
            map:null,
            lat:22.7154403157038,
            lng:120.53175766496366
        }
    },
    methods:{
        routerToArticle(id) {
            this.$router.push({name:"Article", params: {id:id}})
        },
        routerToAdd(){
            this.$router.push({name:'AdminHome'});
        },
        initMap(){
            this.map = new google.maps.Map(document.getElementById("map"), {
                center:{ lat: this.lat, lng: this.lng },
                zoom:15,
                maxZoom:20,
                minZoon:3,
                streetViewControl:false,
                mapTypeControl:false
            });
        },
        setMarket(){
            const market = new google.maps.Marker({
                position:{ lat: this.lat, lng: this.ing },
                map: this.map
            });
        }
    },
    mounted() {
        this.initMap();
        this.setMarket();
    },
}
</script>
<style lang="scss" scoped>
$color1:#bbb;
$color2:#fff;
@mixin pad {
    @media screen and (min-width:768px) {
        @content
    }
};
@mixin pc {
    @media screen and (min-width:1200px) {
        @content
    }
};
.footer{
    background-color: rgba(28, 29, 32, .829);
    margin-top: 4rem;
    padding-top: 3rem;
    .fir, .sec, .thi{
        padding: 0 1rem 2rem;
        text-align: left;
        @include pc {
            padding: 0 2rem 2rem;
        }
    }
    .main{
        padding-top: 1rem;
        h2{
            color:$color2;
            margin-bottom: 2rem;
        }
        .fir{
            .content{
                color:$color1
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
            @include pc{
                padding-right: 5rem;
                padding-left: 5rem;
            }
            .item{
                display: flex;
                flex-wrap: wrap;
                width: 100vw;
                margin: 0 auto;
                .dummy{
                    margin-top: 100%;
                }
                .block{
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    overflow: hidden;
                    .txt{
                        display: inline;
                        cursor: pointer;
                        &:hover p{
                            opacity: 1;
                        }
                        p{
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            color:#fff;
                            background-color: rgba(0, 0, 0, .5);
                            width: 100%;
                            height: 50px;
                            line-height: 50px;
                            text-align: center;
                            opacity: 0;
                            transition: opacity .4s;
                            font-size: .8rem;
                            
                        }
                        img{
                        width: 100%;
                        height: 100%;
                    }
                    }
                }
            }
        }
        .thi{
            .contact{
                color:$color1;
            }
            li{
                & + li{
                    margin-top: 1rem;
                }
                img{
                    float: left;
                    margin-top: 5px;
                    margin-right: 5px;
                }
            }
            .google-map{
                margin: 1rem 0;
                width: 100%;
                height: 250px;
            }
        }
    }
    .last{
        background-color: #fff;
        padding: 1rem;
        color:#999;
    }
}
</style>