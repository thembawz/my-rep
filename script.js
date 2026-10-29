// ===== EDIT THESE =====
const BDAY_MONTH = 10, BDAY_DAY = 20; // month is 0-based: 10 = November
const CHAT = [
  ["me","i want something to code"],
  ["her","A website"],
  ["me","huh ?"],
  ["her","Za3ma a website"],
  ["her","W ykoun kayn two choices. Yes and no"],
  ["me","i m looking for something usefull to code"],
  ["her","Yea it’s a good idea"],
  ["me","but its not usefull"],
  ["her","Yea wtv"],
  ["me","yep"],
  ["me","Update: I understood. Sorry it took a year 🫡"]
];
const REASONS = [
  ["She hints so hard it counts as a skill 😂","She planned this website a whole year ago and I only noticed now."],
  ["DM9","Our secret word. Roughly translates to “go away, I don’t care” 😂 Only we understand its full power."],
  ["She’s smart","Smart enough to hint at this website twice, and to know I’d eventually get it."],
  ["She’s my female version","Same brain, same humor. If there was a female edition of me, it’s her."],
  ["She believes in me","She thinks I’m a web developer. Bold of her. I’m trying my best."],
  ["She has the ideas","I asked for something to code and she answered with a whole website idea in seconds."]
];
const note="Concept sketch. The real one may look a bit different.";
const COUPONS = [
 ["🔑","Electronic keychain","A little gadget I’ll build for you",
  `<svg viewBox="0 0 200 200"><circle cx="100" cy="26" r="18" fill="none" stroke="#d9a57a" stroke-width="6"/><rect x="88" y="42" width="24" height="16" rx="4" fill="#d9a57a"/><rect x="45" y="56" width="110" height="124" rx="18" fill="#5a2f22" stroke="#ff7eb6" stroke-width="3"/><rect x="60" y="72" width="80" height="50" rx="6" fill="#1a0e0b" stroke="#ff7eb666"/><text x="100" y="102" text-anchor="middle" font-size="15" fill="#ff9cc8" font-family="monospace">♥ MALAK ♥</text><circle cx="70" cy="150" r="7" fill="#ff7eb6"/><circle cx="100" cy="150" r="7" fill="#ffc9de"/><circle cx="130" cy="150" r="7" fill="#d9a57a"/></svg>`,
  "A tiny electronic keychain I’ll build and program myself: a small screen that shows your name and a cute animation, plus little lights you can switch with a button. It clips onto your keys or bag."],
 ["🎮","Mini game","A custom game made just for you",
  `<svg viewBox="0 0 200 200"><path d="M45 75Q45 55 72 55H128Q155 55 155 75L170 130Q175 160 150 160Q135 160 125 143H75Q65 160 50 160Q25 160 30 130Z" fill="#5a2f22" stroke="#ff7eb6" stroke-width="3"/><rect x="58" y="97" width="28" height="9" rx="2" fill="#ffc9de"/><rect x="67" y="88" width="9" height="27" rx="2" fill="#ffc9de"/><circle cx="125" cy="92" r="7" fill="#ff7eb6"/><circle cx="143" cy="105" r="7" fill="#ffc9de"/><circle cx="125" cy="118" r="7" fill="#d9a57a"/></svg>`,
  "A small game made for you, with our inside jokes, pink and brown visuals, and a secret ending. You can play it right in your browser."],
 ["📱","Custom wallpapers","Pink, brown and tulips",
  `<svg viewBox="0 0 200 200"><defs><linearGradient id="wp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a1f19"/><stop offset="1" stop-color="#ff7eb6"/></linearGradient></defs><rect x="60" y="14" width="80" height="172" rx="14" fill="url(#wp)" stroke="#d9a57a" stroke-width="4"/><text x="100" y="50" text-anchor="middle" font-size="16" fill="#ffc9de" font-family="sans-serif">9:41</text><text x="100" y="125" text-anchor="middle" font-size="44">🌷</text></svg>`,
  "A set of phone wallpapers in your colors, pink and brown, with tulips. Made by me, so you won’t find them anywhere else."],
 ["💡","Glow-up gadget","A light-up surprise project",
  `<svg viewBox="0 0 200 200"><circle cx="100" cy="80" r="42" fill="#ff9cc8"/><circle cx="100" cy="80" r="26" fill="#fff2f7" opacity=".8"/><rect x="82" y="120" width="36" height="30" rx="6" fill="#5a2f22" stroke="#d9a57a" stroke-width="3"/><g stroke="#ffc9de" stroke-width="4" stroke-linecap="round"><path d="M100 18V6M44 80H30M170 80H156M58 38L48 28M142 38L152 28"/></g></svg>`,
  "A small glowing surprise project, like a light-up decoration or mini lamp. I’ll pick the design and keep it a surprise until you get it."],
 ["🌐","One more website","For your next birthday",
  `<svg viewBox="0 0 200 200"><rect x="25" y="40" width="150" height="120" rx="12" fill="#2c1914" stroke="#ff7eb6" stroke-width="3"/><path d="M25 64H175" stroke="#ff7eb6" stroke-width="3"/><circle cx="40" cy="52" r="4" fill="#ff7eb6"/><circle cx="54" cy="52" r="4" fill="#d9a57a"/><circle cx="68" cy="52" r="4" fill="#ffc9de"/><text x="100" y="125" text-anchor="middle" font-size="40">🌷</text></svg>`,
  "Next year, another website. By then I’ll actually know what I’m doing 😅"]
];
// ======================
const $=id=>document.getElementById(id);
let unlocked=false,lastPT='mouse';
addEventListener('pointerdown',e=>lastPT=e.pointerType,true);

