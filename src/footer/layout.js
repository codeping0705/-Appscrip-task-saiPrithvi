"use client";

import { useState } from "react";

import { SlArrowDown } from "react-icons/sl";
import "./index.css";

const mettamuseItems = [
  { id: 1, itemName: "About Us" },
  { id: 2, itemName: "Stories" },
  { id: 3, itemName: "Artisans" },
  { id: 4, itemName: "Boutiques" },
  { id: 5, itemName: "Contact Us" },
  { id: 6, itemName: "EU Compliances Docs" },
];

const quickLinkItems = [
  { id: 1, itemName: "Orders & Shipping" },
  { id: 2, itemName: "Join/Login as a Seller" },
  { id: 3, itemName: "Payment & Pricing" },
  { id: 4, itemName: "Return & Refunds" },
  { id: 5, itemName: "FAQs" },
  { id: 6, itemName: "Privacy Policy" },
  { id: 7, itemName: "Terms & Conditions" },
];

const acceptPaymentItems = [
  {
    id: 1,
    logo: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761981878/google-pay_kjatwp.png",
    altText: "GPAY",
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761981893/money_plkagi.png",
    altText: "MASTERCARD",
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761981901/paypal_twbeae.png",
    altText: "PAYPAL",
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761981907/amex_nhkxkz.png",
    altText: "AMEX",
  },
  {
    id: 5,
    logo: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761981885/apple-pay_l3cqyj.png",
    altText: "APPLEPAY",
  },
];

export default function Footer({ children }) {
  const [clickMettamuse, setClickMettamuse] = useState(false);
  const [clickQuickLinks, setClickQuickLinks] = useState(false);
  const [clickFollowLinks, setClickFollowLinks] = useState(false);
  const onClickMettamuse = () => setClickMettamuse((prevState) => !prevState);
  const onClickQuickLinks = () => setClickQuickLinks((prevState) => !prevState);
  const onClickFollowLinks = () =>
    setClickFollowLinks((prevState) => !prevState);
  return (
    <div className="footer-container">
      <div className="footer-first-section-container">
        <div className="be-the-first-know-container">
          <h1 className="be-the-first-know">BE THE FIRST TO KNOW</h1>
          <p className="sign-up-for-updates">
            Sign up for updates from mettā muse.
          </p>
          <p className="lorem-ipsum-description-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <div className="email-and-subscribe-container">
            <input
              className="email-input-field"
              type="text"
              placeholder="Enter your e-mail..."
            />
            <button className="subscribe-btn" type="button">
              SUBSCRIBE
            </button>
          </div>
          <button className="subscribe-btn-md" type="button">
            SUBSCRIBE
          </button>
          <hr className="hr-line-sm" />
        </div>
        <div className="contact-us-container">
          <h1 className="contact-us">CONTACT US</h1>
          <h1 className="sm-sub-text">CALL US</h1>
          <div className="call-us-sm-container">
            <p className="number-text-sm">+44 221 133 5360</p>
            <img
              src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761977166/Star_1_wljg2u.png"
              alt="star logo"
            />
            <p className="email-text-sm">customercare@mettamuse.com</p>
          </div>
          <hr className="hr-line-sm" />
          <p className="number-text">+44 221 133 5360</p>
          <p className="email-text">customercare@mettamuse.com</p>
          <h1 className="currency-text">CURRENCY</h1>
          <div className="currency-container">
            <img
              src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761976808/United_States_of_America_US_kwtifd.png"
              alt="us-country"
            />
            <img
              className="footer-star"
              src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761977166/Star_1_wljg2u.png"
              alt="footer-star"
            />
            <h1 className="usd-text">USD</h1>
          </div>
          <hr className="hr-line-sm" />
          <p className="transaction-will-text">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
        <div>
          <div className="footer-list-items-sm-container">
            <h1 className="sm-sub-text">mettā muse</h1>
            <button
              className="arrow-btn"
              type="button"
              onClick={onClickMettamuse}
            >
              <SlArrowDown />
            </button>
          </div>
          {clickMettamuse ? (
            <ul className="list-footer-items-sm-container">
              {mettamuseItems.map((eachItem) => (
                <li key={eachItem.id}>
                  <p className="list-footer-item-sm">{eachItem.itemName}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <hr className="hr-line-sm" />
        <div className="footer-list-items-sm-container">
          <h1 className="sm-sub-text">QUICK LINKS</h1>
          <button
            className="arrow-btn"
            type="button"
            onClick={onClickQuickLinks}
          >
            <SlArrowDown />
          </button>
        </div>
        {clickQuickLinks ? (
          <ul className="list-footer-items-sm-container">
            {quickLinkItems.map((eachItem) => (
              <li key={eachItem.id}>
                <p className="list-footer-item-sm">{eachItem.itemName}</p>
              </li>
            ))}
          </ul>
        ) : null}
        <hr className="hr-line-sm" />
        <div className="footer-list-items-sm-container">
          <h1 className="sm-sub-text">FOLLOW US</h1>
          <button
            className="arrow-btn"
            type="button"
            onClick={onClickFollowLinks}
          >
            <SlArrowDown />
          </button>
        </div>
        {clickFollowLinks ? (
          <div className="footer-sm-follow-container">
            <img
              className="follow-icons"
              src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761980993/Insta_epshry.png"
              alt="insta icon"
            />
            <img
              className="follow-icons"
              src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761981180/a_cjxitr.png"
              alt="linkedin icon"
            />
          </div>
        ) : null}
      </div>
      <hr className="hr-line" />
      <div className="footer-second-section-container">
        <div className="footer-sublist-section-container">
          <h1 className="footer-sub-head-text">mettā muse</h1>
          <ul className="footer-list-items-container">
            {mettamuseItems.map((eachItem) => (
              <li key={eachItem.id}>
                <p className="footer-list-items-text">{eachItem.itemName}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-sublist-section-container">
          <h1 className="footer-sub-head-text">QUICK LINKS</h1>
          <ul className="footer-list-items-container">
            {quickLinkItems.map((eachItem) => (
              <li key={eachItem.id}>
                <p className="footer-list-items-text">{eachItem.itemName}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="follow-us-container">
          <h1 className="footer-sub-head-text">FOLLOW US</h1>
          <div>
            <img
              className="follow-icons"
              src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761980993/Insta_epshry.png"
              alt="insta icon"
            />
            <img
              className="follow-icons"
              src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761981180/a_cjxitr.png"
              alt="linkedin icon"
            />
          </div>
          <div className="mettamuse-accept-container">
            <h1 className="footer-sub-head-text mettamuse-accept-text">
              mettā muse Accepts
            </h1>
            <ul className="accept-payment-list-container">
              {acceptPaymentItems.map((eachLogo) => (
                <li className="payment-box" key={eachLogo.id}>
                  <img
                    className="payment-icon-logo"
                    src={eachLogo.logo}
                    alt={eachLogo.altText}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mettamuse-accept-container-sm">
        <h1 className="footer-sub-head-text mettamuse-accept-text">
          mettā muse Accepts
        </h1>
        <ul className="accept-payment-list-container">
          {acceptPaymentItems.map((eachLogo) => (
            <li className="payment-box" key={eachLogo.id}>
              <img className="payment-icon-logo" src={eachLogo.logo} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="copy-right-text">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </div>
  );
}
