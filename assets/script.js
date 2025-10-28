function setLanguage(lang) {
  // This detects your current base path (e.g., /nm_blog/)
  const currentPath = window.location.pathname;
  const repoPath = currentPath.split('/')[1]; // "nm_blog"
  const base = '/' + repoPath + '/';

  if (lang === 'en') {
    window.location.href = base + 'en/index.html';
  } else if (lang === 'ml') {
    window.location.href = base + 'ml/index.html';
  }
}
