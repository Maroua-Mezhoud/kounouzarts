/* ========= إعدادات المتجر — عدّلها هنا ========= */
const SHOP = {
  phone: "0550390455",
  whatsapp: "213550390455",
  instagram: "https://www.instagram.com/kounouzarts/",
  facebook: "https://www.facebook.com/kounouzarts/",
  map: "https://maps.app.goo.gl/3hK3mFPhWbXxLhGX6",
  address: "حي الدوزي 3، سوريكال، باب الزوار، الجزائر العاصمة — قرب محطة ترامواي 8 ماي 1945",
  hours: "من السبت إلى الخميس، من 10:00 إلى 18:00"
};

/* ========= الأقسام ========= */
const CATS = [
  {id:"all",     name:"الكل"},
  {id:"pens",    name:"الأقلام"},
  {id:"inks",    name:"الأحبار"},
  {id:"inkwells",name:"المحابر"},
  {id:"paper",   name:"الأوراق"},
  {id:"books",   name:"كراسات تعلم الخط"}
];

/* ========= المنتجات (بيانات تجريبية — استبدلها بالحقيقية) =========
   img: ضع رابط/مسار الصورة، أو اتركه "" لتظهر أيقونة القسم */
const PRODUCTS = [
  {id:1, cat:"pens", name:"أقلام بليماكس (Plumax) للخط العربي", desc:"جاهزة للكتابة، مقصوصة باحترافية للمبتدئين والمحترفين", price:850, unit:"للقلم الواحد",
   sizes:["1 ملم","1.5 ملم","2 ملم","3 ملم"],
   img:"images/pens/plumax/1.jpg",
   images:["images/pens/plumax/1.jpg","images/pens/plumax/2.jpg","images/pens/plumax/3.jpg","images/pens/plumax/4.jpg"],
   details:`أقلام بليماكس «  plumax «  خاصة بالخط العربي، جاهزة للكتابة للمبتدئين والمحترفين والهواة أيضا مقصوصة بطريقة احترافية وبعناية فائقة👌
من طرف أستاذٍ مختص في قصِّ وبري الأقلام✍️
تمتاز بمعدنها الرائع غير قابل للصدأ وذات ميكانيزم ممتاز لحمل الحبر
☑متوفرة في الحجم: 1/1.5/3/2 ملم
☑السعر: 850 دج للقلم الواحد.

متوفر توصيل لكل الولايات 🚛 الجزائرية فقط🇩🇿
متواجدون على الفايسبوک والأنستغرام باسم:
كنوز للفنون ، كنوز للفنون
_تواصلكم معنا مفتاح تقدمنا،
خدمتكم وسام فَخر لنا.🌸`},
  {id:2, cat:"inks", name:"حبر «بديل الزرنيخ» الأصفر", desc:"لون أصفر زاهٍ ولافت لأعمال الخطّاطين والزخرفيّين", price:1500,
   img:"images/inks/zarnikh-yellow/1.jpg",
   images:["images/inks/zarnikh-yellow/1.jpg","images/inks/zarnikh-yellow/2.jpg","images/inks/zarnikh-yellow/3.jpg","images/inks/zarnikh-yellow/4.jpg"],
   details:`🟡 لونٌ يكتب خارج المألوف!

حبر «بديل الزرنيخ» الأصفر💛
لونٌ أصفر رائع، زاهٍ ولافت، يمنح أعمال الخطّاطين والزخرفيّين حضورًا مختلفًا ولمسةً استثنائيّة.

حبر مميز لعشاق التّجديد، ولمن يريد أن يضيف إلى لوحاته وحروفه لونًا يلفت النظر ويمنح العمل روحًا خاصة. ✒️🎨

💰 السعر: 1500 دج

🚛 متوفر توصيل لكل الولايات

📱 متواجدون على الفايسبوك والأنستغرام باسم:
كنوز للفنون | @kounouzarts

تواصلكم معنا مفتاح تقدّمنا،
وخدمتكم وسام فخر لنا. 🌸`},
  {id:3, cat:"books", name:"كراستا خطّ الرقعة والخطّ الديواني", desc:"134 صفحة بالاتصالات والشروحات الوافية — دار الإسراء المصرية", price:2500,
   img:"images/books/ruqah-diwani/1.jpg",
   images:["images/books/ruqah-diwani/1.jpg","images/books/ruqah-diwani/2.jpg","images/books/ruqah-diwani/3.jpg","images/books/ruqah-diwani/4.jpg","images/books/ruqah-diwani/5.jpg","images/books/ruqah-diwani/6.jpg","images/books/ruqah-diwani/7.jpg","images/books/ruqah-diwani/8.jpg","images/books/ruqah-diwani/9.jpg"],
   details:`كراستيّ خطّ الرقعة والخطّ الدّيواني للأستاذ مختار عالم مفيض الرحمن شقدار خطّاط كسوة الكعبة المشرّفة، حفظه اللّٰه ورعاه🤎

كراسة تحتوي على 134 صفحة بكامل الاتصالات والشروحات الوافية لتعلم الخطّ (الرقعة، الديواني).
النشر: دار الإسراء المصرية

السعر:2500 دج
التوصيل متوفرّ دكلّ الولايات.🤎
——
متواجدون على الفايسبوک والأنستغرام باسم:
كنوز للفنون ، كنوز للفنون

_تواصلكم معنا مفتاح تقدمنا،
خدمتكم وسام فَخر لنا.🌸`}
];

