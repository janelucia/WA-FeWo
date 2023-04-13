// Event Listeners

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  if (currentPath.endsWith('/')) {
    renderOverviewPage();
  }
  if (currentPath.endsWith('/about.html')) {
    renderAboutPage();
  }
});
