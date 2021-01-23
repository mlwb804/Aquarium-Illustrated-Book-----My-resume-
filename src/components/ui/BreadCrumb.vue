<template>
    <div class="breadcrumb">
        <ul>
            <li
            v-for="(breadcrumb, idx) in breadcrumbList"
            :key="idx"
            @click="routeTo(idx)"
            :class="{ 'linked': !!breadcrumb.link }"
            >
                {{ breadcrumb.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumbList: []
        }
    },
    mounted() {
        this.updateList()
    },
    watch: { '$route' () { this.updateList() } },
    methods: {
        routeTo(pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
        },
        updateList() {
            this.breadcrumbList = this.$route.meta.breadcrumb
        }
    },
}
</script>

<style lang="scss" scoped>
    .breadcrumb{
        ul{
            display: flex;
            li{
                cursor: pointer;
                color:  rgb(50, 154, 240);
                font-size: 1rem;
                &:hover{
                    color:rgb(182, 182, 182);
                    transition: all .1s;
                }
                &:last-child{
                    cursor: default;
                    color:rgb(182, 182, 182);
                }
                &:not(:last-child)::after{
                    content: ">";
                    margin: 5px;
                }
                &:hover::after{
                    color:  rgb(50, 154, 240);
                }
            }
        }
    }
</style>