// particles
const cv=$('fx'),x=cv.getContext('2d');let ps=[];
function rs(){cv.width=innerWidth;cv.height=innerHeight;}rs();addEventListener('resize',rs);
function add(px,py,o={}){ps.push({x:px,y:py,vx:o.vx??(Math.random()-.5)*1.2,vy:o.vy??Math.random()*1+.4,r:Math.random()*3,vr:(Math.random()-.5)*.1,s:o.s??(5+Math.random()*6),l:1,c:o.c??['#ff8fc0','#ffc9de','#ff5fa2','#d9a57a'][Math.floor(Math.random()*4)]});}
function burst(px,py,n){for(let i=0;i<n;i++){const a=Math.random()*6.28,v=1+Math.random()*4;add(px,py,{vx:Math.cos(a)*v,vy:Math.sin(a)*v-1});}}
function confetti(){const c=['#ff7eb6','#ffc9de','#fff','#d9a57a','#a8643f'];for(let i=0;i<140;i++)add(Math.random()*innerWidth,-20-Math.random()*300,{vx:(Math.random()-.5)*2,vy:2+Math.random()*3,s:4+Math.random()*4,c:c[i%5]});}
let last=0;
function mv(e){const t=e.touches?e.touches[0]:e;const n=performance.now();if(n-last<35)return;last=n;add(t.clientX,t.clientY);}
addEventListener('pointermove',mv);addEventListener('touchmove',mv,{passive:true});
(function loop(){x.clearRect(0,0,cv.width,cv.height);
  ps=ps.filter(p=>p.l>0&&p.y<cv.height+30);
  ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.01;p.r+=p.vr;p.l-=.006;x.save();x.globalAlpha=Math.max(p.l,0);x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.shadowColor=p.c;x.shadowBlur=10;x.beginPath();x.ellipse(0,0,p.s,p.s*.55,0,0,6.28);x.fill();x.restore();});
  requestAnimationFrame(loop);})();

