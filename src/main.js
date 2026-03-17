(function(){

if (document.getElementById("scriptix-shadow")) return;

console.log("%cScriptix Loaded!!","font-size:20px;font-weight:bold;color:#8a5cff");
console.log("%cby T.E.D.A","font-size:13px;font-weight:bold;color:#44aaa4");

const host = document.createElement("div");
host.id = "scriptix-shadow";
host.style.position = "fixed";
host.style.top = "0";
host.style.left = "0";
host.style.zIndex = "999999";

const shadow = host.attachShadow({ mode: "open" });
document.body.appendChild(host);

const slucide = document.createElement("script");
slucide.src = "https://unpkg.com/lucide@latest";
document.head.appendChild(slucide);

const fontStyle = document.createElement("style");
fontStyle.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Iosevka+Charon+Mono&display=swap');
`;
shadow.appendChild(fontStyle);

const style = document.createElement("style");
const STYLE_URL = "https://raw.githack.com/MohanIShim47/Scriptix/main/src/gui/styles.css";

fetch(STYLE_URL)
  .then(res => res.text())
  .then(css => {
    const style = document.createElement("style");
    style.textContent = css;
    shadow.appendChild(style);
  })
  .catch(err => {
    console.error("Failed to load styles:", err);
  });

shadow.appendChild(style);

function initUI() {

  const $ = sel => shadow.querySelector(sel);
  const $$ = sel => shadow.querySelectorAll(sel);
  const uiRoot = $("#scriptix-ui");
  if (!uiRoot) {
    console.error("UI root not found");
    return;
  }

  $$(".ms-side-item").forEach(item=>{
    item.onclick=()=>{
      $$(".ms-side-item").forEach(i=>i.classList.remove("active"));
      item.classList.add("active");

      $$(".ms-page").forEach(p=>p.classList.remove("active"));
      $("#"+item.dataset.page).classList.add("active");
    };
  });

  shadow.onclick = (e) => {
    const btn=e.target.closest(".ms-button");
    if(!btn) return;

    const action=btn.dataset.action;

      if(action==="hello") alert("Hello!");
      
      if(action==="url") alert(location.href);
      
      if(action==="invert"){
      document.body.style.filter=
      document.body.style.filter==="invert(1)"?"":"invert(1)";
      }
      
      if (action==="3d-page") {
      const s=document.createElement("script");
      s.src="https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/3Dpage.js";
      document.head.appendChild(s);
      }
      
      if (action==="ixlambda"){
      const s=document.createElement("script");
      s.src="https://raw-githack-com.translate.goog/Augtive85YT/PhiPiBeta/main/IXLambda/main.js";
      document.head.appendChild(s);
      }
      
      if (action==="bh") {
      const s=document.createElement("script");
      s.src="https://gl-githack-com.translate.goog/CidCaribou/x-gui/-/raw/main/x-gui.js?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp";
      document.head.appendChild(s);
      }
      
      if (action==="exe") {
      const s=document.createElement("script");
      s.src="https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Menu@main/menu.js";
      document.head.appendChild(s);
      }
      
      if (action==="pc") {
      const s=document.createElement("script");
      s.src="https://menu.pxi-fusion.com/pxi-2.0/main.js";
      document.head.appendChild(s);
      }
      
      if (action==="devc") {
      const s=document.createElement("script");
      s.src="https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/DevConsole.js";
      document.head.appendChild(s);
      }
      
      if (action==="aclick") {
      const s=document.createElement("script");
      s.src="https://cdn.jsdelivr.net/gh/MohanIShim47/AutoClickerBookmarklet3@master/AutoClicker.js"
      document.head.appendChild(s);
      }
      
      if (action==="users") {
      const s=document.createElement("script");
      s.src="https://raw-githack-com.translate.goog/MohanIShim47/Scriptix/main/src/scripts/userscripts.js"
      document.head.appendChild(s);
      }
      
      if (action==="tab") {
      const s=document.createElement("script");
      s.src="https://raw-githack-com.translate.goog/MohanIShim47/Scriptix/main/src/scripts/tabdisguise.js"
      document.head.appendChild(s);
      }

  };

  const search = $("#scriptix-search");

  if(search){
    search.addEventListener("input", () => {
      const q = search.value.toLowerCase();
      $$(".ms-button").forEach(btn=>{
        btn.style.display = btn.textContent.toLowerCase().includes(q) ? "flex" : "none";
      });
    });
  }

  const themes = {
    macchiato: {
      "--ms-bg": "rgba(36,39,58,.65)",
      "--ms-bar": "rgba(24,24,37,.75)",
      "--ms-surface": "rgba(49,50,68,.55)",
      "--ms-hover": "rgba(69,71,90,.7)",
      "--ms-text": "#cad3f5",
      "--ms-accent": "#b7bdf8"
    },
    mocha: {
      "--ms-bg": "rgba(30,30,46,.65)",
      "--ms-bar": "rgba(24,24,37,.75)",
      "--ms-surface": "rgba(49,50,68,.55)",
      "--ms-hover": "rgba(69,71,90,.7)",
      "--ms-text": "#cdd6f4",
      "--ms-accent": "#b4befe"
    },
    dark: {
      "--ms-bg": "rgba(18,18,20,.65)",
      "--ms-bar": "rgba(25,25,28,.75)",
      "--ms-surface": "rgba(40,40,45,.55)",
      "--ms-hover": "rgba(60,60,65,.7)",
      "--ms-text": "#ffffff",
      "--ms-accent": "#8888ff"
    },
    light: {
      "--ms-bg": "rgba(245,245,245,.6)",
      "--ms-bar": "rgba(220,220,220,.8)",
      "--ms-surface": "rgba(255,255,255,.7)",
      "--ms-hover": "rgba(200,200,200,.7)",
      "--ms-text": "#222222",
      "--ms-accent": "#4f46e5"
    },
    hack: {
      "--ms-bg": "rgba(0,0,0,.7)",
      "--ms-bar": "rgba(0,0,0,.9)",
      "--ms-surface": "rgba(0,20,0,.6)",
      "--ms-hover": "rgba(0,40,0,.8)",
      "--ms-text": "#15ff00",
      "--ms-accent": "#00ff88"
    }
  };


  function setTheme(theme) {
    const t = themes[theme];
    if (!t) return;

    Object.entries(t).forEach(([key, val]) => {
      uiRoot.style.setProperty(key, val);
    });
  }

  const themeSelector = $("#theme-selector");
  themeSelector.onchange = () => {
    const theme = themeSelector.value;
    setTheme(theme);
    localStorage.setItem("scriptix-theme", theme);
  };

  const savedTheme = localStorage.getItem("scriptix-theme") || "macchiato";
  setTheme(savedTheme);
  themeSelector.value = savedTheme;

  let dragging=false,resizing=false,ox=0,oy=0;

  const bar=$(".ms-titlebar");
  const resizer=$(".ms-resizer");

  bar.onpointerdown=e=>{
    dragging=true;
    ox=e.clientX-uiRoot.offsetLeft;
    oy=e.clientY-uiRoot.offsetTop;
  };

  if (resizer) resizer.onpointerdown = () => resizing = true;

  document.addEventListener("pointermove",e=>{
    if(dragging){
      uiRoot.style.left=(e.clientX-ox)+"px";
      uiRooT.style.top=(e.clientY-oy)+"px";
    }
    if(resizing){
      uiRoot.style.width=Math.max(600,e.clientX-uiRoot.offsetLeft)+"px";
      uiRoot.style.height=Math.max(400,e.clientY-uiRoot.offsetTop)+"px";
    }
  });

  document.addEventListener("pointerup",()=>{
    dragging=false;
    resizing=false;
  });

  let minimized = false;

  $(".ms-close").onclick = () => {
    uiRoot.style.transform = "scale(0.92)";
    uiRoot.style.opacity = "0";

    setTimeout(() => {
      host.remove();
    }, 220);
  };

  $(".ms-min").onclick = () => {

    if (!minimized) {

      uiRoot.dataset.prevWidth = uiRoot.offsetWidth + "px";
      uiRoot.dataset.prevHeight = uiRoot.offsetHeight + "px";

      uiRoot.classList.add("minimized");

      uiRoot.style.transform = "scale(0.98)";
      uiRoot.style.width = "220px";
      uiRoot.style.height = "40px";

      minimized = true;

    } else {
      uiRoot.classList.remove("minimized");
      uiRoot.style.width = uiRoot.dataset.prevWidth;
      uiRoot.style.height = uiRoot.dataset.prevHeight;
      uiRoot.style.transform = "scale(1.03)";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          uiRoot.style.transform = "scale(1)";
        });
      });

      minimized = false;
    }
  };

}

function renderIcons() {
  if (window.lucide) {
    lucide.createIcons({ root: shadow });
  } else {
    slucide.onload = () => {
      lucide.createIcons({ root: shadow });
    };
  }
}

const ui = document.createElement("div");
fetch("https://raw-githack-com.translate.goog/MohanIShim47/Scriptix/main/src/gui/index.html")
.then(res => res.text())
.then(html => {
  ui.innerHTML = html;
  shadow.appendChild(ui);

  initUI();
  renderIcons();
});


})();
