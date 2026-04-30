// ============================================================
// PC Shop POS System — app.js
// Author: Farid Alfiyansah (No Absen: 26)
// ============================================================

const PRODUCTS = [
  // ── CPU ──────────────────────────────────────────────────
  { id: 1,  name: "Intel Core i9-14900K",        category: "CPU",         price: 6200000,  stock: 8,
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80&fit=crop" },
  { id: 2,  name: "Intel Core i7-14700K",         category: "CPU",         price: 4800000,  stock: 12,
    img: "https://images.unsplash.com/photo-1555617981-dac3772603c4?w=400&q=80&fit=crop" },
  { id: 3,  name: "AMD Ryzen 9 7950X",            category: "CPU",         price: 7500000,  stock: 5,
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80&fit=crop" },
  { id: 4,  name: "AMD Ryzen 5 7600X",            category: "CPU",         price: 2900000,  stock: 20,
    img: "https://images.unsplash.com/photo-1555617981-dac3772603c4?w=400&q=80&fit=crop" },
  { id: 33, name: "Intel Core Ultra 9 285K",      category: "CPU",         price: 8900000,  stock: 5,
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80&fit=crop" },
  { id: 34, name: "AMD Ryzen 9 9950X",            category: "CPU",         price: 9200000,  stock: 4,
    img: "https://images.unsplash.com/photo-1555617981-dac3772603c4?w=400&q=80&fit=crop" },
  // ── GPU ──────────────────────────────────────────────────
  { id: 5,  name: "NVIDIA RTX 4090 24GB",         category: "GPU",         price: 27000000, stock: 3,
    img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&q=80&fit=crop" },
  { id: 6,  name: "NVIDIA RTX 4070 Ti Super",     category: "GPU",         price: 11500000, stock: 7,
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&q=80&fit=crop" },
  { id: 7,  name: "AMD Radeon RX 7900 XTX",       category: "GPU",         price: 15000000, stock: 4,
    img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&q=80&fit=crop" },
  { id: 8,  name: "NVIDIA RTX 4060 8GB",          category: "GPU",         price: 5200000,  stock: 15,
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&q=80&fit=crop" },
  { id: 35, name: "NVIDIA RTX 5090 32GB 🔥",      category: "GPU",         price: 45000000, stock: 2,
    img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&q=80&fit=crop" },
  { id: 36, name: "NVIDIA RTX 5080 16GB",         category: "GPU",         price: 22000000, stock: 5,
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&q=80&fit=crop" },
  { id: 37, name: "NVIDIA RTX 5070 Ti 16GB",      category: "GPU",         price: 13500000, stock: 8,
    img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&q=80&fit=crop" },
  { id: 38, name: "AMD Radeon RX 9070 XT 🔥",     category: "GPU",         price: 11000000, stock: 6,
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&q=80&fit=crop" },
  // ── RAM ──────────────────────────────────────────────────
  { id: 9,  name: "Corsair Vengeance 32GB DDR5",  category: "RAM",         price: 1800000,  stock: 25,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&fit=crop" },
  { id: 10, name: "G.Skill Trident Z5 64GB DDR5", category: "RAM",         price: 3500000,  stock: 10,
    img: "https://images.unsplash.com/photo-1562976540-1502c2145851?w=400&q=80&fit=crop" },
  { id: 11, name: "Kingston Fury Beast 16GB DDR4",category: "RAM",         price: 750000,   stock: 30,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&fit=crop" },
  // ── Storage ──────────────────────────────────────────────
  { id: 12, name: "Samsung 990 Pro 2TB NVMe",     category: "Storage",     price: 2800000,  stock: 18,
    img: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&q=80&fit=crop" },
  { id: 13, name: "WD Black SN850X 1TB",          category: "Storage",     price: 1600000,  stock: 22,
    img: "https://images.unsplash.com/photo-1531492898470-6236b5a74f55?w=400&q=80&fit=crop" },
  { id: 14, name: "Seagate Barracuda 4TB HDD",    category: "Storage",     price: 900000,   stock: 35,
    img: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&q=80&fit=crop" },
  { id: 15, name: "Crucial P3 Plus 500GB",        category: "Storage",     price: 550000,   stock: 40,
    img: "https://images.unsplash.com/photo-1531492898470-6236b5a74f55?w=400&q=80&fit=crop" },
  // ── Motherboard ──────────────────────────────────────────
  { id: 16, name: "ASUS ROG Maximus Z790",        category: "Motherboard", price: 8500000,  stock: 4,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&fit=crop" },
  { id: 17, name: "MSI MAG X670E Tomahawk",       category: "Motherboard", price: 4200000,  stock: 8,
    img: "https://images.unsplash.com/photo-1562976540-1502c2145851?w=400&q=80&fit=crop" },
  { id: 18, name: "Gigabyte B660M DS3H",          category: "Motherboard", price: 1450000,  stock: 20,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&fit=crop" },
  { id: 39, name: "ASUS ROG Maximus Z890 Apex 🔥",category: "Motherboard", price: 12000000, stock: 3,
    img: "https://images.unsplash.com/photo-1562976540-1502c2145851?w=400&q=80&fit=crop" },
  // ── PSU ──────────────────────────────────────────────────
  { id: 19, name: "Corsair RM1000x 1000W Gold",   category: "PSU",         price: 2200000,  stock: 10,
    img: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&q=80&fit=crop" },
  { id: 20, name: "Seasonic Focus GX-850W",       category: "PSU",         price: 1700000,  stock: 14,
    img: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&q=80&fit=crop" },
  { id: 21, name: "EVGA SuperNOVA 750W Gold",     category: "PSU",         price: 1100000,  stock: 18,
    img: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&q=80&fit=crop" },
  // ── Case ─────────────────────────────────────────────────
  { id: 22, name: "Lian Li PC-O11D EVO XL",      category: "Case",        price: 2800000,  stock: 6,
    img: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&q=80&fit=crop" },
  { id: 23, name: "Fractal Design Torrent",       category: "Case",        price: 2200000,  stock: 9,
    img: "https://images.unsplash.com/photo-1593640408182-31c228b29b4e?w=400&q=80&fit=crop" },
  { id: 24, name: "NZXT H9 Elite",                category: "Case",        price: 3100000,  stock: 5,
    img: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&q=80&fit=crop" },
  // ── Cooling ──────────────────────────────────────────────
  { id: 25, name: "Noctua NH-D15 Air Cooler",     category: "Cooling",     price: 1250000,  stock: 12,
    img: "https://images.unsplash.com/photo-1555617748-4c2e1e5a5e4d?w=400&q=80&fit=crop" },
  { id: 26, name: "ARCTIC Liquid Freezer 360",    category: "Cooling",     price: 1800000,  stock: 8,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&fit=crop" },
  { id: 27, name: "Corsair iCUE H150i Elite",     category: "Cooling",     price: 2400000,  stock: 6,
    img: "https://images.unsplash.com/photo-1555617748-4c2e1e5a5e4d?w=400&q=80&fit=crop" },
  // ── Accessories ──────────────────────────────────────────
  { id: 28, name: "Logitech MX Master 3S",        category: "Accessories", price: 1100000,  stock: 30,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80&fit=crop" },
  { id: 29, name: "Keychron Q3 Mechanical KB",    category: "Accessories", price: 1450000,  stock: 20,
    img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80&fit=crop" },
  { id: 30, name: "Dell U2723D 27\" Monitor",     category: "Accessories", price: 7200000,  stock: 7,
    img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&q=80&fit=crop" },
  { id: 31, name: "Arctic Silver 5 Thermal",      category: "Accessories", price: 75000,    stock: 80,
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80&fit=crop" },
  { id: 32, name: "Cable Tidy Kit Pro",            category: "Accessories", price: 120000,   stock: 60,
    img: "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=400&q=80&fit=crop" },
  { id: 40, name: "LG UltraGear 27\" 4K 144Hz",  category: "Accessories", price: 9500000,  stock: 5,
    img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&q=80&fit=crop" },
  { id: 41, name: "Logitech G Pro X 2 Mouse",     category: "Accessories", price: 1350000,  stock: 18,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80&fit=crop" },
];

// ── State ────────────────────────────────────────────────────
let cart = [];
let activeCategory = "All";
let searchQuery = "";

// ── Formatters ───────────────────────────────────────────────
const formatIDR = (n) =>
  "Rp " + n.toLocaleString("id-ID");

// ── DOM Helpers ──────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ── Render Products ──────────────────────────────────────────
function getFilteredProducts() {
  return PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });
}

function renderProducts() {
  const grid = $("#product-grid");
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <span class="empty-icon">🔍</span>
      <p>No products found</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map((p) => {
    const inCart = cart.find((c) => c.id === p.id);
    const qty = inCart ? inCart.qty : 0;
    const isNew = [33,34,35,36,37,38,39,40,41].includes(p.id);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-badge">${p.category}</div>
        ${isNew ? '<div class="new-badge">2025</div>' : ''}
        <div class="product-img-wrap" id="imgwrap-${p.id}">
          <img src="${p.img}" alt="${p.name}" class="product-img"
            onerror="this.style.display='none';document.getElementById('imgwrap-${p.id}').innerHTML='<span class=\\'img-fallback\\'>' + {'CPU':'🔲','GPU':'🎮','RAM':'💾','Storage':'💿','Motherboard':'🖥️','PSU':'⚡','Case':'🗄️','Cooling':'❄️','Accessories':'🖱️'}['${p.category}'] + '</span>'">
        </div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-price">${formatIDR(p.price)}</div>
          <div class="product-stock">Stock: ${p.stock}</div>
        </div>
        <div class="product-actions">
          ${qty > 0
            ? `<div class="qty-controls">
                <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
                <span class="qty-num">${qty}</span>
                <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
               </div>`
            : `<button class="add-btn" onclick="addToCart(${p.id})">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add
               </button>`
          }
        </div>
      </div>`;
  }).join("");
}

// ── Cart Logic ───────────────────────────────────────────────
function addToCart(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;
  const existing = cart.find((c) => c.id === id);
  if (existing) {
    if (existing.qty >= product.stock) return showToast("Stok habis!");
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderAll();
  showToast(`${product.name} ditambahkan`);
}

function changeQty(id, delta) {
  const idx = cart.findIndex((c) => c.id === id);
  if (idx === -1) return;
  const product = PRODUCTS.find((p) => p.id === id);
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  } else if (product && cart[idx].qty > product.stock) {
    cart[idx].qty = product.stock;
    showToast("Melebihi stok!");
  }
  renderAll();
}

function removeFromCart(id) {
  cart = cart.filter((c) => c.id !== id);
  renderAll();
}

function clearCart() {
  cart = [];
  $("#payment-input").value = "";
  renderAll();
}

// ── Render Cart ──────────────────────────────────────────────
function renderCart() {
  const list = $("#cart-list");
  const totalEl = $("#total-price");
  const countEl = $("#cart-count");
  const changeEl = $("#change-amount");

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const payStr = $("#payment-input").value.replace(/\./g, "");
  const pay = parseInt(payStr) || 0;
  const change = pay - total;

  countEl.textContent = cart.reduce((s, c) => s + c.qty, 0);

  if (cart.length === 0) {
    list.innerHTML = `<div class="cart-empty">
      <span>🛒</span>
      <p>Keranjang kosong</p>
    </div>`;
  } else {
    list.innerHTML = cart.map((c) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${c.name}</div>
          <div class="cart-item-sub">${formatIDR(c.price)} × ${c.qty}</div>
        </div>
        <div class="cart-item-right">
          <div class="cart-item-total">${formatIDR(c.price * c.qty)}</div>
          <div class="cart-item-controls">
            <button class="ci-btn" onclick="changeQty(${c.id}, -1)">−</button>
            <span>${c.qty}</span>
            <button class="ci-btn" onclick="changeQty(${c.id}, 1)">+</button>
            <button class="ci-del" onclick="removeFromCart(${c.id})">✕</button>
          </div>
        </div>
      </div>`).join("");
  }

  totalEl.textContent = formatIDR(total);

  if (pay > 0) {
    changeEl.textContent = change >= 0
      ? formatIDR(change)
      : `Kurang ${formatIDR(Math.abs(change))}`;
    changeEl.style.color = change >= 0 ? "var(--accent)" : "var(--danger)";
  } else {
    changeEl.textContent = "—";
    changeEl.style.color = "var(--text-muted)";
  }
}

// ── Checkout ─────────────────────────────────────────────────
function checkout() {
  if (cart.length === 0) return showToast("Keranjang kosong!");
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const payStr = $("#payment-input").value.replace(/\./g, "");
  const pay = parseInt(payStr) || 0;
  if (pay < total) return showToast("Pembayaran kurang!");

  const tx = {
    id: Date.now(),
    date: new Date().toLocaleString("id-ID"),
    items: cart.map((c) => ({ name: c.name, qty: c.qty, price: c.price })),
    total,
    pay,
    change: pay - total,
  };

  const history = JSON.parse(localStorage.getItem("pcshop_history") || "[]");
  history.unshift(tx);
  localStorage.setItem("pcshop_history", JSON.stringify(history));

  // Deduct stock
  cart.forEach((c) => {
    const p = PRODUCTS.find((p) => p.id === c.id);
    if (p) p.stock -= c.qty;
  });

  showReceipt(tx);
  cart = [];
  $("#payment-input").value = "";
  renderAll();
}

// ── Receipt Modal ─────────────────────────────────────────────
function showReceipt(tx) {
  const modal = $("#receipt-modal");
  $("#receipt-body").innerHTML = `
    <div class="receipt-header">
      <div class="receipt-logo">🖥 PC Shop</div>
      <div class="receipt-meta">
        <span>#${tx.id}</span>
        <span>${tx.date}</span>
      </div>
    </div>
    <div class="receipt-items">
      ${tx.items.map((i) => `
        <div class="receipt-row">
          <span>${i.name} ×${i.qty}</span>
          <span>${formatIDR(i.price * i.qty)}</span>
        </div>`).join("")}
    </div>
    <div class="receipt-divider"></div>
    <div class="receipt-row receipt-total-row">
      <span>Total</span><span>${formatIDR(tx.total)}</span>
    </div>
    <div class="receipt-row">
      <span>Bayar</span><span>${formatIDR(tx.pay)}</span>
    </div>
    <div class="receipt-row receipt-change-row">
      <span>Kembalian</span><span>${formatIDR(tx.change)}</span>
    </div>
    <div class="receipt-thanks">Terima kasih sudah berbelanja! 🎉</div>
  `;
  modal.classList.add("open");
}

// ── History ───────────────────────────────────────────────────
function renderHistory() {
  const history = JSON.parse(localStorage.getItem("pcshop_history") || "[]");
  const el = $("#history-list");
  if (history.length === 0) {
    el.innerHTML = `<p class="hist-empty">Belum ada transaksi.</p>`;
    return;
  }
  el.innerHTML = history.slice(0, 20).map((tx) => `
    <div class="hist-item">
      <div class="hist-meta">
        <span class="hist-id">#${tx.id}</span>
        <span class="hist-date">${tx.date}</span>
      </div>
      <div class="hist-items">${tx.items.map((i) => `${i.name} ×${i.qty}`).join(", ")}</div>
      <div class="hist-total">${formatIDR(tx.total)}</div>
    </div>`).join("");
}

// ── Payment Formatting ────────────────────────────────────────
function formatPaymentInput(e) {
  let raw = e.target.value.replace(/\D/g, "");
  e.target.value = raw ? parseInt(raw).toLocaleString("id-ID") : "";
  renderCart();
}

// ── Toast ─────────────────────────────────────────────────────
function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2500);
}

// ── Render All ────────────────────────────────────────────────
function renderAll() {
  renderProducts();
  renderCart();
}

// ── Theme Toggle ──────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem("pcshop_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeBtn(saved);
}
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("pcshop_theme", next);
  updateThemeBtn(next);
}
function updateThemeBtn(theme) {
  const btn = document.querySelector("#theme-toggle");
  if (!btn) return;
  btn.innerHTML = theme === "dark"
    ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>&nbsp;Light`
    : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>&nbsp;Dark`;
}

// ── Init ──────────────────────────────────────────────────────
function init() {
  initTheme();
  document.querySelector("#theme-toggle").addEventListener("click", toggleTheme);

  // Category buttons
  const cats = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
  const catBar = $("#category-bar");
  catBar.innerHTML = cats.map((c) => `
    <button class="cat-btn ${c === activeCategory ? "active" : ""}" data-cat="${c}">${c}</button>
  `).join("");

  catBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-btn");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    $$(".cat-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderAll();
  });

  // Search
  $("#search-input").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderAll();
  });

  // Payment input
  $("#payment-input").addEventListener("input", formatPaymentInput);

  // Checkout
  $("#checkout-btn").addEventListener("click", checkout);

  // Clear cart
  $("#clear-btn").addEventListener("click", () => {
    if (cart.length === 0) return;
    if (confirm("Hapus semua item dari keranjang?")) clearCart();
  });

  // Close receipt modal
  $("#modal-close").addEventListener("click", () => {
    $("#receipt-modal").classList.remove("open");
  });
  $("#receipt-modal").addEventListener("click", (e) => {
    if (e.target === $("#receipt-modal")) $("#receipt-modal").classList.remove("open");
  });

  // History tab
  $("#tab-products").addEventListener("click", () => {
    $("#tab-products").classList.add("active");
    $("#tab-history").classList.remove("active");
    $("#panel-products").classList.add("active");
    $("#panel-history").classList.remove("active");
  });
  $("#tab-history").addEventListener("click", () => {
    $("#tab-history").classList.add("active");
    $("#tab-products").classList.remove("active");
    $("#panel-history").classList.add("active");
    $("#panel-products").classList.remove("active");
    renderHistory();
  });

  // Keyboard shortcut F2 = checkout
  document.addEventListener("keydown", (e) => {
    if (e.key === "F2") { e.preventDefault(); checkout(); }
    if (e.key === "Escape") { $("#receipt-modal").classList.remove("open"); }
  });

  renderAll();
}

document.addEventListener("DOMContentLoaded", init);
