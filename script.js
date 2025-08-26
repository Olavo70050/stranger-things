// Acessibilidade: Zoom + Alto contraste
(function(){
  const inc=document.getElementById('font-inc');
  const dec=document.getElementById('font-dec');
  let size=1;
  function resize(f){
    size=f;
    document.body.style.fontSize=size+'rem';
  }
  if(inc) inc.onclick=()=>resize(Math.min(size+.1,1.8));
  if(dec) dec.onclick=()=>resize(Math.max(size-.1,.7));
})();

(function(){
  const btn=document.getElementById('toggle-contrast');
  if(btn) btn.onclick=()=>{
    document.body.classList.toggle('alto-contraste');
  };
})();
