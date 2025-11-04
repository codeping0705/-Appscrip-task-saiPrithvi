"use client";

import { useState, useEffect } from "react";
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

const productFilterItems = [
  { id: 1, item: "IDEAL FOR" },
  { id: 2, item: "OCCATION" },
  { id: 3, item: "WORK" },
  { id: 4, item: "FABRIC" },
  { id: 5, item: "SEGMENT" },
  { id: 6, item: "SUITABLE FOR" },
  { id: 7, item: "RAW MATERIALS" },
  { id: 8, item: "PATTERN" },
];

const subFilterItems = [
  { id: 1, item: "Men" },
  { id: 2, item: "Women" },
  { id: 3, item: "Baby & Kids" },
];

export default function ProductPage() {
  const [clickFilterBtn, setClickFilterBtn] = useState(false);
  const [clickProductFilterBtn, setClickProductFilterBtn] = useState(false);
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const formattedProducts = data.map((item) => ({
          id: item.id,
          imgUrl: item.image,
          altText: item.title,
          name: item.title,
        }));

        setProductItems(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="product-page-container">
      <ul className="filter-container">
        <li className="hide-and-count-items-container">
          <h1 className="items-count">{productItems.length} ITEMS</h1>
          <button
            className="filter-btn"
            type="button"
            onClick={() => setClickFilterBtn(!clickFilterBtn)}
          >
            {clickFilterBtn ? (
              <RiArrowLeftSLine className="filter-arrow-btn" />
            ) : (
              <RiArrowRightSLine className="filter-arrow-btn" />
            )}
            <h1 className="hide-and-show-text">
              {clickFilterBtn ? "HIDE FILTER" : "SHOW FILTER"}
            </h1>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="filter-btn-sm"
            onClick={() => setClickFilterBtn(!clickFilterBtn)}
          >
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
        {clickFilterBtn && (
          <ul className="product-filter-checkbox-container">
            <div className="customizble-checkbox-container">
              <input
                className="customizble-checkbox"
                type="checkbox"
                name="customizble"
              />
              <label className="product-filter-head" htmlFor="customizble">
                CUSTOMIZBLE
              </label>
            </div>

            <hr className="hr-line-filter" />

            {productFilterItems.map((eachFilters) => (
              <li key={eachFilters.id}>
                <div className="product-filter-first-row-container">
                  <h3 className="product-filter-head">{eachFilters.item}</h3>
                  <button
                    className="filter-btn"
                    type="button"
                    onClick={() => setClickProductFilterBtn(!clickProductFilterBtn)}
                  >
                    {clickProductFilterBtn ? (
                      <RiArrowUpSLine className="filter-arrow-btn" />
                    ) : (
                      <RiArrowDownSLine className="filter-arrow-btn" />
                    )}
                  </button>
                </div>

                <p className="product-filter-selected">All</p>

                {clickProductFilterBtn && (
                  <ul className="product-sub-field-container">
                    <p className="unselect-text">Unselect all</p>
                    {subFilterItems.map((eachSubItems) => (
                      <li key={eachSubItems.id} className="list-sub-field-container">
                        <input className="checkbox" type="checkbox" />
                        <h5 className="sub-category-filter-name">
                          {eachSubItems.item}
                        </h5>
                      </li>
                    ))}
                  </ul>
                )}

                <hr className="hr-line-filter" />
              </li>
            ))}
          </ul>
        )}

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
