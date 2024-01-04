<template>
  <div>
    <AppBreadcrumb parentName="Structure Search"></AppBreadcrumb>
    <div class="w-full xl:w-[75rem] mx-auto flex flex-col mb-[6.25rem]">
      <iframe ref="ketcherFrame" id="idKetcher" src="/static/search/ketcher/ketcher.html" width="100%" height="534"
        class="mt-10 search-border">
      </iframe>
      <div class="h-10 flex justify-center space-x-5 mt-7 mb-12">
        <a-button class="w-[9.38rem] h-full submit-buttom-bg rounded" @click="performAction(exactMatch)">
          <template #icon>
            <img src="/images/search-icon.png" alt="" class="w-[0.88rem] h-[0.87rem] mr-2" />
          </template>
          <span class="text-white text-[0.88rem] font-medium">
            Exact Match
          </span>
        </a-button>
        <a-button class="w-[9.38rem] h-full submit-buttom-bg rounded" @click="performAction(substructure)">
          <template #icon>
            <img src="/images/search-icon.png" alt="" class="w-[0.88rem] h-[0.87rem] mr-2" />
          </template>
          <span class="text-white text-[0.88rem] font-medium">
            Substructure
          </span>
        </a-button>
        <a-button class="w-[10.63rem] h-full submit-buttom-bg rounded" @click="performAction(similarity)">
          <template #icon>
            <img src="/images/search-icon.png" alt="" class="w-[0.88rem] h-[0.87rem] mr-2" />
          </template>
          <span class="text-white text-[0.88rem] font-medium mr-3">
            Similarity
          </span>
          <a-input-number v-model:value="numberValue" @click.stop="stop" :precision="1" @step="stop" size="small"
            :step="0.1" :min="0" :max="1" class="h-[1.44rem] text-[#1D2129] text-xs" />
        </a-button>
      </div>
      <AppTableList title="Search results" />
    </div>
  </div>
</template>
<script setup>
const numberValue = ref(0.1);
const ketcherFrame = ref(null);
const smiles = ref('');
const ketcher = ref(null);
const performAction = async (actionFunction) => {
  smiles.value = await getSmiles();
  actionFunction();
};

const stop = () => {
  console.log(numberValue.value)
}

const exactMatch = () => {
  // 精确搜索
  console.log('Performing Exact Match', smiles.value);
};

const substructure = () => {
  // 模糊搜索
  console.log('Performing Substructure', smiles.value);
};

const similarity = () => {
  // 相似度搜索
  console.log('Performing Similarity', numberValue.value, smiles.value);
};

const getSmiles = () => {
  initKetcher();
  return ketcher.value.getSmiles();
};

const initKetcher = () => {
  if (ketcher.value) {
    return;
  }
  const tempKetcher = ketcherFrame.value?.contentDocument?.defaultView?.ketcher || document.frames['idKetcher'].window.ketcher;
  if (!tempKetcher) {
    console.warn('ketcher控件未初始化完毕');
    return;
  }
  ketcher.value = tempKetcher;
};

onBeforeUnmount(() => {
  ketcher.value = null;
});
</script>
<style lang="scss" scoped>
:deep(.ant-input-number-input) {
  line-height: 1.44rem !important;
  height: 1.44rem;
  padding-left: 0.2rem;
}
</style>
