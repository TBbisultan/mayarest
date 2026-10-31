
/* ---------------- DATA ---------------- */
const CATEGORIES= [
  { id:'china',       name:'Горячее(китай)' },
  { id:'china-cold',  name:'Холодное(китай)' },
  { id:'cold-snacks', name:'Холодные закуски' },
  { id:'hot-snacks',  name:'Горячие закуски' },
  { id:'pizza',       name:'Пицца' },
  { id:'soups',       name:'Супы' },
  { id:'salads',      name:'Салаты' },
  { id:'main',        name:'Вторые блюда' },
 { id:'beer-set',     name:'Пивные сэты' },
  { id:'sides',       name:'Гарниры и хлеб' },
];

const ITEMS = [

// =====================================================
// ГОРЯЧЕЕ (КИТАЙ)
// =====================================================

{ id:'m10', cat:'china', name:'Чунцин Лазжи', desc:'重庆辣子鸡', price:7890, img:'images/chongqing-laziji.jpg' },
{ id:'m11', cat:'china', name:'Синьцзян Лазжи', desc:'新疆辣子鸡', price:7590, img:'images/xinjiang-laziji.jpg' },
{ id:'m12', cat:'china', name:'Дапаньцзи', desc:'大盘鸡', price:14990, img:'images/dapanji.jpg' },
{ id:'ch1', cat:'china', name:'Дапаньцзи (маленький)', desc:'大盘鸡', price:9990, img:'images/dapanji-small.jpg' },
{ id:'ch2', cat:'china', name:'Дапан Янжоу', desc:'大盘羊肉', price:18690, img:'images/dapan-yangrou.jpg' },
{ id:'m19', cat:'china', name:'Лажау Чауру', desc:'辣椒炒肉', price:4590, img:'images/lajiao-chaorou.jpg' },
{ id:'m25', cat:'china', name:'Ганьбянь Дужау', desc:'干煸豆角', price:4790, img:'images/ganbian-doujiao.jpg' },
{ id:'m29', cat:'china', name:'Гунбао Жидин', desc:'宫爆鸡丁', price:3790, img:'images/gongbao-jiding.jpg' },
{ id:'m30', cat:'china', name:'Тебань Ру', desc:'铁板牛肉', price:5990, img:'images/tieban-niurou.jpg' },
{ id:'m32', cat:'china', name:'Хуншау Юй', desc:'红烧鱼', price:13890, img:'images/hongshao-yu.jpg' },
{ id:'ch3', cat:'china', name:'Тебань Янпай', desc:'铁板羊排', price:5690, img:'images/tieban-yangpai.jpg' },
{ id:'ch4', cat:'china', name:'Тебань Жи', desc:'铁板鸡片', price:3690, img:'images/tieban-jipian.jpg' },
{ id:'ch5', cat:'china', name:'Ганжа Уй', desc:'干炸鱼', price:11990, img:'images/ganzha-yu.jpg' },
{ id:'ch6', cat:'china', name:'Коло Жичы', desc:'可乐鸡翅', price:3690, img:'images/kele-jichi.jpg' },
{ id:'ch7', cat:'china', name:'Мала Шиаң Го', desc:'麻辣香锅', price:7890, img:'images/mala-xiangguo.jpg' },
{ id:'ch8', cat:'china', name:'Байсай Фын Тиау Ру', desc:'白菜粉条肉', price:4690, img:'images/baicai-fentiao-rou.jpg' },
{ id:'ch9', cat:'china', name:'Цоң Бау Ру', desc:'葱爆肉', price:4690, img:'images/congbao-rou.jpg' },
{ id:'ch10', cat:'china', name:'Шутиау Чауру', desc:'', price:3990, img:'images/shutiao-chaorou.jpg' },
{ id:'ch11', cat:'china', name:'Сучау Шаңхай Чиң', desc:'素炒上海青', price:3490, img:'images/su-chao-shanghaiqing.jpg' },
{ id:'ch12', cat:'china', name:'Суанроң Шиланхуа', desc:'蒜蓉西兰花', price:3490, img:'images/suanrong-xilanhua.jpg' },
{ id:'ch13', cat:'china', name:'Сучау Муыр', desc:'素炒木耳', price:3390, img:'images/su-chao-muer.jpg' },
{ id:'ch14', cat:'china', name:'Ганжа Могү', desc:'干炸蘑菇', price:2890, img:'images/ganzha-mogu.jpg' },
{ id:'ch15', cat:'china', name:'Мала Дуфу', desc:'麻辣豆腐', price:3690, img:'images/mala-doufu.jpg' },
{ id:'ch16', cat:'china', name:'Жачаң Дуфу', desc:'家常豆腐', price:3990, img:'images/jiachang-doufu.jpg' },
{ id:'ch17', cat:'china', name:'Хоңшау Дуфу', desc:'红烧豆腐', price:3890, img:'images/hongshao-doufu.jpg' },
  { id:'ch18', cat:'china', name:'Баучау Ниуду', desc:'爆炒牛肚', price:4290, img:'images/baochao-niudu.jpg' },


// =====================================================
// ХОЛОДНОЕ (КИТАЙ)
// =====================================================

{ id:'cs7',  cat:'china-cold', name:'Иаңсоң Муар', desc:'洋葱木耳', price:2490, img:'images/yangcong-muer.jpg' },
{ id:'cs8',  cat:'china-cold', name:'Босай Жинжін Гү', desc:'菠菜金针菇', price:2890, img:'images/bocai-jinzhengu.jpg' },
{ id:'cs9',  cat:'china-cold', name:'Ла Лянфн', desc:'西安辣凉粉', price:2390, img:'images/xian-laliangfen.jpg' },
{ id:'cs10', cat:'china-cold', name:'Лянбан Ниуду', desc:'凉拌牛肚', price:3990, img:'images/liangban-niudu.jpg' },
{ id:'cs11', cat:'china-cold', name:'Хуа Шың Ми', desc:'花生米', price:2190, img:'images/huashengmi.jpg' },
{ id:'cs12', cat:'china-cold', name:'Босай Мян Жин', desc:'菠菜面筋', price:2790, img:'images/bocai-mianjin.jpg' },
{ id:'cs13', cat:'china-cold', name:'Шиаңла Дуфупи', desc:'香辣豆腐皮', price:2690, img:'images/xiangla-doufupi.jpg' },
{ id:'cs14', cat:'china-cold', name:'Босай Хуашың Ми', desc:'菠菜花生米', price:2790, img:'images/bocai-huashengmi.jpg' },
{ id:'cs15', cat:'china-cold', name:'Лянбан Ниу Ру', desc:'凉拌牛肉', price:6890, img:'images/liangban-niurou.jpg' },
{ id:'cs16', cat:'china-cold', name:'Суанла Жөгін Фн', desc:'酸辣蕨根粉', price:2890, img:'images/suanla-juegenfen.jpg' },
{ id:'cs17', cat:'china-cold', name:'Лянбан Фужу', desc:'凉拌腐竹', price:2690, img:'images/liangban-fuzhu.jpg' },
{ id:'cs18', cat:'china-cold', name:'Коу Шуи Жи', desc:'口水鸡', price:3890, img:'images/koushui-ji.jpg' },
{ id:'cs19', cat:'china-cold', name:'Лянбан Хуаңгуа', desc:'凉拌黄瓜', price:2690, img:'images/liangban-huanggua.jpg' },
{ id:'cs20', cat:'china-cold', name:'Суанни Хуаңгуа', desc:'蒜泥黄瓜', price:2890, img:'images/suanni-huanggua.jpg' },
{ id:'cs21', cat:'china-cold', name:'Лянбан Шилан Хуа', desc:'凉拌西兰花', price:2990, img:'images/liangban-xilanhua.jpg' },



  
// =====================================================
// ХОЛОДНЫЕ ЗАКУСКИ
// =====================================================

{ id:'cs1', cat:'cold-snacks', name:'Русская закуска', desc:'', price:4690, img:'images/russian-appetizer.jpg' },
{ id:'cs2', cat:'cold-snacks', name:'Фруктовый ассорти', desc:'', price:7890, img:'images/fruit-assortment.jpg' },
{ id:'cs5', cat:'cold-snacks', name:'Брускетта с лососем', desc:'', price:3890, img:'images/salmon-bruschetta.jpg' },
  { id:'cs22', cat:'cold-snacks', name:'Кавказская нарезка', desc:'', price:3990, img:'images/kavkazskaya-narezka.jpg' },
{ id:'cs23', cat:'cold-snacks', name:'Закуска со шпротами', desc:'', price:2990, img:'images/zakuska-so-shprotami.jpg' },
  { id:'cs24', cat:'cold-snacks', name:'Пивной сет N-1', desc:'', price:6390, img:'images/pivset1.jpg' },




// =====================================================
// ГОРЯЧИЕ ЗАКУСКИ
// =====================================================

{ id:'hs1', cat:'hot-snacks', name:'Жареный чечил', desc:'', price:2190, img:'images/zharrenichechel.jpg' },
{ id:'hs2', cat:'hot-snacks', name:'Гарлики', desc:'', price:2690, img:'images/garlic-croutons.jpg' },
{ id:'hs3', cat:'hot-snacks', name:'Пивные креветки', desc:'', price:4390, img:'images/beer-shrimp.jpg' },
{ id:'hs5', cat:'hot-snacks', name:'Сырные палочки', desc:'', price:3290, img:'images/syrnye-palochki.jpg' },
{ id:'hs6', cat:'hot-snacks', name:'Нагетсы', desc:'', price:3290, img:'images/nuggets.jpg' },
{ id:'hs7', cat:'hot-snacks', name:'Луковые кольца', desc:'', price:3290, img:'images/lukovye-koltsa.jpg' },
{ id:'hs8', cat:'hot-snacks', name:'Креветки в шпажках', desc:'', price:5290, img:'images/krevetki-v-shpazhkah.jpg' },
{ id:'hs9', cat:'hot-snacks', name:'Крылышки Баффало с фри', desc:'', price:6200, img:'images/krylyshki-buffalo-fri.jpg' },
{ id:'hs11', cat:'hot-snacks', name:'Triple crunch с мясом', desc:'', price:4890, img:'images/triple-crunch.jpg' },


// =====================================================
// ПИЦЦА
// =====================================================

{ id:'p1', cat:'pizza', name:'Пепперонни', desc:'', price:3890, img:'images/margariri.jpg' },
{ id:'p2', cat:'pizza', name:'Маргаритта', desc:'', price:2890, img:'images/pepperoni.jpg' },
{ id:'p3', cat:'pizza', name:'Мексиканская', desc:'', price:4390, img:'images/mexican-pizza.jpg' },
{ id:'p4', cat:'pizza', name:'Хачапури по-мингерски', desc:'', price:4590, img:'images/hachapuri.megrelskiy.jpg' },
  { id:'p5', cat:'pizza', name:'Кесадилья с курицей', desc:'', price:3990, img:'images/quesadilla-s-kuritsey.jpg' },
  { id:'p6', cat:'pizza', name:'4 сезона', desc:'', price:4390, img:'images/4-sezona.jpg' },


// =====================================================
// СУПЫ
// =====================================================

{ id:'su1', cat:'soups', name:'Том Ям', desc:'', price:3990, img:'images/tomyan.jpg' },
{ id:'su2', cat:'soups', name:'Рамен с сыром и курицей', desc:'', price:3990, img:'images/kurinniy.ramen.jpg' },
{ id:'su3', cat:'soups', name:'Зсай Данхуа Тан', desc:'紫菜蛋花汤', price:3990, img:'images/zicai-danhua-tang.jpg' },
{ id:'su4', cat:'soups', name:'Суанла Тан', desc:'酸辣烫', price:4390, img:'images/suanla-tang.jpg' },
{ id:'su5', cat:'soups', name:'Шихоңш Жидан Тан', desc:'西红柿鸡蛋汤', price:3890, img:'images/xihongshi-jidan-tang.jpg' },
  { id:'su6', cat:'soups', name:'Грибной крем суп', desc:'', price:2980, img:'images/gribnoy-krem-sup.jpg' },
  { id:'su7', cat:'soups', name:'Чечевичный крем суп', desc:'', price:2980, img:'images/chechevichny-krem-sup.jpg' },
{ id:'su8', cat:'soups', name:'Сорпа из баранины', desc:'', price:4580, img:'images/sorpa-iz-baraniny.jpg' },

// =====================================================
// САЛАТЫ
// =====================================================

{ id:'cs4', cat:'salads', name:'Фруктовый салат', desc:'', price:3690, img:'images/fruit-salad.jpg' },
{ id:'sa2', cat:'salads', name:'Греческий салат', desc:'', price:3690, img:'images/greek-salad.jpg' },
{ id:'sa3', cat:'salads', name:'Цезарь салат', desc:'', price:3890, img:'images/caesar-with-chicken.jpg' },
{ id:'sa4', cat:'salads', name:'Хрустящие баклажаны', desc:'', price:3890, img:'images/crispy.baklazhani.jpg' },
{ id:'sa5', cat:'salads', name:'Салат Малибу', desc:'', price:2890, img:'images/malibu.jpg' },
{ id:'sa6', cat:'salads', name:'Салат Нисуаз с говяжьей вырезкой', desc:'', price:4790, img:'images/nicoise-with-beef-tenderloin.jpg' },
{ id:'sa7', cat:'salads', name:'Руккола с креветками', desc:'', price:4590, img:'images/rukolla.s.krevetkami.jpg' },
  { id:'sa8', cat:'salads', name:'Гнездо глухаря', desc:'', price:3990, img:'images/gnezdo-gluharya.jpg' },


// =====================================================
// ВТОРЫЕ БЛЮДА
// =====================================================

{ id:'m1', cat:'main', name:'Куринная грудка с грибным соте', desc:'', price:3890, img:'images/chicken-breast-with-mushroom-saute.jpg' },
{ id:'m2', cat:'main', name:'Мясо по-тайски', desc:'', price:3790, img:'images/myaso.po.tayski.jpg' },
{ id:'m3', cat:'main', name:'Стейк Рибай', desc:'', price:6890, img:'images/ribay.steyk.jpg' },
{ id:'m4', cat:'main', name:'Строганов с картофельным пюре', desc:'', price:3890, img:'images/befstroganov.s.pure.jpg' },
{ id:'m5', cat:'main', name:'Паста Альфредо', desc:'', price:3590, img:'images/pasta.alfredo.jpg' },
{ id:'m6', cat:'main', name:'Паста с лососем и шпинатом', desc:'', price:3590, img:'images/pasta.s.lososem.i.shpinatom.jpg' },
{ id:'m8', cat:'main', name:'Куриная грудка с грибным соусом', desc:'', price:3890, img:'images/chicken-breast-with-mushroom-saute.jpg' },
  { id:'m33', cat:'main', name:'Курица в сливочном соусе с рисом', desc:'', price:4990, img:'images/kuritsa-slivochny-sous-ris.jpg' },
{ id:'m34', cat:'main', name:'Курица в кисло-сладком соусе с рисом', desc:'', price:4990, img:'images/kuritsa-kislo-sladky-sous-ris.jpg' },
  { id:'m35', cat:'main', name:'Паста Болоньезе', desc:'', price:4590, img:'images/pasta-bolonezе1.jpg' },

// =====================================================
// Пив сэт
// =====================================================

{ id:'bs2', cat:'beer-set', name:'Пивной сэт N-3', desc:'', price:8290, img:'images/pivset3.jpg' },

// =====================================================
// ГАРНИРЫ И ХЛЕБ
// =====================================================
{ id:'sd4', cat:'sides', name:'Хлебная корзина', desc:'', price:890, img:'images/hlebnaya-korzina.jpg' },
{ id:'sd1', cat:'sides', name:'Рис', desc:'', price:790, img:'images/ris.jpg' },
{ id:'sd2', cat:'sides', name:'Дольки', desc:'', price:1590, img:'images/kartofelnie.dolki.jpg' },
{ id:'sd3', cat:'sides', name:'Овощи на гриле', desc:'', price:1900, img:'images/ovoshi.na.grile.jpg' },
{ id:'sd5', cat:'sides', name:'Картофель фри', desc:'', price:1490, img:'images/kartofel.fri.jpg' }
];
 
