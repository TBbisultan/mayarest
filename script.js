
/* ---------------- DATA ---------------- */
const CATEGORIES= [
  { id:'cold-snacks', name:'Холодные закуски' },
  { id:'hot-snacks',  name:'Горячие закуски' },
  { id:'pizza',       name:'Пицца' },
  { id:'soups',       name:'Супы' },
  { id:'salads',      name:'Салаты' },
  { id:'main',        name:'Вторые блюда' },
  { id:'beer-set',    name:'Пивной сет' },
  { id:'sides',       name:'Гарниры и хлеб' },
];

const ITEMS = [

  // =====================================================
  // ХОЛОДНЫЕ ЗАКУСКИ
  // =====================================================

  { id:'cs1', cat:'cold-snacks', name:'Русская закуска', desc:'', price:0, img:null },
  { id:'cs2', cat:'cold-snacks', name:'Фруктовый ассорти', desc:'', price:0, img:null },
  { id:'cs3', cat:'cold-snacks', name:'Зелёный салат', desc:'', price:0, img:null },
  { id:'cs4', cat:'cold-snacks', name:'Фруктовый салат', desc:'', price:0, img:null },
  { id:'cs5', cat:'cold-snacks', name:'Брускетта с лососем', desc:'', price:0, img:null },
  { id:'cs6', cat:'cold-snacks', name:'Мясной микс', desc:'', price:0, img:null },

  // Китайские холодные блюда

  { id:'cs7',  cat:'cold-snacks', name:'Салат из древесных грибов с луком', desc:'洋葱木耳', price:0, img:null },
  { id:'cs8',  cat:'cold-snacks', name:'Салат из шпината с грибами «Золотая игла»', desc:'菠菜金针菇', price:0, img:null },
  { id:'cs9',  cat:'cold-snacks', name:'Острый холодный крахмальный салат', desc:'西安辣凉粉', price:0, img:null },
  { id:'cs10', cat:'cold-snacks', name:'Холодный салат из говяжьего желудка', desc:'凉拌牛肚', price:0, img:null },
  { id:'cs11', cat:'cold-snacks', name:'Арахис', desc:'花生米', price:0, img:null },
  { id:'cs12', cat:'cold-snacks', name:'Салат из шпината с пшеничным глютеном', desc:'菠菜面筋', price:0, img:null },
  { id:'cs13', cat:'cold-snacks', name:'Острый салат из кожи тофу', desc:'香辣豆腐皮', price:0, img:null },
  { id:'cs14', cat:'cold-snacks', name:'Салат из шпината с арахисом', desc:'菠菜花生米', price:0, img:null },
  { id:'cs15', cat:'cold-snacks', name:'Холодный салат из говядины', desc:'凉拌牛肉', price:0, img:null },
  { id:'cs16', cat:'cold-snacks', name:'Кисло-острый салат из корня папоротника', desc:'酸辣蕨根粉', price:0, img:null },
  { id:'cs17', cat:'cold-snacks', name:'Острый салат из фужу', desc:'凉拌腐竹', price:0, img:null },
  { id:'cs18', cat:'cold-snacks', name:'Сычуаньская холодная курица', desc:'口水鸡', price:0, img:null },
  { id:'cs19', cat:'cold-snacks', name:'Холодный салат из огурцов', desc:'凉拌黄瓜', price:0, img:null },
  { id:'cs20', cat:'cold-snacks', name:'Огурцы с чесночным соусом', desc:'蒜泥黄瓜', price:0, img:null },
  { id:'cs21', cat:'cold-snacks', name:'Холодный салат из брокколи', desc:'凉拌西兰花', price:0, img:null },


  // =====================================================
  // ГОРЯЧИЕ ЗАКУСКИ
  // =====================================================

  { id:'hs1', cat:'hot-snacks', name:'Жареный чечил', desc:'', price:0, img:null },
  { id:'hs2', cat:'hot-snacks', name:'Гарлики', desc:'', price:0, img:null },
  { id:'hs3', cat:'hot-snacks', name:'Пивные креветки', desc:'', price:0, img:null },
  { id:'hs4', cat:'hot-snacks', name:'Хачапури по-аджарски', desc:'', price:0, img:null },


  // =====================================================
  // ПИЦЦА
  // =====================================================

  { id:'p1', cat:'pizza', name:'Маргаритта', desc:'', price:0, img:null },
  { id:'p2', cat:'pizza', name:'Пепперони', desc:'', price:0, img:null },
  { id:'p3', cat:'pizza', name:'Мексиканская', desc:'', price:0, img:null },
  { id:'p4', cat:'pizza', name:'Хачапури по-мингерски', desc:'', price:0, img:null },


  // =====================================================
  // СУПЫ
  // =====================================================

  { id:'su1', cat:'soups', name:'Том Ям', desc:'', price:0, img:null },
  { id:'su2', cat:'soups', name:'Рамен с сыром и курицей', desc:'', price:0, img:null },

  // Китайские супы

  { id:'su3', cat:'soups', name:'Суп с морской капустой и яйцом', desc:'紫菜蛋花汤', price:0, img:null },
  { id:'su4', cat:'soups', name:'Кисло-острый суп', desc:'酸辣汤', price:0, img:null },
  { id:'su5', cat:'soups', name:'Томатный суп с яйцом', desc:'西红柿鸡蛋汤', price:0, img:null },

  // Это блюдо было указано в разделе супов, но по названию это утка.
  { id:'su6', cat:'soups', name:'Коушуй я — пряная утка', desc:'口水鸭', price:0, img:null },


  // =====================================================
  // САЛАТЫ
  // =====================================================

  { id:'sa1', cat:'salads', name:'Зелёный салат с авокадо', desc:'', price:0, img:null },
  { id:'sa2', cat:'salads', name:'Греческий салат', desc:'', price:0, img:null },
  { id:'sa3', cat:'salads', name:'Цезарь салат', desc:'', price:0, img:null },
  { id:'sa4', cat:'salads', name:'Хрустящие баклажаны', desc:'', price:0, img:null },
  { id:'sa5', cat:'salads', name:'Салат Малибу', desc:'', price:0, img:null },
  { id:'sa6', cat:'salads', name:'Салат Нисуаз с говяжьей вырезкой', desc:'', price:0, img:null },
  { id:'sa7', cat:'salads', name:'Руккола с креветками', desc:'', price:0, img:null },


  // =====================================================
  // ВТОРЫЕ БЛЮДА
  // =====================================================

  { id:'m1', cat:'main', name:'Цыплёнок из печи с запечённым картофелем', desc:'', price:0, img:null },
  { id:'m2', cat:'main', name:'Мясо по-тайски', desc:'', price:0, img:null },
  { id:'m3', cat:'main', name:'Стейк Рибай', desc:'', price:0, img:null },
  { id:'m4', cat:'main', name:'Строганов с картофельным пюре', desc:'', price:0, img:null },
  { id:'m5', cat:'main', name:'Паста Альфредо', desc:'', price:0, img:null },
  { id:'m6', cat:'main', name:'Паста с лососем и шпинатом', desc:'', price:0, img:null },
  { id:'m7', cat:'main', name:'Паста лассо со шпинатом', desc:'', price:0, img:null },
  { id:'m8', cat:'main', name:'Куриная грудка с грибным соусом', desc:'', price:0, img:null },
  { id:'m9', cat:'main', name:'Тушёнка с сырными макаронами', desc:'', price:0, img:null },

  // Китайские горячие блюда

  { id:'m10', cat:'main', name:'Чунцин Лазжи', desc:'重庆辣子鸡', price:0, img:null },
  { id:'m11', cat:'main', name:'Синьцзян Лазжи', desc:'新疆辣子鸡', price:0, img:null },
  { id:'m12', cat:'main', name:'Дапаньцзи', desc:'大盘鸡', price:0, img:null },
  { id:'m13', cat:'main', name:'Чжунпаньцзи', desc:'中盘鸡', price:0, img:null },
  { id:'m14', cat:'main', name:'Дапань с бараниной', desc:'大盘羊肉', price:0, img:null },
  { id:'m15', cat:'main', name:'Баранина на железной плите', desc:'铁板羊排', price:0, img:null },
  { id:'m16', cat:'main', name:'Мясо с зелёным луком', desc:'葱爆肉', price:0, img:null },
  { id:'m17', cat:'main', name:'Жареный картофель с мясом', desc:'薯条炒肉', price:0, img:null },
  { id:'m18', cat:'main', name:'Овощи с фунчозой и мясом', desc:'百菜粉条肉', price:0, img:null },
  { id:'m19', cat:'main', name:'Мясо, жаренное с перцем', desc:'辣椒炒肉', price:0, img:null },
  { id:'m20', cat:'main', name:'Мала сянго', desc:'麻辣香锅', price:0, img:null },
  { id:'m21', cat:'main', name:'Жареная пекинская капуста', desc:'素炒上海心', price:0, img:null },
  { id:'m22', cat:'main', name:'Жареные грибы', desc:'干炸蘑菇', price:0, img:null },
  { id:'m23', cat:'main', name:'Брокколи с чесноком', desc:'蒜蓉西兰花', price:0, img:null },
  { id:'m24', cat:'main', name:'Острый тофу', desc:'麻辣豆腐', price:0, img:null },
  { id:'m25', cat:'main', name:'Жареная стручковая фасоль', desc:'干煸豆角', price:0, img:null },
  { id:'m26', cat:'main', name:'Домашний тофу', desc:'家常豆腐', price:0, img:null },
  { id:'m27', cat:'main', name:'Тофу в соусе Хуншао', desc:'红烧豆腐', price:0, img:null },
  { id:'m28', cat:'main', name:'Жареные древесные грибы', desc:'素炒木耳', price:0, img:null },
  { id:'m29', cat:'main', name:'Кунг Пао с курицей', desc:'宫保鸡丁', price:0, img:null },
  { id:'m30', cat:'main', name:'Говядина на железной плите', desc:'铁板牛肉', price:0, img:null },
  { id:'m31', cat:'main', name:'Курица на железной плите', desc:'铁板鸡片', price:0, img:null },
  { id:'m32', cat:'main', name:'Рыба в соусе Хуншао', desc:'红烧鱼', price:0, img:null },
  { id:'m33', cat:'main', name:'Жареный карп', desc:'干炸鲤鱼', price:0, img:null },
  { id:'m34', cat:'main', name:'Куриные крылышки в соусе Кола', desc:'可乐鸡翅', price:0, img:null },
  { id:'m35', cat:'main', name:'Острый жареный говяжий желудок', desc:'爆炒牛肚', price:0, img:null },


  // =====================================================
  // ПИВНОЙ СЕТ
  // =====================================================

  { id:'bs1', cat:'beer-set', name:'Пивной сет N-2', desc:'', price:0, img:null },
  { id:'bs2', cat:'beer-set', name:'Пивной сет N-3', desc:'', price:0, img:null },


  // =====================================================
  // ГАРНИРЫ И ХЛЕБ
  // =====================================================

  { id:'sd1', cat:'sides', name:'Рис', desc:'', price:0, img:null },
  { id:'sd2', cat:'sides', name:'Дольки', desc:'', price:0, img:null },
  { id:'sd3', cat:'sides', name:'Овощи на гриле', desc:'', price:0, img:null },
  { id:'sd4', cat:'sides', name:'Хлебная корзина', desc:'', price:0, img:null },
  { id:'sd5', cat:'sides', name:'Картофель фри', desc:'', price:0, img:null }

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
  const msg = encodeURIComponent('Здравствуйте! Хочу забронировать стол в Milan.');
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
