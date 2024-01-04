<template>
   <header class="w-full absolute top-0 left-0 right-0 text-white z-10">
      <div class="w-auto h-[3.75rem] flex justify-between xl:justify-center items-center mt-[0.94rem] mx-4  xl:mx-auto">
         <img src="/images/logo.png" alt="" class="w-[7.63rem]  cursor-pointer" />
         <div class="ml-[5rem] hidden xl:flex">
            <AppMenu />
         </div>
         <div class="ml-0 xl:ml-[15.63rem]">
            <AppLogin />
         </div>
      </div>
   </header>
</template>
<script lang="ts" setup>
</script>
<style scoped>
:deep(.ant-collapse-item .ant-collapse-header) {
   padding: 12px;
   color: #FFFFFF
}

:deep(.ant-collapse-content-box) {
   color: #FFFFFF
}

:deep(.ant-collapse-header div) {
   position: absolute;
   right: 0;
}
</style>
