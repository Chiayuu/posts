function initLevelPage(){
  const q=document.querySelector('#search');
  const tabs=[...document.querySelectorAll('.tab')];
  const sections=[...document.querySelectorAll('.section')];
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active'));t.classList.add('active');
    sections.forEach(s=>s.classList.toggle('active',s.id===t.dataset.target));
    if(q) q.value=''; filterItems('');
  }));
  if(q){q.addEventListener('input',e=>filterItems(e.target.value));}
}
function filterItems(term){
  term=(term||'').toLowerCase().trim();
  document.querySelectorAll('.section.active .item, .section.active tbody tr').forEach(el=>{
    el.style.display=el.textContent.toLowerCase().includes(term)?'':'none';
  });
}
window.addEventListener('DOMContentLoaded',initLevelPage);
