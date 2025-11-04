// app/products/page.jsx
import {
  RiPokerHeartsLine,
} from "react-icons/ri";
import "./index.css";

// filters - kept for UI only
const recommendedFilterItems = [
  { id: 1, item: "RECOMMENDED" },
  { id: 2, item: "NEWEST FIRST" },
  { id: 3, item: "POPULAR" },
  { id: 4, item: "PRICE: HIGH TO LOW" },
  { id: 5, item: "PRICE: LOW TO HIGH" },
];

export default async function ProductPage() {
  // SSR fetch
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const data = await res.json();

  // map data for UI
  const productItems = data.map((item) => ({
    id: item.id,
    imgUrl: item.image,
    altText: item.title,
    name: item.title,
    price: item.price,
    description: item.description,
    slug: `product-${item.id}`,
  }));

  // Product list schema (ItemList)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Discover Products - Product Listing",
    "itemListElement": productItems.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://YOUR_DEPLOYED_URL/products/${p.slug}`,
      item: {
        "@type": "Product",
        name: p.name,
        image: p.imgUrl,
        description:
          p.description?.slice(0, 160) || "Product from discover products demo",
        sku: `SKU-${p.id}`,
        offers: {
          "@type": "Offer",
          price: `${p.price}`,
          priceCurrency: "USD",
        },
      },
    })),
  };

  return (
    <section className="product-page-container">
      <ul className="filter-container" role="list">
        <li className="hide-and-count-items-container">
          <h3 className="items-count">{productItems.length} ITEMS</h3>
        </li>

        <li>
          <button type="button" className="filter-btn-sm" aria-label="Filter">
            FILTER
          </button>
        </li>

        <div className="vertical-line-sm" aria-hidden="true"></div>

        <select
          className="recommended-select-container"
          aria-label="Sort products"
          defaultValue="RECOMMENDED"
        >
          {recommendedFilterItems.map((eachFilters) => (
            <option
              key={eachFilters.id}
              className="recommended-filter-options-box"
              value={eachFilters.item}
            >
              {eachFilters.item}
            </option>
          ))}
        </select>
      </ul>

      <div className="product-and-filter-container">
        <ul className="product-list-item-container" role="list">
          {productItems.map((eachProducts) => (
            <li className="product-items" key={eachProducts.id}>
              <img
                className="product-image"
                src={eachProducts.imgUrl}
                alt={eachProducts.altText}
                loading="lazy"
                width={220}
                height={220}
              />

              <h4 className="product-name">{eachProducts.name}</h4>

              <div className="description-product-container">
                <p className="product-description">
                  <span className="sign-in-text">Sign in</span> or create an
                  account to see pricing
                </p>
                <RiPokerHeartsLine className="heart-icon" aria-hidden="true" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* JSON-LD for product ItemList to help SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </section>
  );
}
