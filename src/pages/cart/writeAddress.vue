<template>
   <div>
      <AppBreadcrumb parentName="Shopping Cart" />
      <div class="w-full xl:w-[75rem] mx-auto flex flex-col xl:flex-row space-x-[3.88rem] text-[#1D2129] text-[0.88rem]">
         <div class="flex flex-col flex-1 mb-[6.25rem]">
            <div class="h-[3.75rem] pl-5 xl:pl-0">
               <span class="text-xl leading-[3.75rem] font-bold">Contact Information</span>
            </div>

            <div class="mb-4 cart-border">
               <div class="h-10 flex justify-between bg-[#F2F3F5] mb-4 px-5">
                  <span class="text-base leading-10 font-medium">Shipping Address</span>
                  <span class="text-[#3491FA] leading-10 cursor-pointer" @click="addressVisible = true">
                     Select address</span>
               </div>
               <a-form :model="shippingForm" autocomplete="off" class="px-5 my-[0.9rem]" @validate="validateBack"
                  validateTrigger="blur" :rules="rules">
                  <a-row :gutter="16">
                     <a-col :span="12">
                        <a-form-item name="attnTo" class="mb-2">
                           <a-input v-model:value="shippingForm.attnTo" placeholder="Attn to*"></a-input>
                        </a-form-item>
                     </a-col>
                     <a-col :span="12">
                        <a-form-item name="lastName" class="mb-2">
                           <a-input v-model:value="shippingForm.companyName" placeholder="Company Name"></a-input>
                        </a-form-item>
                     </a-col>
                  </a-row>
                  <a-row :gutter="16">
                     <a-col :span="12">
                        <a-form-item name="firstName" class="mb-2">
                           <a-input v-model:value="shippingForm.attnTo" placeholder="Country*"></a-input>
                        </a-form-item>
                     </a-col>
                     <a-col :span="6">
                        <a-form-item name="lastName" class="mb-2">
                           <a-select value="1" placeholder="Please select a country">
                              <a-select-option value="1">Abamala</a-select-option>
                              <a-select-option value="2">Albertville</a-select-option>
                           </a-select>
                        </a-form-item>
                     </a-col>
                     <a-col :span="6">
                        <a-form-item name="lastName" class="mb-2">
                           <a-select value="2" placeholder="Please select a country">
                              <a-select-option value="1">Abamala</a-select-option>
                              <a-select-option value="2">Albertville</a-select-option>
                           </a-select>
                        </a-form-item>
                     </a-col>
                  </a-row>
                  <a-row :gutter="16">
                     <a-col :span="12">
                        <a-form-item name="firstName" class="mb-2">
                           <a-input v-model:value="shippingForm.attnTo" placeholder="Addres Line 1*"></a-input>
                        </a-form-item>
                     </a-col>
                     <a-col :span="12">
                        <a-form-item name="lastName" class="mb-2">
                           <a-input v-model:value="shippingForm.companyName" placeholder="Addres Line 2"></a-input>
                        </a-form-item>
                     </a-col>
                  </a-row>
                  <a-row :gutter="16">
                     <a-col :span="12">
                        <a-form-item name="firstName" class="mb-2">
                           <a-input v-model:value="shippingForm.attnTo" placeholder="Addres Line 3"></a-input>
                        </a-form-item>
                     </a-col>
                     <a-col :span="12">
                        <a-form-item name="lastName" class="mb-2">
                           <a-input v-model:value="shippingForm.companyName" placeholder="Zip  Code*"></a-input>
                        </a-form-item>
                     </a-col>
                  </a-row>
                  <a-row :gutter="16">
                     <a-col :span="12">
                        <a-form-item name="firstName" class="mb-2">
                           <a-input v-model:value="shippingForm.attnTo" placeholder="Tel*"></a-input>
                        </a-form-item>
                     </a-col>
                     <a-col :span="12">
                        <a-form-item name="lastName" class="mb-2">
                           <a-input v-model:value="shippingForm.companyName" placeholder="Email*"></a-input>
                        </a-form-item>
                     </a-col>
                  </a-row>
                  <AppWarn v-show="showShippingWarn" />
               </a-form>
            </div>

            <div class="mb-4 cart-border">
               <div class="h-auto xl:h-10 flex justify-start flex-wrap xl:justify-between bg-[#F2F3F5] mb-4 px-5">
                  <span class="text-base leading-10 font-medium">Billing Address</span>
                  <span class="leading-10 ml-auto">
                     <a-checkbox class="text-[#86909C] text-[0.88rem]">Same as shipping address</a-checkbox>
                  </span>
                  <span class="text-[#3491FA] leading-10 cursor-pointer xl:ml-4" @click="addressVisible = true">
                     Select address
                  </span>
               </div>
               <a-form :model="shippingForm" validateTrigger="blur" :rules="rules" autocomplete="off"
                  class="px-5 my-[0.9rem]">
                  <a-row :gutter="16">
                     <a-col :span="12">
                        <a-form-item name="attnTo" class="mb-2">
                           <a-input v-model:value="shippingForm.attnTo" placeholder="Attn to*"></a-input>
                        </a-form-item>
                     </a-col>
                     <a-col :span="12">
                        <a-form-item name="lastName" class="mb-2">
                           <a-input v-model:value="shippingForm.companyName" placeholder="Company Name"></a-input>
                        </a-form-item>
                     </a-col>
                  </a-row>
                  <a-row :gutter="16">
                     <a-col :span="12">
                        <a-form-item name="firstName" class="mb-2">
                           <a-input v-model:value="shippingForm.attnTo" placeholder="Country*"></a-input>
                        </a-form-item>
                     </a-col>
                     <a-col :span="6">
                        <a-form-item name="lastName" class="mb-2">
                           <a-select value="1" placeholder="Please select a country">
                              <a-select-option value="1">Abamala</a-select-option>
                              <a-select-option value="2">Albertville</a-select-option>
                           </a-select>
                        </a-form-item>
                     </a-col>
                     <a-col :span="6">
                        <a-form-item name="lastName" class="mb-2">
                           <a-select value="2" placeholder="Please select a country">
                              <a-select-option value="1">Abamala</a-select-option>
                              <a-select-option value="2">Albertville</a-select-option>
                           </a-select>
                        </a-form-item>
                     </a-col>
                  </a-row>
                  <a-row :gutter="16">
                     <a-col :span="12">
                        <a-form-item name="firstName" class="mb-2">
                           <a-input v-model:value="shippingForm.attnTo" placeholder="Addres Line 1*"></a-input>
                        </a-form-item>
                     </a-col>
                     <a-col :span="12">
                        <a-form-item name="lastName" class="mb-2">
                           <a-input v-model:value="shippingForm.companyName" placeholder="Addres Line 2"></a-input>
                        </a-form-item>
                     </a-col>
                  </a-row>
                  <a-row :gutter="16">
                     <a-col :span="12">
                        <a-form-item name="firstName" class="mb-2">
                           <a-input v-model:value="shippingForm.attnTo" placeholder="Addres Line 3"></a-input>
                        </a-form-item>
                     </a-col>
                     <a-col :span="12">
                        <a-form-item name="lastName" class="mb-2">
                           <a-input v-model:value="shippingForm.companyName" placeholder="Zip  Code*"></a-input>
                        </a-form-item>
                     </a-col>
                  </a-row>
                  <a-row :gutter="16">
                     <a-col :span="12">
                        <a-form-item name="firstName" class="mb-2">
                           <a-input v-model:value="shippingForm.attnTo" placeholder="Tel*"></a-input>
                        </a-form-item>
                     </a-col>
                     <a-col :span="12">
                        <a-form-item name="lastName" class="mb-2">
                           <a-input v-model:value="shippingForm.companyName" placeholder="Email*"></a-input>
                        </a-form-item>
                     </a-col>
                  </a-row>
               </a-form>
            </div>

            <div class="h-[3.75rem] pl-5 xl:pl-0">
               <span class="text-xl leading-[3.75rem] font-bold">Shipping Method</span>
            </div>
            <div class="mb-4 cart-border">
               <div class="h-10 bg-[#F2F3F5] mb-4">
                  <span class="text-base leading-10 font-medium ml-5">International</span>
               </div>
               <a-form :model="formState" name="horizontal_login" layout="inline" autocomplete="off" class="my-0.88rem">
                  <a-form-item>
                     <a-radio-group v-model:value="mothodRadio" class="flex flex-col ml-5">
                        <a-radio :value="1" class="w-full xl:w-[48.88rem] h-9">FedEx International Priority</a-radio>
                        <a-radio :value="2" class="w-full xl:w-[48.88rem] h-9">FedEx International Economy</a-radio>
                        <a-radio :value="3" class="w-full xl:w-[48.88rem] h-9">Collect Account (FedEx/DHL)</a-radio>
                     </a-radio-group>
                  </a-form-item>
               </a-form>
            </div>
            <a-input v-model:value="value" placeholder="Basic usage" class="mt-[0.88] mb-[1.06rem]" />
            <div class="h-[3.75rem] pl-5 xl:pl-0">
               <span class="text-xl leading-[3.75rem] font-bold">Product List</span>
            </div>
            <a-table :columns="columns" sticky :scroll="{ x: '100%' }" size="middle" :row-selection="rowSelection"
               :data-source="arrayOfObjects" :pagination="arrayOfObjects.length > 10">
               <template #bodyCell="{ text, column }">
                  <template v-if="column.dataIndex === 'Structure'">
                     <a-image width="5.63rem" height="5.63rem" :src="text" />
                  </template>
                  <template v-else-if="column.dataIndex === 'Description'">
                     <div class="inline-flex flex-col leading-[1.25rem] font-medium text-left">
                        <span>cece</span>
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
         </div>
         <div
            class="w-[19.38rem] h-fit flex flex-col mt-[3.75rem] px-[1.25rem] py-[1.88rem] rounded text-[#1D2129] cart-shadow font-medium">
            <div class="text-xl font-bold leading-[1.25rem]">
               Order summary
            </div>
            <div class="h-10 flex justify-between items-center mt-[1.25rem] cart-bottom-border">
               <span class="font-normal">Subtotal: </span>
               <span>$235.00</span>
            </div>
            <div class="h-10 flex justify-between items-center cart-bottom-border">
               <span class="font-normal">Sales Tax: $0.00 </span>
               <span>$235.00</span>
            </div>
            <div class="h-10 flex justify-between items-center cart-bottom-border">
               <span class="font-normal">Subtotal: Sales Tax:</span>
               <span>$20.00</span>
            </div>
            <div class="flex mt-[0.94rem] leading-[1.38rem]">
               <span class="text-[#3491FA]">2</span>
               <span>item(s)</span>
            </div>
            <div class="flex justify-between text-[1.13rem] leading-[1.38rem]">
               <span>Order Total:</span>
               <span class="text-[#FF7D00]">$289.00</span>
            </div>
            <a-button @click="payVisible = true" class="h-9 mt-[0.88rem] font-medium submit-buttom-bg">
               Next
            </a-button>

            <a-button @click="$router.back()"
               class="h-9 mt-[0.63rem] rounded-[0.25rem] checked-border text-[#3491FA] font-medium">
               Back to Cart
            </a-button>
         </div>
      </div>

      <a-modal v-model:visible="addressVisible" centered :footer="null" :closable="false" :bodyStyle="{ padding: 0 }"
         width="44.25rem">
         <div class="flex justify-between p-6 pb-5 text-xl">
            <span class="text-xl text-[#1D2129] font-bold leading-5">Select Address</span>
            <img src="/images/close.png" alt="" class="w-5 h-5 cursor-pointer" @click="addressVisible = false" />
         </div>
         <!-- 选择地址 -->
         <div class="text-[#1D2129] px-[0.81rem]">
            <div class="h-[18.75rem] space-y-[0.63rem] overflow-hidden hover:overflow-y-auto">
               <div @click="checkAddress(item.id)" v-for="(item, index) in  arrayOfAddress" :key="index"
                  :class="`w-[41.25rem] h-[9.06rem] cursor-pointer rounded mx-[0.69rem] ${checkedAddress === item.id ? 'checked-bg checked-border' : 'bg-[#F7F8FA]'}`">
                  <div class="h-10 flex justify-between mx-5 cart-bottom-border">
                     <span class="text-base leading-10 font-medium">Akimoto</span>
                     <span class="text-[#3491FA] leading-10 cursor-pointer">Delete</span>
                  </div>
                  <div class="flex px-5 py-3 text-[0.88rem] leading-5">
                     <div class="basis-[50%] flex flex-col">
                        <div>
                           <span class="font-medium">Attn to:</span>
                           <span>{{ item.one }}</span>
                        </div>
                        <div>
                           <span class="font-medium">Zip Code</span>
                           <span>{{ item.two }}</span>
                        </div>
                        <div>
                           <span class="font-medium">Tel:</span>
                           <span>{{ item.three }}</span>
                        </div>
                        <div>
                           <span class="font-medium">Email</span>
                           <span>{{ item.four }}</span>
                        </div>
                     </div>
                     <div class="basis-[50%] flex flex-col">
                        <div>
                           <span class="font-medium">Attn to:</span>
                           <span>{{ item.five }}</span>
                        </div>
                        <div>
                           <span class="font-medium">Zip Code</span>
                           <span>{{ item.six }}</span>
                        </div>
                        <div>
                           <span class="font-medium">Tel:</span>
                           <span>{{ item.seven }}</span>
                        </div>
                        <div>
                           <span class="font-medium">Email</span>
                           <span>{{ item.eight }}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="flex justify-end font-medium mx-[0.69rem] py-[1.75rem]">
               <a-button @click="addressVisible = false"
                  class="w-[9.38rem] h-9 rounded checked-border text-[#3491FA] mr-4">
                  Cancel
               </a-button>
               <a-button @click="addressVisible = false" class="w-[9.38rem] h-9 rounded submit-buttom-bg">
                  Confirm
               </a-button>
            </div>
         </div>
      </a-modal>

      <a-modal v-model:visible="payVisible" centered :closable="false" :footer="null"
         :bodyStyle="{ padding: '1.88rem 2.5rem 2.5rem 2.5rem' }" width="29rem">
         <!-- 支付选卡 -->
         <div class="h-5 flex mb-5 text-xl">
            <span class="text-[#1D2129] leading-5">Payment to</span>
            <img src="/images/title.png" alt="" class="w-[2.54rem] h-5 ml-[0.5rem] cursor-pointer" />
            <img src="/images/close.png" alt="" class="w-5 h-5 ml-auto cursor-pointer" @click="payVisible = false" />
         </div>
         <div class="pay-bg">
            <div class="text-[0.88rem] text-[#4E5969] leading-[0.88rem]">Products</div>
            <div class="money">289.00 USD</div>
         </div>
         <a-form :model="payForm" layout="vertical" @finish="onPayFinish">
            <a-form-item label="Email" name="Email">
               <a-input v-model:value="payForm.Email" placeholder="Email address"> </a-input>
            </a-form-item>
            <a-form-item label="CardNumber" name="CardNumber">
               <a-input v-model:value="payForm.CardNumber" placeholder="1234 1234 1234 1234">
                  <template #suffix>
                     <img src="/images/pay-img2.png" alt="" class="w-9 h-5" />
                     <img src="/images/pay-img.png" alt="" class="w-[1.88rem] h-5 ml-2" />
                  </template>
               </a-input>
            </a-form-item>
            <a-row :gutter="16">
               <a-col :span="12">
                  <a-form-item name="Expiration" label="Expiration">
                     <a-input v-model:value="payForm.Expiration" placeholder=""></a-input>
                  </a-form-item>
               </a-col>
               <a-col :span="12">
                  <a-form-item name="CVC" label="CVC">
                     <a-input v-model:value="payForm.CVC" placeholder="CVC"></a-input>
                  </a-form-item>
               </a-col>
            </a-row>

            <a-form-item name="select" label="Country">
               <a-select v-model:value="payForm.Country" placeholder="Please select a country">
                  <a-select-option value="china">China</a-select-option>
                  <a-select-option value="usa">U.S.A</a-select-option>
               </a-select>
            </a-form-item>

            <a-form-item label="ZIP" name="ZIP">
               <a-input v-model:value="payForm.ZIP" placeholder="12345"> </a-input>
            </a-form-item>

            <a-form-item class="mb-0">
               <a-button class="w-full h-9 mt-2 submit-buttom-bg" html-type="submit">
                  Pay Now
               </a-button>
            </a-form-item>
         </a-form>
      </a-modal>
   </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
