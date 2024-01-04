<template>
   <div>
      <AppBreadcrumb parentName="Shopping Cart" />
      <div
         class="w-full xl:w-[75rem] mx-auto flex flex-col xl:flex-row my-10 space-x-[3.88rem] text-[#1D2129] text-[0.88rem]">
         <div class="flex flex-col flex-1">
            <a-table :columns="columns" sticky :scroll="{ x: '100%' }" size="middle" :row-selection="rowSelection"
               :data-source="arrayOfObjects" :pagination="arrayOfObjects.length > 10">
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
                  <template v-else-if="column.dataIndex === 'action'">
                     <img src="/images/del.png" class="w-[0.66rem] h-[0.66rem] cursor-pointer" alt="">
                  </template>
                  <template v-else-if="column.dataIndex === 'Quantity'">
                     <AppIntegerInput :value="text" />
                  </template>
                  <template v-else>
                     <span class="text-[#1D2129] text-[0.88rem]">{{ text }}</span>
                  </template>
               </template>
            </a-table>
            <div class="text-[#3491FA] mt-[1rem] cursor-pointer">
               Clear the cart
            </div>
         </div>
         <div
            class="w-[19.38rem] h-fit flex flex-col mt-6 xl:mt-0 px-[1.25rem] py-[1.88rem] rounded text-[#1D2129] cart-shadow font-medium">
            <div class="text-xl font-bold">
               Order summary
            </div>
            <div class="w-full h-10 flex justify-between items-center mt-[1.25rem] cart-bottom-border">
               <span class="font-normal">Subtotal: </span>
               <span>$235.00</span>
            </div>
            <div class="w-full h-10 flex justify-between items-center cart-bottom-border">
               <span class="font-normal">Sales Tax: $0.00 </span>
               <span>$235.00</span>
            </div>
            <div class="w-full flex mt-[0.94rem] leading-[1.38rem]">
               <span class="text-[#3491FA]">2</span>
               <span>item(s)</span>
            </div>
            <div class="w-full flex justify-between text-[1.13rem] leading-[1.38rem]">
               <span>Order Total:</span>
               <span class="text-[#FF7D00]">$289.00</span>
            </div>
            <a-button @click="$navigate({ path: '/cart/writeAddress' })" class="w-full h-9 mt-[0.88rem] submit-buttom-bg">
               Checkout
            </a-button>
         </div>
      </div>
   </div>
</template>
<script setup lang="ts">
definePageMeta({
   middleware: 'auth'
})
const { $navigate } = useNuxtApp()
const value1 = ref<number>(1);
import type { TableProps, TableColumnType } from 'ant-design-vue';
interface DataType {
   key: string;
   Structure: string;
   Description: string;
   Price: string;
   Quantity: number;
   Subtotal: string;
}

const rowSelection: TableProps['rowSelection'] = {
   onChange: (selectedRowKeys: string[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
   }
};

const columns: TableColumnType<DataType>[] = [
   {
      title: 'Structure',
      dataIndex: 'Structure',
      align: 'center'
   },
   {
      title: 'Description',
      dataIndex: 'Description',
      align: 'center',
      responsive: ['xl']
   },
   {
      title: 'Price',
      dataIndex: 'Price',
      align: 'center'
   },
   {
      title: 'Quantity',
      dataIndex: 'Quantity',
      align: 'center'
   },
   {
      title: 'Subtotal',
      dataIndex: 'Subtotal',
      align: 'center'
   },
   {
      title: '',
      dataIndex: 'action',
      align: 'center',
   }
];

const originalObject =
{
   key: '1',
   Structure: '/images/A003350.png',
   Description: '2,2’-Bis(diphenylphosphino)-1,1’-binaphthalene',
   Price: '$156.00',
   Quantity: 3,
   Subtotal: '$156.00',
}
const arrayOfObjects = Array.from({ length: 2 }, (_, index) => ({
   ...originalObject,
   key: (parseInt(originalObject.key) + index + 1).toString(),
}));
</script>