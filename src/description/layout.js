
import "./index.css";

export default function SubHeadDescription() {
  return (
    <section className="sub-head-container" aria-labelledby="discover-heading">
      <div className="tab-item-sm-container" role="navigation" aria-label="Home / Shop">
        <p className="home-tab-sm">HOME</p>
        <div className="vl" aria-hidden="true"></div>
        <p className="shop-tab-sm">SHOP</p>
      </div>

      <div className="sub-head-list-container">
        <h1 id="discover-heading" className="sub-head-description">
          DISCOVER OUR PRODUCTS
        </h1>

        <p className="description-details">
          Handpicked products from a trusted mock API. Browse trending, popular,
          and new items.
        </p>
      </div>
    </section>
  );
}
