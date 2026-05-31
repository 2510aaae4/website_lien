/* =========================================================
   文章資料層 — 種子文章 + 使用者自建文章(localStorage)
   block 型別：
     {type:"p", text}          段落文字
     {type:"h", text}          小標
     {type:"ul", items:[...]}  條列
     {type:"quote", text}      引言
     {type:"img", src, cap}    圖片
     {type:"video", kind:"youtube"|"file", src}  影片
   ========================================================= */

const SEED_ARTICLES = [
  {
    id:"blood-sugar",
    title:"血管內賊 1 號：血糖，沉默的偷襲者",
    category:"三高與預防",
    date:"2026-05-20",
    cover:"assets/img/art-bloodsugar.jpg",
    excerpt:"吃素、清淡飲食的長輩，竟也驗出糖尿病。血糖過高最可怕的，是它常常「沒有症狀」，卻在多年後一次討回。",
    blocks:[
      {type:"p",text:"「怎麼可能？」近期家中有一位吃素、原型食物、清淡飲食的長輩，抽血竟驗出糖尿病，全家極度震驚。花了一段時間反覆測飯前血糖，才慢慢接受病情、開始治療。"},
      {type:"p",text:"血糖過高，每天經由血液流到每一個器官，悄悄傷害全身的血管。雖然我們常聽到「三多一少」的口訣，但真實情況是——許多人「沒有任何症狀」。"},
      {type:"h",text:"沒有症狀，不代表沒有傷害"},
      {type:"p",text:"最恐怖的地方正在於此：沒有症狀，卻會讓人在多年以後付出代價。"},
      {type:"ul",items:["腦中風","視網膜病變（看不見）","心肌梗塞（冠狀動脈疾病）","慢性腎臟病 / 洗腎","神經病變","週邊血管疾病"]},
      {type:"img",src:"assets/img/art-bloodsugar.jpg",cap:"血糖衛教圖卡  — 血管內賊 1 號"},
      {type:"h",text:"應該如何保養？"},
      {type:"ul",items:["定期監測——很重要，常常是抽血才發現","定期且規律的運動","注意飲食均衡","透過醫師診斷，必要時服用藥物"]},
      {type:"quote",text:"預防，永遠比治療有意義。即早行動，認識自己的身體。"},
      {type:"p",text:"如果想瞭解自己的血糖與心血管狀況，別等到有感覺才檢查。仔細檢查、認識自己的身體狀況，就是給未來的自己最好的禮物。"}
    ],
    tags:["三高","高血糖","糖尿病","預防醫學"]
  },
  {
    id:"blood-lipid",
    title:"血管內賊 2 號：血脂報告，最重要的是 LDL",
    category:"三高與預防",
    date:"2026-05-12",
    cover:"assets/img/art-bloodlipid.jpg",
    excerpt:"整份血脂報告裡，最最重要的就是 LDL 壞膽固醇。它像水管裡的垢，日積月累，悄悄把血管堵成一條死巷。",
    blocks:[
      {type:"p",text:"很多人拿到血脂報告，密密麻麻一堆數字，不知道該看哪個。其實整份報告裡，最最重要的只有一個——LDL，低密度脂蛋白膽固醇，也就是俗稱的「壞膽固醇」。"},
      {type:"h",text:"用白話說"},
      {type:"p",text:"血管就像水管，會卡垢、會阻塞不通。血管卡了膽固醇、阻塞之後，可能造成狹心症、腦中風，甚至走路會痛、腳發黑、最後截肢。"},
      {type:"h",text:"用醫學說"},
      {type:"p",text:"這個過程叫做粥狀動脈硬化，本質上是血管的「慢性發炎」。血管壁裡會形成斑塊，由纖維帽包覆著壞死的脂質核心。血管一旦狹窄，就可能造成冠狀動脈疾病、中風、週邊血管疾病。"},
      {type:"quote",text:"若纖維帽破裂 → 血栓形成 → 完全塞住，就是急性心肌梗塞。"},
      {type:"img",src:"assets/img/art-bloodlipid.jpg",cap:"血脂衛教圖卡 — 血管內賊 2 號（第一集）"},
      {type:"p",text:"為了五年、十年後的自己，今天就打開你的體檢報告，或空腹來抽一管血，把這句話填完：「我的 LDL 壞膽固醇是 ______」。然後願意走出門，和醫師討論你擔心的事情與副作用，為自己量身訂製健康方案。"}
    ],
    tags:["三高","高血脂","膽固醇","心肌梗塞"]
  },
  {
    id:"cholesterol",
    title:"膽固醇報告看不懂？把它想成一條馬路",
    category:"三高與預防",
    date:"2026-05-06",
    cover:"assets/img/art-cholesterol.jpg",
    excerpt:"你的血管其實像一條馬路，膽固醇是路上跑的貨車。認識三種惡名昭彰的「車」，就懂了膽固醇報告。",
    blocks:[
      {type:"p",text:"膽固醇報告看不懂，請看這篇。我們用一個比喻：你的血管，其實像一條馬路；膽固醇，就是路上跑的「貨車」。"},
      {type:"ul",items:["貨車哪裡來？——肝臟這座工廠製造","貨車數量 ApoB ＝ 司機數，司機越多，路上越塞"]},
      {type:"h",text:"三種惡名昭彰的車"},
      {type:"ul",items:["LDL 中型貨車｜低密度｜壞膽固醇——主要元兇","Lp(a) 帶刺改裝車｜會刮傷血管、增加心血管事件；由基因決定，一生驗一次就好","sdLDL 小貨車｜又小又密，最會鑽進血管壁卡住，更危險"]},
      {type:"img",src:"assets/img/art-cholesterol.jpg",cap:"膽固醇衛教圖卡 — ApoB / Lp(a) / sdLDL"},
      {type:"p",text:"什麼時候要驗？各會增加多少風險？這些請諮詢你的醫師、做個人化的風險評估。先有概念，再做檢查，你會更知道自己在看什麼。"}
    ],
    tags:["膽固醇","ApoB","Lpa","sdLDL","預防醫學"]
  },
  {
    id:"big-health",
    title:"保養心臟，不是老了才開始",
    category:"健康老化",
    date:"2026-04-28",
    cover:"assets/img/art-bighealth-1.jpg",
    excerpt:"「大健康」不是沒生病，而是活得更健康。心血管疾病不是突然發生，而是長期累積——而保養，就是最有效的預防。",
    blocks:[
      {type:"p",text:"保養心臟，不是老了才開始，而是每天都在替未來的自己做選擇。"},
      {type:"h",text:"什麼是「大健康」？"},
      {type:"p",text:"「大健康」不是醫學上的正式名詞，概念來自現代醫學的健康維護與全人健康管理——重點不只是「沒生病」，而是「活得更健康」。"},
      {type:"h",text:"台灣的大健康保養在做什麼？"},
      {type:"ul",items:["預防勝於治療","定期健康檢查與癌症篩檢","健康生活型態管理：飲食、運動、睡眠、戒菸限酒","心理與社會健康照顧","社區 ＋ 長照 2.0 支持"]},
      {type:"img",src:"assets/img/art-bighealth-1.jpg",cap:"大健康保養（一）"},
      {type:"img",src:"assets/img/art-bighealth-3.jpg",cap:"大健康保養（二）"},
      {type:"p",text:"台灣也透過健保、健康檢查、社區與家庭醫師制度，把這些國際實證，落實在日常生活中。"},
      {type:"quote",text:"生活型態管理 ＋ 早期預防 ＝ 最好的心臟處方。"},
      {type:"p",text:"心血管疾病從來不是突然發生，而是長期一點一滴累積的結果。而「大健康保養」，就是目前最有效的預防方式。"}
    ],
    tags:["健康老化","預防醫學","心臟健康"]
  },
  {
    id:"women-heart",
    title:"2026 國家婦女健康週：女性健康的新紀元",
    category:"女性健康",
    date:"2026-05-10",
    cover:"assets/img/art-women-1.jpg",
    excerpt:"每年五月從母親節開始的「國家婦女健康週」，今年聚焦荷爾蒙與心臟、骨骼、更年期的關鍵作用。再忙，也要把自己放在第一位。",
    blocks:[
      {type:"p",text:"每年五月，從母親節開始，美國衛生及公共服務部（HHS）與婦女健康辦公室（OWH）會共同舉辦「國家婦女健康週（NWHW）」。今年於 5/10–5/16 登場。"},
      {type:"quote",text:"年度主題：預防、創新與影響——女性健康的新紀元。"},
      {type:"h",text:"今年聚焦四大主題"},
      {type:"ul",items:["關注新興科學：陰道雌激素、微生物群、環境暴露與阿茲海默症等最新領域","強調早期預防：早期發現與預防的重要性","認識荷爾蒙影響：荷爾蒙在更年期、心臟、骨骼肌肉與孕產期各階段的關鍵作用","掌握最新研究：所有資訊皆基於最新科學研究"]},
      {type:"img",src:"assets/img/art-women-1.jpg",cap:"2026 國家婦女健康週（一）"},
      {type:"img",src:"assets/img/art-women-2.jpg",cap:"2026 國家婦女健康週（二）"},
      {type:"p",text:"無論生活再怎麼忙碌，都別忘了把自己的「身體、心理與情緒健康」放在第一位。讓我們一起，為自己、也為身邊的女性，建立更健康的生活方式。"}
    ],
    tags:["女性健康","更年期","心血管","預防醫學"]
  }
];

const STORE_KEY = "lien_articles_v1";

const Store = {
  userArticles(){
    try{ return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
    catch(e){ return []; }
  },
  all(){
    // user articles first (newest), then seed
    return [...this.userArticles(), ...SEED_ARTICLES];
  },
  get(id){ return this.all().find(a=>a.id===id); },
  save(article){
    const arr = this.userArticles();
    article.id = article.id || ("u"+Date.now());
    article.userMade = true;
    arr.unshift(article);
    localStorage.setItem(STORE_KEY, JSON.stringify(arr));
    return article.id;
  },
  remove(id){
    const arr = this.userArticles().filter(a=>a.id!==id);
    localStorage.setItem(STORE_KEY, JSON.stringify(arr));
  },
  categories(){
    return [...new Set(this.all().map(a=>a.category))];
  }
};
