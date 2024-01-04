<template>
   <div class="w-full xl:w-[75rem] h-full mx-auto flex flex-col text-[#1D2129] text-[0.88rem] leading-[0.88rem]">
      <AppBreadcrumb parentName="Shopping Cart" />
      <div class="w-full my-20 xl:my-0 flex-1 flex flex-col justify-center items-center">
         <img src="/images/pay-success.png" class="w-[6.25rem] h-[6.25rem]" alt="">
         <span class="w-auto text-[#333333] text-[1.38rem] font-bold mt-[2.38rem] leading-[1.38rem]">
            Your order has been placed!
         </span>
         <span class="w-auto mt-4">
            Order No. xxxxxx
         </span>
      </div>
   </div>
</template>
<script setup lang="ts">
definePageMeta({
   middleware: 'auth'
})
</script>
