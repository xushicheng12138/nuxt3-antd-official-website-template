<template>
   <div class="bg-[#F7F8FA] h-10 text-[0.88rem] text-[#86909C] px-4 xl:px-0">
      <a-breadcrumb class="w-full xl:w-[75rem] mx-auto leading-10">
         <template #separator>
            <img src="/images/split.svg" alt="" class="w-4 h-4" />
         </template>
         <a-breadcrumb-item>Home</a-breadcrumb-item>
         <a-breadcrumb-item v-if="parentName">{{ parentName }}</a-breadcrumb-item>
         <a-breadcrumb-item v-if="childrenName">{{ childrenName }}</a-breadcrumb-item>
      </a-breadcrumb>
   </div>
</template>
<script setup>
defineProps([
   "parentName",
   "childrenName",
]);
</script>
<style lang="scss" scoped>
:deep(.ant-breadcrumb-separator){
   margin: 0 0.1rem;
}
</style>