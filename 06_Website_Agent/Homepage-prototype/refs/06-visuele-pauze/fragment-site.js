<script>
/* assets/hi-home-motion.js — one rAF loop drives every scroll effect via a 0..1 progress value; no library needed. */
(function(){
  var d=document,root=d.documentElement,motion=!matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');if(motion)root.classList.add('motion');
  var clamp=function(v){return v<0?0:v>1?1:v},vh=innerHeight,desk=matchMedia('(min-width:769px)');

  // film: crossfade own photos, label follows the active sport
  var film=d.querySelector('[data-film]'),shots=film.querySelectorAll('img'),label=film.querySelector('[data-film-label]'),tog=film.querySelector('[data-film-toggle]'),fi=0,timer;
  function next(){shots[fi].classList.remove('is-on');fi=(fi+1)%shots.length;shots[fi].classList.add('is-on');label.textContent=shots[fi].dataset.sport}
  function play(){timer=setInterval(next,4200);tog.setAttribute('aria-label','Pauzeer de beelden');tog.innerHTML='<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1h3v12H3zM8 1h3v12H8z" fill="currentColor"/></svg>'}
  function stop(){clearInterval(timer);timer=0;tog.setAttribute('aria-label','Speel de beelden af');tog.innerHTML='<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1l10 6-10 6z" fill="currentColor"/></svg>'}
  tog.addEventListener('click',function(){timer?stop():play()});
  if(motion){shots.forEach(function(i){i.loading='eager'});play()}else stop();

  // statement: split into words at runtime (text stays plain in the HTML)
  var st=d.querySelector('[data-words]'),words=[];
  if(st&&motion){st.innerHTML=st.textContent.trim().split(/\s+/).map(function(w){return '<span class="w">'+w+'</span>'}).join(' ');words=st.querySelectorAll('.w')}

  // sport list: photo follows the cursor on desktop
  var list=d.querySelector('[data-peeklist]'),peek=d.querySelector('.peek'),pimg=peek.querySelector('img'),px=0,py=0,tx=0,ty=0;
  if(list&&motion&&matchMedia('(hover:hover)').matches){
    list.addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY});
    list.querySelectorAll('[data-peek]').forEach(function(a){
      a.addEventListener('pointerenter',function(e){if(!peek.classList.contains('is-on')){px=tx=e.clientX;py=ty=e.clientY}pimg.src=a.dataset.peek;peek.classList.add('is-on');peek.style.scale='1'});
      a.addEventListener('pointerleave',function(){peek.classList.remove('is-on');peek.style.scale='.86'});
    });
  }

  // 2.0: active zone switches the product view; colour toggle
  var stage=d.querySelector('[data-stage]'),cap=d.querySelector('[data-stage-cap]'),buy=d.querySelector('[data-buy20]'),color='zwart',side='voor';
  function view(){var key=color+'-'+(color==='wit'?'voor':side);stage.querySelectorAll('img').forEach(function(i){i.classList.toggle('is-on',i.dataset.view===key)});
    cap.textContent=(color==='wit'?'Wit':'Zwart')+' · '+(key.indexOf('achter')>0?'achterkant met gripzones':'voorkant');
    buy.href='https://www.higrip.nl/products/performance-gripsokken-2-0-'+color}
  d.querySelectorAll('[data-color]').forEach(function(b){b.addEventListener('click',function(){color=b.dataset.color;d.querySelectorAll('[data-color]').forEach(function(x){x.setAttribute('aria-pressed',x===b)});view()})});
  var zones=d.querySelectorAll('.zone');
  if('IntersectionObserver' in window){
    var zo=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){zones.forEach(function(z){z.classList.toggle('is-on',z===e.target)});side=e.target.dataset.show;view()}})},{rootMargin:'-45% 0px -50% 0px'});
    zones.forEach(function(z){zo.observe(z)});
    var meter=d.querySelector('[data-meter]');
    var mo=new IntersectionObserver(function(es){if(es[0].isIntersecting){meter.classList.add('is-in');mo.disconnect()}},{threshold:.6});mo.observe(meter);
  }

  // people: vertical scroll moves the photo track sideways on desktop
  var people=d.querySelector('[data-people]'),track=d.querySelector('[data-track]'),over=0;
  function size(){vh=innerHeight;if(desk.matches&&motion){track.style.transform='';over=Math.max(0,track.scrollWidth-innerWidth);people.style.setProperty('--ph',(vh+over)+'px')}else{over=0;people.style.removeProperty('--ph');track.style.transform=''}}
  addEventListener('resize',size);addEventListener('load',size);size();

  var outro=d.querySelector('[data-outro]'),endimg=outro.querySelector('.endcard img'),head=d.querySelector('.head'),dock=d.querySelector('[data-dock]'),lastY=scrollY,ticking=false;
  function frame(){
    ticking=false;var y=scrollY,r;
    head.classList.toggle('is-hidden',y>lastY&&y>200);lastY=y;
    dock.classList.toggle('is-on',y>vh*.9&&outro.getBoundingClientRect().top>vh*.6);
    if(!motion)return;
    // film opens to full bleed as you scroll past the hero
    r=film.getBoundingClientRect();var fp=clamp((y)/(Math.max(1,r.top+y-90)));

    film.style.setProperty('--ix',(1-fp)*Math.min(56,Math.max(16,innerWidth*.04))+'px');film.style.setProperty('--r',(1-fp)*22+'px');
    if(words.length){r=st.getBoundingClientRect();var wp=clamp((vh*.85-r.top)/(r.height+vh*.35)),n=Math.round(wp*words.length);for(var i=0;i<words.length;i++)words[i].classList.toggle('is-lit',i<n)}
    if(over){r=people.getBoundingClientRect();track.style.transform='translate3d('+(-clamp(-r.top/over)*over)+'px,0,0)'}
    r=outro.getBoundingClientRect();var op=clamp((vh-r.top)/(vh*.75));
    endimg.style.setProperty('--s',(1.14-op*.14).toFixed(4));
  }
  function req(){if(!ticking){ticking=true;requestAnimationFrame(frame)}}
  addEventListener('scroll',req,{passive:true});frame();
  (function loop(){if(peek.classList.contains('is-on')||Math.abs(tx-px)>.5){px+=(tx-px)*.18;py+=(ty-py)*.18;peek.style.transform='translate3d('+(px+24)+'px,'+(py-170)+'px,0)'}requestAnimationFrame(loop)})();
})();
</script>