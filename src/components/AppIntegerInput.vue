<template>
   <div class="integer-input">
      <a-input v-model:value="internalValue" @input="validateInput" class="w-15 h-7">
         <template #prefix>
            <img src="/images/decrement.png" alt="" class="w-[0.44rem] h-[0.09rem] cursor-pointer" @click="decrement" />
         </template>
         <template #suffix>
            <img src="/images/increment.png" alt="" class="w-2 h-2 cursor-pointer" @click="increment" />
         </template>
      </a-input>
   </div>
</template>
<script setup lang="ts">
const props = defineProps(['value']);
const internalValue = ref<number>(props.value);
const validateInput = () => {
   internalValue.value = internalValue.value.toString().replace(/[^0-9]/g, '');

   if (internalValue.value === '') {
      internalValue.value = '0';
   }
   internalValue.value = parseInt(internalValue.value, 10);
};

const decrement = () => {
   if (internalValue.value > 0) {
      internalValue.value--;
   }
};

const increment = () => {
   internalValue.value++;
};
</script>
<style scoped>
.integer-input {
   display: inline-block;
   width: 3.75rem;
   height: 1.75rem;
   border-radius: 0.25rem;
   border: 0.06rem solid #E5E6EB;
}

:deep(.ant-input-affix-wrapper) {
   padding: 0.44rem 0.5rem;
}

:deep(.ant-input) {
   font-size: 0.88rem;
   color: #1D2129;
   text-align: center;
}
</style>
 