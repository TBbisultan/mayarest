
/* ---------------- DATA ---------------- */
const CATEGORIES = [
  { id:'cold-snacks', name:'Холодные закуски' },
  { id:'hot-snacks',  name:'Горячие закуски' },
  { id:'pizza',       name:'Пиццы' },
  { id:'soups',       name:'Супы' },
  { id:'salads',      name:'Салаты' },
  { id:'main',        name:'Вторые блюда' },
  { id:'beer-set',    name:'Пивной сет' },
  { id:'sides',       name:'Гарниры' },
];

const ITEMS = [

  // ================= САЛАТЫ =================

  {
    id:'sa1',
    cat:'salads',
    name:'Зелёный салат с авокадо',
    desc:'Свежий зелёный салат с авокадо',
    price:0,
    img:null
  },

  {
    id:'sa2',
    cat:'salads',
    name:'Руккола с креветками',
    desc:'Свежая руккола с нежными креветками',
    price:0,
    img:null
  },

  {
    id:'sa3',
    cat:'salads',
    name:'Салат Малибу',
    desc:'Свежий и лёгкий салат',
    price:0,
    img:null
  },

  {
    id:'sa4',
    cat:'salads',
    name:'Салат Цезарь с курицей',
    desc:'Классический Цезарь с нежной курицей',
    price:0,
    img:null
  },

  {
    id:'sa5',
    cat:'salads',
    name:'Салат Греческий',
    desc:'Свежие овощи, сыр и оливки',
    price:0,
    img:null
  },


  // ================= ВТОРЫЕ БЛЮДА =================

  {
    id:'m1',
    cat:'main',
    name:'Куриная грудка, запечённая с грибным соусом',
    desc:'Нежная запечённая куриная грудка с грибным соусом',
    price:0,
    img:null
  },

  {
    id:'m2',
    cat:'main',
    name:'Строганов с картофельным пюре',
    desc:'Нежная говядина в соусе с картофельным пюре',
    price:0,
    img:null
  },

  {
    id:'m3',
    cat:'main',
    name:'Тушёнка с сырными макаронами и говядиной',
    desc:'Сытное блюдо с говядиной, сырными макаронами и тушёным мясом',
    price:0,
    img:null
  },


  // ================= ПАСТА =================
  // Пока оставляем в категории "Вторые блюда",
  // потому что отдельной вкладки "Паста" больше нет.

  {
    id:'m4',
    cat:'main',
    name:'Паста лассо со шпинатом',
    desc:'Нежная паста со шпинатом',
    price:0,
    img:null
  },

  {
    id:'m5',
    cat:'main',
    name:'Паста Альфредо',
    desc:'Классическая паста в нежном сливочном соусе',
    price:0,
    img:null
  },


  // ================= ГОРЯЧИЕ ЗАКУСКИ =================

  {
    id:'hs1',
    cat:'hot-snacks',
    name:'Хачапури по-аджарски',
    desc:'Традиционное хачапури с сыром и яйцом',
    price:0,
    img:null
  },

  {
    id:'hs2',
    cat:'hot-snacks',
    name:'Рамен с сыром и курицей',
    desc:'Ароматный рамен с сыром и курицей',
    price:0,
    img:null
  },


  // ================= ХОЛОДНЫЕ ЗАКУСКИ =================

  {
    id:'cs1',
    cat:'cold-snacks',
    name:'Фруктовый ассорти',
    desc:'Ассорти из свежих фруктов',
    price:0,
    img:null
  },

  {
    id:'cs2',
    cat:'cold-snacks',
    name:'Мясной микс',
    desc:'Ассорти мясных деликатесов',
    price:0,
    img:null
  },


  // ================= ПИЦЦЫ =================
  // Пока пусто — добавим позже.


  // ================= СУПЫ =================
  // Пока пусто — добавим позже.


  // ================= ПИВНОЙ СЕТ =================
  // Пока пусто — добавим позже.


  // ================= ГАРНИРЫ =================
  // Пока пусто — добавим позже.

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
