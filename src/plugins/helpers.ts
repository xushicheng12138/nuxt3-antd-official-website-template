export default defineNuxtPlugin(() => {
  return {
    provide: {
      navigate: (url: Object) => {
        return navigateTo(url)
      }
    }
  }
})