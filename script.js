const no = document.getElementById('no');
const yes = document.getElementById('yes');
const msg = document.getElementById('message');

yes.addEventListener('click', ()=> {
  msg.textContent = "Yehey! Salamat 😊";
  yes.disabled = true;
  no.style.display = 'none';
});

no.addEventListener('mouseover', ()=> {
  const x = Math.random() * (window.innerWidth - no.offsetWidth);
  const y = Math.random() * (window.innerHeight - no.offsetHeight);
  no.style.position = 'fixed';
  no.style.left = x + 'px';
  no.style.top = y + 'px';
});