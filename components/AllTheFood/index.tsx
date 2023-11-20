import React from "react";
import classes from "./AllTheFood.module.scss";
import Link from "next/link";

const AllTheFood: React.FC = () => {
  return (
    <section className={classes.section}>
      <h2>All The Food</h2>
      <ul>
        <li>Explore</li>
        <li>Neighbourhoods</li>
        <li>Reviews</li>
        <li>Dublin Guides</li>
        <li>Travel Guides</li>
        <li>What&apos;s New</li>
      </ul>
      <ul>
        <li>Company</li>
        <li>ATF Insiders</li>
        <li>About</li>
        <li>Industry Jobs</li>
        <li>Shop</li>
      </ul>
      <ul>
        <li>Say Hello</li>
        <li>
          We are always happy to connect with our community. Drop us a line with
          any questions or queries.
        </li>
        <li>
          <Link href={`/contact`}>Contact Us</Link>
        </li>
      </ul>
    </section>
  );
};

export default AllTheFood;
