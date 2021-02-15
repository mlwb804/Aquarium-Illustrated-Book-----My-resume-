<template>
    <div>
        <TheBanner title="彙整: 觀賞水族圖鑑"></TheBanner>
        <div class="container">
            <div class="row no-gutters">
                <div class="col-md-8">
                    <UnifyCard></UnifyCard>
                </div>
                <UnifyCardSidebar class="col-md-4"></UnifyCardSidebar>
            </div>
        </div>
    </div>
</template>

<script>
import UnifyCard from '../components/ui/UnifyCard.vue';
import UnifyCardSidebar from '../components/ui/UnifyCardSidebar.vue';
export default {
    data() {
        return {
            
        }
    },
    components:{
        UnifyCard,
        UnifyCardSidebar
    },
}
</script>

<style scoped>

</style>

