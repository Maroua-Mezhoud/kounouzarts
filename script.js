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
  {id:"books",   name:"كراسات تعلم الخط"},
  {id:"pencases",name:"المقلمات"},
  {id:"art",     name:"الأعمال الفنية"},
  {id:"notebooks",name:"الكراريس"},
  {id:"misc",    name:"أدوات أخرى"}
];

/* ========= المنتجات (بيانات تجريبية — استبدلها بالحقيقية) =========
   img: ضع رابط/مسار الصورة، أو اتركه "" لتظهر أيقونة القسم */
const PRODUCTS = [
  {id:1, cat:"pens", name:"أقلام بليماكس (Plumax) للخط العربي", desc:"جاهزة للكتابة، مقصوصة باحترافية للمبتدئين والمحترفين", price:850, unit:"للقلم الواحد",
   pick:"اختر الحجم",
   options:[{key:"size", label:"الحجم", values:[{name:"1 ملم"},{name:"1.5 ملم"},{name:"2 ملم"},{name:"3 ملم"}]}],
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
كنوز للفنون | ⁦@kounouzarts⁩

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
خدمتكم وسام فَخر لنا.🌸`},
  {id:4, cat:"inkwells", name:"محبرة خشبية بعبارات خطية", desc:"خشب أصيل، ثابتة على المكتب، بتصاميم وعبارات متنوعة", price:1800,
   img:"images/inkwells/wooden/1.jpg",
   images:["images/inkwells/wooden/1.jpg","images/inkwells/wooden/2.jpg"],
   details:`حين يجتمع دفءُ الخشب، ودقةُ الصنعة، وجمالُ الخطّ، تصبح الأداةُ جزءًا من متعة الكتابة.

محابرُنا الخشبيّة صُنعت لترافق الخطّاط في رحلته؛ ثابتةٌ على المكتب، أنيقةٌ في مظهرها، ومزدانةٌ بعباراتٍ وخطوطٍ تُضفي على مجلس الكتابة روحًا من الجمال والأصالة.

متوفّرة بتصاميم وعباراتٍ متنوّعة، لتختار منها ما يُشبه ذوقك.

السعر: 1800 دج.
متوفر توصيل لكل الولايات 🚛
متواجدون على الفايسبوک والأنستغرام باسم:
كنوز للفنون ، ⁦@kounouzarts⁩
_تواصلكم معنا مفتاح تقدمنا،
خدمتكم وسام فَخر لنا.🌸`},
  {id:5, cat:"paper", name:"الورق المزخرف A5", desc:"مطبوع بتقنية الشبكة الدقيقة، مهيّأ للخط العربي والإهداءات — 14.8 × 21 سم", price:150, unit:"للورقة",
   img:"images/paper/decorated-a5/1.jpg",
   images:["images/paper/decorated-a5/1.jpg","images/paper/decorated-a5/2.jpg","images/paper/decorated-a5/3.jpg","images/paper/decorated-a5/4.jpg","images/paper/decorated-a5/5.jpg","images/paper/decorated-a5/6.jpg","images/paper/decorated-a5/7.jpg"],
   details:`توفّر من جديد.. الورق المزخرف A5 🩵

ليست الزخرفةُ إطارًا يحيط بالورق، بل جمالٌ يحتضن الحرف ويزيده بهاءً وهيبة.

ورقٌ مزخرفٌ بتصاميم أنيقة، مطبوعٌ بتقنية الشبكة الدقيقة، ومهيّأٌ للخط العربي، والكتابات الفنية، والإهداءات الراقية.

🎨 التصاميم: كما في الصور.
📐 المقاس: A5 (14.8 × 21 سم).
💰 السعر: 150 دج فقط.

🚛 التوصيل متوفر إلى جميع ولايات الوطن.
📱 تجدوننا على فيسبوك وإنستغرام باسم: كنوز للفنون | ⁦@kounouzarts⁩
حيثُ يلتقي جمالُ الورق بروعةِ الحرف. ✒️
ثقتكم مصدر إلهامنا، وخدمتكم شرفٌ نعتز به.`},
  {id:6, cat:"pencases", name:"مقلمة جلدية فاخرة — صناعة كنوز", desc:"جلد بقر إيطالي، صناعة يدوية جزائرية، تتّسع لـ 10 أقلام", price:4800,
   img:"images/pencases/leather/1.jpg",
   images:["images/pencases/leather/1.jpg","images/pencases/leather/2.jpg","images/pencases/leather/3.jpg","images/pencases/leather/4.jpg"],
   details:`فخرُ الإنتاج الجزائري..وصناعةُ كنوز. 🤎

مقلمةٌ جلديةٌ فاخرة، تجمع بين الأناقة العملية والحضور الراقي، صُنعت في الجزائر بأيدي حرفيي كنوز، من جلد البقر الإيطالي الفاخر، بعنايةٍ تظهر في كل غرزة، وإتقانٍ يمنحها متانةً وجمالًا يدومان.

▫️ تتّسع لما يصل إلى 10 أقلام، لتحفظها مرتبةً وآمنةً.
🎨 متوفرة بعدّة ألوان أنيقة تناسب مختلف الأذواق.
🪡 صناعة يدوية متقنة تحمل بصمة كنوز في كل تفصيل.

السعر: 4800دج
متوفر توصيل لكل الولايات 🚛
متواجدون على الفايسبوک والأنستغرام باسم:
كنوز للفنون ، ⁦@kounouzarts⁩
_تواصلكم معنا مفتاح تقدمنا،
خدمتكم وسام فَخر لنا.🌸`},
  {id:7, cat:"misc", name:"قلم السبورة البيضاء GENVANA — رأس عريض 20 ملم", desc:"كتابة بارزة للخطاطين والمدرّسين، قابل للمسح وإعادة التعبئة", price:1200, from:true, pick:"اختر الخيارات",
   options:[
    {key:"color", label:"لون القلم", values:[{name:"أسود"},{name:"أزرق"},{name:"أحمر"}]},
    {key:"ink", label:"قارورة التعبئة", values:[{name:"بدون قارورة", default:true},{name:"20 مل", price:500},{name:"36 مل", price:600},{name:"65 مل", price:800}]},
    {key:"inkColor", label:"لون القارورة", showIf:{key:"ink", not:"بدون قارورة"}, values:[{name:"أسود"},{name:"أزرق"},{name:"أحمر"}]}
   ],
   img:"images/misc/genvana-marker-20mm/1.jpg",
   images:["images/misc/genvana-marker-20mm/1.jpg","images/misc/genvana-marker-20mm/2.jpg","images/misc/genvana-marker-20mm/3.jpg","images/misc/genvana-marker-20mm/4.jpg","images/misc/genvana-marker-20mm/5.jpg","images/misc/genvana-marker-20mm/6.jpg","images/misc/genvana-marker-20mm/7.jpg","images/misc/genvana-marker-20mm/8.jpg","images/misc/genvana-marker-20mm/9.jpg","images/misc/genvana-marker-20mm/10.jpg","images/misc/genvana-marker-20mm/11.jpg"],
   details:`🇩🇿جديد كنوز للفنون.. لأول مرة في الجزائر

للكتابات العريضة والعبارات التي تحتاج إلى حضورٍ أوضح، نقدّم لكم قلم السبورة البيضاء GENVANA برأس عريض 20 ملم، ليمنحكم كتابةً بارزة تناسب الخطاطين والمدرّسين، والعروض والكتابات الكبيرة على السبورات البيضاء

✍🏻 عرضٌ أكبر، وكتابةٌ أكثر بروزًا!

🎨 الألوان المتوفرة: الأسود، الأزرق والأحمر

💰 الأسعار:
▪️ القلم العريض (20 ملم): 1200 دج
▪️ قارورة التعبئة (20 مل): 500 دج
▪️ قارورة التعبئة (36 مل): 600 دج
▪️ قارورة التعبئة (65 مل): 800 دج

♻️ قابل للمسح وإعادة التعبئة، لتجديد استخدامه والاستفادة منه مدة أطول.

📦 متوفر الآن لدى كنوز للفنون، مع التوصيل إلى كلّ الولايات

📩 للطلب والاستفسار، راسلونا عبر الخاص

كنوز للفنون | ⁦@kounouzarts⁩
تواصلكم معنا مفتاح تقدّمنا، وخدمتكم وسام فخر لنا`}
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
  pencases:'<svg viewBox="0 0 24 24"><rect x="2.5" y="8" width="19" height="9" rx="4.5"/><path d="M8 8v9M2.5 12.5h19"/></svg>',
  art:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M3 17l5-4.5 4 3.5 3-2.5 6 4.5"/></svg>',
  notebooks:'<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v18M12 8h4M12 12h4"/></svg>',
  misc:'<svg viewBox="0 0 24 24"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/></svg>',
  tools:'<svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/></svg>',
  gifts:'<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4"/><path d="M12 8v13M19 12v9H5v-9"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>'
};

/* ========= الحالة ========= */
let cat = "all", query = "", cart = {};
try { cart = JSON.parse(localStorage.getItem("kz-cart") || "{}"); } catch(e){}
const $ = id => document.getElementById(id);
const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0") + " دج";
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
/* ========= خيارات المنتج (لون، حجم، قارورة...) ========= */
const optVisible = (o, sel) => !o.showIf || (sel[o.showIf.key] && sel[o.showIf.key] !== o.showIf.not);
function calcPrice(p, sel){
  let t = p.price;
  (p.options||[]).forEach(o => {
    if (!optVisible(o, sel)) return;
    const v = o.values.find(x => x.name === sel[o.key]);
    if (v && v.price) t += v.price;
  });
  return t;
}
function describe(p, sel){
  return (p.options||[]).filter(o => optVisible(o, sel) && sel[o.key]).map(o => o.label + ": " + sel[o.key]).join("، ");
}

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
        <div class="row"><span class="price">${p.from ? "من " : ""}${fmt(p.price)}</span>${p.options ? `<button class="add" data-open="${p.id}">${p.pick || "اختر الخيارات"}</button>` : `<button class="add" data-add="${p.id}">أضف</button>`}</div>
      </div>
    </article>`).join("") : `<div class="empty">${query ? "لا توجد منتجات مطابقة." : "سيتم إضافة منتجات هذا القسم قريباً."}</div>`;
}

