<template>
    <div>
        <TheBanner title="海水觀賞魚"></TheBanner>
        <div class="container">
        <div class="wrap no-gutter">
            <h2>海水觀賞魚</h2>
                <div class="txt">
                    <p>
                    海水觀賞魚主要來源為熱帶地區之海水魚，台灣因地理位置及氣候環境處於亞熱帶季風氣候區，北部為亞熱帶季風氣候，南部為熱帶季風氣候，又因台灣四面環海，屬於海島國家，受到洋流及季風影響，又屬於海洋性氣候，因此非常適合養殖水族生物。海水觀賞魚其色彩鮮豔、生物多樣性，具有高度的觀賞商業價值，因海水觀賞魚之人工繁養殖技術較淡水魚困難，繁養殖等相關技術取得困難，且國內海水觀賞魚繁養殖技術尚未成熟，但隨著水產養殖技術逐日發展，想必未來對於繁養殖海水觀賞魚將不會是難事。
                    </p>
                </div>
            <PicCard :articles="filterBySalt"></PicCard>
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
        filterBySalt(){
            return this.articles.filter( nam => nam.type === "salt")
        }
    },
    mounted() {
        this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
        })
    },
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