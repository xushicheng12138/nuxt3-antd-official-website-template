<template>
   <div>
      <AppBreadcrumb parentName="Support" childrenName="Terms & Conditions" />
      <div class="w-full xl:w-[75rem] mx-auto flex my-10 justify-between scroll-smooth">
         <a-affix :offset-top="50" class="hidden xl:block">
            <AppLeftDir class="overflow-hidden hover:overflow-y-auto" />
         </a-affix>
         <div class="w-full xl:w-[51.75rem] px-4 xl:px-0 text-[#1D2129]">
            <ContentDoc />
         </div>
      </div>
      <a-back-top />
   </div>
</template>
<script setup lang="ts">
const dirID = leftDirId();
dirID.value = 0;
</script>
<style lang="scss" scoped>
:deep(p) {
   margin-top: 1.2rem !important;
   font-size: 1rem !important;
   line-height: 1.5rem !important;
   letter-spacing: 0.025em;
   text-align: justify;
   overflow-wrap: break-word;
}

:deep(h4) {
   margin-top: 0.88rem;
   font-size: 1.5rem;
   line-height: 2.5rem;
}

/* 设置滚动条 */
::-webkit-scrollbar {
   width: 0.31rem;
   background-color: #f2f3f5;
}

/* 设置滚动条滑块 */
::-webkit-scrollbar-thumb {
   width: 0.31rem;
   height: 5.88rem;
   background-color: #c9cdd4;
}
</style>
