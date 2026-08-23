(function(){
  const btn=document.getElementById('menuBtn');
  const nav=document.getElementById('navlinks');
  if(btn && nav){
    btn.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    document.addEventListener('click',(e)=>{
      if(!nav.contains(e.target) && !btn.contains(e.target)){
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
      }
    });
  }
  const topBtn=document.querySelector('.scroll-top');
  if(topBtn){ topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})); }
})();
