// Snowfall animation
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let flakes = [];
let width, height;
function resize(){width=canvas.width=window.innerWidth; height=canvas.height=window.innerHeight; flakes=Array.from({length:Math.min(150,Math.floor(width/8))},()=>makeFlake(true));}
function makeFlake(random=false){return{x:Math.random()*width,y:random?Math.random()*height:-10,r:Math.random()*2.2+.5,speed:Math.random()*1.1+.45,drift:(Math.random()-.5)*.55,opacity:Math.random()*.65+.2};}
function draw(){ctx.clearRect(0,0,width,height);for(const f of flakes){ctx.beginPath();ctx.fillStyle=`rgba(220,242,255,${f.opacity})`;ctx.arc(f.x,f.y,f.r,0,Math.PI*2);ctx.fill();f.y+=f.speed;f.x+=f.drift+Math.sin(f.y*.009)*.25;if(f.y>height+8){Object.assign(f,makeFlake());}if(f.x>width+8)f.x=-8;if(f.x<-8)f.x=width+8;}requestAnimationFrame(draw);}
window.addEventListener('resize',resize);resize();draw();
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.topbar nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));