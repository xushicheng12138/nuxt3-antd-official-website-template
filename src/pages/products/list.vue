<template>
  <div>
    <AppHeader @doSearch="searchPro" />
    <AppBreadcrumb parentName="Search results"></AppBreadcrumb>
    <div class="w-full xl:w-[75rem] mx-auto flex flex-col items-center">
      <div class="w-full h-16 xl:h-20 flex justify-between items-center px-4 xl:px-0">
        <span class="text-[#1D2129] text-base xl:text-2xl font-bold">
          Search results for "{{ searchKey }}"
        </span>
        <div class="text-[0.88rem] text-[#4E5969]">
          <span>Displaying 0-12 of</span>
          <span class="font-bold">&nbsp;12&nbsp;</span>
          <span>Results</span>
        </div>
      </div>
      <div class="w-full text-[0.88rem]">
        <a-table :columns="columns" sticky :data-source="arrayOfObjects" size="small" :scroll="{ x: '100%' }">
          <template #bodyCell="{ text, column, record }">
            <template v-if="column.dataIndex === 'action'">
              <span @click="$navigate({ path: `/products/${record.Number}` })" class="text-button-color">
                SEE DETAILS
                <img src="/images/point-r.png" class="w-[0.88rem] h-[0.88rem]" alt="" />
              </span>
            </template>
            <template v-else-if="column.dataIndex === 'Structure'">
              <a-image width="5.63rem" height="5.63rem" :src="text" />
            </template>
            <template v-else>
              <span class="text-[#4E5969] text-[0.88rem]">{{ text }}</span>
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
const { $navigate } = useNuxtApp()
definePageMeta({
  layout: false
})
const searchKey = ref('')
onMounted(() => {
  searchKey.value = useRoute().query.searchKey || '';
});
const searchPro = (data: any) => {
  searchKey.value = data;
  // 查询列表数据
}
const columns = [
  {
    title: 'Structure',
    dataIndex: 'Structure',
  },
  {
    title: 'Catalog Number',
    dataIndex: 'CatalogNumber',
  },
  {
    title: 'Chemical Name',
    dataIndex: 'ChemicalName',
    responsive: ['xl']
  },
  {
    title: 'CAS Number',
    dataIndex: 'CASNumber',
    responsive: ['xl']
  },
  {
    title: 'Molecular Formula',
    dataIndex: 'MolecularFormula',
    responsive: ['xl']
  },
  {
    title: 'Molecular Weight',
    dataIndex: 'MolecularWeight',
    responsive: ['xl']
  },
  {
    title: '',
    dataIndex: 'action',
    width: 150,
  }
];

const originalObject =
{
  key: '0',
  Structure: '/images/A003350.png',
  CatalogNumber: 'AA76267',
  ChemicalName: '1,3-Dimethoxybenzene',
  CASNumber: '151-10-0',
  MolecularFormula: 'C8H10O2',
  MolecularWeight: 'C8H10O2',
}

const arrayOfObjects = Array.from({ length: 12 }, (_, index) => ({
  ...originalObject,
  key: (parseInt(originalObject.key) + index + 1).toString(),
}));
</script>
<style lang="scss" scoped></style>
