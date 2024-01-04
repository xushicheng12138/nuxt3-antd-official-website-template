<template>
   <div>
      <AppBreadcrumb :parentName="$route.params.id" />
      <div class="w-full xl:w-[75rem] mx-auto my-10 flex justify-between">
         <div class="w-[16.25rem] space-y-2">
            <AppCollapseCheckBox :arrayOfCheck="arrayOfCheck.slice(0, 1)" header="Product Category" />
            <AppCollapseCheckBox :arrayOfCheck="arrayOfCheck.slice(0, 12)" header="Formula Weight" />
            <AppCollapseCheckBox :arrayOfCheck="arrayOfCheck.slice(0, 2)" header="Functional Group" />
            <AppCollapseCheckBox :arrayOfCheck="arrayOfCheck.slice(0, 4)" header="Greener Alternative Principles" />
            <AppCollapseCheckBox :arrayOfCheck="arrayOfCheck.slice(0, 4)" header="Melting Point(°C)" />
         </div>
         <AppTableList colNum="3" :isShowTitle="false" />
      </div>
   </div>
</template>
<script setup lang="ts">
const originalCheck = { label: '101-200 (1605)', value: '1' }
const arrayOfCheck = Array.from({ length: 12 }, (_, index) => ({
   ...originalCheck,
   value: (parseInt(originalCheck.value) + index + 1).toString(),
}));
</script>
<style lang="scss" scoped></style>
