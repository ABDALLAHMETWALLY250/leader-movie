export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie("token");
  if (!token.value && to.path == "/") {
    return navigateTo("/auth/login");
  }

  if (
    (to.path == "/auth/login" || to.path == "/auth/register") &&
    token.value
  ) {
    return navigateTo("/");
  }
});