/* ========= الولايات ========= */
const WILAYAS = ["أدرار","الشلف","الأغواط","أم البواقي","باتنة","بجاية","بسكرة","بشار","البليدة","البويرة","تمنراست","تبسة","تلمسان","تيارت","تيزي وزو","الجزائر","الجلفة","جيجل","سطيف","سعيدة","سكيكدة","سيدي بلعباس","عنابة","قالمة","قسنطينة","المدية","مستغانم","المسيلة","معسكر","ورقلة","وهران","البيض","إليزي","برج بوعريريج","بومرداس","الطارف","تندوف","تيسمسيلت","الوادي","خنشلة","سوق أهراس","تيبازة","ميلة","عين الدفلى","النعامة","عين تموشنت","غرداية","غليزان","تيميمون","برج باجي مختار","أولاد جلال","بني عباس","عين صالح","عين قزام","تقرت","جانت","المغير","المنيعة"];

/* ========= أيقونات الأقسام ========= */
const ICONS = {
  pens:'<svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/></svg>',
  inks:'<svg viewBox="0 0 24 24"><path d="M9 3h6v3H9z"/><path d="M8 6h8l2 4v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10z"/><path d="M12 12c1.5 2 2.5 3 2.5 4.2a2.5 2.5 0 0 1-5 0C9.5 15 10.5 14 12 12z"/></svg>',
  paper:'<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>',
  inkwells:'<svg viewBox="0 0 24 24"><path d="M8 10h8l2 4v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5z"/><path d="M10 10V8h4v2"/><path d="M15 8c2-1 3.5-3 4.5-6-3 1-5.2 2.2-6.5 5"/></svg>',
  books:'<svg viewBox="0 0 24 24"><path d="M4 4h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2z"/><path d="M4 18a2 2 0 0 1 2-2h12"/><path d="M8 8h6"/></svg>',
  tools:'<svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/></svg>',
  gifts:'<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4"/><path d="M12 8v13M19 12v9H5v-9"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>'
};

/* ========= الحالة ========= */
let cat = "all", query = "", cart = {};
try { cart = JSON.parse(localStorage.getItem("kz-cart") || "{}"); } catch(e){}
const $ = id => document.getElementById(id);
const fmt = n => n.toLocaleString("ar-DZ-u-nu-latn") + " دج";
const save = () => { try { localStorage.setItem("kz-cart", JSON.stringify(cart)); } catch(e){} };
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ========= المعلومات ========= */
$("addr").textContent = SHOP.address;
$("hours").textContent = SHOP.hours;
$("tel").textContent = SHOP.phone; $("tel").href = "tel:" + SHOP.phone;
$("mapLink").href = SHOP.map; $("ig").href = SHOP.instagram; $("fb").href = SHOP.facebook;
$("courseBtn").href = "https://wa.me/" + SHOP.whatsapp + "?text=" + encodeURIComponent("السلام عليكم، أريد الاستفسار عن دورات تعليم الخط العربي.");
WILAYAS.forEach((w,i) => { const o = document.createElement("option"); o.value = w; o.textContent = String(i+1).padStart(2,"0") + " - " + w; $("wl").appendChild(o); });

