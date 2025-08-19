// Zoom acessível e alto contraste
(function(){
  const inc = document.getElementById('font-inc');
  const dec = document.getElementById('font-dec');
  const live = document.createElement('div');
  live.setAttribute('aria-live','polite');
  live.style.position='absolute';live.style.left='-9999px';
  document.body.appendChild(live);
  let size = 1;
  inc.addEventListener('click', ()=>{ size=Math.min(size+.1,1.8); document.body.style.fontSize=size+'rem'; live.textContent='Fonte '+(size*100).toFixed(0)+'%';});
  dec.addEventListener('click', ()=>{ size=Math.max(size-.1,.7); document.body.style.fontSize=size+'rem'; live.textContent='Fonte '+(size*100).toFixed(0)+'%';});
})();

(function(){
  const btn = document.getElementById('toggle-contrast');
  btn.addEventListener('click', ()=>{
    const pressed = btn.getAttribute('aria-pressed')==='true';
    btn.setAttribute('aria-pressed', String(!pressed));
    document.body.classList.toggle('alto-contraste');
  });
})();