## React Ecommerce App – Frontend Developer Test Çalışması

Bu repo, verilen test talimatlarına göre “Product Card” bileşeni geliştirilerek mevcut e‑ticaret arayüzüne entegre edildiği örnek projeyi içerir.

### Objective
Gerçek veri ve tasarım mantığını kullanarak responsive bir UI bileşeni geliştirmek.

### Task (Özet)
Mevcut projeyi çalıştırıp bir ürün listeleme sayfasında kullanılacak “Product Card” bileşenini tasarlayıp kodlamak.

### Neler Geliştirildi
- Yeni responsive `ProductCard` bileşeni eklendi: `src/components/ProductCard.jsx`
  - Ürün görseli, adı, fiyatı
  - Varyant seçimi (dropdown)
  - “Add to Cart” butonu (stok yoksa disabled / “Out of Stock”)
  - Modern, temiz Bootstrap tabanlı layout ve hover geçişleri
- Liste sayfasına entegrasyon: `src/components/Products.jsx`
  - Eski statik kart yapısı kaldırıldı, `ProductCard` ile render ediliyor
  - Demo için stok bilgisi türetildi, örnek varyant seti sağlandı
- Ürün detay sayfası: `src/pages/Product.jsx`
  - Minimal varyant seçici eklendi; sepete eklerken seçilen varyant store’a yazılıyor
- Hero (New Season Arrivals) alanı modernize edildi: `src/components/main.jsx` + `src/components/hero.css`
  - Overlay, badge’ler, iki CTA (Shop Now / View Deals), hover ve daha iyi tipografi

### Gereksinimlerin Karşılanması
- Product image, name, price: Kartta gösterilir
- Variant dropdown: Kart ve detay sayfasında mevcut
- Add to Cart: Redux ile entegre, localStorage persist
- Out of Stock: Kart üzerinde rozet + buton disabled
- Modern UI/UX: Bootstrap 5, sade tipografi, okunurluk ve hover/kontrast iyileştirmeleri

### Demo
- GitHub Pages / Netlify için hazır (CRA build). Alternatif: CodeSandbox.
- Örnek yayın adımları (Netlify):
  1) “New Site from Git” → GitHub repo: `erenkamer1/React-Ecommerce-App`
  2) Build command: `npm run build` – Publish directory: `build`
  3) Deploy

### Kısa Not (2–3 cümle)
- Layout yaklaşımı: Bootstrap grid + card kompozisyonu. Görsel üstte, içerik hiyerarşisi (başlık → fiyat → variant → CTA) ile karar yükünü azaltan, kolay taranabilir yapı.
- Responsiveness: Görsel yüksekliği breakpoint’lere göre ölçeklenir, uzun başlıklar `text-truncate` ile yönetilir, butonlar mobilde full‑width’dir. Hover ve overlay ile kontrast korunur.

### Projeyi Çalıştırma
```bash
git clone https://github.com/erenkamer1/React-Ecommerce-App.git
cd React-Ecommerce-App
npm install
npm start
```
Uygulama: `http://localhost:3000`

### Build
```bash
npm run build
```

### Kısa Süre Limitine Uyum
Tüm değişiklikler (bileşen, entegrasyon, hero geliştirmesi) ≤ 1 saat içinde tamamlanacak şekilde sade ve odaklı tutuldu.