// glowing tulip scene
const G=$('garden');
function head(open){
  const f=open?14:0;
  const side=(a,sx)=>`<path fill="url(#h2)" transform="rotate(${a})" d="M${-2*sx} 6C${-24*sx} 2 ${-27*sx} -30 ${-16*sx} -48C${-8*sx} -38 0 -22 ${2*sx} 6Z"/>`;
  return `<g class="hd">${open?side(-34,1)+side(34,-1):''}${side(-f,1)}${side(f,-1)}<path fill="url(#h1)" d="M0 8C-17 0-20 -30 0 -54C20 -30 17 0 0 8Z"/></g>`;
}
function build(){
  const L=[[55,380,1],[100,300,.9],[140,405,1.3],[255,410,1.3],[300,320,.95],[345,390,1.05],[22,300,.7],[378,315,.7],[172,235,.7],[232,252,.72],[118,205,.55],[286,208,.55],[200,300,2.3,1]];
  L.sort((a,b)=>a[2]-b[2]);
  const leaf='M0 0C-22 -14-30 -44-24 -64C-12 -48-2 -26 0 0Z';
  const fl=L.map(([x,y,sc,o])=>{
    const c=Math.random()*30-15,d=o?.2:.7+Math.random()*2.4,ls=Math.max(.6,sc*.8),l1=560-(560-y)*.28,l2=560-(560-y)*.52;
    return `<g class="sw" style="transform-origin:${x}px 560px;animation-delay:-${(Math.random()*4).toFixed(1)}s;--d:${d.toFixed(2)}s;opacity:${sc<.8?.6:sc<1.1?.85:1}"><path class="stem" pathLength="1" d="M${x} 560C${(x+c).toFixed(0)} ${(560-(560-y)*.35).toFixed(0)} ${(x-c*.6).toFixed(0)} ${(y+(560-y)*.3).toFixed(0)} ${x} ${y}"/><path class="lf" transform="translate(${x},${l1.toFixed(0)}) scale(${ls})" d="${leaf}"/><path class="lf" transform="translate(${x},${l2.toFixed(0)}) scale(${-ls},${ls})" d="${leaf}"/><g transform="translate(${x},${y}) scale(${sc})">${head(o)}</g></g>`;
  }).join('');
  return `<svg viewBox="0 0 400 560" preserveAspectRatio="xMidYMax meet"><defs><linearGradient id="h1" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ff2e88"/><stop offset="1" stop-color="#ffc9de"/></linearGradient><linearGradient id="h2" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#d9367f"/><stop offset="1" stop-color="#ff9cc8"/></linearGradient><radialGradient id="halo"><stop offset="0" stop-color="#ff5fa2" stop-opacity=".55"/><stop offset="1" stop-color="#ff5fa2" stop-opacity="0"/></radialGradient><radialGradient id="bgl"><stop offset="0" stop-color="#ff5fa2" stop-opacity=".25"/><stop offset="1" stop-color="#ff5fa2" stop-opacity="0"/></radialGradient></defs>${fl}</svg>`;
}
function parts(){
  const ch=['♥','✦','✿','•','♥'],cl=['#ff8fc0','#ffc9de','#ff5fa2','#d9a57a'];let h='';
  for(let i=0;i<28;i++)h+=`<span class="pt" style="left:${(Math.random()*100).toFixed(0)}%;--c:${cl[i%4]};--z:${(8+Math.random()*14).toFixed(0)}px;--t:${(7+Math.random()*8).toFixed(1)}s;--dl:-${(Math.random()*12).toFixed(1)}s;--dx:${(Math.random()*80-40).toFixed(0)}px">${ch[i%5]}</span>`;
  return h;
}
function gStart(){if(G.classList.contains('on'))return;G.innerHTML=build()+parts();G.classList.add('on');}
function gStop(){G.classList.remove('on');}

// zoom overlay
const Z=$('zoom'),V=$('veil');let zc=null;
function zshow(el,fn,touch){
  zc={el,fn};Z.innerHTML=fn();Z.classList.toggle('touch',touch);V.classList.toggle('touch',touch);
  const r=el.getBoundingClientRect();
  Z.style.transition='none';Z.classList.remove('on');
  Z.style.transform=`translate(calc(-50% + ${r.left+r.width/2-innerWidth/2}px),calc(-50% + ${r.top+r.height/2-innerHeight/2}px)) scale(${Math.max(.2,r.width/Z.offsetWidth)})`;
  void Z.offsetWidth;Z.style.transition='';Z.style.transform='';
  Z.classList.add('on');V.classList.add('on');
}
function zhide(){Z.classList.remove('on');V.classList.remove('on');zc=null;}
V.onclick=zhide;
function wire(el,fn,extra){
  el.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')zshow(el,fn,false);});
  el.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')zhide();});
  el.addEventListener('click',()=>{if(lastPT!=='mouse')zshow(el,fn,true);else if(extra)extra();});
}
function redeem(el){
  const g=el.dataset.g;
  if(GP[g]){shake(el);return;}
  if(!confirm('Pick “'+el.dataset.t+'” as your gift? You can only choose one, and it can’t be changed.'))return;
  GP[g]=el.dataset.t;saveGifts();applyGifts();
  const r=el.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,30);
  if(zc)Z.innerHTML=zc.fn();
}
Z.onclick=e=>{if(e.target.classList.contains('rd')&&zc)redeem(zc.el);};

