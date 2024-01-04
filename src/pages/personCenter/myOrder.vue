<template>
   <div>
      <AppBreadcrumb parentName="My Orders"></AppBreadcrumb>
      <div class="w-full xl:w-[75rem] mx-auto flex flex-col items-center">
         <div class="w-full h-20 flex justify-between items-center px-4 xl:px-0">
            <div class="h-9 font-bold leading-9 text-[#1D2129] text-2xl hidden xl:block">
               My Orders
            </div>
            <a-input v-model="searchTerm" placeholder="Order Number..." class="w-[18.75rem] h-9 bg-[#F7F8FA]">
               <template #suffix>
                  <img src="/images/search.png" alt="" class="w-4 h-4" />
               </template>
            </a-input>
         </div>
            <a-table class="w-full mb-32" :columns="columns" size="middle" sticky :scroll="{ x: '100%' }" :data-source="data" :pagination="false">
               <template #headerCell="{ title }">
                  <span class="text-[#1D2129] font-medium">{{ title }}</span>
               </template>
               <template #bodyCell="{ text, column }">
                  <template v-if="column.dataIndex === 'action'">
                     <span class="text-button-color" @click="$navigate({ path: '/personCenter/orderDetail' })">
                        ORDER DETAILS
                        <img src="/images/point-r.png" class="w-[0.88rem] h-[0.88rem]" alt="" />
                     </span>
                  </template>
                  <template v-else-if="column.dataIndex === 'Status'">
                     <div class="flex flex-col items-center space-y-1">
                        <div class="text-[#4E5969]">{{ text }}</div>
                        <a-button class="w-[4.38rem] h-[1.38rem] leading-[1.38rem] rounded-[1.13rem] text-xs submit-buttom-bg">
                           Pay Now
                        </a-button>
                     </div>
                  </template>
                  <template v-else>
                     <span class="text-[#4E5969] text-[0.88rem]">{{ text }}</span>
                  </template>
               </template>
            </a-table>
      </div>
   </div>
</template>
<script setup lang='ts'>
definePageMeta({
   middleware: 'auth'
})
const { $navigate } = useNuxtApp()
const searchTerm = ref('')
const columns = [
   {
      title: 'Orders Date',
      dataIndex: 'Date',
      width: 100,
      align: 'center'
   },
   {
      title: 'Order Number',
      dataIndex: 'Number',
      width: 100,
      align: 'center'
   },
   {
      title: 'Customer PO Number',
      dataIndex: 'cpNumber',
      width: 120,
      align: 'center'
   },
   {
      title: 'Catalog Number',
      dataIndex: 'cNumber',
      width: 120,
      align: 'center'
   },
   {
      title: 'Order Total',
      dataIndex: 'Total',
      width: 100,
      align: 'center'
   },
   {
      title: 'Status',
      dataIndex: 'Status',
      width: 150,
      align: 'center',
   },
   {
      title: '',
      dataIndex: 'action',
      width: 150,
      align: 'center',
   }
];

const data = [
   {
      key: '1',
      Date: '11/07/2023',
      Number: '4890',
      cpNumber: '-',
      cNumber: 'AA00303,AF79809,AA76267',
      Total: '$156.00',
      Status: 'Pending Payment',
   },
   {
      key: '2',
      Date: '11/07/2023',
      Number: '4890',
      cpNumber: '-',
      cNumber: 'AA00303,AF79809,AA76267',
      Total: '$156.00',
      Status: 'Pending Payment',
   },
   {
      key: '3',
      Date: '11/07/2023',
      Number: '4890',
      cpNumber: '-',
      cNumber: 'AA00303,AF79809,AA76267',
      Total: '$156.00',
      Status: 'Pending Payment',
   },
   {
      key: '4',
      Date: '11/07/2023',
      Number: '4890',
      cpNumber: '-',
      cNumber: 'AA00303,AF79809,AA76267',
      Total: '$156.00',
      Status: 'Pending Payment',
   },

];
</script>
<style lang="scss" scoped>
:deep(.ant-input::placeholder) {
   color: #86909C;
   font-size: 0.88rem;
}
</style>