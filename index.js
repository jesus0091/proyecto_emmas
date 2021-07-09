// SPA
window.onload = router();
$(window).on("hashchange", function () {
  router();
});