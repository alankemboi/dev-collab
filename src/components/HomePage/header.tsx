import React from "react";
import { Box } from "@mui/material";
import { ChevronDown } from "@components/app-icon/chev-down";
import { NavBar } from "./nav";

export function HomePageHeader() {
  return (
    <header
      data-w-id="b4bd59b4-ef08-058a-86ae-670e47775abc"
      className="homepage_hero-header"
    >
      <Box className="homepage_hero-header-container">
        <Box
          className="homepage_hero-header-logo"
          sx={{
            fontWeight: 500,
            fontSize: 22,
            lineHeight: "110%",
            whiteSpace: "nowrap",
          }}
        >
          Dev.Collab
        </Box>
        <Box className="homepage_header-nav-container">
          <Box
            data-hover="true"
            data-delay="0"
            className="homepage_header-nav-dropdown w-dropdown"
          >
            <Box
              className="header_dropdown-toggle w-dropdown-toggle"
              id="w-dropdown-toggle-6"
              aria-controls="w-dropdown-list-6"
              aria-haspopup="menu"
              aria-expanded="false"
              role="button"
            >
              <Box className="header_nav-dropdown-icon w-embed">
                <ChevronDown />
              </Box>
              <div>Product</div>
            </Box>
            <NavBar />
          </Box>
          <div
            data-hover="true"
            data-delay="0"
            className="homepage_header-nav-dropdown w-dropdown"
          >
            <div
              className="header_dropdown-toggle w-dropdown-toggle"
              id="w-dropdown-toggle-7"
              aria-controls="w-dropdown-list-7"
              aria-haspopup="menu"
              aria-expanded="false"
              role="button"
            >
              <div className="header_nav-dropdown-icon w-embed">
                <ChevronDown />
              </div>
              <div>Solutions</div>
            </div>
            <nav
              className="header_nav-dropdown-list.w--open w-dropdown-list"
              id="w-dropdown-list-7"
              aria-labelledby="w-dropdown-toggle-7"
            >
              <div className="global-nav-dropdown-columns">
                <div className="header_floating-dropdown-column">
                  <div className="header_floating-section-title">
                    By Function
                  </div>
                  <a
                    href="/solutions/operations-teams"
                    className="header_floating-dropdown-item w-dropdown-link"
                  >
                    Operations
                  </a>
                  <a
                    href="/solutions/customer-facing"
                    className="header_floating-dropdown-item w-dropdown-link"
                  >
                    Customer-Facing Teams
                  </a>
                  <a
                    href="/solutions/sales-ops-enablement"
                    className="header_floating-dropdown-item w-dropdown-link"
                  >
                    Sales Ops &amp; Enablement
                  </a>
                  <a
                    href="/solutions/hr-ld"
                    className="header_floating-dropdown-item w-dropdown-link"
                  >
                    HR &amp; L&amp;D
                  </a>
                  <a
                    href="/solutions/it"
                    className="header_floating-dropdown-item w-dropdown-link"
                  >
                    IT Teams
                  </a>
                </div>
                <div className="header_floating-dropdown-column">
                  <div className="header_floating-section-title">
                    By Use Case
                  </div>
                  <a
                    href="/use-cases#train-teammates"
                    className="header_floating-dropdown-item w-dropdown-link"
                  >
                    Train Teammates
                  </a>
                  <a
                    href="/use-cases#process-documentation"
                    className="header_floating-dropdown-item w-dropdown-link"
                  >
                    Process Documentation
                  </a>
                  <a
                    href="/use-cases#train-customers"
                    className="header_floating-dropdown-item w-dropdown-link"
                  >
                    Train Customers
                  </a>
                  <a
                    href="/use-cases#implement-tools"
                    className="header_floating-dropdown-item w-dropdown-link"
                  >
                    Implement Tools
                  </a>
                  <a
                    href="/use-cases#onboard-new-hires"
                    className="header_floating-dropdown-item w-dropdown-link"
                  >
                    Onboard New Hires
                  </a>
                </div>
              </div>
            </nav>
          </div>
          {/* <a href="/pricing" className="homepage_header-nav-link">
            Pricing
          </a> */}
          <a href="/resources" className="homepage_header-nav-link">
            Resources
          </a>
          {/* <a href="/enterprise" className="homepage_header-nav-link">
            Enterprise
          </a> */}
          <div
            data-hover="true"
            data-delay="0"
            className="homepage_header-nav-dropdown w-dropdown"
          >
            <div
              className="header_dropdown-toggle w-dropdown-toggle"
              id="w-dropdown-toggle-8"
              aria-controls="w-dropdown-list-8"
              aria-haspopup="menu"
              aria-expanded="false"
              role="button"
            >
              <div className="header_nav-dropdown-icon w-embed">
                <ChevronDown />
              </div>
              <div>Dev Docs</div>
            </div>
            <nav
              className="header_nav-dropdown-list w-dropdown-list"
              id="w-dropdown-list-8"
              aria-labelledby="w-dropdown-toggle-8"
            >
              <a
                href="/about"
                className="header_floating-dropdown-item w-dropdown-link"
              >
                About Us
              </a>
              <a
                href="/topics/company-updates"
                className="header_floating-dropdown-item w-dropdown-link"
              >
                Company Updates
              </a>
              <a
                href="https://boards.greenhouse.io/scribe"
                target="_blank"
                className="header_floating-dropdown-item w-dropdown-link"
              >
                Careers
              </a>
            </nav>
          </div>
        </Box>
        <a href="/login" className="homepage_header-button w-button">
          Sign in
        </a>
      </Box>
    </header>
  );
}
