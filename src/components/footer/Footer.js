import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="note">
        <h6>
          1. Trade-in values will vary based on the condition, year, and
          configuration of your eligible trade-in device. Not all devices are
          eligible for credit. You must be at least 18 years old to be eligible
          to trade in for credit or for an Apple Gift Card. Trade-in value may
          be applied toward qualifying new device purchase, or added to an Apple
          Gift Card. Actual value awarded is based on receipt of a qualifying
          device matching the description provided when estimate was made. Sales
          tax may be assessed on full value of a new device purchase. In-store
          trade-in requires presentation of a valid photo ID (local law may
          require saving this information). Offer may not be available in all
          stores, and may vary between in-store and online trade-in. Some stores
          may have additional requirements. Apple or its trade-in partners
          reserve the right to refuse or limit quantity of any trade-in
          transaction for any reason. More details are available from Apple's
          trade-in partner for trade-in and recycling of eligible devices.
          Restrictions and limitations may apply. <br /> <br />
          Available in the U.S. on apple.com, in the Apple Store app, and at
          Apple Stores. <br />
          <br /> A subscription is required for Apple TV+. <br />
          <br /> To access and use all Apple Card features and products
          available only to Apple Card users, you must add Apple Card to Wallet
          on an iPhone or iPad that supports and has the latest version of iOS
          or iPadOS. Apple Card is subject to credit approval, available only
          for qualifying applicants in the United States, and issued by Goldman
          Sachs Bank USA, Salt Lake City Branch. <br />
          <br /> If you reside in the U.S. territories, please call Goldman
          Sachs at 877-255-5923 with questions about Apple Card. <br />
          <br /> Learn more about how Apple Card applications are evaluated at{" "}
          <span style={{ textDecoration: "underline" }}>
            support.apple.com/kb/HT209218.
          </span>
          <hr />
        </h6>
      </div>
      <div className="footer__links">
        <div className="wrappers">
          <ul className="footer__items">
            <h4>Shop and Learn</h4> <li class="footer__link">Store</li>
            <li class="footer__link">Mac</li>
            <li class="footer__link">iPad</li>
            <li class="footer__link">iPhone</li>
            <li class="footer__link">Watch</li>
            <li class="footer__link">Vision</li>
            <li class="footer__link">AirPods</li>
            <li class="footer__link">TV & Home</li>
            <li class="footer__link">AirTag</li>
            <li class="footer__link">Accessories</li>
            <li class="footer__link">Gift Cards</li>
            <h4>Apple Wallet</h4>
            <li class="footer__link">Wallet</li>
            <li class="footer__link">Apple Card</li>
            <li class="footer__link">Apple Pay</li>
            <li class="footer__link">Apple Cash</li>
          </ul>
          <ul className="footer__items">
            <h4>Account</h4>
            <li class="footer__link">Manage Your Apple ID</li>
            <li class="footer__link">Apple Store Account</li>
            <li class="footer__link">iCloud.com</li>
            <h4>Entertainment</h4>
            <li class="footer__link">Apple One</li>
            <li class="footer__link">Apple TV+</li>
            <li class="footer__link">Apple Music</li>
            <li class="footer__link">Apple Arcade</li>
            <li class="footer__link">Apple Fitness+</li>
            <li class="footer__link">Apple News+</li>
            <li class="footer__link">Apple Podcasts</li>
            <li class="footer__link">Apple Books</li>
            <li class="footer__link">App Store</li>
          </ul>
          <ul className="footer__items">
            <h4>Apple Store</h4>
            <li class="footer__link">Find a Store</li>
            <li class="footer__link">Genius Bar</li>
            <li class="footer__link">Today at Apple</li>
            <li class="footer__link">Apple Camp</li>
            <li class="footer__link">Apple Store App</li>
            <li class="footer__link">Certified Refurbished</li>
            <li class="footer__link">Apple Trade In</li>
            <li class="footer__link">Financing</li>
            <li class="footer__link">Carrier Deals at Apple</li>
            <li class="footer__link">Order Status</li>
            <li class="footer__link">Shopping Help</li>
          </ul>
          <ul className="footer__items">
            <h4>For Business</h4>
            <li class="footer__link">Apple and Business</li>
            <li class="footer__link">Shop for Business</li>
            <h4>For Education</h4>
            <li class="footer__link">Apple and Education</li>
            <li class="footer__link">Shop for K-12</li>
            <li class="footer__link">Shop for College</li>
            <h4>For Healthcare</h4>
            <li class="footer__link">Apple in Healthcare</li>
            <li class="footer__link">Health on Apple Watch</li>
            <li class="footer__link">Health Records on iPhone</li>
            <h4>For Government</h4>
            <li class="footer__link">Shop for Government</li>
            <li class="footer__link">Shop for Veterans and Military</li>
          </ul>
          <ul className="footer__items">
            <h4>Apple Values</h4>
            <li class="footer__link">Accessibility</li>
            <li class="footer__link">Education</li>
            <li class="footer__link">Environment</li>
            <li class="footer__link">Inclusion and Diversity</li>
            <li class="footer__link">Privacy</li>
            <li class="footer__link">Racial Equity and Justice</li>
            <li class="footer__link">Supplier Responsibility</li>
            <h4>About Apple</h4>
            <li class="footer__link">Newsroom</li>
            <li class="footer__link">Apple Leadership</li>
            <li class="footer__link">Career Opportunities</li>
            <li class="footer__link">Investors</li>
            <li class="footer__link">Ethics & Compliance</li>
            <li class="footer__link">Events</li>
            <li class="footer__link">Contact Apple</li>
          </ul>
        </div>
        <li className="footer__info">
          More ways to shop:
          <a href="#" className="a">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="a">
            other retailer
          </a>{" "}
          near you. Or call 1-800-MY-APPLE.
        </li>
        <hr />
        <br />
        <li className="footer__link">
          Copyright 2024 Apple Inc. All rights reserved.
          <span>
            Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
          </span>
          <span className="span"> United States</span>
        </li>
      </div>
    </footer>
  );
}

export default Footer;
