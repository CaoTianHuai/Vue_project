<template>
  <div class="swiper-container" ref="Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carouse in list" :key="carouse.id">
        <img :src="carouse.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.Swiper, {
            loop: true,
            //如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点击小球切换页面
              clickable: true,
            },
            //如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>
<style scoped>
</style>