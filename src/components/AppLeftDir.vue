<template>
   <div class="w-[19.38rem] h-fit h-screen-content hidden xl:flex flex-col rounded text-[#1D2129] dir-shadow">
      <div class="w-full flex flex-col py-5 px-[1.88rem] space-y-3 dir-title-bg">
         <div class="text-xl font-bold">{{ title }}</div>
         <div v-if="showSubtitle" class="">{{ showSubtitle }}</div>
      </div>
      <ul class="pl-[0.88rem] pr-4 py-3">
         <li v-for="item in dataList" :key="item.id">
            <NuxtLink @click="handleItemClick(item.id)"
               :to="isContent ? `/support/terms#_${item.id + item.name.toLowerCase().replace(/\s/g, '-')}` : item.routeName"
               :class="{
                  'flex items-center py-[1.06rem] pl-5 cursor-pointer hover:bg-[#F7F8FA]': true,
                  'bg-[#F7F8FA] text-[#3491FA]': dirID === item.id
               }">
               {{ isContent ? `${item.id}.${item.name}` : item.name }}
            </NuxtLink>
         </li>
      </ul>
   </div>
</template>
<script lang="ts" setup>
const dirID = leftDirId();
// 默认terms目录
interface dataListItem {
   id: number;
   name: string;
   routeName: string;
}
defineProps({
   isContent: {
      //是否Markdown文件
      type: Boolean,
      default: true,
   },
   title: {
      //标题
      type: String,
      default: 'Terms & Conditions',
   },
   showSubtitle: {
      //副标题
      type: String,
      default: '',
   },
   dataList: {
      type: Array as () => dataListItem[],
      default: () => {
         return [
            { id: 1, name: "Interpretation" },
            { id: 2, name: "Orders and Quotations" },
            { id: 3, name: "Delivery and Damage" },
            { id: 4, name: "Warranty and Indemnity" },
            { id: 5, name: "Health and Safety" },
            { id: 6, name: "Customer Materials" },
            { id: 7, name: "Risk and Title" },
            { id: 8, name: "Price" },
            { id: 9, name: "Payment" },
            { id: 10, name: "Intellectual Property" },
            { id: 11, name: "Restrictions on Use-360BioChem name and pharmaceutical products" },
            { id: 12, name: "Confidentiality" },
            { id: 13, name: "Cancellation" },
            { id: 14, name: "Termination" },
            { id: 15, name: "Force Majeure" },
            { id: 16, name: "Legal and Regulatory Compliance" },
            { id: 17, name: "General" },
         ]

      }
   },
});
const handleItemClick = (itemId: any) => {
   dirID.value = itemId
};
</script>
