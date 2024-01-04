<template>
   <a-collapse expandIconPosition="right" v-model:activeKey="activeKey" ghost>
      <template #expandIcon="{ isActive }">
      <img src="/images/collapse-right.png" alt="" class="w-4 h-4 top-[12px]" :class="isActive? 'rotate-90	':'rotate-0'"/>
    </template>
      <a-collapse-panel key="1" :header="header">
         <div class="max-h-[13rem] flex flex-col space-y-2 bg-white overflow-hidden hover:overflow-y-auto">
            <a-checkbox-group v-model="checkedList" class="flex flex-col space-y-2" @change="selectCheckBox"
               name="checkboxgroup" :options="arrayOfCheck" />
         </div>
      </a-collapse-panel>
   </a-collapse>
</template>
<script setup lang="ts">
const emits = defineEmits(['check']);
const activeKey = ref('1');
const checkedList = reactive([]);
const { arrayOfCheck } = defineProps({
   arrayOfCheck: {
      type: Array,
      default: () => [],
   },
   header: {
      type: String,
      default: '',
   },
});

const selectCheckBox = (checkedValue: Array<string>) => {
   emits('check', checkedValue);
}
</script>
<style lang="scss" scoped>
:deep(.ant-collapse-header) {
   height: 2.5rem;
   padding-left: 0.63rem;
   display: flex;
   align-items: center;
   background: #F2F3F5;
   border-radius: 0.25rem 0.25rem 0rem 0rem;
   line-height: 1rem !important;
   font-size: 1rem;
   padding-right:0 !important
}

:deep(.ant-checkbox-wrapper){
   color:#4E5969
}

:deep(.ant-collapse-content > .ant-collapse-content-box) {
   padding: 0.63rem 0.25rem 0.63rem 0.63rem;
}

:deep(.ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header){
   padding: 12px 0.25rem;
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
