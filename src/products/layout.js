// app/products/page.jsx

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiPokerHeartsLine,
} from "react-icons/ri";
import "./index.css";

const recommendedFilterItems = [
  { id: 1, item: "RECOMMENDED" },
  { id: 2, item: "NEWEST FIRST" },
  { id: 3, item: "POPULAR" },
  { id: 4, item: "PRICE: HIGH TO LOW" },
  { id: 5, item: "PRICE: LOW TO HIGH" },
];

export default async function ProductPage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const data = await res.json();

  const productItems = data.map((item) => ({
    id: item.id,
    imgUrl: item.image,
    altText: item.title,
    name: item.title,
  }));

  return (
    <div className="product-page-container">
      <ul className="filter-container">
        <li className="hide-and-count-items-container">
          <h1 className="items-count">{productItems.length} ITEMS</h1>
        </li>

        <li>
          <button type="button" className="filter-btn-sm">
            FILTER
          </button>
        </li>

        <div className="vertical-line-sm"></div>

        <select className="recommended-select-container">
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
        <ul className="product-list-item-container">
          {productItems.map((eachProducts) => (
            <li className="product-items" key={eachProducts.id}>
              <img
                className="product-image"
                src={eachProducts.imgUrl}
                alt={eachProducts.altText}
              />

              <h4 className="product-name">{eachProducts.name}</h4>

              <div className="description-product-container">
                <p className="product-description">
                  <span className="sign-in-text">Sign in</span> or Create an
                  account to see pricing
                </p>
                <RiPokerHeartsLine className="heart-icon" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
