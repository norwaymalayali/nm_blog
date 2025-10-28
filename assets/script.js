function setLanguage(lang) {
  const base = window.location.origin; // https://www.norwaymalayali.com

  if (lang === 'en') window.location.href = base + '/en/index.html';
  else if (lang === 'ml') window.location.href = base + '/ml/index.html';
}
