// ============================================================
// PC Shop POS System — app.js (Enhanced)
// Author: Farid Alfiyansah (No Absen: 26)
// ============================================================

const PRODUCTS = [
  // ── CPU ──────────────────────────────────────────────────
  { id: 1,  name: "Intel Core i9-14900K",        category: "CPU",         price: 6200000,  stock: 8,
    img: "https://www.intel.com/content/dam/support/us/en/images/processors/97035-img2.png" },
  { id: 2,  name: "Intel Core i7-14700K",         category: "CPU",         price: 4800000,  stock: 12,
    img: "https://www.intel.com/content/dam/support/us/en/images/processors/97035-img2.png" },
  { id: 3,  name: "AMD Ryzen 9 7950X",            category: "CPU",         price: 7500000,  stock: 5,
    img: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2613900-amd-ryzen-9000-desktop-og.jpg" },
  { id: 4,  name: "AMD Ryzen 5 7600X",            category: "CPU",         price: 2900000,  stock: 20,
    img: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2613900-amd-ryzen-9000-desktop-og.jpg" },
  { id: 33, name: "Intel Core Ultra 9 285K",      category: "CPU",         price: 8900000,  stock: 5,
    img: "https://www.intel.com/content/dam/support/us/en/images/processors/97035-img2.png" },
  { id: 34, name: "AMD Ryzen 9 9950X",            category: "CPU",         price: 9200000,  stock: 4,
    img: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2613900-amd-ryzen-9000-desktop-og.jpg" },
  // ── GPU ──────────────────────────────────────────────────
  { id: 5,  name: "NVIDIA RTX 4090 24GB",         category: "GPU",         price: 27000000, stock: 3,
    img: "https://www.nvidia.cn/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg" },
  { id: 6,  name: "NVIDIA RTX 4070 Ti Super",     category: "GPU",         price: 11500000, stock: 7,
    img: "https://www.nvidia.cn/content/dam/en-zz/Solutions/geforce/graphic-cards/40-series/rtx-4070-4070ti/geforce-rtx-4070-super-og-1200x630.jpg" },
  { id: 7,  name: "AMD Radeon RX 7900 XTX",       category: "GPU",         price: 15000000, stock: 4,
    img: "https://www.amd.com/content/dam/amd/en/images/products/graphics/2648997-amd-radeon-7900xtx.jpg" },
  { id: 8,  name: "NVIDIA RTX 4060 8GB",          category: "GPU",         price: 5200000,  stock: 15,
    img: "https://www.nvidia.cn/content/dam/en-zz/Solutions/geforce/news/geforce-rtx-4070/geforce-rtx-4070-newsfeed.png" },
  { id: 35, name: "NVIDIA RTX 5090 32GB 🔥",      category: "GPU",         price: 45000000, stock: 2,
    img: "https://www.nvidia.cn/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg" },
  { id: 36, name: "NVIDIA RTX 5080 16GB",         category: "GPU",         price: 22000000, stock: 5,
    img: "https://www.nvidia.cn/content/dam/en-zz/Solutions/geforce/graphic-cards/40-series/rtx-4070-4070ti/geforce-rtx-4070-super-og-1200x630.jpg" },
  { id: 37, name: "NVIDIA RTX 5070 Ti 16GB",      category: "GPU",         price: 13500000, stock: 8,
    img: "https://www.nvidia.cn/content/dam/en-zz/Solutions/geforce/news/geforce-rtx-4070/geforce-rtx-4070-newsfeed.png" },
  { id: 38, name: "AMD Radeon RX 9070 XT 🔥",     category: "GPU",         price: 11000000, stock: 6,
    img: "https://www.amd.com/content/dam/amd/en/images/products/graphics/2648997-amd-radeon-7900xtx.jpg" },
  // ── RAM ──────────────────────────────────────────────────
  { id: 9,  name: "Corsair Vengeance 32GB DDR5",  category: "RAM",         price: 1800000,  stock: 25,
    img: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Memory/vengeance-ddr5-blk-config/Gallery/Vengeance-DDR5-2UP-16GB-BLACK_01.webp" },
  { id: 10, name: "G.Skill Trident Z5 64GB DDR5", category: "RAM",         price: 3500000,  stock: 10,
    img: "https://www.gskill.com/_upload/images/2110201626450.png" },
  { id: 11, name: "Kingston Fury Beast 16GB DDR4",category: "RAM",         price: 750000,   stock: 30,
    img: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Memory/vengeance-ddr5-blk-config/Gallery/Vengeance-DDR5-2UP-16GB-BLACK_01.webp" },
  // ── Storage ──────────────────────────────────────────────
  { id: 12, name: "Samsung 990 Pro 2TB NVMe",     category: "Storage",     price: 2800000,  stock: 18,
    img: "https://images.samsung.com.cn/is/image/samsung/p6pim/cn/mz-v9p2t0bw/gallery/cn-990pro-nvme-m2-ssd-mz-v9p2t0bw-533563888?$Q90_1248_936_F_PNG$" },
  { id: 13, name: "WD Black SN850X 1TB",          category: "Storage",     price: 1600000,  stock: 22,
    img: "https://cdn.mos.cms.futurecdn.net/XznGAj929i82MWrAHPH4Eo.jpg" },
  { id: 14, name: "Seagate Barracuda 4TB HDD",    category: "Storage",     price: 900000,   stock: 35,
    img: "https://www.seagate.com/content/dam/seagate/migrated-assets/www-content/support-content/internal-products/desktop%20hard/barracuda-3-5/barracuda-2tb-dm008-hero-left-270x270.png" },
  { id: 15, name: "Crucial P3 Plus 500GB",        category: "Storage",     price: 550000,   stock: 40,
    img: "https://images.samsung.com.cn/is/image/samsung/p6pim/cn/mz-v8v1t0bw/gallery/cn-980-nvme-m2-ssd-mz-v8v1t0bw-509212727?$Q90_1248_936_F_PNG$" },
  // ── Motherboard ──────────────────────────────────────────
  { id: 16, name: "ASUS ROG Maximus Z790",        category: "Motherboard", price: 8500000,  stock: 4,
    img: "https://dlcdnimgs.asus.com/websites/global/products/uri12btqafuvwte6/img/kv/pd.png" },
  { id: 17, name: "MSI MAG X670E Tomahawk",       category: "Motherboard", price: 4200000,  stock: 8,
    img: "https://dlcdnwebimgs.asus.com.cn/files/media/B51D103D-2941-412E-8479-AF994957093B/v1/img/kv/ROG-Strix-X670E-E-Gaming.png" },
  { id: 18, name: "Gigabyte B660M DS3H",          category: "Motherboard", price: 1450000,  stock: 20,
    img: "https://dlcdnimgs.asus.com/websites/global/products/uri12btqafuvwte6/img/kv/pd.png" },
  { id: 39, name: "ASUS ROG Maximus Z890 Apex 🔥",category: "Motherboard", price: 12000000, stock: 3,
    img: "https://dlcdnwebimgs.asus.com.cn/files/media/B51D103D-2941-412E-8479-AF994957093B/v1/img/kv/ROG-Strix-X670E-E-Gaming.png" },
  // ── PSU ──────────────────────────────────────────────────
  { id: 19, name: "Corsair RM1000x 1000W Gold",   category: "PSU",         price: 2200000,  stock: 10,
    img: "https://res.cloudinary.com/corsair-pwa/image/upload/f_auto,q_auto/v1665096094/akamai/landing/PSU-Family-Page/images/psu-with-badge-cx750f-rgb.png" },
  { id: 20, name: "Seasonic Focus GX-850W",       category: "PSU",         price: 1700000,  stock: 14,
    img: "https://res.cloudinary.com/corsair-pwa/image/upload/f_auto,q_auto/v1665096094/akamai/landing/PSU-Family-Page/images/psu-with-badge-cx750f-rgb.png" },
  { id: 21, name: "EVGA SuperNOVA 750W Gold",     category: "PSU",         price: 1100000,  stock: 18,
    img: "https://res.cloudinary.com/corsair-pwa/image/upload/f_auto,q_auto/v1665096094/akamai/landing/PSU-Family-Page/images/psu-with-badge-cx750f-rgb.png" },
  // ── Case ─────────────────────────────────────────────────
  { id: 22, name: "Lian Li PC-O11D EVO XL",      category: "Case",        price: 2800000,  stock: 6,
    img: "https://m.media-amazon.com/images/I/81ZDmLgHUqL._AC_UF1000,1000_QL80_.jpg" },
  { id: 23, name: "Fractal Design Torrent",       category: "Case",        price: 2200000,  stock: 9,
    img: "https://m.media-amazon.com/images/I/81ZDmLgHUqL._AC_UF1000,1000_QL80_.jpg" },
  { id: 24, name: "NZXT H9 Elite",                category: "Case",        price: 3100000,  stock: 5,
    img: "https://www.awd-it.co.uk/media/catalog/product/n/z/nzxth9elite_1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=680&width=680&canvas=680:680&format=jpeg" },
  // ── Cooling ──────────────────────────────────────────────
  { id: 25, name: "Noctua NH-D15 Air Cooler",     category: "Cooling",     price: 1250000,  stock: 12,
    img: "https://m.media-amazon.com/images/I/91Hw1zcAIjL._AC_UF1000,1000_QL80_.jpg" },
  { id: 26, name: "ARCTIC Liquid Freezer 360",    category: "Cooling",     price: 1800000,  stock: 8,
    img: "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Liquid-Cooling/titan-rx-rgb/Gallery/CW-9061016-WW/CW-9061016-WW_01.webp" },
  { id: 27, name: "Corsair iCUE H150i Elite",     category: "Cooling",     price: 2400000,  stock: 6,
    img: "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Liquid-Cooling/titan-rx-rgb/Gallery/CW-9061016-WW/CW-9061016-WW_01.webp" },
  // ── Accessories ──────────────────────────────────────────
  { id: 28, name: "Logitech MX Master 3S",        category: "Accessories", price: 1100000,  stock: 30,
    img: "https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-business-wireless-mouse/gallery/mx-master-3s-for-business-gallery-1.png?v=1" },
  { id: 29, name: "Keychron Q3 Mechanical KB",    category: "Accessories", price: 1450000,  stock: 20,
    img: "http://www.keychron.com/cdn/shop/products/Q3-C1-Keychron-Q3-QMK-VIA-custom-mechanical-keyboard-tenkeyless-layout-full-aluminum-black-frame-for-Mac-Windows-iOS-with-hot-swappable-Gateron-G-Pro-switch-red.jpg?crop=center&height=1200&v=1659423523&width=1200" },
  { id: 30, name: "Dell U2723D 27\" Monitor",     category: "Accessories", price: 7200000,  stock: 7,
    img: "https://i.rtings.com/assets/pages/KPusNSCx/best-4k-144hz-monitors-20251126-medium.jpg?format=auto" },
  { id: 31, name: "Arctic Silver 5 Thermal",      category: "Accessories", price: 75000,    stock: 80,
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80&fit=crop" },
  { id: 32, name: "Cable Tidy Kit Pro",            category: "Accessories", price: 120000,   stock: 60,
    img: "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=400&q=80&fit=crop" },
  { id: 40, name: "LG UltraGear 27\" 4K 144Hz",  category: "Accessories", price: 9500000,  stock: 5,
    img: "https://i.rtings.com/assets/pages/KPusNSCx/best-4k-144hz-monitors-20251126-medium.jpg?format=auto" },
  { id: 41, name: "Logitech G Pro X 2 Mouse",     category: "Accessories", price: 1350000,  stock: 18,
    img: "https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-business-wireless-mouse/gallery/mx-master-3s-for-business-gallery-1.png?v=1" },
];

// ── State ────────────────────────────────────────────────────
let cart = [];
let activeCategory = "All";
let searchQuery = "";
let userRole = null; // 'buyer' | 'seller' | null

// ── Formatters ───────────────────────────────────────────────
const formatIDR = (n) =>
  "Rp " + n.toLocaleString("id-ID");

// ── DOM Helpers ──────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ── Role System ──────────────────────────────────────────────
function getUserRole() {
  return localStorage.getItem("pcshop_role");
}

function checkRole() {
  userRole = getUserRole();
  if (!userRole) {
    // Redirect to landing page first if no session
    window.location.href = "landing.html";
    return false;
  }
  return true;
}

function logout() {
  localStorage.removeItem("pcshop_role");
  window.location.href = "landing.html";
}

function renderRoleBadge() {
  const existing = $("#role-badge");
  if (existing) existing.remove();

  if (!userRole) return;

  const badge = document.createElement("div");
  badge.id = "role-badge";
  badge.className = `role-badge ${userRole}`;
  badge.innerHTML = `
    <span class="role-dot"></span>
    ${userRole === "seller" ? "👤 Penjual" : "🛒 Pembeli"}
  `;

  const headerRight = $(".header-right");
  if (headerRight) {
    headerRight.insertBefore(badge, headerRight.firstChild);
  }
}

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
          <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy"
            onerror="this.style.display='none';document.getElementById('imgwrap-${p.id}').innerHTML='<span class=\'img-fallback\'>' + {'CPU':'🔲','GPU':'🎮','RAM':'💾','Storage':'💿','Motherboard':'🖥️','PSU':'⚡','Case':'🗄️','Cooling':'❄️','Accessories':'🖱️'}['${p.category}'] + '</span>'">
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

// ── Render Cart (Desktop + Mobile Drawer) ────────────────────
function cartItemHTML(c) {
  return `
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
    </div>`;
}

function updateChangeDisplay(el, payInputEl, total) {
  if (!el) return;
  const raw = (payInputEl?.value || "").replace(/\./g, "");
  const paid = parseInt(raw) || 0;
  const diff = paid - total;
  if (paid > 0) {
    el.textContent = diff >= 0 ? formatIDR(diff) : "Kurang " + formatIDR(Math.abs(diff));
    el.style.color  = diff >= 0 ? "var(--accent)" : "var(--danger)";
  } else {
    el.textContent = "—";
    el.style.color  = "var(--text-muted)";
  }
}

function renderCart() {
  const total    = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const totalQty = cart.reduce((s, c) => s + c.qty, 0);
  const emptyHTML  = `<div class="cart-empty"><span>🛒</span><p>Keranjang kosong</p></div>`;
  const itemsHTML  = cart.length === 0 ? emptyHTML : cart.map(cartItemHTML).join("");

  // ── Desktop ──────────────────────────────────────────────
  const dList  = $("#cart-list");
  const dTotal = $("#total-price");
  const dCount = $("#cart-count");
  if (dList)  dList.innerHTML  = itemsHTML;
  if (dTotal) dTotal.textContent = formatIDR(total);
  if (dCount) dCount.textContent = totalQty;
  updateChangeDisplay($("#change-amount"), $("#payment-input"), total);

  // ── Mobile Drawer ────────────────────────────────────────
  const mList  = $("#cart-list-mobile");
  const mTotal = $("#total-price-mobile");
  const mCount = $("#cart-count-mobile");
  if (mList)  mList.innerHTML  = itemsHTML;
  if (mTotal) mTotal.textContent = formatIDR(total);
  if (mCount) mCount.textContent = totalQty;
  updateChangeDisplay($("#change-amount-mobile"), $("#payment-input-mobile"), total);

  // FAB badge
  const fab = $("#fab-badge");
  if (fab) {
    fab.textContent = totalQty;
    fab.classList.remove("bump");
    void fab.offsetWidth;
    fab.classList.add("bump");
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

// ── Add Product (Seller Only) ────────────────────────────────
function renderAddProductForm() {
  const existing = $("#add-product-section");
  if (existing) existing.remove();

  if (userRole !== "seller") return;

  const section = document.createElement("div");
  section.id = "add-product-section";
  section.className = "add-product-section";
  section.innerHTML = `
    <div class="add-product-toggle" onclick="toggleAddProduct()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
      <span>Tambah Produk Baru</span>
    </div>
    <form id="add-product-form" class="add-product-form" style="display:none;">
      <div class="form-row">
        <input type="text" id="ap-name" placeholder="Nama produk" required />
        <select id="ap-category" required>
          <option value="">Kategori</option>
          <option value="CPU">CPU</option>
          <option value="GPU">GPU</option>
          <option value="RAM">RAM</option>
          <option value="Storage">Storage</option>
          <option value="Motherboard">Motherboard</option>
          <option value="PSU">PSU</option>
          <option value="Case">Case</option>
          <option value="Cooling">Cooling</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div class="form-row">
        <input type="number" id="ap-price" placeholder="Harga" min="1" required />
        <input type="number" id="ap-stock" placeholder="Stok" min="1" required />
      </div>
      <input type="url" id="ap-img" placeholder="URL Gambar (opsional)" />
      <button type="submit" class="ap-submit">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Tambah Produk
      </button>
    </form>
  `;

  const leftPanel = $(".left-panel");
  if (leftPanel) {
    leftPanel.insertBefore(section, leftPanel.firstChild);
  }

  $("#add-product-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#ap-name").value.trim();
    const category = $("#ap-category").value;
    const price = parseInt($("#ap-price").value) || 0;
    const stock = parseInt($("#ap-stock").value) || 0;
    const img = $("#ap-img").value.trim() || getCategoryFallbackImg(category);

    if (!name || !category || price <= 0 || stock <= 0) {
      showToast("Lengkapi semua field!");
      return;
    }

    const newId = Math.max(...PRODUCTS.map((p) => p.id), 0) + 1;
    PRODUCTS.push({ id: newId, name, category, price, stock, img });

    // Reset form
    $("#add-product-form").reset();
    toggleAddProduct();

    // Re-render categories
    initCategories();
    renderAll();
    showToast(`Produk "${name}" berhasil ditambahkan!`);
  });
}

function toggleAddProduct() {
  const form = $("#add-product-form");
  const toggle = $(".add-product-toggle");
  if (!form || !toggle) return;
  const isHidden = form.style.display === "none";
  form.style.display = isHidden ? "flex" : "none";
  toggle.classList.toggle("open", isHidden);
}

function getCategoryFallbackImg(category) {
  const map = {
    CPU: "https://images.unsplash.com/photo-1555617981-dac3772603c4?w=400&q=80&fit=crop",
    GPU: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&q=80&fit=crop",
    RAM: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&fit=crop",
    Storage: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&q=80&fit=crop",
    Motherboard: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&fit=crop",
    PSU: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&q=80&fit=crop",
    Case: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&q=80&fit=crop",
    Cooling: "https://images.unsplash.com/photo-1555617748-4c2e1e5a5e4d?w=400&q=80&fit=crop",
    Accessories: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80&fit=crop",
  };
  return map[category] || map["Accessories"];
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

// ── Categories ────────────────────────────────────────────────
function initCategories() {
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
}

// ── Init ──────────────────────────────────────────────────────
function init() {
  // Check role first
  if (!checkRole()) return;
  renderRoleBadge();

  initTheme();
  document.querySelector("#theme-toggle").addEventListener("click", toggleTheme);

  // Logout button
  const logoutBtn = $("#logout-btn");
  if (logoutBtn) logoutBtn.addEventListener("click", logout);

  // Categories
  initCategories();

  // Search
  $("#search-input").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderAll();
  });

  // Payment input
  $("#payment-input").addEventListener("input", formatPaymentInput);

  // Clear cart
  $("#clear-btn").addEventListener("click", clearCart);

  // Checkout
  $("#checkout-btn").addEventListener("click", checkout);

  // Modal close
  $("#modal-close").addEventListener("click", () => {
    $("#receipt-modal").classList.remove("open");
  });
  $("#receipt-modal").addEventListener("click", (e) => {
    if (e.target.id === "receipt-modal") $("#receipt-modal").classList.remove("open");
  });

  // Tabs
  $("#tab-products").addEventListener("click", () => switchTab("products"));
  $("#tab-history").addEventListener("click", () => switchTab("history"));

  // Add product form (seller only)
  renderAddProductForm();

  // Mobile Cart Drawer
  initMobileCart();

  // Initial render
  renderAll();
  renderHistory();

  // Keyboard shortcut
  document.addEventListener("keydown", (e) => {
    if (e.key === "F2") {
      e.preventDefault();
      checkout();
    }
  });
}

function switchTab(tab) {
  $$(".tab-btn").forEach((b) => b.classList.remove("active"));
  $$(".tab-panel").forEach((p) => p.classList.remove("active"));
  $(`#tab-${tab}`).classList.add("active");
  $(`#panel-${tab}`).classList.add("active");
  if (tab === "history") renderHistory();
}

// ── Mobile Cart Drawer Logic ──────────────────────────────────
function initMobileCart() {
  const fab     = $("#mobile-cart-fab");
  const drawer  = $("#mobile-cart-drawer");
  const overlay = $("#mobile-cart-overlay");

  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (fab)     fab.addEventListener("click", openDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);
  const closeBtn = $("#drawer-close-btn");
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  // Mobile payment input
  const mPayInput = $("#payment-input-mobile");
  if (mPayInput) {
    mPayInput.addEventListener("input", (e) => {
      let raw = e.target.value.replace(/\D/g, "");
      e.target.value = raw ? parseInt(raw).toLocaleString("id-ID") : "";
      renderCart();
    });
  }

  // Mobile clear cart
  const mClearBtn = $("#clear-btn-mobile");
  if (mClearBtn) mClearBtn.addEventListener("click", () => {
    cart = [];
    if (mPayInput) mPayInput.value = "";
    renderAll();
  });

  // Mobile checkout
  const mCheckoutBtn = $("#checkout-btn-mobile");
  if (mCheckoutBtn) mCheckoutBtn.addEventListener("click", () => {
    checkout();
    closeDrawer();
  });

  // Mobile tabs
  const mobTabProducts = $("#mob-tab-products");
  const mobTabHistory  = $("#mob-tab-history");
  const mobPanelProducts = $("#mob-panel-products");
  const mobPanelHistory  = $("#mob-panel-history");

  function switchMobileTab(tab) {
    if (tab === "products") {
      mobTabProducts?.classList.add("active");
      mobTabHistory?.classList.remove("active");
      mobPanelProducts?.classList.add("active");
      mobPanelHistory?.classList.remove("active");
    } else {
      mobTabHistory?.classList.add("active");
      mobTabProducts?.classList.remove("active");
      mobPanelHistory?.classList.add("active");
      mobPanelProducts?.classList.remove("active");
      renderMobileHistory();
    }
  }
  mobTabProducts?.addEventListener("click", () => switchMobileTab("products"));
  mobTabHistory?.addEventListener("click",  () => switchMobileTab("history"));
}

function renderMobileHistory() {
  const history = JSON.parse(localStorage.getItem("pcshop_history") || "[]");
  const el = $("#history-list-mobile");
  if (!el) return;
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


// Run
init();