// build content
CHAT.forEach(([w,t])=>{const b=document.createElement('div');b.className='bub '+w;b.innerHTML=`<span class="tag">${w==='her'?'Malak':'Me'}</span>${t}`;$('chat').appendChild(b);});
REASONS.forEach(r=>{const d=document.createElement('div');d.className='card';d.innerHTML=`<b>${r[0]}</b><br><span class="sub">${r[1]}</span>`;wire(d,()=>`<div class="zt">${r[0]}</div><p>${r[1]}</p>`);$('reasons').appendChild(d);});
// gifts: only ONE pick per group, remembered per birthday cycle
const gcyc=()=>String(bdayInfo().target.getFullYear());
function loadGifts(){try{const g=JSON.parse(localStorage.getItem('mk_gifts')||'{}');return g.c===gcyc()?g:{c:gcyc()};}catch(_){return{c:gcyc()};}}
let GP=loadGifts();
function saveGifts(){try{localStorage.setItem('mk_gifts',JSON.stringify(GP));}catch(_){}}
function applyGifts(){
  document.querySelectorAll('.coupon').forEach(d=>{
    const p=GP[d.dataset.g];
    d.classList.toggle('used',p===d.dataset.t);
    d.classList.toggle('locked',!!p&&p!==d.dataset.t);
    d.querySelector('small').textContent=p===d.dataset.t?'YOUR PICK ✓':d.dataset.s;
  });
}
function buildGifts(list,box,g){
  list.forEach(c=>{
    const d=document.createElement('div');d.className='card coupon';d.dataset.g=g;d.dataset.t=c[1];d.dataset.s=c[2];
    d.innerHTML=`<div class="em">${c[0]}</div><b>${c[1]}</b><small>${c[2]}</small>`;
    wire(d,()=>{const p=GP[g];return `<div class="art">${c[3]}</div><div class="zt">${c[1]}</div><p>${c[4]}</p><p class="sub" style="font-size:.8rem">${note}</p>`+(p===c[1]?'<p class="ok">YOUR PICK ✓ I’ll make it for you!</p>':p?'<p class="sub">You already picked your gift 🎁</p>':'<button class="rd">Pick this one 🎁</button><p class="hint sub">Click the card to pick it. Only one!</p>');},()=>redeem(d));
    box.appendChild(d);
  });
  applyGifts();
}
buildGifts(COUPONS,$('coupons'),'main');
// secret page gifts (edit here)
const SECRET_GIFTS=[
 ["🌷","Light-up tulip","A tulip that glows pink",
  `<svg viewBox="0 0 200 200"><circle cx="100" cy="85" r="62" fill="#ff7eb6" opacity=".18"/><path d="M62 80C62 40 80 28 100 28C120 28 138 40 138 80C138 112 118 130 100 130C82 130 62 112 62 80Z" fill="#ff7eb6"/><path d="M62 80C62 50 74 36 88 34C84 56 88 100 100 130C80 128 62 110 62 80Z" fill="#ffc9de"/><path d="M100 130V158" stroke="#8a5a3a" stroke-width="5" stroke-linecap="round"/><rect x="80" y="156" width="40" height="26" rx="8" fill="#5a2f22" stroke="#d9a57a" stroke-width="3"/></svg>`,
  "A small tulip lamp with LEDs inside that glows pink and can change colors. I’ll build the electronics and program it myself."],
 ["🕹️","Pocket game console","A tiny handheld with a game",
  `<svg viewBox="0 0 200 200"><rect x="40" y="35" width="120" height="130" rx="18" fill="#5a2f22" stroke="#ff7eb6" stroke-width="3"/><rect x="58" y="52" width="84" height="52" rx="6" fill="#1a0e0b" stroke="#ff7eb666"/><text x="100" y="87" text-anchor="middle" font-size="24">🌷</text><rect x="56" y="130" width="24" height="8" rx="2" fill="#ffc9de"/><rect x="64" y="122" width="8" height="24" rx="2" fill="#ffc9de"/><circle cx="122" cy="132" r="7" fill="#ff7eb6"/><circle cx="140" cy="124" r="7" fill="#d9a57a"/></svg>`,
  "A tiny handheld console with a small screen and a few buttons, running a game I make just for you."],
 ["⏳","Birthday countdown gadget","A desk gadget with a screen",
  `<svg viewBox="0 0 200 200"><rect x="35" y="55" width="130" height="90" rx="14" fill="#5a2f22" stroke="#ff7eb6" stroke-width="3"/><rect x="48" y="68" width="104" height="64" rx="6" fill="#1a0e0b" stroke="#ff7eb666"/><text x="100" y="99" text-anchor="middle" font-size="24" fill="#ff9cc8" font-family="monospace">364</text><text x="100" y="120" text-anchor="middle" font-size="11" fill="#ffc9de" font-family="monospace">days to go</text></svg>`,
  "A little desk gadget with a screen that counts down the days to your next birthday, like the countdown on this website."]
];
buildGifts(SECRET_GIFTS,$('sgifts'),'secret');

