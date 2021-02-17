<template>
    <div class="banner">
        <div class="txt" :style="{'paddingTop': (shrink == true ? '55px' : '1rem')}">
            <h2>
                {{ title }}
            </h2>
                <BreadCrumb class="bread"></BreadCrumb>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '../ui/BreadCrumb';
export default {
    props:['title'],
    data() {
        return {
            shrink:false
        }
    },
    components:{
        BreadCrumb
    },
    methods: {
        headerShrink() {
            let that = this;
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            that.scrollTop = scrollTop;
            if(that.scrollTop > 80) {
                let that = this;
                that.shrink = true;
            }else{
                that.shrink =false;
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.headerShrink);
    },
    destroyed() {
        window.removeEventListener('scroll', this.headerShrink);
    },
}

</script>

<style lang="scss" scoped>
    
    .banner{
        background-color: #eee;
        // height: 120px;
        margin-top: 120px;
        .txt{
            h2{
                font-size: 2.5rem;
            }
            .bread{
                display: flex;
                justify-content: center;
                margin-top: 10px;
            }
        }
    }
</style>