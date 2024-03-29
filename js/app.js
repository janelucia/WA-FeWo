// Event Listeners

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  if (currentPath.endsWith('/') || currentPath.endsWith('/index.html')) {
    renderOverviewPage();
  }
  if (currentPath.endsWith('/about.html')) {
    renderAboutPage();
  }
});