// slideshow
const slides=[...document.querySelectorAll('.slide')];let cur=0,chatDone=false,fin=false;
$('dots').innerHTML=slides.map(()=>'<i></i>').join('');
function go(n){
  zhide();
  cur=Math.max(0,Math.min(slides.length-1,n));
  slides.forEach((s,i)=>{s.classList.toggle('on',i===cur);s.classList.toggle('past',i<cur);});
  [...$('dots').children].forEach((d,i)=>d.classList.toggle('on',i===cur));
  $('prev').disabled=cur===0;$('next').disabled=cur===slides.length-1;
  cur===0?gStart():gStop();
  if(cur===1&&!chatDone){chatDone=true;[...$('chat').children].forEach((b,i)=>setTimeout(()=>b.classList.add('show'),500+i*600));}
  if(cur===slides.length-1&&!fin){fin=true;setTimeout(confetti,400);}
}
$('next').onclick=()=>go(cur+1);$('prev').onclick=()=>go(cur-1);
addEventListener('keydown',e=>{if(!unlocked)return;if(e.key==='ArrowRight'||e.key===' ')go(cur+1);if(e.key==='ArrowLeft')go(cur-1);if(e.key==='Escape')zhide();});
let sx=0,sy=0;
addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true});
addEventListener('touchend',e=>{if(!unlocked)return;const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)go(cur+(dx<0?1:-1));},{passive:true});

function unlock(){if(unlocked)return;unlocked=true;stopListen();$('secret').classList.add('hidden');$('lock').classList.add('hidden');$('deck').classList.remove('hidden');go(0);}

// ===== PUZZLE (test values, we will change them later) =====
const CFG={
  WORD1:'cipher', CODE1:'8-13 / 19-14-26-15 / 12-13-5-22-22-5',
  WORD2:['6 / 14-8-21-13 / 11-20-15-6-20-19-20 / 16 / 26-24-13 / 13-3-6-10 / 23-8-7 / 16 / 7 / 10-24 / 10-18-8-7-13','F NHUM KTOFTST P ZXM MCFJ WHG P G JX JRHGM','i cant believe u got this far u r so smart'],
  // (WORD2 accepts the numbers, the letters, or the decoded sentence)
  CODE2:'14-8-21-13 / 11-20-15-6-20-19-20 / 16 / 23-24-16-21-17 / 6-13',
  CLUE:'RFQQOT XW MCT GFZCM TQZT',
  LANG:'en-US',
  LOCATION:'📍 Jilali<br><br>Two things are waiting for you there: a code and a word.'
};
// ============================================================
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
const cue=$('edge'),tul=$('cue');
let st='idle',rec=null,listening=false,listenTO,winTO,locTO,fbHit=null;
const norm=t=>t.toLowerCase().replace(/[^a-z0-9\u0600-\u06ff ]/g,' ').replace(/\s+/g,' ').trim();
const nd=t=>t.replace(/\D/g,'');
function bdayInfo(n=new Date()){
  const y=n.getFullYear(),t=new Date(y,BDAY_MONTH,BDAY_DAY),end=new Date(y,BDAY_MONTH,BDAY_DAY+1);
  return{n,t,end,bday:n>=t&&n<end,target:n>=end?new Date(y+1,BDAY_MONTH,BDAY_DAY):t};
}
const CYC=String(bdayInfo().target.getFullYear());
function save(v){try{localStorage.setItem('mk_stage',CYC+':'+v);}catch(_){}}
function shake(el){el.classList.remove('shake');void el.offsetWidth;el.classList.add('shake');}
function view(w){
  clearTimeout(locTO);
  if(w==='loc')locTO=setTimeout(()=>view('count'),8000);
  $('count').classList.toggle('hidden',w!=='count');
  $('codeWrap').classList.toggle('hidden',w!=='code');
  $('locBox').classList.toggle('hidden',w!=='loc');
  if(w==='loc')$('locBox').innerHTML=CFG.LOCATION;
  if(w==='code'){$('codeIn').value='';setTimeout(()=>$('codeIn').focus(),50);}
}
function stopListen(){
  listening=false;clearTimeout(listenTO);cue.classList.remove('listen');
  $('fb').classList.add('hidden');fbHit=null;
  if(rec){rec.onend=null;rec.onerror=null;try{rec.stop();}catch(_){}rec=null;}
}
function showFb(target,ok){
  const f=$('fb');f.classList.remove('hidden');f.value='';f.focus();
  const ts=[].concat(target);
  fbHit=()=>{const v=norm(f.value);if(ts.some(t=>v.includes(norm(t))))ok();else shake(f);};
}
function startListen(target,hit){
  stopListen();
  showFb(target,()=>{stopListen();hit();});
}
$('fb').addEventListener('keydown',e=>{if(e.key==='Enter'&&fbHit)fbHit();});

