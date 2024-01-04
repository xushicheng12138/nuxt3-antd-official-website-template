<template>
   <div class="flex flex-col items-center">
      <div class="w-full h-auto xl:h-20 flex justify-center xl:justify-between items-center" v-if="isShowTitle">
         <span class="hidden xl:block text-[#1D2129] text-2xl font-bold lending-20">
            {{ title }}
         </span>
         <div class="text-[0.88rem] text-[#4E5969] py-4 xl:py-0">
            <span>Displaying 0-12 of</span>
            <span class="font-bold">&nbsp;{{ dataNum }}&nbsp;</span>
            <span>Results</span>
         </div>
      </div>
      <div class="w-full mb-10 flex flex-wrap justify-center xl:grid gap-4 text-[#1D2129] text-xs" :style="`grid-template-columns: repeat(${colNum}, minmax(0, 1fr));
`">
         <div v-for="(item, index) in dataList" :key="index" class="parent-bg"
            @click="$navigate({ path: `/products/${item.id}` })">
            <div class="child-bg">
               {{ item.name }}
            </div>
            <div class="flex justify-center items-center pt-[0.63rem]">
               <img :src="item.pic" alt="" class="w-[8.06rem] h-[8.13rem]" />
            </div>
            <div class="flex flex-col justify-between h-[3.4rem] mt-5">
               <div v-for="(subitem, index) in item.subLlist" :key="index" class="flex items-center">
                  <span class="w-[3.44rem] text-right truncate">{{ subitem.weight }}</span>
                  <span class="w-[0.88rem] h-[0.88rem] text-[#E5E6EB]">丨</span>
                  <span class="w-[2.31rem] truncate">{{ subitem.money }}</span>
                  <span class="w-[0.88rem] h-[0.88rem] text-[#E5E6EB]">丨</span>
                  <span class="flex-1 truncate pr-2">
                     <img src="/images/in-stock.png" class="w-3 h-3 mr-[0.13rem]" alt="" v-show="subitem.isHave" />
                     <span class="text-ellipsis" v-show="subitem.isHave">in stock</span>
                     <span v-show="!subitem.isHave">{{ subitem.time }}</span>
                  </span>
               </div>
            </div>
            <div class="child-color">
               SEE DETAILS
               <img src="/images/point-r.png" class="w-[0.88rem] h-[0.88rem]" alt="" />
            </div>
         </div>
      </div>
      <a-pagination v-if="totalPages > 1" :total="dataNum" :pageSize="pageSize" :current="currentPage"
         @change="handlePageChange">
         <!-- <template #itemRender="{ type, originalElement }">
            <a v-if="type === 'prev'">
               <img src="/images/prev.png" alt="" class="w-4 h-4" v-if="type === 'prev'" />
            </a>
            <a v-else-if="type === 'next'">
               <img src="/images/next.png" alt="" class="w-4 h-4" v-if="type === 'next'" />
            </a>
            <component :is="originalElement" v-else></component>
         </template> -->
      </a-pagination>
   </div>
</template>
<script setup lang="ts">
const { $navigate } = useNuxtApp()
interface subLlist {
   weight: number;
   money: string;
   isHave: boolean;
   time: string;
}
interface dataListItem {
   id: number;
   name: string;
   pic: string;
   subLlist: subLlist[];
}
const Props = defineProps({
   isShowTitle: {
      type: Boolean,
      default: true,
   },
   title: {
      type: String,
      default: '',
   },
   colNum: {
      type: String,
      default: '4',
   },
   dataNum: {//总数据量
      type: Number,
      default: 12,
   },
});


const originalObject = {
   id: 1,
   name: "6-Amino-3-methoxy Favipiravir",
   pic: "/images/A003350.png",
   subLlist: [
      {
         weight: '25g',
         money: '$4.00',
         isHave: true,
         time: 'Delivery period (1-3) days',
      },
      {
         weight: '100g',
         money: '$4.00',
         isHave: true,
         time: 'Delivery period (1-3) days',
      },
      {
         weight: '500g',
         money: '$25.00',
         isHave: false,
         time: 'Delivery period (1-3) days',
      }
   ]
};

const pageSize = ref(12);//每页数量
const totalPages = ref(1);//总页数
const currentPage = ref(1);//当前页
const dataList = ref<dataListItem[]>([]);//数据

const generateItems = (num: any) => {
   // 模拟数据源
   return Array.from({ length: num }, () => ({ ...originalObject }));
}

const updateDataList = (num: any) => {
   const startIndex = (currentPage.value - 1) * pageSize.value;
   const endIndex = startIndex + pageSize.value;
   dataList.value = generateItems(num).slice(startIndex, endIndex);
   totalPages.value = Math.ceil(num / pageSize.value);
}

const handlePageChange = (page: number, Size: number) => {
   currentPage.value = page;
   pageSize.value = Size;
   updateDataList(Props.dataNum);
}

watchEffect(() => {
   updateDataList(Props.dataNum);
});
</script>