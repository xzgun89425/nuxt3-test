<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        data: {
            type: Array,
            default: [],
        }
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
}
</script>

<template>
    <div class="w-full h-full">
        <swiper :spaceBetween="10" :centeredSlides="true" :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }" :pagination="{ clickable: true, }" :navigation="true" :modules="modules" class="swiper">
            <swiper-slide v-for="(item, idx) in data" :key="idx" class="bg-teal-500 text-white w-full h-full">
                <img :src="item.photo" alt="" class="w-full h-full object-cover">
            </swiper-slide>
        </swiper>
    </div>
</template>

<style>
.swiper {
    width: 100%;
    height: 100%;
    --swiper-navigation-color: #fff;
    --swiper-navigation-size: 30px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    border-radius: 50px;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
}

.swiper-pagination-bullet-active {
    width: 20px;
    background: #fff;
}

/* .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
} */
</style>