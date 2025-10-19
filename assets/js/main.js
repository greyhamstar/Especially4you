
// year in footer
document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
});

// burger
document.addEventListener('DOMContentLoaded',()=>{
  const b=document.getElementById('burger'), m=document.getElementById('navmenu');
  if(b&&m) b.addEventListener('click',()=>{
    const o=m.classList.toggle('show'); b.setAttribute('aria-expanded', o?'true':'false');
  });
});

// Gallery: unlimited via gallery.json; fallback: g1..g5000 with png/jpg/jpeg/webp
(async ()=>{
  const grid=document.getElementById('galleryGrid'); if(!grid) return;
  const add=(src,alt)=>{
    const a=document.createElement('a'); a.className='tile'; a.href=src; a.target='_blank';
    const im=document.createElement('img'); im.loading='lazy'; im.decoding='async'; im.src=src; im.alt=alt||'Gallery';
    a.appendChild(im); grid.appendChild(a);
  };
  const tryManifest=async()=>{
    try{
      const res=await fetch('assets/img/gallery/gallery.json',{cache:'no-store'});
      if(!res.ok) return false;
      const list=await res.json();
      if(!Array.isArray(list) || list.length===0) return false;
      list.forEach(name=>add(`assets/img/gallery/${name}`, name));
      return true;
    }catch(e){ return false; }
  };
  const ok=await tryManifest();
  if(ok) return;
  const max=5000, exts=['png','jpg','jpeg','webp'];
  for(let i=1;i<=max;i++){
    for(const ext of exts){
      const p=`assets/img/gallery/g${i}.${ext}`;
      const img=new Image();
      img.onload=(()=>src=>()=>add(src, `Gallery ${i}`))(p);
      img.src=p+`?v=${Date.now()}`;
    }
  }
})();
