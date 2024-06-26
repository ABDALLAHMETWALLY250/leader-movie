export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie("token");
  if (!token.value && to.path == "/") {
    return navigateTo("/auth/login");
  } else {
    return navigateTo("/");
  }
});
