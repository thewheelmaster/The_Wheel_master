import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

import logo from "/assets/img/Untitled design (25).png";

import navitemlist from "../../dataJson/navitemlist.json";

export default function NavMenu() {
  const [navBar, setNavbar] = useState("");
  const [navlist, setNavList] = useState("");

  const navBarShow = () => {
    if (navBar == "") {
      setNavbar("ak-toggle_active");
    } else {
      setNavbar("");
    }

    if (navlist == "") {
      setNavList("ak-show-moblie-nav-list");
    } else {
      setNavList("");
    }
  };

  return (
    <div className="ak-main_header">
      <div className="container">
        <div className="ak-main_header_in">
          <div className="ak-main-header-left">
            <Link className="ak-site_branding" to="/">
              <img src={logo} width={150} height={100} alt="..." />
            </Link>
          </div>
          <div className="ak-main-header-center">
            <div className="ak-nav ak-medium">
              <ul id="ak-nav_list" className={`ak-nav_list ${navlist}`}>
                {navitemlist?.map((item, i) => {
                  return <MenuItem props={item} key={i} />;
                })}
              </ul>
              <span
                onClick={() => navBarShow()}
                id="navBar"
                className={`ak-munu_toggle ${navBar}`}
              >
                <span></span>
              </span>
            </div>
          </div>
          <div className="ak-main-header-right">
            <Link to="tel:+919228468709">
              <div className="d-flex align-items-center gap-3">
                <div className="heartbeat-icon">
                  <span className="ak-heartbeat-btn">
                    <img src="/assets/img/icon/phone.svg" alt="..." />
                  </span>
                </div>
                <h6> +919228468709</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