/* ---------------- STATE ---------------- */
let cart = {}; // id -> qty
let activeCat = CATEGORIES[0].id;
 
/* ---------------- RENDER MENU ---------------- */
function renderCategories(){
  const wrap = document.getElementById('catScroll');
  wrap.innerHTML = CATEGORIES.map(c =>
    `<div class="cat-pill ${c.id===activeCat?'active':''}" data-cat="${c.id}">${c.name}</div>`
  ).join('');
  wrap.querySelectorAll('.cat-pill').forEach(el=>{
    el.addEventListener('click', ()=>{
      activeCat = el.dataset.cat;
      renderCategories();
      renderMenuList();
    });
  });
}
 
function moneyFmt(n){ return n.toLocaleString('ru-RU') + ' ₸'; }
 
function renderMenuList(){
  const wrap = document.getElementById('menuList');
  const cat = CATEGORIES.find(c=>c.id===activeCat);
  const items = ITEMS.filter(i=>i.cat===activeCat);
  wrap.innerHTML = `
    <div class="cat-block active">
      <div class="cat-label">${cat.name}</div>
      ${items.map(i=>itemCardHTML(i)).join('')}
    </div>
  `;
  attachItemHandlers();
}
 
const CATEGORY_ICONS = {
  salads:  '<svg viewBox="0 0 24 24" fill="none" stroke="#9c1a2e" stroke-width="1.4" stroke-linecap="round"><path d="M4 12a8 8 0 0 1 16 0z"/><path d="M3 12h18"/><path d="M8 12c0-3 1-6 2-7M16 12c0-3-1-6-2-7M12 12V4"/></svg>',
  snacks:  '<svg viewBox="0 0 24 24" fill="none" stroke="#9c1a2e" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11V7a4 4 0 0 1 8 0"/><path d="M3 11h14l-1.2 8.4a2 2 0 0 1-2 1.6H6.2a2 2 0 0 1-2-1.6z"/><path d="M9 15v2"/><path d="M12 15v2"/></svg>',
  soups:   '<svg viewBox="0 0 24 24" fill="none" stroke="#9c1a2e" stroke-width="1.4" stroke-linecap="round"><path d="M3 11h18l-1.2 5.3A3 3 0 0 1 16.9 19H7.1a3 3 0 0 1-2.9-2.7z"/><path d="M8 3c-.5 1 .5 1.5 0 2.5M12 3c-.5 1 .5 1.5 0 2.5M16 3c-.5 1 .5 1.5 0 2.5"/><path d="M6 11a6 6 0 0 1 12 0"/></svg>',
  pasta:   '<svg viewBox="0 0 24 24" fill="none" stroke="#9c1a2e" stroke-width="1.4" stroke-linecap="round"><ellipse cx="12" cy="16" rx="9" ry="4"/><path d="M6 16c1-4 2-8 1-12M12 16c.5-4.5 1.5-9 0-13M18 16c-1-4-1.5-7.5-.5-11.5"/></svg>',
  pizza:   '<svg viewBox="0 0 24 24" fill="none" stroke="#9c1a2e" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 20h18z"/><circle cx="10" cy="12" r="1" fill="#9c1a2e" stroke="none"/><circle cx="13" cy="15" r="1" fill="#9c1a2e" stroke="none"/><circle cx="11" cy="17" r="1" fill="#9c1a2e" stroke="none"/></svg>',
  sharing: '<svg viewBox="0 0 24 24" fill="none" stroke="#9c1a2e" stroke-width="1.4" stroke-linecap="round"><ellipse cx="12" cy="18" rx="9" ry="2.6"/><path d="M6 14c1-4 3.5-6 6-6s5 2 6 6"/></svg>',
  sides:   '<svg viewBox="0 0 24 24" fill="none" stroke="#9c1a2e" stroke-width="1.4" stroke-linecap="round"><rect x="4" y="9" width="16" height="9" rx="2"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/></svg>',
};
 
