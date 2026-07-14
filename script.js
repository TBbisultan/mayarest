
/* ---------------- DATA ---------------- */
const CATEGORIES = [
  { id:'salads',  name:'Салаты' },
  { id:'snacks',  name:'Закуски' },
  { id:'soups',   name:'Супы' },
  { id:'pasta',   name:'Паста' },
  { id:'pizza',   name:'Пицца' },
  { id:'sharing', name:'На компанию' },
  { id:'sides',   name:'Гарниры' },
];
 
const ITEMS = [
  // Салаты
  { id:'sa1',  cat:'salads', name:'Греческий салат', desc:'Свежие овощи, оливки, сыр фета, оливковое масло', price:2590, img:'https://loremflickr.com/300/300/greek,salad' },
  { id:'sa2',  cat:'salads', name:'Оливье с мясом', desc:'Классический салат с говядиной, картофелем и горошком', price:2690, img:'https://loremflickr.com/300/300/russian,salad' },
  { id:'sa3',  cat:'salads', name:'Гнездо глухаря', desc:'Слоёный салат с курицей, грибами и картофельной соломкой', price:2690, img:'https://loremflickr.com/300/300/layered,salad' },
  { id:'sa4',  cat:'salads', name:'Цезарь с курицей', desc:'Курица гриль, романо, пармезан, соус цезарь', price:2690, img:'https://loremflickr.com/300/300/caesar,salad' },
  { id:'sa5',  cat:'salads', name:'Малибу', desc:'Креветки, авокадо, микс салатов, цитрусовая заправка', price:2790, img:'https://loremflickr.com/300/300/shrimp,avocado,salad' },
  { id:'sa6',  cat:'salads', name:'Сельдь под шубой', desc:'Слоёный салат с сельдью, свёклой и картофелем', price:2890, img:'https://loremflickr.com/300/300/herring,beetroot' },
  { id:'sa7',  cat:'salads', name:'Салат из баклажанов', desc:'Печёные баклажаны, чеснок, грецкий орех, зелень', price:2890, img:'https://loremflickr.com/300/300/eggplant,salad' },
  { id:'sa8',  cat:'salads', name:'Салат с телятиной и шпинатом', desc:'Тонко нарезанная телятина, свежий шпинат, кедровый орех', price:2890, img:'https://loremflickr.com/300/300/veal,spinach' },
  { id:'sa9',  cat:'salads', name:'Кавказская нарезка', desc:'Ассорти мясных деликатесов по-кавказски', price:3090, img:'https://loremflickr.com/300/300/meat,platter' },
  { id:'sa10', cat:'salads', name:'Руккола с креветками', desc:'Руккола, тигровые креветки, черри, лёгкая заправка', price:3190, img:'https://loremflickr.com/300/300/arugula,shrimp' },
  { id:'sa11', cat:'salads', name:'Русская закуска', desc:'Ассорти традиционных русских закусок', price:3590, img:'https://loremflickr.com/300/300/appetizer,platter' },
  { id:'sa12', cat:'salads', name:'Ассорти домашних разносолов', desc:'Домашние соленья и маринады', price:3690, img:'https://loremflickr.com/300/300/pickles,jar' },
 
  // Закуски
  { id:'sn1',  cat:'snacks', name:'Сырные палочки', desc:'Хрустящие палочки моцарелла в панировке', price:2490, img:'https://loremflickr.com/300/300/cheese,sticks' },
  { id:'sn2',  cat:'snacks', name:'Наггетсы', desc:'Куриные наггетсы с соусом на выбор', price:1990, img:'https://loremflickr.com/300/300/chicken,nuggets' },
  { id:'sn3',  cat:'snacks', name:'Крылья Баффало', desc:'Острые куриные крылья в соусе баффало', price:2790, img:'https://loremflickr.com/300/300/buffalo,wings' },
  { id:'sn4',  cat:'snacks', name:'Крылья BBQ', desc:'Куриные крылья в соусе барбекю', price:2590, img:'https://loremflickr.com/300/300/bbq,wings' },
  { id:'sn5',  cat:'snacks', name:'Гарлики', desc:'Чесночные гренки с зеленью', price:1590, img:'https://loremflickr.com/300/300/garlic,bread' },
  { id:'sn6',  cat:'snacks', name:'Луковые кольца', desc:'Хрустящие кольца лука в панировке', price:1690, img:'https://loremflickr.com/300/300/onion,rings' },
  { id:'sn7',  cat:'snacks', name:'Пивные креветки', desc:'Креветки в пивном кляре', price:3390, img:'https://loremflickr.com/300/300/fried,shrimp' },
  { id:'sn8',  cat:'snacks', name:'Клаб сэндвич', desc:'Трёхслойный сэндвич с курицей и беконом', price:2790, img:'https://loremflickr.com/300/300/club,sandwich' },
  { id:'sn9',  cat:'snacks', name:'Бургер куриный', desc:'Куриное филе, свежие овощи, соус', price:2790, img:'https://loremflickr.com/300/300/chicken,burger' },
  { id:'sn10', cat:'snacks', name:'Бургер говяжий', desc:'Говяжья котлета, чеддер, свежие овощи', price:3190, img:'https://loremflickr.com/300/300/beef,burger' },
  { id:'sn11', cat:'snacks', name:'Кесадилья', desc:'Тортилья с сыром, курицей и овощами', price:2890, img:'https://loremflickr.com/300/300/quesadilla' },
  { id:'sn12', cat:'snacks', name:'Пивной сет 1', desc:'Гарлики, крылышки, сырные палочки, луковые кольца, кетчуп, тар-тар', price:5990, img:'https://loremflickr.com/300/300/beer,snacks,platter' },
  { id:'sn13', cat:'snacks', name:'Пивной сет 2', desc:'Жареный чечил, картофель фри, луковые кольца, гарлики, крылышки, сырные палочки, креветки, арахис, соусы', price:8990, img:'https://loremflickr.com/300/300/mixed,platter,beer' },
 
  // Супы
  { id:'so1', cat:'soups', name:'Суп лапша', desc:'Домашняя лапша, курица, бульон, зелень', price:1790, img:'https://loremflickr.com/300/300/chicken,noodle,soup' },
  { id:'so2', cat:'soups', name:'Пельмени', desc:'Пельмени в бульоне со сметаной', price:1990, img:'https://loremflickr.com/300/300/pelmeni,soup' },
  { id:'so3', cat:'soups', name:'Солянка', desc:'Наваристая солянка с копчёностями и оливками', price:2390, img:'https://loremflickr.com/300/300/solyanka,soup' },
  { id:'so4', cat:'soups', name:'Чечевичный', desc:'Чечевичный суп с овощами и специями', price:2390, img:'https://loremflickr.com/300/300/lentil,soup' },
  { id:'so5', cat:'soups', name:'Рамен с курицей', desc:'Куриный бульон, лапша, яйцо, овощи', price:2590, img:'https://loremflickr.com/300/300/chicken,ramen' },
  { id:'so6', cat:'soups', name:'Рамен с говядиной', desc:'Говяжий бульон, лапша, овощи', price:2790, img:'https://loremflickr.com/300/300/beef,ramen' },
  { id:'so7', cat:'soups', name:'Шорпа', desc:'Наваристый суп с бараниной и овощами', price:3090, img:'https://loremflickr.com/300/300/lamb,soup' },
  { id:'so8', cat:'soups', name:'Том Ям', desc:'Острый тайский суп с креветками и кокосовым молоком', price:4090, img:'https://loremflickr.com/300/300/tom,yum' },
 
  // Паста
  { id:'pa1', cat:'pasta', name:'Альфредо', desc:'Сливочный соус, пармезан, курица', price:2790, img:'https://loremflickr.com/300/300/alfredo,pasta' },
  { id:'pa2', cat:'pasta', name:'Болоньезе', desc:'Классический мясной соус болоньезе', price:2990, img:'https://loremflickr.com/300/300/bolognese,pasta' },
  { id:'pa3', cat:'pasta', name:'Паста с морепродуктами', desc:'Тальятелле, микс морепродуктов, томатный соус', price:3290, img:'https://loremflickr.com/300/300/seafood,pasta' },
 
  // Пицца
  { id:'pz1', cat:'pizza', name:'Маргарита', desc:'Томатный соус, моцарелла, базилик', price:2590, img:'https://loremflickr.com/300/300/margherita,pizza' },
  { id:'pz2', cat:'pizza', name:'Пепперони', desc:'Острая пепперони, моцарелла, томатный соус', price:2890, img:'https://loremflickr.com/300/300/pepperoni,pizza' },
  { id:'pz3', cat:'pizza', name:'BBQ', desc:'Курица, соус барбекю, лук, моцарелла', price:2890, img:'https://loremflickr.com/300/300/bbq,pizza' },
  { id:'pz4', cat:'pizza', name:'Цезарь', desc:'Курица, романо, пармезан, соус цезарь', price:2990, img:'https://loremflickr.com/300/300/chicken,pizza' },
  { id:'pz5', cat:'pizza', name:'Мексиканская', desc:'Халапеньо, говядина, кукуруза, перец', price:2990, img:'https://loremflickr.com/300/300/mexican,pizza' },
  { id:'pz6', cat:'pizza', name:'Курица с грибами', desc:'Курица, шампиньоны, моцарелла', price:2990, img:'https://loremflickr.com/300/300/mushroom,pizza' },
 
  // Блюда на компанию
  { id:'sh1', cat:'sharing', name:'Мясной микс', desc:'Ассорти из стейков и мясных деликатесов на компанию', price:29990, img:'https://loremflickr.com/300/300/grilled,meat,platter' },
  { id:'sh2', cat:'sharing', name:'Рыбный микс', desc:'Ассорти рыбы и морепродуктов на гриле', price:26990, img:'https://loremflickr.com/300/300/seafood,grill' },
  { id:'sh3', cat:'sharing', name:'Колбасный микс', desc:'Ассорти колбасных изделий и копчёностей', price:22990, img:'https://loremflickr.com/300/300/sausage,platter' },
 
  // Гарниры
  { id:'gr1', cat:'sides', name:'Рис', desc:'Отварной рассыпчатый рис', price:790, img:'https://loremflickr.com/300/300/steamed,rice' },
  { id:'gr2', cat:'sides', name:'Фри', desc:'Картофель фри с хрустящей корочкой', price:890, img:'https://loremflickr.com/300/300/french,fries' },
  { id:'gr3', cat:'sides', name:'Картофельное пюре', desc:'Нежное сливочное пюре', price:890, img:'https://loremflickr.com/300/300/mashed,potato' },
  { id:'gr4', cat:'sides', name:'Картофельные дольки', desc:'Запечённые картофельные дольки со специями', price:890, img:'https://loremflickr.com/300/300/potato,wedges' },
  { id:'gr5', cat:'sides', name:'Овощи на гриле', desc:'Сезонные овощи, приготовленные на гриле', price:1090, img:'https://loremflickr.com/300/300/grilled,vegetables' },
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
  const icon = CATEGORY_ICONS[i.cat] || CATEGORY_ICONS.salads;
  return `
    <div class="item-card" data-id="${i.id}">
      <div class="item-icon">${icon}</div>
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
        <div class="item-icon">${CATEGORY_ICONS[item.cat] || CATEGORY_ICONS.salads}</div>
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
  const msg = encodeURIComponent('Здравствуйте! Хочу забронировать стол в Maya.');
  window.open(`https://wa.me/77473546835?text=${msg}`, '_blank');
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
