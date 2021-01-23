<template>
    <div class="banner">
        <div class="txt">
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
    components:{
        BreadCrumb
    }
}

</script>

<style lang="scss" scoped>
    
    .banner{
        background-color: #eee;
        height: 150px;
        // margin-top: 7px;
        .txt{
            padding-top: 1.7rem;
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