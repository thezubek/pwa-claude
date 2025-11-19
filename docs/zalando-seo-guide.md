# SEO Optimization Guide for Zalando.de

## Table of Contents
1. [Technical SEO](#technical-seo)
2. [On-Page SEO](#on-page-seo)
3. [Content Optimization](#content-optimization)
4. [Performance & Core Web Vitals](#performance--core-web-vitals)
5. [Mobile Optimization](#mobile-optimization)
6. [Structured Data & Schema Markup](#structured-data--schema-markup)
7. [E-commerce Specific SEO](#e-commerce-specific-seo)
8. [International SEO](#international-seo)
9. [Image Optimization](#image-optimization)
10. [Internal Linking Strategy](#internal-linking-strategy)
11. [URL Structure](#url-structure)
12. [Monitoring & Analytics](#monitoring--analytics)

---

## Technical SEO

### 1.1 Site Architecture
- **Flat Architecture**: Ensure all products are accessible within 3 clicks from the homepage
- **XML Sitemap**:
  - Create separate sitemaps for products, categories, and static pages
  - Submit sitemaps to Google Search Console and Bing Webmaster Tools
  - Update sitemaps automatically when products are added/removed
  - Maximum 50,000 URLs per sitemap file

```xml
<!-- Example sitemap structure -->
/sitemap_index.xml
  ├── /sitemap_products.xml
  ├── /sitemap_categories.xml
  ├── /sitemap_brands.xml
  └── /sitemap_pages.xml
```

### 1.2 Robots.txt Configuration
```txt
# Allow crawling of main content
User-agent: *
Allow: /
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /search?*
Disallow: /*?sort=*
Disallow: /*?filter=*
Disallow: /*?page=*

# Sitemap location
Sitemap: https://www.zalando.de/sitemap_index.xml
```

### 1.3 Crawl Budget Optimization
- **Avoid duplicate URLs**: Implement canonical tags properly
- **Pagination**: Use rel="next" and rel="prev" (deprecated but still useful) or implement pagination with proper canonicals
- **Faceted Navigation**: Use robots meta tag or X-Robots-Tag header to prevent indexing of filtered pages
- **Product Variants**: Canonical to the main product page

### 1.4 HTTPS & Security
- Ensure all pages are served over HTTPS
- Implement HSTS (HTTP Strict Transport Security)
- No mixed content warnings
- Valid SSL certificate

### 1.5 Status Codes
- **200**: For all active products and pages
- **301**: Permanent redirects for discontinued products to category or similar products
- **404**: For truly non-existent pages (with helpful custom 404 page)
- **410**: For permanently removed content
- Avoid redirect chains (max 1 redirect)

---

## On-Page SEO

### 2.1 Title Tags
**Format**: `[Product/Brand Name] | [Category] | Zalando.de`

**Best Practices**:
- Length: 50-60 characters (optimal for mobile)
- Include primary keyword at the beginning
- Include brand name for branded searches
- Unique for every page

**Examples**:
```html
<!-- Product Page -->
<title>Nike Air Max 90 Herren Sneaker | Schuhe | Zalando.de</title>

<!-- Category Page -->
<title>Damenkleider Online Kaufen | Kleider | Zalando.de</title>

<!-- Brand Page -->
<title>adidas Mode & Schuhe Online | adidas Shop | Zalando.de</title>
```

### 2.2 Meta Descriptions
**Best Practices**:
- Length: 150-160 characters
- Include call-to-action (CTA)
- Include USPs (Unique Selling Propositions)
- Mention "Kostenloser Versand" and "Kostenlose Rückgabe"
- Include price range if applicable

**Examples**:
```html
<!-- Product Page -->
<meta name="description" content="Nike Air Max 90 Herren Sneaker ab 129,95€. Kostenloser Versand & Rückversand. Jetzt bei Zalando bestellen!">

<!-- Category Page -->
<meta name="description" content="Entdecke über 5.000 Damenkleider von Top-Marken. Kostenloser Versand & Rückversand ✓ 100 Tage Rückgaberecht ✓ Jetzt shoppen!">
```

### 2.3 Header Tags (H1-H6)
- **H1**: One per page, describes main content
  - Product page: Product name
  - Category page: Category name
  - Brand page: Brand name
- **H2-H3**: Use for subsections, related products, product descriptions
- Maintain logical hierarchy

**Example Structure**:
```html
<h1>Nike Air Max 90 Herren Sneaker</h1>
  <h2>Produktdetails</h2>
  <h2>Größen & Passform</h2>
  <h2>Lieferung & Retoure</h2>
  <h2>Das könnte dir auch gefallen</h2>
```

### 2.4 Canonical Tags
```html
<!-- Product with variants -->
<link rel="canonical" href="https://www.zalando.de/nike-air-max-90-sneaker.html">

<!-- Category page with filters -->
<link rel="canonical" href="https://www.zalando.de/damenkleider/">

<!-- Paginated content -->
<link rel="canonical" href="https://www.zalando.de/damenkleider/?page=2">
```

### 2.5 Meta Robots
```html
<!-- Index product and category pages -->
<meta name="robots" content="index, follow">

<!-- Noindex filtered/sorted pages -->
<meta name="robots" content="noindex, follow">

<!-- Noindex account pages -->
<meta name="robots" content="noindex, nofollow">
```

---

## Content Optimization

### 3.1 Product Descriptions
**Minimum Requirements**:
- Unique descriptions (150-300 words minimum)
- Include target keywords naturally
- Describe fabric, fit, care instructions
- Include brand story
- Mention use cases and occasions

**Structure**:
```markdown
# Product Name [H1]

[Opening paragraph with main features and benefits]

## Details [H2]
- Material: [fabric composition]
- Fit: [regular, slim, oversized]
- Care: [washing instructions]
- Origin: [Made in...]

## Style & Kombinationen [H2]
[How to wear, what to combine with]

## Über die Marke [H2]
[Brand story and values]
```

### 3.2 Category Descriptions
- **Above the fold**: 50-100 words introduction
- **Below products**: 300-500 words detailed content
- Include:
  - Category overview
  - Popular brands
  - Styling tips
  - Seasonal trends
  - Size guides
  - FAQ section

### 3.3 User-Generated Content
- **Product Reviews**: Encourage and display reviews (impacts rankings)
- **Q&A Section**: Answer common questions
- **Photos from Customers**: Increase engagement and time on site
- Moderate content for quality

### 3.4 Content Freshness
- Update seasonal content quarterly
- Refresh category descriptions monthly
- Add new trend articles weekly
- Update product availability in real-time

---

## Performance & Core Web Vitals

### 4.1 Core Web Vitals Targets
Google's ranking factors as of 2024:

| Metric | Target | Description |
|--------|--------|-------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Loading performance |
| **FID** (First Input Delay) / **INP** (Interaction to Next Paint) | < 100ms / < 200ms | Interactivity |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Visual stability |

### 4.2 Performance Optimization Strategies

#### JavaScript Optimization
- Code splitting and lazy loading
- Remove unused JavaScript
- Defer non-critical JavaScript
- Use dynamic imports for heavy components

```javascript
// Lazy load product reviews
const Reviews = lazy(() => import('./components/Reviews'));

// Defer analytics
<script defer src="analytics.js"></script>
```

#### CSS Optimization
- Inline critical CSS
- Load non-critical CSS asynchronously
- Remove unused CSS
- Use CSS containment

```html
<!-- Inline critical CSS -->
<style>
  /* Critical above-the-fold styles */
</style>

<!-- Async load remaining CSS -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

#### Image Optimization (see section 9)

#### Caching Strategy
```nginx
# Cache static assets
location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Cache product images
location /images/products/ {
    expires 30d;
    add_header Cache-Control "public";
}
```

### 4.3 Resource Hints
```html
<!-- Preconnect to critical domains -->
<link rel="preconnect" href="https://img.zalando.de">
<link rel="preconnect" href="https://api.zalando.de">

<!-- DNS prefetch for third-party -->
<link rel="dns-prefetch" href="https://www.google-analytics.com">

<!-- Preload critical resources -->
<link rel="preload" href="/fonts/zalando-sans.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/hero-image.jpg" as="image">
```

### 4.4 Server Response Time
- Target: < 200ms TTFB (Time to First Byte)
- Use CDN (Content Delivery Network)
- Implement edge caching
- Optimize database queries
- Use Redis/Memcached for session storage

---

## Mobile Optimization

### 5.1 Mobile-First Approach
- Responsive design (not separate mobile site)
- Touch-friendly buttons (min 48x48px)
- Readable font sizes (min 16px)
- Avoid horizontal scrolling
- Adequate spacing between interactive elements

### 5.2 Mobile Page Speed
- Target: < 3s loading time on 4G
- Prioritize above-the-fold content
- Optimize images for mobile screens
- Reduce JavaScript execution time
- Use AMP for product pages (optional)

### 5.3 Mobile UX
- Sticky navigation bar
- Easy-to-use filters and sorting
- Quick view product details
- Simple checkout process
- One-tap zoom for product images

### 5.4 Mobile-Specific Meta Tags
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#ff6900">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

---

## Structured Data & Schema Markup

### 6.1 Product Schema
Essential for rich snippets in search results.

```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Nike Air Max 90 Herren Sneaker",
  "image": [
    "https://img.zalando.de/nike-air-max-90-1.jpg",
    "https://img.zalando.de/nike-air-max-90-2.jpg"
  ],
  "description": "Der Nike Air Max 90 kombiniert ikonisches Design mit modernem Komfort...",
  "sku": "NI112O0KL-K11",
  "mpn": "925066",
  "brand": {
    "@type": "Brand",
    "name": "Nike"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.zalando.de/nike-air-max-90.html",
    "priceCurrency": "EUR",
    "price": "129.95",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": {
      "@type": "Organization",
      "name": "Zalando"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "EUR"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "businessDays": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        },
        "cutoffTime": "23:59:00",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 1,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 2,
          "maxValue": 4,
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "247"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Max M."
    },
    "reviewBody": "Sehr bequemer Sneaker, perfekte Passform!"
  }
}
```

### 6.2 Breadcrumb Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zalando.de/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Herren",
      "item": "https://www.zalando.de/herren/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Schuhe",
      "item": "https://www.zalando.de/herrenschuhe/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Sneaker",
      "item": "https://www.zalando.de/herren-sneaker/"
    }
  ]
}
```

### 6.3 Organization Schema (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zalando",
  "url": "https://www.zalando.de",
  "logo": "https://www.zalando.de/logo.png",
  "sameAs": [
    "https://www.facebook.com/Zalando.de",
    "https://www.instagram.com/zalando",
    "https://twitter.com/zalando",
    "https://www.youtube.com/zalando"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-30-2759-4600",
    "contactType": "Customer Service",
    "areaServed": "DE",
    "availableLanguage": "German"
  }
}
```

### 6.4 FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie lange dauert die Lieferung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Standardlieferung dauert 2-4 Werktage. Express-Lieferung ist innerhalb von 1-2 Werktagen möglich."
      }
    },
    {
      "@type": "Question",
      "name": "Ist der Versand kostenlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, der Versand ist bei Zalando kostenlos. Auch die Rücksendung ist kostenfrei."
      }
    }
  ]
}
```

### 6.5 Video Schema (for product videos)
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Nike Air Max 90 - Produktvorstellung",
  "description": "Detaillierte Vorstellung des Nike Air Max 90 Sneakers",
  "thumbnailUrl": "https://img.zalando.de/video-thumbnail.jpg",
  "uploadDate": "2024-01-15",
  "duration": "PT2M30S",
  "contentUrl": "https://video.zalando.de/nike-air-max-90.mp4"
}
```

---

## E-commerce Specific SEO

### 7.1 Out of Stock Products
**Best Practice**: Keep the page live with "Out of Stock" status

```html
<!-- Schema markup for out of stock -->
"offers": {
  "@type": "Offer",
  "availability": "https://schema.org/OutOfStock"
}

<!-- User-facing messaging -->
<div class="out-of-stock">
  <p>Dieser Artikel ist derzeit nicht verfügbar.</p>
  <button>Benachrichtigen Sie mich, wenn wieder verfügbar</button>
  <a href="/similar-products">Ähnliche Produkte ansehen</a>
</div>
```

### 7.2 Product Variants
**Option 1**: Single page with variant selector (recommended)
- Use canonical to main product URL
- Update meta tags with JavaScript based on selection
- Show all variants in structured data

**Option 2**: Separate pages per variant
- Canonical all to main color/variant
- Use rel="alternate" for other variants

### 7.3 Seasonal Products
- Keep URLs year-round
- Update content seasonally
- Use "Coming Soon" for pre-season
- Show "Shop Last Season" for past collections

### 7.4 Discontinued Products
**301 Redirect to**:
1. Newer version of the product
2. Similar product in same category
3. Category page (last resort)

### 7.5 Product Filters & Sorting
```html
<!-- Use URL parameters -->
/damenkleider/?color=red&size=m&sort=price-asc

<!-- Prevent indexing of filtered pages -->
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="https://www.zalando.de/damenkleider/">

<!-- Or use #hash for filters (preferred) -->
/damenkleider/#color=red&size=m
```

### 7.6 Pagination
**View All vs. Pagination**:
- For categories with < 100 products: Consider "View All"
- For large categories: Use pagination

```html
<!-- Page 1 -->
<link rel="canonical" href="https://www.zalando.de/damenkleider/">
<link rel="next" href="https://www.zalando.de/damenkleider/?page=2">

<!-- Page 2 -->
<link rel="canonical" href="https://www.zalando.de/damenkleider/?page=2">
<link rel="prev" href="https://www.zalando.de/damenkleider/">
<link rel="next" href="https://www.zalando.de/damenkleider/?page=3">

<!-- Load More / Infinite Scroll -->
<!-- Use pagination with "Load More" button for SEO -->
```

### 7.7 Sale & Promotion Pages
```html
<!-- Temporary sale pages -->
<title>Sale: Bis zu 70% Rabatt auf Damenkleider | Zalando.de</title>
<meta name="robots" content="noindex, follow">

<!-- Permanent sale section -->
<title>SALE - Reduzierte Mode & Schuhe | Zalando.de</title>
<meta name="robots" content="index, follow">
```

---

## International SEO

### 8.1 Hreflang Implementation
Critical for Zalando's multi-country presence.

```html
<!-- On zalando.de pages -->
<link rel="alternate" hreflang="de-DE" href="https://www.zalando.de/product.html">
<link rel="alternate" hreflang="de-AT" href="https://www.zalando.at/product.html">
<link rel="alternate" hreflang="de-CH" href="https://www.zalando.ch/product.html">
<link rel="alternate" hreflang="en-GB" href="https://www.zalando.co.uk/product.html">
<link rel="alternate" hreflang="fr-FR" href="https://www.zalando.fr/product.html">
<link rel="alternate" hreflang="it-IT" href="https://www.zalando.it/product.html">
<link rel="alternate" hreflang="es-ES" href="https://www.zalando.es/product.html">
<link rel="alternate" hreflang="nl-NL" href="https://www.zalando.nl/product.html">
<link rel="alternate" hreflang="x-default" href="https://www.zalando.com/product.html">
```

### 8.2 Content Localization
**Germany-Specific**:
- Use German language exclusively
- Show prices in EUR (€)
- Display "inkl. MwSt" (including VAT)
- Mention German consumer rights
- Show German size charts
- Use local payment methods (Sofortüberweisung, Klarna, etc.)
- Reference German holidays and seasons

### 8.3 Geographic Targeting
- Set target country in Google Search Console
- Use ccTLD (.de for Germany)
- Host on German servers or use CDN with German edge locations
- Include German address in footer

### 8.4 Currency & Pricing
```html
<!-- Product schema with EUR -->
"offers": {
  "priceCurrency": "EUR",
  "price": "129.95"
}

<!-- Display format -->
<span class="price">129,95 €</span>
<span class="tax-info">inkl. MwSt.</span>
```

---

## Image Optimization

### 9.1 Image Format Selection
**Use modern formats**:
- **WebP**: 25-35% smaller than JPEG (use as default)
- **AVIF**: 50% smaller than JPEG (cutting edge, use with fallback)
- **JPEG**: Fallback for older browsers

```html
<picture>
  <source srcset="product-image.avif" type="image/avif">
  <source srcset="product-image.webp" type="image/webp">
  <img src="product-image.jpg" alt="Nike Air Max 90 Sneaker in Weiß" loading="lazy">
</picture>
```

### 9.2 Image Sizing
**Responsive Images**:
```html
<img
  src="product-400.jpg"
  srcset="product-400.jpg 400w,
          product-800.jpg 800w,
          product-1200.jpg 1200w,
          product-1600.jpg 1600w"
  sizes="(max-width: 600px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  alt="Nike Air Max 90"
  loading="lazy"
>
```

### 9.3 Image Optimization Checklist
- [ ] Compress images (target: < 100KB per product image)
- [ ] Use CDN for image delivery
- [ ] Implement lazy loading for below-fold images
- [ ] Use `loading="eager"` for hero images
- [ ] Proper aspect ratio to prevent CLS
- [ ] Dimension attributes (width/height) on all images

### 9.4 Alt Text Best Practices
**Formula**: [Product Name] + [Key Feature] + [Color/Style]

**Examples**:
```html
<!-- Good -->
<img src="nike-air-max.jpg" alt="Nike Air Max 90 Herren Sneaker in Weiß">

<!-- Better -->
<img src="nike-air-max.jpg" alt="Nike Air Max 90 Herren Sneaker in Weiß - Seitenansicht">

<!-- Avoid -->
<img src="nike-air-max.jpg" alt="Sneaker"> <!-- Too generic -->
<img src="nike-air-max.jpg" alt=""> <!-- Missing -->
<img src="nike-air-max.jpg" alt="Bild123.jpg"> <!-- Unhelpful -->
```

### 9.5 Image File Names
```
Good:
- nike-air-max-90-herren-sneaker-weiss.jpg
- adidas-originals-superstar-damen-schwarz.jpg

Avoid:
- IMG_1234.jpg
- product-image.jpg
- image-final-v2.jpg
```

### 9.6 Image Sitemap
Create separate image sitemap or include in product sitemap:

```xml
<url>
  <loc>https://www.zalando.de/nike-air-max-90.html</loc>
  <image:image>
    <image:loc>https://img.zalando.de/nike-air-max-90-1.jpg</image:loc>
    <image:caption>Nike Air Max 90 Herren Sneaker in Weiß</image:caption>
    <image:title>Nike Air Max 90 - Vorderansicht</image:title>
  </image:image>
  <image:image>
    <image:loc>https://img.zalando.de/nike-air-max-90-2.jpg</image:loc>
    <image:caption>Nike Air Max 90 Herren Sneaker in Weiß</image:caption>
    <image:title>Nike Air Max 90 - Seitenansicht</image:title>
  </image:image>
</url>
```

---

## Internal Linking Strategy

### 10.1 Navigation Structure
**Main Navigation**:
```
Home
├── Damen
│   ├── Bekleidung
│   │   ├── Kleider
│   │   ├── Oberteile
│   │   └── Hosen
│   ├── Schuhe
│   └── Accessoires
├── Herren
├── Kinder
└── Sale
```

### 10.2 Contextual Links
**Product Pages**:
- Link to parent category
- Link to brand page
- Link to related categories
- Link to style guides
- Link to size guides

**Category Pages**:
- Link to subcategories
- Link to related categories
- Link to popular brands
- Link to seasonal collections

### 10.3 Footer Links
```html
<footer>
  <section>
    <h3>Über Zalando</h3>
    <ul>
      <li><a href="/ueber-uns">Über uns</a></li>
      <li><a href="/karriere">Karriere</a></li>
      <li><a href="/nachhaltigkeit">Nachhaltigkeit</a></li>
    </ul>
  </section>

  <section>
    <h3>Kundenservice</h3>
    <ul>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/kontakt">Kontakt</a></li>
      <li><a href="/versand">Versand & Lieferung</a></li>
      <li><a href="/retouren">Retouren</a></li>
    </ul>
  </section>

  <section>
    <h3>Beliebte Kategorien</h3>
    <ul>
      <li><a href="/damenkleider">Damenkleider</a></li>
      <li><a href="/herren-sneaker">Herren Sneaker</a></li>
      <li><a href="/damen-stiefel">Damen Stiefel</a></li>
    </ul>
  </section>
</footer>
```

### 10.4 Breadcrumbs
```html
<nav aria-label="Breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/">
        <span itemprop="name">Home</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/herren/">
        <span itemprop="name">Herren</span>
      </a>
      <meta itemprop="position" content="2" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/herrenschuhe/">
        <span itemprop="name">Schuhe</span>
      </a>
      <meta itemprop="position" content="3" />
    </li>
  </ol>
</nav>
```

### 10.5 Related Products
- Minimum 4-6 related products per product page
- Use descriptive anchor text: "Ähnliche Sneaker" instead of "Mehr sehen"
- Algorithmically determined based on:
  - Same category
  - Same brand
  - Same price range
  - User behavior data

### 10.6 Link Equity Distribution
**Priority Order**:
1. New arrivals (boost new products)
2. Best sellers (high conversion products)
3. High-margin products
4. Seasonal products
5. Regular inventory

---

## URL Structure

### 11.1 URL Guidelines
**Best Practices**:
- Use hyphens (-) not underscores (_)
- Lowercase only
- Descriptive and keyword-rich
- Short and simple
- German keywords for .de domain

### 11.2 URL Patterns

```
Homepage:
https://www.zalando.de/

Category Pages:
https://www.zalando.de/damenkleider/
https://www.zalando.de/herren-sneaker/
https://www.zalando.de/kinderschuhe/

Subcategory Pages:
https://www.zalando.de/damenkleider/cocktailkleider/
https://www.zalando.de/herren-sneaker/laufschuhe/

Brand Pages:
https://www.zalando.de/nike/
https://www.zalando.de/adidas/

Brand + Category:
https://www.zalando.de/nike-sneaker/
https://www.zalando.de/adidas-damen-bekleidung/

Product Pages:
https://www.zalando.de/nike-air-max-90-sneaker-weiss-ni112o0kl-k11.html
Format: /[brand]-[product-name]-[category]-[color]-[sku].html

Static Pages:
https://www.zalando.de/ueber-uns/
https://www.zalando.de/nachhaltigkeit/
https://www.zalando.de/groessentabelle/

Editorial Content:
https://www.zalando.de/magazin/
https://www.zalando.de/magazin/fruehjahrs-trends-2024/
```

### 11.3 URL Parameters
**Avoid when possible, use for**:
- Sorting: `?sort=price-asc`
- Filtering: `?color=red` (or use #hash)
- Pagination: `?page=2`
- Tracking: `?utm_source=newsletter`

**Canonicalize filtered URLs** to main category page.

### 11.4 URL Migration
When changing URLs:
```
1. Implement 301 redirect
2. Update internal links
3. Update sitemap
4. Submit to Search Console
5. Monitor 404 errors
6. Keep redirects permanently (min 1 year)
```

---

## Monitoring & Analytics

### 12.1 Google Search Console
**Weekly Monitoring**:
- Index coverage issues
- Manual actions
- Security issues
- Core Web Vitals
- Mobile usability

**Monthly Analysis**:
- Top performing queries
- Click-through rates (CTR)
- Average position trends
- Impressions vs. clicks
- Pages with declining traffic

**Actions**:
- Submit new products via sitemap
- Request reindexing for updated pages
- Fix crawl errors immediately
- Monitor hreflang errors

### 12.2 Key SEO Metrics

| Metric | Target | Tool |
|--------|--------|------|
| Organic Traffic Growth | +15% YoY | Google Analytics |
| Organic Conversion Rate | > 2.5% | Google Analytics |
| Average Position | Top 10 for target keywords | Search Console |
| Click-Through Rate | > 3% average | Search Console |
| Page Load Time | < 2.5s | Lighthouse |
| Core Web Vitals Pass Rate | > 90% | Search Console |
| Indexed Pages | 95%+ of submitted | Search Console |
| Crawl Budget Used | Optimized | Log File Analysis |

### 12.3 Ranking Monitoring
**Track Keywords**:
- Brand keywords (e.g., "Zalando", "Zalando Schuhe")
- Category keywords (e.g., "Damenkleider online", "Herren Sneaker")
- Product keywords (e.g., "Nike Air Max 90", "adidas Superstar")
- Long-tail keywords (e.g., "rotes Sommerkleid baumwolle")

**Tools**:
- SEMrush
- Ahrefs
- Sistrix (popular in Germany)
- Search Console Performance Report

### 12.4 Competitor Analysis
**Monitor**:
- About You
- Otto
- Amazon Fashion
- Asos

**Analyze**:
- Keyword rankings
- Backlink profiles
- Content strategies
- Technical SEO implementation
- User experience

### 12.5 Technical Monitoring
**Set up alerts for**:
- Server downtime (uptime monitoring)
- Page speed degradation
- Increase in 404 errors
- Drop in indexed pages
- Manual actions
- Security issues

**Tools**:
- Google Search Console (email alerts)
- Lighthouse CI (automated testing)
- Uptime monitoring (Pingdom, UptimeRobot)
- Error tracking (Sentry, Rollbar)

### 12.6 Content Performance
**Track**:
- Organic traffic by page type
- Bounce rate by category
- Time on page
- Pages per session
- Conversion rate by traffic source

**Optimize**:
- Update low-performing content
- Expand high-performing content
- Remove or consolidate thin content
- Add content to high-traffic pages with low conversion

### 12.7 E-commerce Specific KPIs

```
SEO Traffic Value = Organic Traffic × Conversion Rate × Average Order Value

Example:
100,000 sessions × 2.5% conversion × €75 AOV = €187,500 monthly value
```

**Track by Segment**:
- New vs. returning visitors
- Device type (mobile, desktop, tablet)
- Traffic by category
- Traffic by brand
- Seasonal trends

### 12.8 Reporting Dashboard
**Include**:
1. Executive Summary
   - Total organic traffic
   - Revenue from organic
   - Month-over-month growth
   - Year-over-year growth

2. Technical Health
   - Core Web Vitals scores
   - Index coverage
   - Mobile usability
   - Page speed

3. Content Performance
   - Top landing pages
   - New content published
   - Content updates made
   - User engagement metrics

4. Rankings
   - Keyword position changes
   - New keyword rankings
   - Lost rankings

5. Competitive Landscape
   - Market share of voice
   - Competitor movements
   - Gap analysis

---

## SEO Checklist for New Products

### Pre-Launch
- [ ] Product page URL follows structure
- [ ] Unique product description (150-300 words)
- [ ] High-quality images (min 4 angles)
- [ ] Image optimization complete (WebP, compression, alt text)
- [ ] Product schema markup implemented
- [ ] Title tag optimized
- [ ] Meta description written
- [ ] H1 tag = Product name
- [ ] Breadcrumbs implemented
- [ ] Internal links from category page
- [ ] Related products section added
- [ ] Size guide linked
- [ ] Reviews module ready

### Post-Launch
- [ ] Submit URL to Search Console
- [ ] Monitor indexing status
- [ ] Check mobile usability
- [ ] Test Core Web Vitals
- [ ] Verify structured data (Rich Results Test)
- [ ] Check internal links working
- [ ] Monitor for 404 errors
- [ ] Track initial rankings
- [ ] Set up conversion tracking

### Ongoing
- [ ] Add user reviews
- [ ] Update stock availability
- [ ] Refresh images seasonally
- [ ] Update pricing in schema
- [ ] Monitor performance metrics
- [ ] A/B test product descriptions
- [ ] Add Q&A content
- [ ] Create related blog content

---

## Advanced SEO Strategies

### Entity SEO
Build topical authority around:
- Fashion categories (Kleider, Schuhe, Accessoires)
- Brands (Nike, adidas, Hugo Boss)
- Occasions (Hochzeit, Business, Freizeit)
- Seasons (Sommer, Winter, Herbst, Frühling)

### Content Hubs
Create comprehensive guides:
- "Der ultimative Guide für Sneaker"
- "Kleider für jeden Anlass"
- "Nachhaltige Mode: Ein Leitfaden"

### Voice Search Optimization
Optimize for conversational queries:
- "Wo kann ich günstige Sneaker kaufen?"
- "Welche Kleider sind im Trend 2024?"
- Use natural language in FAQ sections

### Video SEO
- Product videos with proper schema
- YouTube optimization
- Video thumbnails in search results
- How-to styling videos

### Featured Snippets
Target with:
- FAQ sections
- Size guides
- How-to content
- Comparison tables
- Definition content

---

## Tools & Resources

### SEO Tools
- **Google Search Console**: Monitor indexing and performance
- **Google Analytics 4**: Track traffic and conversions
- **Screaming Frog**: Technical SEO audits
- **Lighthouse**: Performance testing
- **PageSpeed Insights**: Core Web Vitals
- **Schema Markup Validator**: Test structured data
- **Mobile-Friendly Test**: Mobile optimization
- **Sistrix**: German market keyword research
- **SEMrush/Ahrefs**: Competitive analysis

### Development Tools
- **Chrome DevTools**: Performance debugging
- **WebPageTest**: Detailed performance analysis
- **GTmetrix**: Performance monitoring
- **Cloudflare**: CDN and security
- **ImageOptim/Squoosh**: Image optimization

### Testing & Validation
- **Rich Results Test**: Structured data validation
- **Hreflang Tags Testing Tool**: International SEO
- **XML Sitemap Validator**: Sitemap validation
- **Robots.txt Tester**: Crawl directive testing

---

## Quick Wins for Immediate Impact

### Week 1
1. Fix all broken internal links
2. Add missing alt text to images
3. Implement breadcrumbs on all pages
4. Add schema markup to top 100 products
5. Fix duplicate title tags and meta descriptions

### Month 1
1. Optimize images (WebP conversion, compression)
2. Implement lazy loading
3. Add product reviews to top sellers
4. Create FAQ pages for popular categories
5. Fix mobile usability issues
6. Improve page speed (target < 3s)

### Quarter 1
1. Content audit and optimization
2. Build topical authority content
3. Internal linking optimization
4. Implement comprehensive structured data
5. Hreflang optimization
6. Core Web Vitals optimization
7. Category page content expansion

---

## SEO Best Practices Summary

### Do's ✓
- Create unique, valuable content
- Optimize for mobile-first
- Use structured data everywhere
- Focus on Core Web Vitals
- Build comprehensive internal linking
- Monitor and fix errors quickly
- Keep product pages active (even when out of stock)
- Use descriptive, keyword-rich URLs
- Implement proper canonicalization
- Leverage user-generated content (reviews)

### Don'ts ✗
- Don't use duplicate content
- Don't create low-quality thin pages
- Don't ignore mobile optimization
- Don't block CSS/JS in robots.txt
- Don't use aggressive pop-ups
- Don't create separate mobile URLs
- Don't ignore page speed
- Don't orphan pages (no internal links)
- Don't use generic product descriptions
- Don't ignore international SEO (hreflang)

---

## Conclusion

SEO for Zalando.de requires a comprehensive approach covering technical excellence, high-quality content, superior user experience, and continuous optimization. Focus on:

1. **Technical Foundation**: Fast, crawlable, mobile-optimized site
2. **Quality Content**: Unique descriptions, valuable guides, user reviews
3. **Structured Data**: Rich snippets for better visibility
4. **Performance**: Core Web Vitals optimization
5. **International**: Proper hreflang and localization
6. **Monitoring**: Continuous tracking and improvement

By following this guide and consistently implementing these best practices, Zalando.de can maintain and improve its strong organic search presence in the competitive German e-commerce fashion market.

---

**Last Updated**: November 2024
**Version**: 1.0
**Maintained by**: SEO Team

For questions or updates to this guide, please contact the SEO team.
