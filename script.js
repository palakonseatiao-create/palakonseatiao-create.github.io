// Smooth scrolling for nav links and mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  // set current year
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

  // smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav if open
        const navList = document.querySelector('.nav ul');
        if(window.getComputedStyle(document.querySelector('.nav-toggle')).display !== 'none' && navList.classList.contains('open')){
          navList.classList.remove('open');
        }
      }
    });
  });

  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav ul');
  if(toggle && navList){
    toggle.addEventListener('click', ()=>{
      navList.classList.toggle('open');
    });
  }
});
