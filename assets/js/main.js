/* =========================================================
   互動與渲染
   ========================================================= */
(function(){
  "use strict";

  /* ---- header solid on scroll ---- */
  const head = document.querySelector(".site-head");
  const onScroll = () => { if(head) head.classList.toggle("solid", window.scrollY > 30); };
  onScroll(); window.addEventListener("scroll", onScroll, {passive:true});

  /* ---- mobile nav ---- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if(toggle && nav){
    toggle.addEventListener("click", ()=> nav.classList.toggle("open"));
    nav.addEventListener("click", e=>{ if(e.target.tagName==="A") nav.classList.remove("open"); });
  }

  /* ---- scroll reveal ---- */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target);} });
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  /* ---- pulse line redraw on view ---- */
  const pulses = document.querySelectorAll(".pulse");
  const pio = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("run"); pio.unobserve(en.target);} });
  }, {threshold:.4});
  pulses.forEach(p=>pio.observe(p));

  /* ---- helpers ---- */
  const esc = s => String(s).replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const fmtDate = d => { const [y,m,day]=String(d).split("-"); return `${y}.${m}.${day}`; };
  const typeIcons = `
    <span class="ft" title="文字"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h10"/></svg></span>
    <span class="ft" title="圖片"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5L5 20"/></svg></span>
    <span class="ft" title="影片"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z" fill="currentColor"/></svg></span>`;

  function hasType(a, t){
    if(t==="img") return a.cover || (a.blocks||[]).some(b=>b.type==="img");
    if(t==="video") return (a.blocks||[]).some(b=>b.type==="video");
    return true;
  }

  /* ---- render article cards ---- */
  window.renderCards = function(targetSel, list, opts={}){
    const el = document.querySelector(targetSel);
    if(!el) return;
    if(!list.length){ el.innerHTML = `<p style="color:var(--ink-faint)">目前沒有文章。</p>`; return; }
    el.innerHTML = list.map((a,i)=>`
      <article class="card reveal d${(i%3)+1}">
        <a class="card-media" href="article.html?id=${encodeURIComponent(a.id)}">
          <span class="card-idx">${String(i+1).padStart(2,"0")}</span>
          <img src="${esc(a.cover||'assets/img/art-cholesterol.jpg')}" alt="${esc(a.title)}" loading="lazy">
        </a>
        <div class="card-body">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span class="tag">${esc(a.category)}</span>
            <span class="feature-types">${
              [hasType(a,"text")?0:-1, hasType(a,"img")?1:-1, hasType(a,"video")?2:-1]
              .filter(x=>x>=0).map(x=>typeIcons.trim().split("</span>")[x]+"</span>").join("")
            }</span>
          </div>
          <h3>${esc(a.title)}</h3>
          <p>${esc(a.excerpt||"")}</p>
          <div class="card-foot">
            <span>${fmtDate(a.date)}${a.userMade?" · 自建":""}</span>
            <a class="read" href="article.html?id=${encodeURIComponent(a.id)}">閱讀 →</a>
          </div>
        </div>
      </article>`).join("");
    // re-observe new reveals
    document.querySelectorAll(".card.reveal:not(.in)").forEach(c=>{
      new IntersectionObserver((ents,ob)=>ents.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");ob.disconnect();}}),{threshold:.1}).observe(c);
    });
  };

  /* ---- render single article ---- */
  window.renderArticle = function(){
    const id = new URLSearchParams(location.search).get("id");
    const a = Store.get(id);
    const host = document.querySelector("#article-root");
    if(!host) return;
    if(!a){ host.innerHTML = `<div class="wrap section"><h1>找不到這篇文章</h1><p><a class="read" href="articles.html">← 回文章列表</a></p></div>`; return; }
    document.title = a.title + "｜連思涵醫師";
    const blocksHtml = (a.blocks||[]).map(b=>{
      switch(b.type){
        case "h": return `<h2>${esc(b.text)}</h2>`;
        case "ul": return `<ul>${b.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>`;
        case "quote": return `<blockquote>${esc(b.text)}</blockquote>`;
        case "img": return `<figure><img src="${esc(b.src)}" alt="${esc(b.cap||'')}">${b.cap?`<figcaption>${esc(b.cap)}</figcaption>`:""}</figure>`;
        case "video":
          if(b.kind==="youtube"){
            const yid = ytId(b.src);
            return `<div class="video"><iframe src="https://www.youtube.com/embed/${esc(yid)}" allowfullscreen loading="lazy"></iframe></div>`;
          }
          return `<div class="video"><video src="${esc(b.src)}" controls playsinline></video></div>`;
        default: return `<p>${esc(b.text)}</p>`;
      }
    }).join("");
    host.innerHTML = `
      <header class="article-head wrap">
        <a class="read" href="articles.html">← 健康專欄</a>
        <div class="meta"><span class="tag">${esc(a.category)}</span><span>${fmtDate(a.date)}</span><span>· 連思涵 醫師</span></div>
        <h1>${esc(a.title)}</h1>
      </header>
      ${a.cover?`<div class="wrap"><div class="article-cover"><img src="${esc(a.cover)}" alt="${esc(a.title)}"></div></div>`:""}
      <div class="wrap section" style="padding-top:36px">
        <div class="prose">
          ${blocksHtml}
          <div class="tag-row">${(a.tags||[]).map(t=>`<span class="tag">#${esc(t)}</span>`).join("")}</div>
        </div>
      </div>`;
  };
  function ytId(url){
    const m = String(url).match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
    return m ? m[1] : url;
  }

  /* ---- editor (new.html) ---- */
  window.initEditor = function(){
    const blocks = [];
    const list = document.querySelector("#blocks");
    const render = () => {
      list.innerHTML = blocks.map((b,i)=>{
        let preview="";
        if(b.type==="p") preview = `<div>${esc(b.text).slice(0,160)||"（空白段落）"}</div>`;
        if(b.type==="img") preview = b.src?`<img src="${b.src}" alt="">`:`<div class="hint">尚未選擇圖片</div>`;
        if(b.type==="video") preview = `<div class="hint">${b.kind==="youtube"?"YouTube：":"上傳影片："}${esc(b.src||"未設定")}</div>`;
        const label = {p:"文字段落",img:"圖片",video:"影片"}[b.type];
        return `<div class="block-item"><div class="bk-type"><span>${label}</span><button class="rm" data-i="${i}">移除 ✕</button></div>${preview}</div>`;
      }).join("") || `<p class="hint">還沒有內容區塊。用下方按鈕新增「文字 / 圖片 / 影片」。</p>`;
      list.querySelectorAll(".rm").forEach(btn=>btn.onclick=()=>{blocks.splice(+btn.dataset.i,1);render();});
    };
    render();

    document.querySelector("#add-text").onclick = ()=>{
      const t = prompt("輸入這段文字內容：");
      if(t!=null && t.trim()){ blocks.push({type:"p",text:t.trim()}); render(); }
    };
    document.querySelector("#add-img").onclick = ()=>{
      const inp = document.createElement("input");
      inp.type="file"; inp.accept="image/*";
      inp.onchange = ()=>{
        const f = inp.files[0]; if(!f) return;
        const r = new FileReader();
        r.onload = ()=>{ blocks.push({type:"img",src:r.result,cap:""}); render(); };
        r.readAsDataURL(f);
      };
      inp.click();
    };
    document.querySelector("#add-video").onclick = ()=>{
      const url = prompt("貼上 YouTube 連結（或留空、改用上傳影片檔）：");
      if(url && url.trim()){ blocks.push({type:"video",kind:"youtube",src:url.trim()}); render(); return; }
      const inp = document.createElement("input");
      inp.type="file"; inp.accept="video/*";
      inp.onchange = ()=>{
        const f = inp.files[0]; if(!f) return;
        const r = new FileReader();
        r.onload = ()=>{ blocks.push({type:"video",kind:"file",src:r.result}); render(); };
        r.readAsDataURL(f);
      };
      inp.click();
    };

    document.querySelector("#editor-form").onsubmit = (e)=>{
      e.preventDefault();
      const title = document.querySelector("#f-title").value.trim();
      const category = document.querySelector("#f-cat").value;
      const excerpt = document.querySelector("#f-excerpt").value.trim();
      if(!title){ toast("請輸入標題"); return; }
      if(!blocks.length){ toast("請至少新增一個內容區塊"); return; }
      const cover = blocks.find(b=>b.type==="img")?.src || "assets/img/art-cholesterol.jpg";
      const today = new Date ? guessDate() : "2026-05-31";
      const id = Store.save({title, category, excerpt, cover, blocks, date:today, tags:[category]});
      toast("文章已儲存！");
      setTimeout(()=>location.href="article.html?id="+encodeURIComponent(id), 800);
    };
  };
  function guessDate(){
    try{ const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; }
    catch(e){ return "2026-05-31"; }
  }

  /* ---- toast ---- */
  window.toast = function(msg){
    let t = document.querySelector(".toast");
    if(!t){ t=document.createElement("div"); t.className="toast"; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._t); t._t = setTimeout(()=>t.classList.remove("show"), 2200);
  };
})();