/* ========= عرض المنتجات ========= */
function renderCats(){
  $("cats").innerHTML = CATS.map(c => `<button class="chip ${c.id===cat?"on":""}" data-c="${c.id}">${c.name}</button>`).join("");
}
function renderGrid(){
  const list = PRODUCTS.filter(p => (cat==="all" || p.cat===cat) && (!query || (p.name+p.desc).includes(query)));
  const catName = id => (CATS.find(c => c.id===id)||{}).name;
  $("grid").innerHTML = list.length ? list.map(p => `
    <article class="card" data-open="${p.id}">
      <div class="pic">
        ${p.img ? `<img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy">` : ICONS[p.cat]}
        <span class="tag">${catName(p.cat)}</span>
      </div>
      <div class="info">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="row"><span class="price">${fmt(p.price)}</span>${p.sizes ? `<button class="add" data-open="${p.id}">اختر الحجم</button>` : `<button class="add" data-add="${p.id}">أضف</button>`}</div>
      </div>
    </article>`).join("") : `<div class="empty">${query ? "لا توجد منتجات مطابقة." : "سيتم إضافة منتجات هذا القسم قريباً."}</div>`;
}

/* ========= السلة ========= */
function cartLines(){
  return Object.entries(cart).map(([k,q]) => { const [id,size] = k.split("|"); return {k, size, p:PRODUCTS.find(x => x.id==id), q}; }).filter(l => l.p && l.q>0);
}
function addToCart(id, size){
  const k = size ? id + "|" + size : String(id);
  cart[k] = (cart[k]||0) + 1; renderCart(); toast();
}
function renderCart(){
  const lines = cartLines();
  const total = lines.reduce((s,l) => s + l.p.price*l.q, 0);
  $("count").textContent = lines.reduce((s,l) => s + l.q, 0);
  $("total").textContent = fmt(total);
  $("items").innerHTML = lines.length ? lines.map(l => `
    <div class="item">
      <div class="t"><b>${esc(l.p.name)}${l.size ? " — " + esc(l.size) : ""}</b><span>${fmt(l.p.price*l.q)}</span></div>
      <div class="qty"><button data-d="1" data-k="${l.k}">+</button><i>${l.q}</i><button data-d="-1" data-k="${l.k}">−</button></div>
      <button class="rm" data-rm="${l.k}">حذف</button>
    </div>`).join("") : `<p class="empty" style="padding:40px 0">السلة فارغة</p>`;
  $("order").style.display = lines.length ? "" : "none";
  save();
}
function toast(){ const t = $("toast"); t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 1400); }
function openCart(o){ $("drawer").classList.toggle("open", o); $("shade").classList.toggle("open", o); document.body.style.overflow = o ? "hidden" : ""; }

$("cats").addEventListener("click", e => { const b = e.target.closest("[data-c]"); if(!b) return; cat = b.dataset.c; renderCats(); renderGrid(); });
$("q").addEventListener("input", e => { query = e.target.value.trim(); renderGrid(); });
$("grid").addEventListener("click", e => {
  const a = e.target.closest("[data-add]");
  if (a){ addToCart(a.dataset.add); return; }
  const o = e.target.closest("[data-open]");
  if (o) openProduct(o.dataset.open);
});
$("items").addEventListener("click", e => {
  const b = e.target.closest("button"); if(!b) return;
  if (b.dataset.rm) delete cart[b.dataset.rm];
  if (b.dataset.d){ const k = b.dataset.k; cart[k] = (cart[k]||0) + Number(b.dataset.d); if(cart[k] <= 0) delete cart[k]; }
  renderCart();
});
$("openCart").onclick = () => openCart(true);
$("closeCart").onclick = $("shade").onclick = () => openCart(false);
document.addEventListener("keydown", e => { if(e.key === "Escape") openCart(false); });

$("order").addEventListener("submit", e => {
  e.preventDefault();
  const lines = cartLines(); if(!lines.length) return;
  const total = lines.reduce((s,l) => s + l.p.price*l.q, 0);
  const msg = [
    "السلام عليكم، أود طلب:",
    ...lines.map(l => `• ${l.p.name}${l.size ? " (" + l.size + ")" : ""} × ${l.q} = ${fmt(l.p.price*l.q)}`),
    `المجموع: ${fmt(total)} (دون التوصيل)`,
    "",
    `الاسم: ${$("nm").value}`,
    `الهاتف: ${$("ph").value}`,
    `الولاية: ${$("wl").value}`,
    `العنوان: ${$("ad").value}`
  ].join("\n");
  window.open("https://wa.me/" + SHOP.whatsapp + "?text=" + encodeURIComponent(msg), "_blank");
});

renderCats(); renderGrid(); renderCart();

/* ========= قسم التواصل ========= */
$("wa").href = "https://wa.me/" + SHOP.whatsapp + "?text=" + encodeURIComponent("السلام عليكم، أريد الاستفسار.");
$("telBtn").href = "tel:" + SHOP.phone;
function updateStatus(){
  const parts = new Intl.DateTimeFormat("en-US",{timeZone:"Africa/Algiers",weekday:"short",hour:"numeric",hour12:false}).formatToParts(new Date());
  const day = parts.find(p => p.type==="weekday").value;
  const hr = Number(parts.find(p => p.type==="hour").value) % 24;
  const open = day !== "Fri" && hr >= 10 && hr < 18;
  const el = $("status");
  el.className = "status " + (open ? "open" : "closed");
  el.querySelector("span").textContent = open ? "مفتوح الآن" : "مغلق حالياً";
}
updateStatus(); setInterval(updateStatus, 60000);

/* ========= نافذة تفاصيل المنتج ========= */
let cur = null, gi = 0, chosen = "", imgs = [];
const pm = $("pm"), pmShade = $("pmShade");

function showImg(i){
  if(!imgs.length) return;
  gi = (i + imgs.length) % imgs.length;
  $("gImg").src = imgs[gi];
  $("gCount").textContent = (gi+1) + " / " + imgs.length;
  document.querySelectorAll("#pmBody .th").forEach((t,n) => t.classList.toggle("on", n===gi));
}
function openProduct(id){
  cur = PRODUCTS.find(p => p.id == id); if(!cur) return;
  imgs = (cur.images && cur.images.length) ? cur.images : (cur.img ? [cur.img] : []);
  gi = 0; chosen = "";
  const catName = (CATS.find(c => c.id===cur.cat)||{}).name;
  const gallery = imgs.length ? `
    <div class="gal">
      <div class="gmain" id="gMain">
        <img id="gImg" alt="${esc(cur.name)}">
        ${imgs.length>1 ? `<button class="gnav gprev" data-g="-1" aria-label="السابق">›</button><button class="gnav gnext" data-g="1" aria-label="التالي">‹</button><span class="gcount" id="gCount"></span>` : `<span class="gcount" id="gCount" hidden></span>`}
      </div>
      ${imgs.length>1 ? `<div class="thumbs">${imgs.map((s,i) => `<button class="th" data-gi="${i}" aria-label="صورة ${i+1}"><img src="${esc(s)}" alt=""></button>`).join("")}</div>` : ""}
    </div>` : `<div class="gal"><div class="gmain noimg">${ICONS[cur.cat]||""}</div></div>`;
  $("pmBody").innerHTML = `
    ${gallery}
    <div class="pd">
      <span class="kicker">${catName||""}</span>
      <h3>${esc(cur.name)}</h3>
      <div class="pprice">${fmt(cur.price)}${cur.unit ? ` <small>${esc(cur.unit)}</small>` : ""}</div>
      ${cur.sizes ? `<div class="sizes"><b>اختر الحجم:</b><div class="chips" id="sizes">${cur.sizes.map(s => `<button type="button" class="chip" data-size="${esc(s)}">${esc(s)}</button>`).join("")}</div><p class="hint" id="hint" hidden>الرجاء اختيار الحجم أولاً</p></div>` : ""}
      <div class="pdesc">${esc(cur.details || cur.desc)}</div>
      <button class="btn solid padd" id="pmAdd" type="button">أضف إلى السلة</button>
    </div>`;
  pm.classList.add("open"); pmShade.classList.add("open"); document.body.style.overflow = "hidden";
  pm.scrollTop = 0;
  showImg(0);
}
function closeProduct(){
  pm.classList.remove("open"); pmShade.classList.remove("open"); document.body.style.overflow = "";
}
$("pmBody").addEventListener("click", e => {
  const g = e.target.closest("[data-g]"); if(g){ showImg(gi + Number(g.dataset.g)); return; }
  const t = e.target.closest("[data-gi]"); if(t){ showImg(Number(t.dataset.gi)); return; }
  const s = e.target.closest("[data-size]");
  if (s){
    chosen = s.dataset.size;
    document.querySelectorAll("#sizes .chip").forEach(c => c.classList.toggle("on", c===s));
    $("hint").hidden = true; return;
  }
  if (e.target.closest("#pmAdd")){
    if (cur.sizes && !chosen){ $("hint").hidden = false; $("sizes").classList.add("shake"); setTimeout(() => $("sizes").classList.remove("shake"), 500); return; }
    addToCart(cur.id, chosen); closeProduct();
  }
});
let tx = null;
$("pmBody").addEventListener("touchstart", e => { tx = e.target.closest("#gMain") ? e.touches[0].clientX : null; }, {passive:true});
$("pmBody").addEventListener("touchend", e => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx; tx = null;
  if (Math.abs(dx) > 40) showImg(gi + (dx > 0 ? 1 : -1));
});
$("pmClose").onclick = pmShade.onclick = closeProduct;
document.addEventListener("keydown", e => {
  if (!pm.classList.contains("open")) return;
  if (e.key === "Escape") closeProduct();
  if (e.key === "ArrowLeft") showImg(gi + 1);
  if (e.key === "ArrowRight") showImg(gi - 1);
});
