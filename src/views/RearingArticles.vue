<template>
    <div>
        <TheBanner :title="filterById.title"></TheBanner>
        <article v-if="rearing.length">
            <div class="row">
                <div class="content">
                    {{filterById.content}}
                </div>
            </div>
        </article>

    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            artId: null,

        }
    },
    mounted() {
        const id = this.$route.params.id;
        this.artId = id;
        this.$router.afterEach((to, from, next) => {
            window.scrollTo(0, 0)
        })
    },
    computed:{
        filterById() {
            return this.rearing.filter(art => art.id === this.artId)[0];
        },
        ...mapState(['rearing'])
    },
    beforeRouteEnter (to, from, next) {
        const bread = to.meta.breadcrumb;
        for(let i = 0; i < bread.length; i++){
            if(bread[i].nam === '') {
                bread[i].name = to.params.id
            }
        }
        next();
    }
}
</script>