cue.addEventListener('click',e=>{
  e.stopPropagation();
  if(st==='idle'){
    st='listen1';
    startListen(CFG.WORD1,()=>{
      st='win';cue.classList.add('win');
      winTO=setTimeout(()=>{if(st==='win'){st='idle';cue.classList.remove('win');}},5000);
    });
  }else if(st==='win'){
    clearTimeout(winTO);cue.classList.remove('win');st='code1';view('code');
  }else if(st==='loc'){
    st='listen2';startListen(CFG.WORD2,()=>{st='code2';view('code');});
  }else if(st==='done'){openSecret();}
});

tul.addEventListener('click',e=>{e.stopPropagation();const c=$('clue');if(c.classList.contains('hidden')){c.textContent=CFG.CLUE;c.classList.remove('hidden');}else c.classList.add('hidden');});

function submitCode(){
  const v=nd($('codeIn').value);
  if(st==='code1'&&v&&v===nd(CFG.CODE1)){st='loc';save('loc');view('loc');burst(innerWidth/2,innerHeight/2,40);}
  else if(st==='code2'&&v&&v===nd(CFG.CODE2)){st='done';save('done');view('count');openSecret();}
  else shake($('codeIn').parentElement);
}
$('codeGo').onclick=submitCode;
$('codeIn').addEventListener('keydown',e=>{if(e.key==='Enter')submitCode();});
addEventListener('keydown',e=>{if(e.key==='Escape'){if(st==='code1'){st='idle';view('count');}else if(st==='code2'){st='loc';view('loc');}else if(st==='listen1'){stopListen();st='idle';}else if(st==='listen2'){stopListen();st='loc';}}});

function openSecret(){$('sp').innerHTML=parts();$('secret').classList.remove('hidden');confetti();}
$('secBack').onclick=()=>$('secret').classList.add('hidden');

function resetPuzzle(){try{localStorage.removeItem('mk_stage');localStorage.removeItem('mk_gifts');}catch(_){}GP={c:gcyc()};applyGifts();stopListen();st='idle';view('count');$('secret').classList.add('hidden');cue.classList.remove('win');}
try{const sv=(localStorage.getItem('mk_stage')||'').split(':');if(sv[0]===CYC){if(sv[1]==='loc')st='loc';else if(sv[1]==='done')st='done';}}catch(_){}
if(location.hash==='#reset')resetPuzzle();
addEventListener('hashchange',()=>{if(location.hash==='#reset')resetPuzzle();});

// ---- owner entry: tap the title 10 times, then type the password ----
const PW_HASH='c4924f8c945998f4a663e740545ead2d78a460887e1a81773c4f26070127ae31';
let admin=false,ttaps=0,ttm;
async function sha(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('malak-salt:'+s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');}
$('lockTitle').addEventListener('click',()=>{
  ttaps++;clearTimeout(ttm);ttm=setTimeout(()=>ttaps=0,1500);
  if(ttaps>=10){ttaps=0;const p=$('pw');p.classList.remove('hidden');p.value='';p.focus();}
});
$('pw').addEventListener('keydown',async e=>{
  const p=$('pw');
  if(e.key==='Escape'){p.classList.add('hidden');return;}
  if(e.key!=='Enter')return;
  let ok=false;
  try{ok=(await sha(p.value))===PW_HASH;}catch(_){ok=false;}
  if(ok){admin=true;p.classList.add('hidden');unlock();}else{shake(p);p.value='';}
});

// countdown / lock
function tick(){
  const b=bdayInfo();
  if(b.bday||admin){unlock();return;}
  if(unlocked){location.reload();return;}
  const s=Math.floor((b.target-b.n)/1000),v=[[Math.floor(s/86400),'days'],[Math.floor(s%86400/3600),'hours'],[Math.floor(s%3600/60),'min'],[s%60,'sec']];
  $('count').innerHTML=v.map(a=>`<div><b>${a[0]}</b><span>${a[1]}</span></div>`).join('');
}
addEventListener('hashchange',tick);
tick();setInterval(tick,1000);
