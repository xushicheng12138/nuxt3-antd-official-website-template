<template>
   <div class="h-fit xl:h-screen xl:min-h-[100vh] flex flex-col">
      <AppHeader />
      <div class="flex-1">
         <slot />
      </div>
      <AppFooter />
   </div>
</template>
<script setup></script>