function itemCardHTML(i){
  const qty = cart[i.id] || 0;

  return `
    <div class="item-card" data-id="${i.id}">

      <img
        class="item-image"
        src="${i.img}"
        alt="${i.name}"
      >

      <div class="item-body">
        <div class="item-name">${i.name}</div>
        <div class="item-desc">${i.desc}</div>

        <div class="item-foot">
          <div class="price-pill">${moneyFmt(i.price)}</div>

          ${qty > 0
            ? `<div class="qty-stepper">
                 <button class="qty-minus">−</button>
                 <span class="qty-num">${qty}</span>
                 <button class="qty-plus">+</button>
               </div>`
            : `<button class="add-btn">+</button>`
          }
        </div>
      </div>

    </div>
  `;
}
 
function attachItemHandlers(){
  document.querySelectorAll('#menuList .item-card').forEach(card=>{
    const id = card.dataset.id;
    const addBtn = card.querySelector('.add-btn');
    const minus = card.querySelector('.qty-minus');
    const plus = card.querySelector('.qty-plus');
    if(addBtn) addBtn.addEventListener('click', ()=>{ changeQty(id, 1); showToast('Добавлено в заказ'); });
    if(plus) plus.addEventListener('click', ()=> changeQty(id, 1));
    if(minus) minus.addEventListener('click', ()=> changeQty(id, -1));
  });
}
 