/* ========= السلة ========= */
function cartLines(){
  const out = [];
  Object.entries(cart).forEach(([k,q]) => {
    const i = k.indexOf("|");
    const id = i < 0 ? k : k.slice(0,i);
    let sel = {};
    if (i >= 0){ try { sel = JSON.parse(k.slice(i+1)); } catch(e){ return; } }
    const p = PRODUCTS.find(x => x.id == id);
    if (!p || !(q > 0)) return;
    out.push({k, p, q, sel, unit: calcPrice(p, sel), desc: describe(p, sel)});
  });
  return out;
}
function addToCart(id, sel){
  const k = sel && Object.keys(sel).length ? id + "|" + JSON.stringify(sel) : String(id);
  cart[k] = (cart[k]||0) + 1; renderCart(); toast();
}
function renderCart(){
  const lines = cartLines();
  const total = lines.reduce((s,l) => s + l.unit*l.q, 0);
  $("count").textContent = lines.reduce((s,l) => s + l.q, 0);
  $("total").textContent = fmt(total);
  $("items").innerHTML = lines.length ? lines.map(l => `
    <div class="item">
      <div class="t"><b>${esc(l.p.name)}</b>${l.desc ? `<em class="od">${esc(l.desc)}</em>` : ""}<span>${fmt(l.unit*l.q)}</span></div>
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
  const total = lines.reduce((s,l) => s + l.unit*l.q, 0);
  const msg = [
    "السلام عليكم، أود طلب:",
    ...lines.map(l => `• ${l.p.name}${l.desc ? " (" + l.desc + ")" : ""} × ${l.q} = ${fmt(l.unit*l.q)}`),
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
let cur = null, gi = 0, sel = {}, imgs = [];
const pm = $("pm"), pmShade = $("pmShade");

function showImg(i){
  if(!imgs.length) return;
  gi = (i + imgs.length) % imgs.length;
  $("gImg").src = imgs[gi];
  $("gCount").textContent = (gi+1) + " / " + imgs.length;
  document.querySelectorAll("#pmBody .th").forEach((t,n) => t.classList.toggle("on", n===gi));
}
function optsHTML(){
  return (cur.options||[]).map(o => optVisible(o, sel) ? `
    <div class="opt" data-opt="${o.key}">
      <b>${esc(o.label)}:</b>
      <div class="chips">${o.values.map(v => `<button type="button" class="chip ${sel[o.key]===v.name ? "on" : ""}" data-ok="${o.key}" data-ov="${esc(v.name)}">${esc(v.name)}${v.price ? ` <small>+${fmt(v.price)}</small>` : ""}</button>`).join("")}</div>
    </div>` : "").join("") + `<p class="hint" id="hint" hidden></p>`;
}
function refreshOpts(){
  (cur.options||[]).forEach(o => { if (!optVisible(o, sel)) delete sel[o.key]; });
  $("opts").innerHTML = optsHTML();
  $("pmPrice").innerHTML = fmt(calcPrice(cur, sel)) + (cur.unit ? ` <small>${esc(cur.unit)}</small>` : "");
}
function openProduct(id){
  cur = PRODUCTS.find(p => p.id == id); if(!cur) return;
  imgs = (cur.images && cur.images.length) ? cur.images : (cur.img ? [cur.img] : []);
  gi = 0; sel = {};
  (cur.options||[]).forEach(o => { const d = o.values.find(v => v.default); if (d) sel[o.key] = d.name; });
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
      <div class="pprice" id="pmPrice"></div>
      <div id="opts"></div>
      <div class="pdesc">${esc(cur.details || cur.desc)}</div>
      <button class="btn solid padd" id="pmAdd" type="button">أضف إلى السلة</button>
    </div>`;
  refreshOpts();
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
  const s = e.target.closest("[data-ok]");
  if (s){ sel[s.dataset.ok] = s.dataset.ov; refreshOpts(); return; }
  if (e.target.closest("#pmAdd")){
    const missing = (cur.options||[]).find(o => optVisible(o, sel) && !sel[o.key]);
    if (missing){
      const h = $("hint"); h.textContent = "الرجاء اختيار: " + missing.label; h.hidden = false;
      const el = document.querySelector('[data-opt="' + missing.key + '"]');
      el.classList.add("shake"); setTimeout(() => el.classList.remove("shake"), 500);
      el.scrollIntoView({block:"center", behavior:"smooth"});
      return;
    }
    const out = {};
    (cur.options||[]).forEach(o => { if (optVisible(o, sel)) out[o.key] = sel[o.key]; });
    addToCart(cur.id, out); closeProduct();
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
