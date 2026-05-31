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
  },
  {
    id:"women-cvd",
    title:"每 5 位女性，就有 1 位死於心血管疾病",
    category:"女性健康",
    date:"2026-05-15",
    cover:"assets/img/art-women-cvd.jpg",
    excerpt:"心血管疾病從來不是男性的專利。妊娠高血壓、糖尿病、多囊性卵巢，都是女性容易被忽略的隱形風險——有些甚至讓發病率飆升 4 倍。",
    blocks:[
      {type:"p",text:"「心血管疾病」聽起來，好像是男性、是長輩才要擔心的事。但妳知道嗎？每 5 位女性，就有 1 位死於心血管疾病。它一直是女性健康裡，最容易被低估的威脅之一。"},
      {type:"h",text:"不是只有遺傳，這些都是隱形風險"},
      {type:"p",text:"除了家族遺傳，女性還有一些「專屬」的危險因子，常常在不知不覺中被忽略："},
      {type:"ul",items:["妊娠高血壓","妊娠糖尿病 / 糖尿病","多囊性卵巢症候群（PCOS）"]},
      {type:"p",text:"這些因素並非小事——有些甚至會讓心血管疾病的發病率，飆升達 4 倍。"},
      {type:"quote",text:"女性的心臟病症狀常常不典型，也最容易被忽視。"},
      {type:"img",src:"assets/img/art-women-cvd.jpg",cap:"女性心血管疾病衛教圖卡"},
      {type:"h",text:"可以怎麼守護自己的心？"},
      {type:"ul",items:["從年輕就開始主動篩檢，別等到有症狀才檢查","就醫時，主動告知完整的生產史（懷孕、妊娠高血壓、妊娠糖尿病等）","控制三高、規律生活，把早期預防放在前面"]},
      {type:"quote",text:"早期預防，才能守護妳的「心」健康。"},
      {type:"p",text:"再忙，也別忘了把自己的心臟放在心上。如果妳有上述任何一項風險，或想了解自己的心血管狀況，歡迎及早和醫師討論，為自己做一次完整的評估。"},
      {type:"p",text:"參考文獻：JACC, Vol. 87 No. 6 — Focus Issue: Women's Cardiovascular Health"}
    ],
    tags:["女性健康","心血管","妊娠高血壓","多囊性卵巢","預防醫學"]
  },
  {
    id:"heart-failure",
    title:"心衰竭：五年死亡率約五成，比部分癌症更致命",
    category:"心臟疾病",
    date:"2026-05-22",
    cover:"assets/img/art-heartfailure-1.jpg",
    excerpt:"心衰竭的五年死亡率約五成，比部分癌症更致命。呼吸困難、腳踝腫脹、莫名疲倦，都是心臟的求救訊號——從診斷、居家照護到高齡全人照護，一次說清楚。",
    blocks:[
      {type:"p",text:"心臟衰竭，不只是單一疾病，而是一種臨床症候群。它的五年死亡率約「五成」，比部分癌症更致命。"},
      {type:"p",text:"簡單說，心衰竭是心臟的結構或功能出了問題，造成壓力填充異常或泵血不足，讓心臟無力負荷身體的需求。"},
      {type:"h",text:"聽聽心臟的求救訊號"},
      {type:"ul",items:["呼吸困難","腳踝腫脹","不明原因的疲倦"]},
      {type:"p",text:"可能伴隨的徵兆還有：頸靜脈壓升高、肺部囉音、周邊水腫。出現這些訊號，請務必提高警覺——及早治療，能改善存活率。"},
      {type:"img",src:"assets/img/art-heartfailure-1.jpg",cap:"心臟衰竭：三大警訊與預後（五年死亡率約五成）"},
      {type:"h",text:"精準診斷：找出原因最重要"},
      {type:"p",text:"心衰竭的診斷，是一段「科學檢查三部曲」，從您的感受與醫師的觀察開始："},
      {type:"ul",items:["症狀：呼吸困難／端坐呼吸、腳踝腫脹、疲倦／活動力下降、夜間咳嗽、腹脹","徵候：頸靜脈壓升高、心音異常／肺部囉音、體重增加／周邊水腫","初步篩檢：抽血指數（BNP / NT-proBNP）、心電圖、胸部 X 光"]},
      {type:"quote",text:"核心確診，靠「心臟超音波」——確認結構／功能異常，測量射出分數（LVEF）。"},
      {type:"p",text:"再加上綜合評估（血液檢查、甲狀腺、冠狀動脈評估等），目的只有一個：查出原因，才能對症治療。"},
      {type:"img",src:"assets/img/art-heartfailure-2.jpg",cap:"心衰竭診斷：症狀、徵候與檢查三部曲"},
      {type:"h",text:"居家自救，愛的小撇步"},
      {type:"p",text:"心衰竭的照顧，關鍵是「終身追蹤、定期回診」。日常可以從這些地方著手："},
      {type:"ul",items:["每日定時量體重，記錄體重變化","低鈉飲食，依醫師建議控管水分與鹽分攝取","按時服藥、善用藥盒，維持藥物依從性","規律運動做心臟復健、戒菸酒、接種疫苗","監控血壓、血糖等共病","有家人朋友的陪伴與支持"]},
      {type:"p",text:"別忘了，這是一場團隊戰：心臟科醫師、護理師、藥師、營養師、復健師、社工師，與您同行。"},
      {type:"img",src:"assets/img/art-heartfailure-3.jpg",cap:"心臟衰竭自我照顧守則"},
      {type:"h",text:"高齡心衰照護：從治病到全人照護"},
      {type:"p",text:"對高齡、衰弱的長輩來說，衰弱不只是「變老」，還牽涉生理衰退、認知／心理影響與社會孤立，常讓死亡率與住院率增加。"},
      {type:"p",text:"高齡用藥也常面臨「兩難」——多重用藥、用藥不足、或副作用（如低血壓、腎功能變化）。因此原則是溫柔而謹慎："},
      {type:"quote",text:"「Start low, go slow」——低劑量開始、緩慢調整，在安全的前提下，給心臟最溫柔的支撐。"},
      {type:"p",text:"全人照護的最終目標，不只是「延長壽命」，更要「提升生活品質、緩和不適症狀」——透過營養補充、心臟復健、共病管理與綜合老年評估（CGA），跨團隊一起為長輩量身打造照護計畫。"},
      {type:"img",src:"assets/img/art-heartfailure-4.jpg",cap:"心衰竭與高齡衰弱族群：從疾病照護到全人照護"},
      {type:"p",text:"及早診斷、配合治療，讓我們一起守護您的「心」活力。"},
      {type:"h",text:"參考文獻"},
      {type:"ul",items:["ESC Guidelines","ACC/AHA Guidelines","Sabri et al. Guideline-Directed Medical Therapy in Frailty and Heart Failure. JACC Adv. 2025 Jul 14;102000.","Steinman MA, et al. Journal of the American Geriatrics Society. 2025;73:2657–2677."]}
    ],
    tags:["心臟衰竭","心衰竭","高齡醫學","GDMT","預防醫學"]
  },
  {
    id:"menopause-heart",
    title:"更年期「心」風暴：雌激素撤退後，誰來守護妳的心？",
    category:"女性健康",
    date:"2026-05-28",
    cover:"assets/img/art-menopause-1.jpg",
    excerpt:"停經後，陪伴半輩子的雌激素保護傘收起，心臟便赤裸暴露在風險中——血管變硬、腹部脂肪、三高悄悄上身。5 張關鍵圖卡，帶妳看懂這場轉折，把健康主導權拿回來。",
    blocks:[
      {type:"p",text:"親愛的，那些惱人的熱潮紅、盜汗與失眠，不只是更年期的過渡，更是身體發出的紅色警報。陪伴我們半輩子的「雌激素」正在撤退——這把天然保護傘一收，妳的心臟便赤裸裸地暴露在風險中。"},
      {type:"p",text:"血管變硬、腹部脂肪堆積、三高悄悄上身……這是一場無聲的心血管代謝風暴。別怕，知識就是妳的新護盾。以下用 5 個重點，帶妳看懂這場轉折。"},
      {type:"img",src:"assets/img/art-menopause-1.jpg",cap:"更年期，妳的「心」事變多了嗎？停經後心血管風險大增"},
      {type:"h",text:"1. 為什麼風險突然升高？"},
      {type:"p",text:"停經前，妳有一把天然的「雌激素護心傘」；停經後保護流失，便引發一連串連鎖反應："},
      {type:"ul",items:["血管彈性變差","壞膽固醇（LDL）增加","腹部脂肪堆積","胰島素阻抗增加、血管內皮功能下降，直接推升動脈硬化與缺血性心臟病風險"]},
      {type:"p",text:"特別注意：早發性停經（小於 45 歲），風險更高。"},
      {type:"img",src:"assets/img/art-menopause-2.jpg",cap:"為什麼風險突然升高？停經前 vs 停經後"},
      {type:"h",text:"2. 這些風險，男女大不同"},
      {type:"p",text:"有些風險男女通用、但對女性傷害更大；有些則是女性專屬，評估時別忘了回顧婦科與產科病史："},
      {type:"ul",items:["通用但對女性影響更大：抽菸、糖尿病","女性專屬（需回顧病史）：懷孕併發症（妊娠高血壓等）、卵巢功能早衰（提早失去保護）"]},
      {type:"img",src:"assets/img/art-menopause-3.jpg",cap:"這些風險，男女大不同——別忘了妳的婦科與產科病史"},
      {type:"h",text:"3. 身體的不適，可能是心臟在喊救命"},
      {type:"p",text:"更年期症狀的隱憂：嚴重的熱潮紅／盜汗、嚴重失眠、情緒波動，可能與較高的心血管風險有關。"},
      {type:"p",text:"更要小心女性心臟病發的「非典型」警訊——不像男性會有劇烈胸痛，女性常表現為："},
      {type:"ul",items:["極度疲倦","呼吸喘","噁心／胃痛","背痛／下巴痛"]},
      {type:"quote",text:"症狀模糊，最容易被輕忽、延誤就醫。"},
      {type:"img",src:"assets/img/art-menopause-4.jpg",cap:"身體的不適，可能是心臟在喊救命——女性非典型警訊"},
      {type:"h",text:"4. 護心行動，現在開始（基礎篇）"},
      {type:"ul",items:["健康飲食：多蔬果、全穀物，少糖少油","規律運動：有氧 ＋ 肌力訓練，維持代謝","體重管理：特別注意減少腹部脂肪","絕對戒菸：最重要的一步，也要遠離二手菸"]},
      {type:"p",text:"生活型態調整，是預防的基石。"},
      {type:"img",src:"assets/img/art-menopause-5.jpg",cap:"護心行動，現在開始（基礎篇）"},
      {type:"h",text:"5. 醫療協助不可少（進階篇）"},
      {type:"ul",items:["定期篩檢 & 積極控制：中年後定期檢查三高（血壓／血脂／血糖），配合醫師治療達標","荷爾蒙治療（MHT）：早期使用可能有利，但需平衡中風／血栓風險"]},
      {type:"quote",text:"荷爾蒙治療利弊因人而異，請務必與專科醫師詳細討論、評估後再使用。"},
      {type:"img",src:"assets/img/art-menopause-6.jpg",cap:"醫療協助不可少（進階篇）：定期篩檢與荷爾蒙治療評估"},
      {type:"p",text:"只要一分鐘，把健康的掌控權拿回來。愛自己，從關心「心」開始——也別忘了分享給妳最珍視的姐妹與長輩，讓我們一起優雅而健康地老去。"},
      {type:"p",text:"本篇衛教與 王儷璇醫師 共同整理。"},
      {type:"h",text:"參考文獻"},
      {type:"ul",items:["ACC/AHA Guidelines","Anagnostis P, et al. Best Pract Res Clin Endocrinol Metab. 2024;38(1):101781.","Lambrinoudaki I, et al. Climacteric. 2024;27(1):68-74.","Rodriguez de Morales YA, et al. Can J Physiol Pharmacol. 2024;102(8):442-451.","Uddenberg ER, et al. Maturitas. 2024;185:107974.","Nappi RE, et al. Lancet Diabetes Endocrinol. 2022;10(6):442-456.","Li T, et al. J Pharmacol Exp Ther. 2025;392(4):103526.","Lobo RA, et al. Lancet Diabetes Endocrinol. 2022;10(6):457-470.","Nash Z, et al. Best Pract Res Clin Obstet Gynaecol. 2022;81:61-68.","Fasero M, et al. J Clin Med. 2025;14(11):3663.","Pérez-López FR, et al. Fertil Steril. 2009;92(4):1171-1186."]}
    ],
    tags:["更年期","女性健康","雌激素","心血管","荷爾蒙治療"]
  },
  {
    id:"ldl-statin",
    title:"不想心肌梗塞找上門？降膽固醇：藥物 vs. 保健品",
    category:"三高與預防",
    date:"2026-05-30",
    cover:"assets/img/art-ldl-statin-1.jpg",
    excerpt:"壞膽固醇對血管的傷害會隨時間累積。Statin 是預防梗塞的核心主力，紅麴、魚油、納豆、薑黃只是隊友。一張圖看懂藥物與保健品的差別，溫柔陪你走向百歲健康。",
    blocks:[
      {type:"p",text:"壞膽固醇（LDL-C）對血管的傷害，會隨時間不斷累積。若不控制，血管負擔很快就達到發病門檻；但若提早管理，目標是讓您活到 100 歲，血管累積的傷害都還沒達標。"},
      {type:"img",src:"assets/img/art-ldl-statin-1.jpg",cap:"不想心肌梗塞找上門？降膽固醇大解密：藥物 vs. 保健品"},
      {type:"h",text:"傷害是「累積」出來的：LDL-C 總量 ＝ LDL-C × 年齡"},
      {type:"p",text:"心血管疾病風險有一個「閾值（臨界點）」，而且會因其他風險因子（如高血壓、糖尿病）而降低。LDL-C 越高、累積越久，就越快達標、越早發病："},
      {type:"ul",items:["高風險族群（LDL-C 200）：約 35 歲就達到閾值、疾病顯現","一般風險族群（LDL-C 100）：約 70 歲達到閾值","30 歲早期介入、把 LDL-C 降到 60：約 100 歲才達標——等於延緩發病 30 年"]},
      {type:"quote",text:"提早管理，目標是讓血管累積的傷害，一輩子都還沒達標。"},
      {type:"img",src:"assets/img/art-ldl-statin-2.jpg",cap:"低密度膽固醇的累積效應：早期介入可延緩 30 年發病"},
      {type:"h",text:"抗戰主力：藥物別再誤會了"},
      {type:"p",text:"Statin（史他汀）類藥物是預防梗塞的核心主力，降幅最強、證據最明確，是台灣血脂指引的首選治療，CP 值無人能敵（在台灣多有健保給付）。若 statin 不夠或不適合，還有其他藥物，請和您的醫師討論。"},
      {type:"h",text:"保健品：是隊友，不是主將"},
      {type:"p",text:"各成份降膽固醇的效果差很多（典型劑量下的預估 LDL-C 降幅）："},
      {type:"ul",items:["史他汀（Statin）：＞30%，一線治療","紅麴（Red Yeast Rice）：約 15–34%，天然成分中的首選、效果近似低劑量史他汀；但副作用與禁忌需比照藥物","納豆激酶：約 8–15%，溫和輔助","薑黃：約 3–7%，改善循環、抗發炎的溫和輔助","EPA 魚油：＜5%，主要降「三酸甘油脂」，對壞膽固醇幾乎無效"]},
      {type:"img",src:"assets/img/art-ldl-statin-3.jpg",cap:"各成份降膽固醇食品之效果（預估 LDL-C 降幅）"},
      {type:"h",text:"關鍵注意事項"},
      {type:"ul",items:["成本效益：史他汀在台灣多有健保給付，成本效益遠高於保健食品","安全性：紅麴成分類似史他汀，需注意肝腎功能與肌肉副作用","品質是關鍵：選保健品要注意品牌信譽，確保成分穩定、無汙染（如橘黴素）"]},
      {type:"p",text:"最後提醒：藥物才是主將，保健品選錯等於白吃；而且，千萬別擅自停藥。"},
      {type:"img",src:"assets/img/art-ldl-statin-4.jpg",cap:"關鍵注意事項：成本效益、安全性與品質"},
      {type:"h",text:"醫病共享決策，實踐大健康保養"},
      {type:"p",text:"我們懂您的不安、也懂您對用藥的顧慮。健康不該只有一種標準答案——請主動把您的疑慮與價值觀告訴醫師，透過「醫病共享決策」，結合專業建議與個人偏好，一起商討出最適合您的專屬護心計畫。"},
      {type:"quote",text:"讓我們一起護心，溫柔地陪您走向百歲健康。"},
      {type:"img",src:"assets/img/art-ldl-statin-5.jpg",cap:"醫病共享決策：一起護心，減少心肌梗塞"},
      {type:"h",text:"參考文獻"},
      {type:"ul",items:["Taiwan Society of Cardiology. 2025 Taiwan Lipid Consensus Statement. Taiwan: Taiwan Society of Cardiology; 2025.","Braunwald E. What is the future of lipid-lowering therapy? Eur Heart J. 2022;43(4):249–250. doi:10.1093/eurheartj/ehab790."]}
    ],
    tags:["膽固醇","壞膽固醇","Statin","紅麴","預防醫學"]
  },
  {
    id:"ppcm",
    title:"產後好喘，別以為只是累——認識周產期心肌病變（PPCM）",
    category:"女性健康",
    date:"2026-05-31",
    cover:"assets/img/art-ppcm-1.jpg",
    excerpt:"懷孕後期到產後 5 個月內，原本健康的媽媽，心臟可能突然「沒力」。產後的喘與水腫，不一定只是累——認識周產期心肌病變，及早診斷，約一半的媽咪能恢復正常。",
    blocks:[
      {type:"p",text:"孕產婦的心衰竭，常常拖到需要急救、甚至使用葉克膜維生——這是醫院裡讓大家既沈重又心痛的案例。近期在診所，也診斷到一位產後左心室射出分率（LVEF）小於 30% 的媽媽；我們希望在治療之下能漸漸恢復，也深信每位媽媽都值得擁有轉診評估與選擇。這週，想和大家分享周產期心肌病變（PPCM）的小知識。"},
      {type:"p",text:"許多媽咪以為懷孕後期或剛生完，「腳腫」和「容易喘」是正常的，忍一忍就過了。但若這些症狀太嚴重，可能是「周產期心肌病變（PPCM）」——也就是妳的心臟突然沒力了。"},
      {type:"quote",text:"這很嚴肅：嚴重者，一年死亡率可達一至二成。"},
      {type:"img",src:"assets/img/art-ppcm-1.jpg",cap:"產後好喘、好累？別以為正常——認識周產期心肌病變（PPCM）"},
      {type:"h",text:"出現這 3 狀況，請立刻看心臟科"},
      {type:"ul",items:["躺平就喘：要墊高好幾個枕頭才吸得到氣","水腫不消：生完好幾週，腳還是腫得像麵龜","沒感冒卻莫名乾咳：特別是晚上、躺下更嚴重"]},
      {type:"p",text:"這不是單純的累，可能是心臟衰竭的徵兆。"},
      {type:"img",src:"assets/img/art-ppcm-2.jpg",cap:"身體的求救訊號：3 大狀況立刻就醫"},
      {type:"h",text:"誰要特別注意？"},
      {type:"ul",items:["高齡產婦","多胞胎媽咪","有妊娠高血壓（子癇前症）者"]},
      {type:"p",text:"別怕，我們都在這裡陪著妳。透過無輻射的「心臟超音波」，由心臟內科醫師就能快速診斷。覺得不對勁，請掛「心臟內科」。"},
      {type:"quote",text:"好消息是：約一半的媽咪及早治療後，心臟功能可以恢復正常。"},
      {type:"img",src:"assets/img/art-ppcm-3.jpg",cap:"高危險群與診斷關鍵：心臟內科醫師 + 心臟超音波"},
      {type:"h",text:"治療與未來：給媽媽的安心指南"},
      {type:"p",text:"預後多數可以恢復，但需要追蹤："},
      {type:"ul",items:["好消息：約 50% 患者心臟功能可在數月至一年內恢復正常","需注意：部分可能轉為慢性心衰竭，需長期治療"]},
      {type:"p",text:"治療關鍵原則（配合醫師指示）：心臟科定期回診、終身追蹤。即使心臟功能恢復，仍需長期監測，切勿自行中斷。"},
      {type:"quote",text:"再次懷孕風險高！計畫前，務必諮詢心臟科醫師評估。"},
      {type:"img",src:"assets/img/art-ppcm-4.jpg",cap:"治療與未來：給媽媽的安心指南"},
      {type:"p",text:"媽咪，辛苦了。想陪寶寶走更長遠的路，請先照顧好自己的健康。定期追蹤，守護母嬰健康。"},
      {type:"h",text:"參考文獻"},
      {type:"ul",items:["Arany Z. Peripartum cardiomyopathy. N Engl J Med. 2024;390(2):154–164.","Davis MB, Arany Z, McNamara DM, Goland S, Elkayam U. Peripartum cardiomyopathy: JACC State-of-the-Art Review. J Am Coll Cardiol. 2020;75(2):207–221.","Sliwa K, Hilfiker-Kleiner D, Damasceno A, et al. Peripartum cardiomyopathy. Lancet. 2025;406(10518):2483–2493."]}
    ],
    tags:["周產期心肌病變","PPCM","產後","女性健康","心衰竭"]
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
