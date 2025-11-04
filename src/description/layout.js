import "./index.css";

export default function SubHeadDescription({ children }) {
  return (
    <>
      <div className="tab-item-sm-container">
        <h1 className="home-tab-sm">HOME</h1>
        <div className="vl"></div>
        <h1 className="shop-tab-sm">SHOP</h1>
      </div>
      <div className="sub-head-container">
        <div className="sub-head-list-container">
          <h1 className="sub-head-description">DISCOVER OUR PRODUCTS</h1>
          <p className="description-details">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
    </>
  );
}