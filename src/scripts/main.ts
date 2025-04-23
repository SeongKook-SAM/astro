// DOM 요소
const themeToggle = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

// 현재 테마 확인 및 아이콘 업데이트 함수
function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');

  if (isDark) {
    lightIcon?.classList.add('hidden');
    lightIcon?.classList.remove('block');
    darkIcon?.classList.add('block');
    darkIcon?.classList.remove('hidden');
  } else {
    lightIcon?.classList.add('block');
    lightIcon?.classList.remove('hidden');
    darkIcon?.classList.add('hidden');
    darkIcon?.classList.remove('block');
  }
}

// 초기 테마 설정
function initializeTheme() {
  // 로컬 스토리지 확인
  const savedTheme = localStorage.getItem('theme');

  if (
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // 아이콘 업데이트
  updateThemeIcons();
}

// 테마 토글 함수
function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');

  if (isDark) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  updateThemeIcons();
}

// 초기화
document.addEventListener('DOMContentLoaded', initializeTheme);

// 이벤트 리스너
themeToggle?.addEventListener('click', toggleTheme);

// 페이지가 이미 로드된 경우에도 실행
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initializeTheme();
}
