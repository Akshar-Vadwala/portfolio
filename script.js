document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '[ ☀ Light Mode ]';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleBtn.textContent = '[ ☾ Dark Mode ]';
  }

  toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      toggleBtn.textContent = '[ ☾ Dark Mode ]';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleBtn.textContent = '[ ☀ Light Mode ]';
    }
  });
});