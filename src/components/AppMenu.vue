<template>
   <div class="flex items-center space-x-[3.75rem]">
      <span class="menu-text">
         <a-dropdown trigger="click" :overlayClassName="overlayClassName">
            <span class="flex justify-center items-center">
               Products
               <img src="/images/chevron-down.png" alt="" class="w-4 h-4" />
            </span>
            <template #overlay>
               <ul :class="containerClass" :style="containerStyle" @click="handleItemClick">
                  <li v-for="(item, index) in dataSource" :key="index" :class="itemClass(item)">
                     {{ item.name }}
                  </li>
               </ul>
            </template>
         </a-dropdown>
      </span>
      <span class="menu-text" @click="$navigate({ path: '/horizontalProList', query: { name: 'Building Blocks' } })">
         Building Blocks
      </span>
      <span class="menu-text" @click="$navigate({ path: '/horizontalProList', query: { name: 'Research Tools' } })">
         Research Tools
      </span>
      <span class="menu-text">
         <a-dropdown trigger="click" :overlayClassName="supportClassName">
            <span class="flex justify-center items-center">
               Support
               <img src="/images/chevron-down.png" alt="" class="w-4 h-4" />
            </span>
            <template #overlay>
               <ul :class="`rounded-sm ${downRootClass}`">
                  <li v-for="(item, index) in supportMenu" :key="index">
                     <NuxtLink :to="item.routeName"
                        :class="`w-full flex items-center px-3 py-[0.38rem] ${downSubitemClass}`">{{ item.name }}
                     </NuxtLink>
                  </li>
               </ul>
            </template>
         </a-dropdown>
      </span>
   </div>
</template>
<script setup lang="ts">
const { $navigate } = useNuxtApp()
interface SupportMenuItem {
   name: string;
   routeName: string;
}
//默认首页样式
const props = defineProps({
   overlayBgImage: {
      //Products菜单背景图片
      type: String,
      default: "none",
   },
   supportClassName: {
      type: String,
      default: "",
   },
   overlayClassName: {
      //Products菜单dropdown自定义位置
      type: String,
      default: "fixed top-[6.06rem] left-1/2 transform -translate-x-1/2",
   },
   downRootClass: {
      type: String,
      default: "bg-sy",
   },
   downSubitemClass: {
      type: String,
      default: "text-[#A4ACB6] hover:bg-[#4E5969] hover:text-white",
   },
   supportMenu: {
      type: Array as () => SupportMenuItem[],
      default: () => [
         { name: "Terms & Conditions", routeName: "/support/terms" },
         { name: "Shipping Methods", routeName: "/support/shipping" },
         { name: "Orders & Payments", routeName: "/support/orders" },
      ],
   },
});

const isLetter = (char: string) => /^[A-Z]$/.test(char);
const containerClass = `${props.downRootClass} w-full xl:w-[75rem] h-[43.75rem] product-max-h flex flex-col flex-wrap overflow-hidden rounded-b-xl text-[#4E5969]`;
const containerStyle = `background-image: ${props.overlayBgImage};`;
const itemClass = (item: any) => {
   const baseClass = `${props.downSubitemClass} w-[13.5rem] h-[1.88rem] ml-5 leading-[1.88rem]`;
   return isLetter(item.name) ? `${baseClass} letterStyle` : `${baseClass} cursor-pointer`;
};

const handleItemClick = (event: any) => {
   // 事件委托
   const target = event.target;
   if (target && target.nodeName === 'LI') {
      const index = Array.from(target.parentNode.children).indexOf(target);
      let clickedItem = dataSource[index];
      if (clickedItem.id) {
         return navigateTo({
            path: '/horizontalProList',
            query: {
               name: clickedItem.name,
            }
         })
      }
   }
};

// 创建测试数据
const crateData = () => {
   const jsonData = [];
   for (let letterCode = 65; letterCode <= 90; letterCode++) {
      const letter = String.fromCharCode(letterCode);
      const itemCount = letter === 'A' ? 10 : letter === 'B' ? 3 : 5; // A 10条B 3条 其余3条
      for (let i = 0; i < itemCount; i++) {
         const id: number = jsonData.length + 1;
         const name = letter + generateRandomName();
         jsonData.push({ id, name });
      }
   }
   return jsonData;
}

function generateRandomName() {
   // 随机name
   const randomLength = Math.floor(Math.random() * (20 - 12 + 1)) + 12;//12至20位数之间
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let randomName = '';
   for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomName += characters.charAt(randomIndex);
   }
   return randomName;
}

// 插入目录开头字母
const insertLetter = () => {
   const jsonData = crateData()
   const processedData: any = [];
   for (const item of jsonData) {
      const firstLetter = item.name.charAt(0).toUpperCase();
      const existingData = processedData.find(data => data.name === firstLetter);
      if (existingData) {
         processedData.push(item);
      } else {
         processedData.push({
            name: firstLetter
         });
      }
   }
   return processedData;
}
const dataSource = insertLetter()
</script>
