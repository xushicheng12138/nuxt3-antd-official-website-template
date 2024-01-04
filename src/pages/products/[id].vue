<template>
   <div class="w-full">
      <AppBreadcrumb :parentName="$route.params.id" />
      <div class="w-full xl:w-[75rem] mx-auto flex xl:justify-between my-10 xl:space-x-[3.13rem]">
         <div class="hidden xl:block w-[16.25rem] space-y-2">
            <AppCollapseCheckBox :arrayOfCheck="arrayOfCheck.slice(0, 1)" header="Product Category" @check="getCheckBox" />
            <AppCollapseCheckBox :arrayOfCheck="arrayOfCheck.slice(0, 12)" header="Formula Weight" @check="getCheckBox" />
            <AppCollapseCheckBox :arrayOfCheck="arrayOfCheck.slice(0, 2)" header="Functional Group" @check="getCheckBox" />
            <AppCollapseCheckBox :arrayOfCheck="arrayOfCheck.slice(0, 4)" header="Greener Alternative Principles"
               @check="getCheckBox" />
            <AppCollapseCheckBox :arrayOfCheck="arrayOfCheck.slice(0, 4)" header="Melting Point(°C)"
               @check="getCheckBox" />
         </div>
         <div class="flex-1 flex flex-col">
            <div class="flex flex-col xl:flex-row justify-between mb-2 text-[#1D2129]">
               <div class="w-full xl:w-[23.75rem] px-4 xl:px-0">
                  <div class="text-[#3491FA] font-medium text-xl leading-5">A010213</div>
                  <div class="w-[23.75rem] h-[18.75rem] my-2 py-12">
                     <img src="/images/A003350.png" alt="" class="w-full h-full" />
                  </div>
                  <div class="text-[0.88rem] text-[#86909C] leading-[1.13rem] italic">
                     All Products are stable to be shipped at room temperature,unless otherwise specified.
                  </div>
                  <div class="grid grid-cols-2 mt-[0.94rem] mb-[1.5rem]">
                     <div class="flex flex-col">
                        <div class="title-style">Item Number</div>
                        <div class="title-content mt-1">71670</div>
                     </div>
                     <div class="flex flex-col">
                        <div class="title-style">CAS Number</div>
                        <div class="title-content mt-1">259794-08-6</div>
                     </div>
                  </div>
                  <div class="w-[17.5rem] h-9">
                     <a-button class="down-button-class" block>
                     <template #icon>
                        <img src="/images/down.png" alt="" class="w-5 h-5 mr-[0.38rem]" />
                     </template>
                     <span class="down-text-class">
                        Download Safety Data Sheet(SDS)
                     </span>
                  </a-button>
                  </div>
               </div>

               <div class="w-full xl:w-[26.25rem] h-[34rem] px-4 xl:px-0 mt-6 xl:mt-0">
                  <a-tabs v-model:activeKey="activeKey" class="w-full">
                     <a-tab-pane key="1" tab="Pricing ＆ Availability">
                        <a-table :columns="columns" :data-source="data" :pagination="false" bordered :show-header="false">
                           <template #bodyCell="{ column, text, record }">
                              <template v-if="column.dataIndex === 'name'">
                                 <div class="flex items-center">
                                    <span>{{ record.unit }}</span>
                                    <span class="text-[#E5E6EB]">丨</span>
                                    <span>{{ record.money }}</span>
                                 </div>
                              </template>
                              <template v-else-if="column.dataIndex === 'status'">
                                 <div class="flex items-center">
                                    <img src="/images/in-stock.png" class="w-3 h-3 mr-[0.13rem]" alt="" />
                                    <span class="text-ellipsis">in stock</span>
                                 </div>
                              </template>
                              <template v-else-if="column.dataIndex === 'num'">
                                 <AppIntegerInput :value="text" />
                              </template>
                           </template>
                           <template #footer>
                              <div class="h-[1.12rem] flex justify-between items-center">
                                 <span class="text-[#1D2129]">Total</span>
                                 <span class="text-[#FF7D00] text-xl">$2684.00</span>
                              </div>
                           </template>
                        </a-table>
                        <div class="title-content text-[#86909C] leading-[1.13rem]">
                           *All products are for research use only and not intended for human or animal use.
                        </div>
                        <div class="title-content text-[#86909C] leading-[1.13rem] mt-2">*All prices are in USD.</div>
                        <div class="flex justify-between mt-[0.81rem]">
                           <a-button class="submit-buttom-bg w-[45%] xl:w-[13rem] h-9 rounded space-x-2">
                              <template #icon>
                                 <img src="/images/add-cart.png" alt="" class="w-4 h-4" />
                              </template>
                              <span class="text-white text-[0.88rem] font-medium">
                                 Add to card
                              </span>
                           </a-button>
                           <a-button class="submit-buttom-bg w-[45%] xl:w-[13rem] h-9 rounded space-x-2">
                              <template #icon>
                                 <img src="/images/check-out.png" alt="" class="w-4 h-4 rounded" />
                              </template>
                              <span class="text-white text-[0.88rem] font-medium">
                                 Checkout
                              </span>
                           </a-button>
                        </div>
                     </a-tab-pane>
                     <a-tab-pane key="2" tab="Bulk Quotation Request" force-render
                        class="w-full px-8 py-[1.38rem] cart-border">
                        <div class='title-style leading-[0.88rem]'>A010213</div>
                        <p class="title-style leading-[0.88rem] mt-[0.81rem]">
                           <span>259794-08-6</span>
                           <span class="text-[#C9CDD4]">丨</span>
                           <span>6-Amino-3-methoxy Favipiravir</span>
                        </p>
                        <a-form :model="formState" name="basic" @finish="onFinish" @finishFailed="onFinishFailed">
                           <a-form-item name="username">
                              <a-input v-model:value="formState.username" placeholder="Your Name(required)" />
                           </a-form-item>

                           <a-form-item name="username">
                              <a-input v-model:value="formState.username" placeholder="Company Name(required)" />
                           </a-form-item>

                           <a-form-item name="username">
                              <a-input v-model:value="formState.username" placeholder="Email(required)" />
                           </a-form-item>

                           <a-form-item name="username">
                              <a-input v-model:value="formState.username" placeholder="Quantity(required)" />
                           </a-form-item>

                           <a-form-item name="username">
                              <a-input v-model:value="formState.username" placeholder="Country(optional)" />
                           </a-form-item>

                           <a-form-item name="username">
                              <a-input v-model:value="formState.username" placeholder="Other(optional)" />
                           </a-form-item>

                           <a-form-item name="remember">
                              <a-checkbox v-model:checked="formState.remember">
                                 <p class="mb-0">I hereby agree to 360BioChem LLC's Sales <span
                                       class="text-[#3491FA]">Terms and
                                       Conditions</span></p>
                              </a-checkbox>
                           </a-form-item>

                           <a-form-item name="remember">
                              <a-button class="w-full h-9 submit-buttom-bg rounded" html-type="submit">
                                 Submit
                              </a-button>
                           </a-form-item>
                        </a-form>
                     </a-tab-pane>
                  </a-tabs>
               </div>
            </div>

            <div class="w-full text-[#1D2129] text-[0.88rem] px-4 xl:px-0">
               <div class="flex items-center h-5 leading-5 mb-5">
                  <span class="w-1 h-5 submit-buttom-bg"></span>
                  <span class="title-style text-xl ml-[0.88rem]">Product Details</span>
               </div>
               <div class="title-style">Analyte Name</div>
               <div class="title-content">
                  Nortriptyline hydrochloride
               </div>
               <a-divider />
               <div class="grid grid-cols-3">
                  <div class="flex flex-col">
                     <div class="title-style">CAS Number</div>
                     <div class="title-content">259794-08-6</div>
                  </div>
                  <div class="flex flex-col">
                     <div class="title-style">Molecular Formula</div>
                     <div class="title-content">C19H21N.CIH</div>
                  </div>
                  <div class="flex flex-col">
                     <div class="title-style">Molecular Weight</div>
                     <div class="title-content">299.84</div>
                  </div>
               </div>
               <a-divider />
               <div class="title-style">Accurate Mass</div>
               <div class="title-content">
                  299.1441
               </div>
               <a-divider />
               <div class="title-style">SMILES</div>
               <div class="title-content">
                  Cl.CNCCC=C1c2ccccc2CCc3ccccc13
               </div>
               <a-divider />
               <div class="title-style">InChl</div>
               <div class="title-content">
                  h2-5.7-11.20H,6,12-14H2.1H3.1H.InChl=1S/C19H21N.CH/c1-20-14-6-11-19-17-9-4-2-7-15(17)12-13-16-8-3-5-10-18(1619
               </div>
               <a-divider />
               <div class="title-style">IUPAC</div>
               <div class="title-content">
                  3-(5,6-dihydrodibenzo[2,1-b:1',2'-e][7]annulen-11-ylidene)-N-methylpropan-1-amine:hydrochloride</div>
               <a-divider />
               <div class="title-style">Analyte Name</div>
               <div class="title-content">Free base:72-69-5</div>
               <a-divider />
               <div class="flex items-center h-5 leading-5 mb-5 mt-12">
                  <span class="w-1 h-full submit-buttom-bg"></span>
                  <span class="title-style text-xl ml-[0.88rem]">Recommended Products</span>
               </div>
               <AppTableList class="mb-[6.25rem]" colNum="3" :isShowTitle="false" />
            </div>
         </div>
      </div>
   </div>
</template>
<script setup lang="ts">
const activeKey = ref('1')
interface FormState {
   username: string;
   password: string;
   remember: boolean;
}
const formState = reactive<FormState>({
   username: '',
   password: '',
   remember: true,
});
const getCheckBox = (data: any) => {
   return navigateTo({
      path: '/products/fifterList',
      query: {
         data: data,
      }
   })
}

const originalCheck = { label: '101-200 (1605)', value: '1' }
const arrayOfCheck = Array.from({ length: 12 }, (_, index) => ({
   ...originalCheck,
   value: (parseInt(originalCheck.value) + index + 1).toString(),
}));

const columns = [
   {
      dataIndex: 'name',
   },
   {
      dataIndex: 'status',
   },
   {
      dataIndex: 'num',
      align: 'right',
   }
];

const originalObject =
{
   key: '1',
   unit: '5mg',
   money: '$48.00',
   status: 1,
   num: 3,
}
const data = Array.from({ length: 4 }, (_, index) => ({
   ...originalObject,
   key: (parseInt(originalObject.key) + index + 1).toString(),
}));
</script>
<style lang="scss" scoped>
:deep(.ant-divider-horizontal) {
   margin: 0.88rem 0;
}

:deep(.ant-table-footer) {
   padding: 0.69rem 1.25rem;
   background: #F2F3F5;
   border-radius: 0 0 0.25rem 0.25rem;
}

:deep(.ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr > td:not(:last-child)) {
   border-right: none;
   padding-top: 1rem;
   padding-bottom: 1rem;
}

:deep(.ant-table) {
   line-height: 1.75rem;
}

:deep(.ant-tabs-nav-list) {
   width: 100%;
}

:deep(.ant-tabs-top > .ant-tabs-nav) {
   margin: 0;
   border: 0.06rem solid #86909C;
   padding: 0.2rem;
   height: 2.5rem;
   border-radius: 0.25rem;
}

:deep(.ant-tabs-tab) {
   width: 50%;
   background: transparent;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #4E5969;
   margin: 0;
   font-size: 0.88rem;
   font-weight: 500;
   line-height: 0.88rem;
   font-family: Helvetica Neue, Helvetica Neue;
}

:deep(.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
   color: #FFFFFF;
}

:deep(.ant-tabs-tab-active) {
   border-radius: 0.13rem;
   background: #115582;
}

:deep(.ant-tabs-nav-operations) {
   display: none;
}

:deep(.ant-tabs-ink-bar) {
   display: none;
}

:deep(.ant-input::placeholder) {
   font-weight: 400;
   color: #86909C;
   font-size: 0.88rem;
}

:deep(.ant-table-tbody > tr > td) {
   border-bottom: 0.06rem solid #E5E6EB;
}
</style>
