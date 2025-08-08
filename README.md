## React Ecommerce App – Frontend Developer Test Submission

This repository contains the requested “Product Card” UI component implemented and integrated into the existing e‑commerce UI.

### Objective
Evaluate the ability to implement a responsive UI using real‑world data and design logic.

### Task (Summary)
Run the test project and design/implement a Product Card component that can be used on a product listing page.

### What Was Implemented
- Added a responsive `ProductCard` component: `src/components/ProductCard.jsx`
  - Product image, name, price
  - Variant selector (dropdown)
  - “Add to Cart” button (disabled / “Out of Stock” when unavailable)
  - Clean, modern Bootstrap‑based layout with subtle hover transitions
- Integrated into the listing page: `src/components/Products.jsx`
  - Replaced the old static card markup with `ProductCard`
  - Demo stock flag derived from sample data; default variants provided
- Product details page: `src/pages/Product.jsx`
  - Minimal variant selector; selected variant is persisted when adding to cart
- Hero (New Season Arrivals) section improvements: `src/components/main.jsx` + `src/components/hero.css`
  - Gradient overlay, value badges, two CTAs (Shop Now / View Deals), hover, improved typography

> Note: Only the required parts and pages were modified to fulfill the assignment (Product Card, its integration, and the hero section). No additional unrelated pages were developed.

### Requirements Coverage
- Product image, name, price: Shown on the card
- Variant dropdown: Available on the card and the product page
- Add to Cart: Integrated with Redux and persisted in localStorage
- Out of Stock state: Badge + disabled button on the card
- Clean and modern layout: Bootstrap 5, readable typography, accessible controls, contrast and hover refinements

### Deliverables / Demo
- Ready for GitHub Pages / Netlify (CRA build). CodeSandbox also works.
- Example deployment steps (Netlify):
  1) “New Site from Git” → GitHub repo: `erenkamer1/React-Ecommerce-App`
  2) Build command: `npm run build` – Publish directory: `build`
  3) Deploy

### Brief Note (2–3 sentences)
- Layout approach: Bootstrap grid + card composition with a clear content hierarchy (title → price → variant → CTA) to reduce cognitive load and support scannability.
- Responsiveness: Image height scales per breakpoint; long titles use `text-truncate`; CTAs are full‑width on small screens; overlay/hover maintain adequate contrast.

### Run Locally
```bash
git clone https://github.com/erenkamer1/React-Ecommerce-App.git
cd React-Ecommerce-App
npm install
npm start
```
App: `http://localhost:3000`

### Build
```bash
npm run build
```

### Time Limit Compliance
All changes (component, integration, hero enhancements) were kept focused and within the 1‑hour time window.

