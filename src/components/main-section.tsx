import { Box } from "@mui/material";
import { HomePageHeader } from "./HomePage/header";
import { HomeHero } from "./HomePage/hero";
import { BgCirles } from "./app-icon/bg-circles";

export function MainSec() {
  return (
    <>
      <Box component="section" className="homepage_hero-container wf-section">
        <Box className="homepage_hero-noise"></Box>
        <Box className="homepage_hero-click-target">
          <Box
            className="homepage_hero-lottie"
            data-w-id="5c9f1db0-cb7e-bc44-beb2-5f349e46fa5a"
            data-animation-type="lottie"
            data-src="https://assets-global.website-files.com/615f415173b71a5211e28de7/64779836f528e78dc0813828_Hero%20Rings.json"
            data-loop="0"
            data-direction="1"
            data-autoplay="1"
            data-is-ix2-target="0"
            data-renderer="svg"
            data-default-duration="1.7"
            data-duration="3"
          >
            <BgCirles />
          </Box>
          <img
            src="https://assets-global.website-files.com/615f415173b71a5211e28de7/646d10332da49ae1c18f9550_footer-click-target.svg"
            loading="eager"
            width="802"
            alt=""
            className="homepage_hero-click-target-mobile"
          />
        </Box>
        <Box className="homepage_hero-blob">
          <img
            src="https://assets-global.website-files.com/615f415173b71a5211e28de7/6464ef852cfb9a32d6af4b4a_blob-magenta-gold.svg"
            loading="eager"
            width="1200"
            alt=""
          />
        </Box>
        <HomePageHeader />
        <HomeHero />
      </Box>
    </>
  );
}
