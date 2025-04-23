const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// 초기 테마 설정 (로컬스토리지 또는 OS 설정)
const stored = localStorage.getItem('theme');
if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  root.classList.add('dark');
}

// 토글 클릭 시
toggle?.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