function changeQty(id, delta){
  const current = cart[id] || 0;
  const next = Math.max(0, current + delta);
  if(next === 0) delete cart[id]; else cart[id] = next;
  renderMenuList();
  updateCartBar();
}
 
/* ---------------- CART BAR ---------------- */
function cartTotals(){
  let count = 0, sum = 0;
  Object.entries(cart).forEach(([id, qty])=>{
    const item = ITEMS.find(i=>i.id===id);
    if(item){ count += qty; sum += qty * item.price; }
  });
  return { count, sum };
}
 
function updateCartBar(){
  const { count, sum } = cartTotals();
  const bar = document.getElementById('cartBar');
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartSum').textContent = moneyFmt(sum);
  if(count > 0) bar.classList.add('show'); else bar.classList.remove('show');
}
 
/* ---------------- CART SCREEN ---------------- */
function renderCart(){
  const wrap = document.getElementById('cartItems');
  const entries = Object.entries(cart);
  if(entries.length === 0){
    wrap.innerHTML = `<div class="cart-empty"><div class="glass">◌</div>Ваш заказ пока пуст.<br>Добавьте что-нибудь из меню.</div>`;
    document.getElementById('cartFooter').style.display = 'none';
    return;
  }
  document.getElementById('cartFooter').style.display = 'block';
  wrap.innerHTML = entries.map(([id, qty])=>{
    const item = ITEMS.find(i=>i.id===id);
    return `
      <div class="cart-item" data-id="${id}">
       <img
  class="item-image"
  src="${item.img}"
  alt="${item.name}"
>
        <div class="item-body">
          <div class="item-name">${item.name}</div>
          <div class="item-desc">${item.desc}</div>
          <div class="item-foot">
            <div class="price-pill">${moneyFmt(item.price)}</div>
            <div class="qty-stepper">
              <button class="qty-minus">−</button>
              <span class="qty-num">${qty}</span>
              <button class="qty-plus">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
 
  wrap.querySelectorAll('.cart-item').forEach(card=>{
    const id = card.dataset.id;
    card.querySelector('.qty-plus').addEventListener('click', ()=>{ changeQty(id, 1); renderCart(); });
    card.querySelector('.qty-minus').addEventListener('click', ()=>{ changeQty(id, -1); renderCart(); });
  });
 
  const { sum } = cartTotals();
  document.getElementById('cartTotal').textContent = moneyFmt(sum);
}
 
function clearCart(){
  cart = {};
  renderCart();
  updateCartBar();
}
 
function renderWaiterView(){
  const wrap = document.getElementById('waiterList');
  const entries = Object.entries(cart);
  wrap.innerHTML = entries.map(([id, qty])=>{
    const item = ITEMS.find(i=>i.id===id);
    return `
      <div class="waiter-item">
        <div class="w-left">
          <div class="w-name">${item.name}</div>
          <div class="w-qty">× ${qty}</div>
        </div>
        <div class="w-price">${moneyFmt(item.price * qty)}</div>
      </div>
    `;
  }).join('');
  const { sum } = cartTotals();
  document.getElementById('waiterTotal').textContent = moneyFmt(sum);
  const now = new Date();
  document.getElementById('waiterTime').textContent =
    now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
}
 
function showWaiter(){
  if(Object.keys(cart).length === 0) return;
  renderWaiterView();
  showScreen('waiter');
}
 
function copyOrder(){
  const entries = Object.entries(cart);
  if(entries.length === 0) return;
  const lines = entries.map(([id, qty])=>{
    const item = ITEMS.find(i=>i.id===id);
    return `${item.name} × ${qty} — ${moneyFmt(item.price * qty)}`;
  });
  const { sum } = cartTotals();
  lines.push(`Итого: ${moneyFmt(sum)}`);
  const text = lines.join('\n');
  if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(()=> showToast('Заказ скопирован'));
  } else {
    showToast('Заказ скопирован');
  }
}
 
/* ---------------- TOAST ---------------- */
let toastTimer = null;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 1800);
}
 
/* ---------------- BOOKING ---------------- */
function bookTable(){
  const msg = encodeURIComponent('Қайырлы күн! Milan мейрамханасынан үстелге тапсырыс бергім келеді.Здравствуйте! Хочу забронировать стол в Milan.');
  window.open(`https://wa.me/77477827391?text=${msg}`, '_blank');
}
 
/* ---------------- SCREEN NAV ---------------- */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=> s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  if(id === 'cart') renderCart();
  if(id === 'menu') updateCartBar();
}
 /* ---------------- HERO NAVIGATION ---------------- */

function toggleHeroNav() {
  document.body.classList.toggle('hero-nav-open');
}

function closeHeroNav() {
  document.body.classList.remove('hero-nav-open');
}

function goHeroHome() {
  closeHeroNav();
  showScreen('home');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function goHeroMenu() {
  closeHeroNav();
  showScreen('menu');
}

function goHeroContacts() {
  closeHeroNav();
  showScreen('home');

  setTimeout(() => {
    const contacts = document.getElementById('contacts');

    if (contacts) {
      contacts.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 50);
}

function scrollToInterior() {
  const interior = document.querySelector('#home .section');

  if (interior) {
    interior.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeHeroNav();
  }
});
/* ---------------- INIT ---------------- */
renderCategories();
renderMenuList();
updateCartBar();
