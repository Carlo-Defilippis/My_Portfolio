import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import SpinLogo from "../spin-logo/spin-logo";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          <SpinLogo />
          <div>
            <h1>
              <span>Carlo </span>
              <span>DeFilippis</span>
            </h1>
            <h2>Portfolio - showcasing my work</h2>
            <small>
              Built with {`<3`} by{" "}
              <a target="_blank" href="https://github.com/Carlo-Defilippis">
                Carlo DeFilippis
              </a>
            </small>
          </div>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            Main Page
          </Link>
          <Link
            className={slug === "page-two" ? "selected" : null}
            href="/page-two"
          >
            My Recent Work
          </Link>
          <Link
            className={slug === "page-three" ? "selected" : null}
            href="/page-three"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
