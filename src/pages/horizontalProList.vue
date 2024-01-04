<template>
  <div>
    <AppBreadcrumb :parentName="$route.query.name"></AppBreadcrumb>
    <div class="w-full xl:w-[75rem] mx-auto flex flex-col items-center mb-[4rem]">
      <AppTableList :title="$route.query.name" :dataNum="dataNum" />
    </div>
  </div>
</template>
<script setup lang="ts">
const dataNum = ref(44)
const router = useRouter()
watch(
  () => router.currentRoute.value.query.name,
  (newVal) => {
    if (newVal === 'Research Tools') {
      loadData(30)
    } else {
      loadData(120)
    }
  }
)

const loadData = (num: number) => {
  dataNum.value = num
}
</script>