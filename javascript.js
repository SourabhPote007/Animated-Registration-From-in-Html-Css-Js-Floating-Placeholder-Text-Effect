let label = document.querySelectorAll('label').
forEach(label => {
label.innerHTML = label.innerText.split('').map
((Letters, i) => `<span style="transition-delay:${i * 50}ms">${Letters}</span>`).join('');
});