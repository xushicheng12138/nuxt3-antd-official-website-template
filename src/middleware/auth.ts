// 测试
function isAuthenticated() {
  const { $storage } = useNuxtApp();
  const authToken = $storage.get("isLogin");
  return !!authToken;
}

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;
  if (isAuthenticated() === false) {
      return navigateTo("/");;
  }
});
