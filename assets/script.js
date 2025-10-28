function setLanguage(lang) {
  // Automatically detect your repo path (e.g., /nm_blog/)
  const repoName = 'nm_blog'; // or change if your repo name changes later
  const base = `/${repoName}/`;

  if (lang === 'en') {
    window.location.href = base + 'en/index.html';
  } else if (lang === 'ml') {
    window.location.href = base + 'ml/index.html';
  }
}
