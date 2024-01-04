<template>
   <div class="flex items-center justify-center w-screen h-screen">
      <img src="/images/homePage.png" alt="" class="w-full h-full fixed top-0 left-0 -z-10 object-cover"
         v-if="!readyState" />
      <video ref="homeVideo" @loadeddata="readyState ? () => false : playVideo()" @error="readyState = false" preload
         autoplay loop muted class="w-full h-full fixed top-0 left-0 -z-10 object-cover">
         <source src="/video/blue_plate.mp4" type="video/mp4" />
      </video>
      <div class="h-full w-full xl:w-auto flex flex-col justify-end">
         <div class="text-4xl mb-[2.31rem] text-center xl:text-left">
            Empowering scientific innovation
         </div>
         <div class="h-[3.25rem] flex justify-center mb-[56vh]">
            <a-input v-model:value="searchKey" @pressEnter="$navigate({ path: '/products/list', query: { searchKey } })"
               placeholder="Please input product name,cas..." class="w-[80%] xl:w-[37.5rem] h-full ">
               <template #suffix>
                  <img src="/images/search.png" @click="$navigate({ path: '/products/list', query: { searchKey } })" alt=""
                     class="w-6 h-6" />
               </template>
            </a-input>
            <a-button @click="$navigate({ path: '/structureSearch' })"
               class="w-[13.88rem] h-full ml-5 border-[0.06rem] border-[#86909C] bg-transparent hidden xl:block">
               <template #icon>
                  <img src="/images/ShareS.png" alt="" class="w-10 h-10 mr-[0.38rem]" />
               </template>
               <span class="text-white text-[0.88rem]">
                  STRUCTURE SEARCH
               </span>
            </a-button>
         </div>
      </div>
   </div>
</template>
<script setup>
const second = getSecond();
const { $navigate } = useNuxtApp()
definePageMeta({
   layout: 'home'
})
const searchKey = ref("");
const readyState = ref(false);//视频是否就绪
const homeVideo = ref(null);

const playVideo = () => {
   // 第一帧
   homeVideo.value.currentTime = second.value;
   homeVideo.value.play();// 视频续播
   readyState.value = true//隐藏首帧图片
};

onBeforeUnmount(() => {
   second.value = homeVideo.value.currentTime
});
</script>
<style scoped>
:deep(.ant-input) {
   color: #a4acb6;
   font-size: 1rem;
}

:deep(.ant-input::placeholder) {
   color: #a4acb6;
   font-size: 1rem;
}
</style>
