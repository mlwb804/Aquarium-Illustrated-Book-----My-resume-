<template>
<div>
    <TheBanner title="淡水觀賞魚"></TheBanner>
    <div class="container">
        <div class="wrap no-gutter">
            <h2>淡水觀賞魚</h2>
                <div class="txt">
                    <p>
                    在國際貿易市場中，淡水觀賞魚的交易品種數相較於海水觀賞魚足足多了兩倍以上，由此可知淡水觀賞魚在觀賞魚市場中佔有相當重要的地位，而觀賞魚的進、出口市場由魚運輸方式的進步，從亞洲逐步拓展至全世界，位於亞洲地區的台灣，由於氣候環境非常適合觀賞魚的繁殖，得天獨厚的地理位置具備發展觀賞魚相關產業的潛能及競爭力。自民國五十年代起，台南地區的金魚、錦鯉的養殖，而後經濟起飛連帶促使養殖技術的進步:高雄、屏東及宜蘭等地區皆開始成為淡水觀賞魚繁殖的重鎮。民國七十年代起的非洲慈鯛、美洲慈鯛的繁養殖日益興盛，成功發展的結果使台灣獲得「慈鯛王國」的美名。近幾年來，農委會開始積極輔導台灣的觀賞魚產業，使得觀賞魚相關產業之產值有穩定提升的趨勢，目前也極力於新品種的開發及人工繁殖技術的研究，對於台灣未來淡水觀賞魚的發展成為一大助力。
                    </p>
                </div>
            <PicCard :articles="filterByFresh"></PicCard>
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
        filterByFresh(){
            return this.articles.filter( nam => nam.type === "fresh")
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