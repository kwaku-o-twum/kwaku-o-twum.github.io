const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
if(toggle&&nav){
  const closeMenu=()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');};
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
}
const filters=document.querySelectorAll('[data-filter]');
const projects=document.querySelectorAll('.project-card[data-category]');
filters.forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  filters.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  let count=0;
  projects.forEach(card=>{const show=filter==='all'||card.dataset.category===filter;card.hidden=!show;if(show)count++;});
  const status=document.querySelector('.filter-status');
  if(status)status.textContent=`${count} project${count===1?'':'s'}`;
}));
