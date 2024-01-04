<template>
   <footer class="w-full bg-[#1D2129] text-[0.88rem] leading-[0.88rem] p-[1rem] xl:p-0">
      <div
         class="w-full xl:w-[75rem] h-auto xl:h-[13.19rem] mx-auto flex flex-col xl:flex-row space-y-4 xl:space-y-0 justify-between py-0 xl:py-7">
         <div class="w-[20.13rem] flex flex-col">
            <div class="font-bold text-xl leading-5">Products Index</div>
            <div class="flex flex-wrap leading-[1.38rem] mt-5">
               <span v-for="letter in alphabet" :key="letter" class="mr-[0.63rem] hover:text-[#3491FA]">
                  {{ letter }}
               </span>
            </div>
            <div class="tracking-tight text-[#A4ACB6] text-[0.88rem] mt-4 xl:mt-auto hidden xl:block">
               © 2023 A2B 360BioChem LLC. All Rights Reserved
            </div>
         </div>
         <div class="xl:w-[13.2rem] flex flex-col justify-between leading-[1.13rem] space-y-4 xl:space-y-0">
            <div class="font-bold text-xl leading-5">Contact Us</div>
            <div class="flex flex-col text-[#A4ACB6]">
               <div>360BioChem Inc.</div>
               <div>Xxxxxxxxxxxxxxxx</div>
               <div>Xxxxxxxxxxxxxxxx</div>
            </div>
            <div class="h-fit flex flex-col text-[#A4ACB6]">
               <div>Tel: 1-xxx-xxx-xxxx</div>
               <p class="mb-0">
                  <span>Email: </span>
                  <span class="text-white">
                     sales@360biochem.com
                  </span>
               </p>
            </div>
         </div>
         <div class="xl:w-[25.69rem] flex flex-col justify-end text-[#A4ACB6] mb-0">
            <div class="flex justify-start xl:justify-between h-[3.13rem] mb-4 xl:mb-[1.69rem]">
               <img src="/images/logo.png" alt="" class="w-[6.38rem] h-full hidden xl:flex" />
               <div class="w-[17.63rem] leading-[1.13rem] self-center">
                  Keep up to date on the latest news on our products and services.
               </div>
            </div>
            <div class="flex justify-start xl:justify-between text-[#A4ACB6]">
               <a-input v-model="searchTerm" type="input" placeholder="Enter your email..."
                  class="w-[18.75rem] h-7 rounded-sm flex" />
               <a-button
                  class="hidden xl:inline-block w-25 h-7 leading-7 py-0 bg-transparent text-[0.88rem] text-[#FFFFFF] border-[#86909C]">
                  SUBSCRIBE
               </a-button>
            </div>
            <div class="text-[#A4ACB6] mt-4 xl:mt-auto block xl:hidden">
               © 2023 A2B 360BioChem LLC. All Rights Reserved
            </div>
         </div>
      </div>
   </footer>
</template>
<script lang="ts" setup>
const selectedItem = ref(null);
const alphabet = Array.from({ length: 26 }, (_, i) =>
   String.fromCharCode("A".charCodeAt(0) + i)
);
const searchTerm = ref("");
</script>
<style scoped>
.ant-input {
   font-size: 0.88rem;
   font-weight: 400;
   color: #A4ACB6;
}

:deep(.ant-input::placeholder) {
   color: #a4acb6;
   font-size: 0.88rem;
}
</style>
 