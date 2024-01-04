<template>
   <div>
      <AppBreadcrumb parentName="Basic Information" />
      <div class="w-full xl:w-[75rem] mx-auto flex my-10 space-x-0 xl:space-x-[3.87rem] text-[#1D2129] text-[0.88rem]">
         <AppLeftDir title="Hello, Lee Pace" showSubtitle="welcome back" :dataList="dataList" :isContent="false" />
         <div class="flex flex-col flex-1">
            <div class="flex justify-between items-center py-5 px-4 xl:px-0">
               <span class="text-xl font-bold">
                  Shipping Address
               </span>
               <span @click="addressModalVisible = true" class="font-medium text-[#3491FA] cursor-pointer">
                  + Add Address
               </span>
            </div>

            <a-table :columns="columns" sticky :scroll="{ x: '100%' }" size="middle" :data-source="arrayOfObjects"
               :pagination="false">
               <template #headerCell="{ title }">
                  <span class="text-[#1D2129] font-medium">{{ title }}</span>
               </template>
               <template #bodyCell="{ text, column, record }">
                  <template v-if="['Attnto', 'Address', 'ZipCode'].includes(column.dataIndex)">
                     <div>
                        <a-input v-if="editableData[record.id]" v-model:value="editableData[record.id][column.dataIndex]"
                           style="margin: -5px 0" />
                        <template v-else>
                           {{ text }}
                        </template>
                     </div>
                  </template>
                  <template v-else-if="column.dataIndex === 'action'">
                     <div class="editable-row-operations">
                        <span v-if="editableData[record.id]" class="flex items-center space-x-4">
                           <a-typography-link @click="save(record.id)">Save</a-typography-link>
                           <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.id)">
                              <a>Cancel</a>
                           </a-popconfirm>
                        </span>
                        <span v-else class="flex items-center space-x-4">
                           <form-outlined @click="edit(record.id)" class="cursor-pointer text-[#86909C] text-[0.78rem]" />
                           <a-popconfirm title="Sure to delete?" ok-text="Yes" cancel-text="No"
                              @confirm="delAddress(record.id)">
                              <close-outlined class="cursor-pointer text-[#86909C] text-[0.78rem]" />
                           </a-popconfirm>
                           <div class="default-Address-button">Default Address</div>
                        </span>
                     </div>
                  </template>
                  <template v-else>
                     <span class="text-[#4E5969] text-[0.88rem]">{{ text }}</span>
                  </template>
               </template>
            </a-table>

            <div class="flex justify-between items-center py-5 mt-5">
               <span class="text-xl font-bold">
                  Billing Address
               </span>
               <span class="font-medium text-[#3491FA] cursor-pointer">
                  + Add Address
               </span>
            </div>

            <a-table :columns="columns" sticky :scroll="{ x: '100%' }" size="middle" :data-source="arrayOfObjects"
               :pagination="false">
               <template #headerCell="{ title }">
                  <span class="text-[#1D2129] font-medium">{{ title }}</span>
               </template>
               <template #bodyCell="{ text, column, record }">
                  <template v-if="['Attnto', 'Address', 'ZipCode'].includes(column.dataIndex)">
                     <div>
                        <a-input v-if="editableData[record.id]" v-model:value="editableData[record.id][column.dataIndex]"
                           style="margin: -5px 0" />
                        <template v-else>
                           {{ text }}
                        </template>
                     </div>
                  </template>
                  <template v-else-if="column.dataIndex === 'action'">
                     <div class="editable-row-operations">
                        <span v-if="editableData[record.id]" class="flex items-center space-x-4">
                           <a-typography-link @click="save(record.id)">Save</a-typography-link>
                           <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.id)">
                              <a>Cancel</a>
                           </a-popconfirm>
                        </span>
                        <span v-else class="flex items-center space-x-4">
                           <form-outlined @click="edit(record.id)" class="cursor-pointer text-[#86909C] text-[0.78rem]" />
                           <a-popconfirm title="Sure to delete?" ok-text="Yes" cancel-text="No"
                              @confirm="delAddress(record.id)">
                              <close-outlined class="cursor-pointer text-[#86909C] text-[0.78rem]" />
                           </a-popconfirm>
                           <div class="default-Address-button">Default Address</div>
                        </span>
                     </div>
                  </template>
                  <template v-else>
                     <span class="text-[#4E5969] text-[0.88rem]">{{ text }}</span>
                  </template>
               </template>
            </a-table>
         </div>
      </div>

      <a-modal v-model:visible="addressModalVisible" centered :closable="false" :footer="null"
         :bodyStyle="{ padding: '1.88rem' }" width="27.75rem">
         <div class="flex justify-between items-center pb-5 leading-[1.88rem]">
            <span class="text-[1.88rem] font-medium text-[#1D2129]">Add Address</span>
            <img src="/images/close.png" alt="" class="w-5 h-5 cursor-pointer" @click="addressModalVisible = false" />
         </div>
         <!-- 添加地址表单 -->
         <a-form :model="addressForm" layout="vertical" @finish="onAddressFinish">
            <a-form-item name="Attnto">
               <a-input v-model:value="addressForm.Attnto" placeholder="Attn to*"></a-input>
            </a-form-item>
            <a-form-item name="CompanyName">
               <a-input v-model:value="addressForm.CompanyName" placeholder="Company Name*"></a-input>
            </a-form-item>
            <a-row :gutter="16">
               <a-col :span="8">
                  <a-form-item name="Country">
                     <a-select v-model:value="addressForm.Country" placeholder="Please select a country">
                        <a-select-option value="china">China</a-select-option>
                        <a-select-option value="usa">U.S.A</a-select-option>
                     </a-select>
                  </a-form-item>
               </a-col>
               <a-col :span="8">
                  <a-form-item name="City">
                     <a-select v-model:value="addressForm.City" placeholder="Please select a City">
                        <a-select-option value="City">City</a-select-option>
                        <a-select-option value="usa">U.S.A</a-select-option>
                     </a-select>
                  </a-form-item>
               </a-col>
               <a-col :span="8">
                  <a-form-item name="town">
                     <a-select v-model:value="addressForm.town" placeholder="Please select a town">
                        <a-select-option value="town">town</a-select-option>
                        <a-select-option value="usa">U.S.A</a-select-option>
                     </a-select>
                  </a-form-item>
               </a-col>
            </a-row>
            <a-form-item name="AddresLine1">
               <a-input v-model:value="addressForm.AddresLine1" placeholder="Addres Line1*"></a-input>
            </a-form-item>
            <a-form-item name="AddresLine2">
               <a-input v-model:value="addressForm.AddresLine2" placeholder="Addres Line2*"></a-input>
            </a-form-item>
            <a-form-item name="AddresLine3">
               <a-input v-model:value="addressForm.AddresLine3" placeholder="Addres Line3*"></a-input>
            </a-form-item>
            <a-form-item name="ZipCode">
               <a-input v-model:value="addressForm.ZipCode" placeholder="Zip Code*"></a-input>
            </a-form-item>
            <a-form-item name="Tel">
               <a-input v-model:value="addressForm.Tel" placeholder="Tel*"></a-input>
            </a-form-item>
            <a-form-item name="Email">
               <a-input v-model:value="addressForm.Email" placeholder="Email*"></a-input>
            </a-form-item>
            <div class="flex justify-between font-medium">
               <a-button @click="addressModalVisible = false"
                  class="w-[11.75rem] h-[2.13rem] rounded-[0.13rem] checked-border text-[#3491FA]">
                  Cancel
               </a-button>
               <a-button html-type="submit" class="w-[11.75rem] h-[2.13rem] rounded-[0.13rem] submit-buttom-bg">
                  Confirm
               </a-button>
            </div>
         </a-form>
      </a-modal>
   </div>