const { $navigate } = useNuxtApp()
const checkedAddress = ref<number>(1);
const showShippingWarn = ref<boolean>(false);
const addressVisible = ref<boolean>(false);
const payVisible = ref<boolean>(false);
const mothodRadio = ref<number>(1);
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

const payForm = reactive({
   Email: "",
   CardNumber: "",
   Expiration: "",
   CVC: "",
   Country: "china",
   ZIP: "",
});

const shippingForm = reactive({
   attnTo: "",
   companyName: "",
   country: "",
   abamala: "",
   albertville: "china",
   addresLineOne: "",
   addresLineTwo: "",
   addresLineThree: "",
   zipCode: "china",
   tel: "",
   email: "",
});

const rules = {
   attnTo: [
      { required: true, message: 'Please enter required information!' },
   ]
}

const validateBack = (name: string, status: boolean) => {
   console.log(name, status)
   showShippingWarn.value = !status
}

const onPayFinish = () => {
   // 支付保存
   $navigate({ path: '/cart/paySuccess' })
}

const checkAddress = (id: number) => {
   checkedAddress.value = id
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

const originalAddress =
{
   id: 0,
   one: 'Akimoto Manatsu',
   two: '94080',
   three: '18251900175',
   four: 'it5@aikonchem.com',
   five: 'Akimoto Ken111',
   six: 'Berkeley',
   seven: 'California',
   eight: 'United States ',
}

const arrayOfAddress = Array.from({ length: 4 }, (_, index) => ({
   ...originalAddress,
   id: originalAddress.id + index + 1,
}));

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
<style scoped>
:deep(.ant-input::placeholder) {
   font-size: 0.88rem;
   font-weight: 400;
   color: #86909C;
}

/* 设置滚动条 */
::-webkit-scrollbar {
   width: 0.31rem;
   background-color: #f2f3f5;
}

/* 设置滚动条滑块 */
::-webkit-scrollbar-thumb {
   width: 0.31rem;
   height: 5.88rem;
   background-color: #c9cdd4;
}
</style>