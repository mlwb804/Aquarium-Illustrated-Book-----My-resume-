<template>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide
            v-for="(item, index) in items"
            :key="index"
            class="sub-swiper"
            >
            <img :src="item.src" :alt="item.alt">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
    props:['items'],
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .swiper{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 600px;
        .sub-swiper{
            width: 300px;
            height: 300px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>