</template>
<script setup lang="ts">
definePageMeta({
   middleware: 'auth'
})
import type { UnwrapRef } from 'vue';
interface dataListItem {
   id: number;
   name: string;
   routeName: string;
}
interface DataItem {
   id: string;
   Attnto: string;
   ZipCode: string;
   Address: string;
}
const dirID = leftDirId();
dirID.value = 2;
const addressModalVisible = ref(false);
const arrayOfObjects = ref<DataItem[]>([]);
const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});
const dataList: dataListItem[] = [
   { id: 1, name: "My Orders", routeName: '/personCenter/myOrder' },
   { id: 2, name: "Basic Information", routeName: '/personCenter/baseInfo' },
   { id: 3, name: "Upload Tax Exemption Docs", routeName: '/personCenter/uploadTax' },
];

const addressForm = reactive({
   Attnto: "",
   CompanyName: "",
   Country: "",
   City: "",
   town: "",
   AddresLine1: "",
   AddresLine2: "",
   AddresLine3: "",
   ZipCode: "",
   Tel: "",
   Email: "",
});

const edit = (id: string) => {
   editableData[id] = { ...arrayOfObjects.value.filter(item => id === item.id)[0] };
};
const save = (id: string) => {
   Object.assign(arrayOfObjects.value.filter(item => id === item.id)[0], editableData[id]);
   delete editableData[id];
};
const cancel = (id: string) => {
   delete editableData[id];
};

const onAddressFinish = () => {
   // 地址保存
   message.success({
      content: () => "This is a prompt message with custom className and style",
   });
   addressModalVisible.value = false
};

const delAddress = (id: any) => {
   console.log(id)
   // 地址删除
   message.success({
      content: () => " Address deleted successfully ",
   });
};

const columns: any = [
   {
      title: 'Attn to',
      dataIndex: 'Attnto',
      align: 'center',
      editable: true
   },
   {
      title: 'Address',
      dataIndex: 'Address',
      align: 'center',
      editable: true
   },
   {
      title: 'Zip Code',
      dataIndex: 'ZipCode',
      align: 'center',
      editable: true
   },
   {
      title: '',
      dataIndex: 'action',
      width: 200,
      align: 'center'
   }
];

const originalObject = {
   id: '1',
   Attnto: 'Akimoto Manatsu it5@aikonchem.com 15887565712',
   Address: 'Akimoto Ken111 BerkeleCalifornia United States',
   ZipCode: '94080',
}
arrayOfObjects.value = Array.from({ length: 2 }, (_, index) => ({
   ...originalObject,
   id: (parseInt(originalObject.id) + index + 1).toString(),
}));
</script>
<style lang="scss" scoped></style>
