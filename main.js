// SKILL&TOOL
toolTab.style.color = "var(--text-color)";
  languageTab.style.color = "var(--first-color)";
document.getElementById('toolContent').style.display = 'none';

document.getElementById('languageTab').addEventListener('click', function() {
  document.getElementById('languageContent').style.display = 'block';
  document.getElementById('toolContent').style.display = 'none';
  toolTab.style.color = "var(--text-color)";
  languageTab.style.color = "var(--first-color)";
  
  

});

document.getElementById('toolTab').addEventListener('click', function() {
  document.getElementById('toolContent').style.display = 'block';
  document.getElementById('languageContent').style.display = 'none';
  languageTab.style.color = "var(--text-color)";
  toolTab.style.color = "var(--first-color)";
});
