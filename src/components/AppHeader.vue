<template>
   <header
      class="sticky xl:static top-0 left-0 z-10 xl:z-0 w-full h-18 xl:h-[8.13rem] px-4 xl:py-0 bg-[url('/images/header-bg.png')] bg-cover">
      <div class="w-full xl:w-[75rem] h-20 xl:h-[8.13rem] mx-auto flex flex-row xl:flex-col justify-between">
         <div class="w-full flex justify-between pt-[0.81rem]">
            <nuxt-link to="/">
               <img src="/images/logo.png" alt="Logo" class="w-[6.87rem] h-[3.37rem] cursor-pointer" />
            </nuxt-link>
            <div class="hidden xl:flex items-center justify-center">
               <a-input v-model:value="searchKey" @pressEnter="navigate('/products/list')" type="input"
                  placeholder="Input product name,cas..." class="header-input-bg w-[48.13rem] h-[2.5rem] border-0">
                  <template #suffix>
                     <img src="/images/search.png" alt="" class="w-4 h-4" @click="navigate('/products/list')" />
                  </template>
               </a-input>
               <a-button @click="navigate('/structureSearch')" class="w-[12.38rem] h-10 border-[#86909C] bg-transparent ml-[1.81rem]">
                  <template #icon>
                     <img src="/images/ShareS.png" alt="" class="w-4 h-4 mr-[0.38rem]" />
                  </template>
                  <span class="text-white text-[0.88rem]">
                     STRUCTURE SEARCH
                  </span>
               </a-button>
            </div>
         </div>
         <div class="flex justify-end xl:justify-between w-full h-full xl:h-[3.06rem]">
            <AppMenu class="hidden xl:flex" downRootClass="bg-white shadow-md" downSubitemClass="hover:bg-[#E5E6EB]"
               overlayBgImage="url(/images/pBg.png)"
               overlayClassName="top-[8.12rem] left-1/2 transform -translate-x-1/2"
               supportClassName="absolute top-[8.12rem]" />
            <AppLogin downRootClass="bg-white user-box-shadow" downSubitemClass="hover:bg-[#F7F8FA] hover:text-[#3491FA]"
               cartBg="#3491FA" supportClassName="absolute top-[8.12rem]" />
         </div>
      </div>
   </header>
</template>
<script lang="ts" setup>
const emits = defineEmits(['doSearch']);
const searchKey = ref("");
const navigate = (name: any) => {
   if (useRoute().path === '/products/list' && name === '/products/list') {
      emits('doSearch', searchKey.value);
      return
   }
   return navigateTo({
      path: name,
      query: {
         searchKey: searchKey.value,
      }
   })
}
</script>
<style scoped>
:deep(.ant-collapse-content-box) {
   color: #ffffff;
}

:deep(.ant-collapse-header div) {
   position: absolute;
   right: 0;
}

:deep(.ant-input) {
   background-color: transparent;
}

:deep(.ant-input::placeholder) {
   color: #a4acb6;
   font-size: 0.88rem;
}

:deep(.ant-input) {
   color: #FFFFFF;
}
</style>
