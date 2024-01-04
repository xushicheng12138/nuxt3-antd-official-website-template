<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import '~/assets/css/main.css'
</script>
<style lang="scss">
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 10px;
  }

  html {
    font-size: 14px;
  }
}

@media (min-width: 1280px) {
  html {
    font-size: 16px;
  }
}
</style>