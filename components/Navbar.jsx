import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="menu-bar">
        <ul>
          <Link href="/">
            <div className="li-nav">Home</div>
          </Link>
          <Link href="/about">
            <div className="li-nav">about</div>
          </Link>
          <Link href="/contact">
            <div className="li-nav">contact</div>
          </Link>
          <Link href="/blog">
            <div className="li-nav">blog</div>
          </Link>
          <Link href="/product">
            <div className="li-nav">product</div>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
