<template>
    <div>
        <TheBanner title="觀賞蝦"></TheBanner>
        <div class="container">
        <div class="wrap no-gutter">
            <h2>觀賞蝦</h2>
                <div class="txt">
                    <p>
                        台灣前三名養殖觀賞水族所佔之出口為淡水觀賞魚中的非洲慈鯛、美洲慈鯛、及觀賞蝦。台灣南部地區的環境適合觀賞蝦的養殖及改良，民國九十年代後期，觀賞蝦產業迅速起飛，台灣的觀賞蝦在國際間斬獲大量獎項，受到了國際間的高度注目及極高的評價。台灣具有豐富的河川地形，台灣之原生蝦種存活在這些河川環境中，為適應不同的環境有著不同的表現，除了本身的觀賞價值之外，也提供人工育種一個良好的基礎。目前於台灣進行觀賞蝦繁殖的企業將觀賞蝦塑造成了獨樹一格的品牌，也由於觀賞蝦所創造出的高產值，吸引了許多年輕世代投入創業，台灣觀賞蝦的產銷具有龐大的發展潛力。
                    </p>
                </div>
            <PicCard :articles="filterByShrimp"></PicCard>
        </div>
    </div>
    </div>
</template>

<script>
import PicCard from '@/components/ui/PicCard.vue';
import { mapState } from 'vuex';
export default {
    components:{
        PicCard
    },
    computed:{
        ...mapState(['articles']),
        filterByShrimp(){
            return this.articles.filter( nam => nam.type === "shrimp")
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        h2{
            font-size: 1.5rem;
            margin: 1rem 0;
            color:#555555;
        }
        .txt{
            border-top: 1px solid rgb(247, 229, 229);
            border-bottom: 1px solid rgb(247, 229, 229);
            padding-bottom: 1.5rem;
            padding-top: .3rem;
            p{
                color:#555555;
                line-height: 1.8;
            }
        }
    }
</style>