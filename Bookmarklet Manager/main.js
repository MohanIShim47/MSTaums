(function(){

console.log(
"%cMSTuams loaded",
"font-size:20px;font-weight:bold;color:#8a5cff"
);

if(document.getElementById("mstaums-ui")) return;

const style=document.createElement("style");
style.textContent=`

#mstaums-ui{
position:fixed;
top:80px;
left:120px;
width:900px;
height:520px;
z-index:999999;
background:#0b0f25;
border-radius:18px;
overflow:hidden;
box-shadow:0 0 40px rgba(120,60,255,.6);
font-family:Segoe UI,system-ui;
display:flex;
flex-direction:column;
}

.ms-titlebar{
height:42px;
background:#11153a;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 12px;
cursor:move;
}

.ms-title{
color:#cfcfff;
font-weight:600;
}

.ms-controls{
display:flex;
gap:8px;
}

.ms-btn{
width:28px;
height:28px;
border-radius:6px;
border:none;
cursor:pointer;
font-weight:bold;
}

.ms-min{
background:#2b2f60;
color:white;
}

.ms-close{
background:#c0392b;
color:white;
}

.ms-main{
flex:1;
padding:20px;
display:flex;
flex-direction:column;
}

.ms-header{
font-size:18px;
color:#cfcfff;
margin-bottom:16px;
}

.ms-search{
margin-bottom:20px;
}

.ms-search input{
width:100%;
padding:10px;
border-radius:8px;
border:none;
background:#0e1330;
color:white;
}

.ms-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
flex:1;
}

.ms-card{
background:#121733;
border-radius:14px;
height:170px;
display:flex;
align-items:center;
justify-content:center;
font-size:26px;
font-weight:700;
color:#ddd;
cursor:pointer;
transition:.2s;
position:relative;
}

.ms-card:hover{
transform:scale(1.05);
box-shadow:0 10px 30px rgba(0,0,0,.6);
}

.ms-card-bar{
position:absolute;
bottom:0;
width:100%;
background:#7c3aed;
text-align:center;
padding:6px;
border-radius:0 0 14px 14px;
font-size:14px;
}

.ms-page{
display:none;
flex-direction:column;
gap:10px;
}

.ms-button{
background:#121733;
border:none;
color:white;
padding:12px;
border-radius:8px;
cursor:pointer;
font-size:14px;
}

.ms-button:hover{
background:#1d2550;
}

.ms-footer{
text-align:center;
font-size:11px;
opacity:.6;
color:white;
margin-top:auto;
}

#mstaums-mini{
position:fixed;
bottom:20px;
right:20px;
background:#7c3aed;
color:white;
padding:10px 16px;
border-radius:10px;
cursor:pointer;
font-family:Segoe UI;
z-index:999999;
display:none;
}

`;

document.head.appendChild(style);

const ui=document.createElement("div");
ui.id="mstaums-ui";

ui.innerHTML=`

<div class="ms-titlebar">

<div class="ms-title">MSTaums</div>

<div class="ms-controls">
<button class="ms-btn ms-min">–</button>
<button class="ms-btn ms-close">×</button>
</div>

</div>

<div class="ms-main">

<div id="home">

<div class="ms-header">Modules</div>

<div class="ms-search">
<input id="ms-search" placeholder="Search modules...">
</div>

<div class="ms-grid">

<div class="ms-card" data-page="utilities">
Utilities
<div class="ms-card-bar">Global</div>
</div>

<div class="ms-card" data-page="scripts">
Scripts
<div class="ms-card-bar">Extras</div>
</div>

<div class="ms-card" data-page="custom">
Custom
<div class="ms-card-bar">Modules</div>
</div>

<div class="ms-card" data-page="tools">
Tools
<div class="ms-card-bar">Advanced</div>
</div>

</div>

</div>

<div class="ms-page" id="utilities">

<button class="ms-button ms-back">← Back</button>

<button class="ms-button" id="invert-page">Invert Page Colors</button>
<button class="ms-button" id="show-url">Show Page URL</button>
<button class="ms-button" id="alert-hello">Alert Hello</button>

</div>

<div class="ms-page" id="scripts">

<button class="ms-button ms-back">← Back</button>

<button class="ms-button" id="load-script">Ixlambda</button>
<button class="ms-button" id="exe">Executor</button>
<button class="ms-button" id="bh">Blooket Hacks</button>

</div>

<div class="ms-page" id="tools">

<button class="ms-button ms-back">← Back</button>

<p>Coming Soon</p>

</div>

<div class="ms-footer">© by T.E.D.A</div>

</div>
`;

document.body.appendChild(ui);

const mini=document.createElement("div");
mini.id="mstaums-mini";
mini.textContent="Open MSTaums";
document.body.appendChild(mini);

document.querySelector(".ms-close").onclick=()=>{
ui.remove();
mini.remove();
};

document.querySelector(".ms-min").onclick=()=>{
ui.style.display="none";
mini.style.display="block";
};

mini.onclick=()=>{
ui.style.display="flex";
mini.style.display="none";
};

const home=document.getElementById("home");

document.querySelectorAll(".ms-card").forEach(card=>{
card.onclick=()=>{
const page=card.dataset.page;
home.style.display="none";
document.getElementById(page).style.display="flex";
};
});

document.querySelectorAll(".ms-back").forEach(btn=>{
btn.onclick=()=>{
document.querySelectorAll(".ms-page").forEach(p=>p.style.display="none");
home.style.display="block";
};
});

const search=document.getElementById("ms-search");

search.addEventListener("input",()=>{
const val=search.value.toLowerCase();
document.querySelectorAll(".ms-card").forEach(card=>{
card.style.display=card.textContent.toLowerCase().includes(val)?"flex":"none";
});
});

document.getElementById("alert-hello").onclick=()=>{
alert("Hello!");
};

document.getElementById("show-url").onclick=()=>{
alert(location.href);
};

document.getElementById("invert-page").onclick=()=>{
document.body.style.filter =
document.body.style.filter === "invert(1)" ? "" : "invert(1)";
};

document.getElementById("load-script").onclick=()=>{
const s=document.createElement("script");
s.src="https://cdn.jsdelivr.net/gh/Augtive85YT/PhiPiBeta@main/IXLambda/main.js";
document.head.appendChild(s);
};

document.getElementById("exe").onclick=()=>{
const s=document.createElement("script");
s.src="https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Menu@main/menu.js";
document.head.appendChild(s);
};

document.getElementById("bh").onclick=()=>{
const s=document.createElement("script");
s.src="https://gl.githack.com/CidCaribou/x-gui/-/raw/main/x-gui.js";
document.head.appendChild(s);
};

let dragging=false,offsetX,offsetY;

const titlebar=document.querySelector(".ms-titlebar");

titlebar.addEventListener("mousedown",e=>{
dragging=true;
offsetX=e.clientX-ui.offsetLeft;
offsetY=e.clientY-ui.offsetTop;
});

document.addEventListener("mousemove",e=>{
if(!dragging)return;
ui.style.left=(e.clientX-offsetX)+"px";
ui.style.top=(e.clientY-offsetY)+"px";
});

document.addEventListener("mouseup",()=>dragging=false);

})();