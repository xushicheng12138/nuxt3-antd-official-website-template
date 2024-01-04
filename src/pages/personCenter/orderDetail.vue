<template>
   <div>
      <AppBreadcrumb parentName="My Orders"></AppBreadcrumb>
      <div class="w-full xl:w-[75rem] mx-auto flex flex-col items-center text-[#1D2129] leading-6">
         <div class="inline-flex justify-between items-center w-full h-20">
            <div class="h-9 font-bold leading-9 text-2xl">
               My Orders
            </div>
            <a-input v-model="orderNumber" placeholder="Order Number..." class="w-[18.75rem] h-9 bg-[#F7F8FA]">
               <template #suffix>
                  <img src="/images/search.png" alt="" class="w-4 h-4" />
               </template>
            </a-input>
         </div>
         <div class="w-full flex font-medium px-4 xl:px-0">
            <div class="basis-[38%]">Order Details</div>
            <div class="basis-[42%]">Shipping Address</div>
            <div class="basis-[20%]">Billing Address</div>
         </div>
         <div class="w-full h-[0.13rem] mt-3 bg-[#E5E6EB]"></div>
         <div class="w-full flex mt-4 mb-[2.69rem] text-[0.88rem] px-4 xl:px-0">
            <div class="basis-[38%] flex flex-col">
               <span>Order Date: 10/07/2023</span>
               <span>A2B Order Number: 4647</span>
               <span>Customer PO Number: -</span>
               <span>Shipping Company: FedEx International Priority</span>
               <span>Tracking Number:- </span>
               <span>Order Status: Pending Payment </span>
               <span>
                  <a-button class="w-[4.38rem] h-[1.38rem] rounded-[1.13rem] text-xs submit-buttom-bg">
                     Pay Now
                  </a-button>
               </span>
            </div>
            <div class="basis-[42%] flex flex-col">
               <span>lihong</span>
               <span>Aikonchem</span>
               <span>1 DNA Way</span>
               <span>Tokyo 100-8994</span>
               <span>Japan</span>
               <span>18251900175</span>
               <span>it5@aikonchem.com</span>
            </div>
            <div class="basis-[20%] flex flex-col">
               <span>lihong</span>
               <span>Aikonchem</span>
               <span>1 DNA Way</span>
               <span>Tokyo 100-8994</span>
               <span>Japan</span>
               <span>18251900175</span>
               <span>it5@aikonchem.com</span>
            </div>
         </div>
         <div class="w-full mb-20">
            <a-table size="middle" sticky :scroll="{ x: '100%' }" :columns="columns" :data-source="arrayOfObjects"
               :pagination="false">
               <template #bodyCell="{ text, column }">
                  <template v-if="column.dataIndex === 'Structure'">
                     <a-image width="5.63rem" height="5.63rem" :src="text" />
                  </template>
                  <template v-else-if="column.dataIndex === 'Description'">
                     <div class="inline-flex flex-col leading-[1.25rem] font-medium text-left">
                        <span>1,3-Dimethoxybenzene1,3-Dimethoxybenzene</span>
                        <span>CAT#:AA76267</span>
                        <span>Cas number:98327-87-8</span>
                        <span>Purity:99％</span>
                        <span>Packsize：1g</span>
                     </div>
                  </template>
                  <template v-else>
                     <span class="text-[#4E5969] text-[0.88rem]">{{ text }}</span>
                  </template>
               </template>
            </a-table>
            <div
               class="w-full h-auto xl:h-[8.75rem] inline-flex flex-col xl:flex-row justify-between py-4 px-7 bg-[#F7F8FA] text-[0.88rem] text-[#1D2129] leading-[1.06rem]">
               <div class="w-full xl:w-[39.56rem] h-full flex flex-col justify-between">
                  <span>Notes: </span>
                  <span>1. All prices are in USD</span>
                  <span>2. HazMat Fee(if any) is charged to your account by the courier if it is shipped on your FedEx/DHL
                     account and will be added to the invoice otherwise.</span>
               </div>
               <div class="w-full xl:w-[15.63rem] mt-6 xl:mt-0 h-full flex flex-col justify-between">
                  <div class="flex justify-between">
                     <span>Subtotal: </span>
                     <span>$700.00</span>
                  </div>
                  <div class="flex justify-between">
                     <span>Sales Tax:</span>
                     <span>$20.00</span>
                  </div>
                  <div class="flex justify-between">
                     <span>Shipping Charge: </span>
                     <span>$700.00</span>
                  </div>
                  <div class='font-medium text-[1.13rem] flex justify-between'>
                     <span>Order Total: </span>
                     <span class='text-[#FF7D00]'>$700.00</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup lang='ts'>
definePageMeta({
   middleware: 'auth'
})
import type { TableColumnType } from 'ant-design-vue';
const orderNumber = ref('')
interface DataType {
   key: string;
   Structure: string;
   Description: string;
   Price: string;
   Quantity: number;
   Subtotal: string;
}
const columns: TableColumnType<DataType>[] = [
   {
      title: 'Structure',
      width: 100,
      align: 'center',
      dataIndex: 'Structure',
   },
   {
      title: 'Description',
      dataIndex: 'Description',
      width: 100,
      align: 'center'
   },
   {
      title: 'Price',
      dataIndex: 'Price',
      width: 120,
      align: 'center'
   },
   {
      title: 'Quantity',
      dataIndex: 'Quantity',
      width: 120,
      align: 'center'
   },
   {
      title: 'Subtotal',
      dataIndex: 'Subtotal',
      width: 100,
      align: 'center'
   }
];

const originalObject =
{
   Subtotal: '$604.00',
   Quantity: '3',
   Price: '$302.00',
   Description: '1,3-Dimethoxybenzene',
   Structure: '/images/A003350.png',
}
const arrayOfObjects = Array.from({ length: 2 }, () => ({ ...originalObject }));
</script>
<style lang="scss" scoped>
:deep(.ant-input::placeholder) {
   color: #86909C;
   font-size: 0.88rem;
}
</style>