<template>
   <div>
      <AppBreadcrumb parentName="Upload Tax Exemption Docs" />
      <div class="w-full xl:w-[75rem] mx-auto flex justify-center xl:justify-start my-10 xl:space-x-[15rem] text-[0.88rem] text-[#1D2129]">
         <AppLeftDir title="Hello, Lee Pace" showSubtitle="welcome back" :dataList="dataList"
            :isContent="false" />
         <div class="w-[85%] xl:w-96">
            <a-form layout="vertical" @finish="onUploadFinish">
               <a-form-item label="Company Name" name="companyName">
                  <a-input v-model:value="uploadForm.email" placeholder="aikonchem"> </a-input>
               </a-form-item>
               <a-form-item label="Email" name="email">
                  <a-input v-model:value="uploadForm.email" placeholder="aikon@gllh.com"> </a-input>
               </a-form-item>
               <a-form-item label="Tax Exemption Documents" name="file">
                  <a-input v-mode="uploadForm.file" placeholder="Choose file">
                     <template #suffix>
                        <a-upload v-model="uploadForm.file" name="logo" action="/upload.do" list-type="picture">
                           <a-button class="submit-buttom-bg text-[0.88rem]">
                              Browse
                           </a-button>
                        </a-upload>
                     </template>
                  </a-input>
               </a-form-item>
               <a-form-item>
                  <a-button class="w-[9.38rem] h-9 submit-buttom-bg" html-type="submit">
                     Submit
                  </a-button>
               </a-form-item>
            </a-form>
         </div>
      </div>
   </div>
</template>
<script setup lang="ts">
definePageMeta({
   middleware: 'auth'
})
const uploadForm = reactive({
   email: "",
   companyName: "",
   file: null
});
const dirID = leftDirId();
dirID.value = 3;
interface dataListItem {
   id: number;
   name: string;
   routeName: string;
}
const dataList: dataListItem[] = [
   { id: 1, name: "My Orders", routeName: 'myOrder' },
   { id: 2, name: "Basic Information", routeName: 'baseInfo' },
   { id: 3, name: "Upload Tax Exemption Docs", routeName: 'uploadTax' },
];

const onUploadFinish = (values: any) => {
   message.success({
      content: () => JSON.stringify(values),
      style: {
         marginTop: "20vh",
      },
   });
};
</script>
<style lang="scss" scoped>
:deep(.ant-input-affix-wrapper){
   padding-right: 0.31rem;
}
</style>
