function setLanguage(lang) {
  const base = '/nm_blog/'; // your repo path
  if (lang === 'en') window.location.href = base + 'en/index.html';
  else window.location.href = base + 'ml/index.html';
}
