<template>
   <div>
      <AppBreadcrumb parentName="Support" childrenName="Shipping Methods"></AppBreadcrumb>
      <div class="w-full xl:w-[75rem] mx-auto text-center mt-4 xl:mt-0">
         <img class="w-[90%] xl:w-full h-[30vw] xl:h-[22.5rem]" src="/images/shipping-pic.png" alt="">
      </div>
      <div class="w-full xl:w-[75rem] mx-auto px-4 xl:px-16 mt-4 xl:mt-14 flex flex-col text-[#1D2129] leading-6">
         <div class="text-2xl leading-10 font-bold">
            Domestic Shipping Rates (Excludes Hawaii and Alaska)
         </div>
         <p>
            Shipping fee will be automatically calculated by the system if you place an order through 360BioChem.com.
            The
            followings are our standard shipping methods and rates for domestic orders.
         </p>
         <div class="flex flex-col xl:flex-row my-5">
            <img class="w-[10.31rem] h-[3.19rem]" src="/images/fedex.png" alt="">
            <img class="w-[10.19rem] h-[4rem] mt-4 xl:mt-0 ml-0 xl:ml-[3.94rem]" src="/images/fedex2.png" alt="">
         </div>
         <a-table :columns="columns" sticky size="small" :data-source="data" bordered :pagination="false">
            <template #bodyCell="{ column, text }">
               <template v-if="column.dataIndex === 'name'">
                  <a>{{ text }}</a>
               </template>
            </template>
            <template #footer>
               * default shipping method
            </template>
         </a-table>
         <div class="mt-6 xl:mt-[3.13rem] text-2xl leading-[2.75rem] font-bold">
            International Shipping Rates
         </div>
         <p class="mb-3">
            Shipping fee will be automatically calculated by the system if you place an order through 360BioChem.com.
            The
            followings are our standard shipping rates for international orders.
         </p>
         <a-table :columns="columns" sticky size="small" :data-source="data" bordered :pagination="false">
            <template #bodyCell="{ column, text }">
               <template v-if="column.dataIndex === 'name'">
                  <a>{{ text }}</a>
               </template>
            </template>
         </a-table>
         <div class="mt-6 xl:mt-[3.13rem] text-2xl leading-[2.75rem] font-bold">
            Collect Account Shipping (UPS/DHL/FedEx)
         </div>
         <p>
            Collect account (UPS/DHL/FedEx) shipping service is available for both domestic and international orders. If
            you place an order through 360BioChem.com, please enter your shipping account number on the checkout page.
            If
            you order via email, please indicate your shipping account number on your Purchase Order. The handling fee
            for
            collect account shipping is $10 for domestic order and $25 for international order.
         </p>
         <div class="mt-2 xl:mt-[2.13rem] text-2xl leading-[2.75rem] font-bold">
            HazMat Fee
         </div>
         <p>
            There will be a HazMat fee per item when shipping a dangerous goods. The HazMat fee will be charged to your
            UPS/DHL/FedEx collect account or added to the invoice unless the package is shipped via FedEx Ground or each
            bottle is in Excepted Quantity, which is up to 1g for class 6.1 packing group I or II, and up to 25g for all
            other HazMat items.
         </p>
         <a-table :columns="columns" sticky size="small" :data-source="data" bordered :pagination="false" class="mt-[0.88rem] mb-[6.25rem]">
            <template #bodyCell="{ column, text }">
               <template v-if="column.dataIndex === 'name'">
                  <a>{{ text }}</a>
               </template>
            </template>
         </a-table>
      </div>
   </div>
</template>
<script setup lang='ts'>
const columns:any = [
   {
      title: 'Shipping Method',
      dataIndex: 'name',
      width: '50%',
      align: 'center'
   },
   {
      title: 'Shipping Rate (1 lb)',
      dataIndex: 'money',
      width: '50%',
      align: 'center'
   }
];

const data = [
   {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
   },
   {
      key: '2',
      name: 'Australia, Belgium, Brazil，China, Denmark, Finland, France, Germany, Israel, Japan, Korea, New Zealand, Spain, Sweden, Switzerland, Singapore, UK',
      money: '￥1,256,000.00',
   },
   {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
   },
];
</script>
<style lang="scss" scoped>
:deep(.ant-table-thead tr th) {
   background: rgba(52, 145, 250, 0.1);
   font-weight: 700;
   color: #3491FA;
}

:deep(.ant-table-footer) {
   color: #3491FA;
   background: rgba(52, 145, 250, 0.1);
}
</style>