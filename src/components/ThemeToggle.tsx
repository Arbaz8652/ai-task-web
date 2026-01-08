export function ThemeToggle() {
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute(
      'data-theme',
      current === 'dark' ? 'light' : 'dark',
    );
  }

  return (
    <button onClick={toggleTheme} style={{ marginLeft: 'auto' }}>
      Toggle Theme
    </button>
  );
}
