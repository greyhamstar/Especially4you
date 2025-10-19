// burger
document.addEventListener('DOMContentLoaded',()=>{
  const b=document.getElementById('burger'), m=document.getElementById('navmenu');
  if(b&&m) b.addEventListener('click',()=>{
    const o=m.classList.toggle('show'); b.setAttribute('aria-expanded', o?'true':'false');
  });
});
// year
document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
});
// Gallery loader — scans g1..g200 for png/jpg/jpeg/webp (any case)
(()=>{
  const grid=document.getElementById('galleryGrid'); if(!grid) return;
  const MAX=200, EXTS=['png','jpg','jpeg','webp','PNG','JPG','JPEG','WEBP'];
  const add=(src,alt)=>{
    const a=document.createElement('a'); a.className='tile'; a.href=src; a.target='_blank';
    const im=document.createElement('img'); im.loading='lazy'; im.decoding='async'; im.src=src; im.alt=alt||'Gallery';
    a.appendChild(im); grid.appendChild(a);
  };
  for(let i=1;i<=MAX;i++){
    let chosen=false;
    for(const ext of EXTS){
      const p=`assets/img/gallery/g${i}.${ext}`;
      const t=p+`?v=${Date.now()}`;
      const img=new Image();
      img.onload=()=>{ if(!chosen){ chosen=true; add(p, `g${i}.${ext}`); }};
      img.src=t;
    }
  }
})();
