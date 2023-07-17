import { GitHub } from "@mui/icons-material";
import { Box } from "@mui/material";

export function HomeHero() {
  return (
    <Box component="section" className="homepage_hero-contents-container">
      <div className="homepage_hero-text-container">
        <h1 className="homepage_hero-title">
          Turn any process into a <span className="no-wrap">collaborative</span>{" "}
          workflow,
          <span className="title-underline md">instantly</span>.
        </h1>
        <p className="homepage_hero-subtext">How will you use Dev-Collab?</p>
      </div>
      <div className="homepage_hero-chooser">
        <div
          data-tracker="survey_hero_onboard|home"
          className="homepage_hero-chooser-container"
        >
          <a
            href="/login"
            className="homepage_hero-chooser-choice w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/615f415173b71a5211e28de7/646e7ef1499daf141866a71d_choice-icon-1.svg"
              loading="lazy"
              alt=""
              className="chooser-choice-icon"
            />
            <div className="chooser-choice-text">Real-time collaboration</div>
          </a>
        </div>
        <div
          data-tracker="survey_hero_automate|home"
          className="homepage_hero-chooser-container"
        >
          <a
            href="https://scribehow.com/signup?useCase=create-sops"
            className="homepage_hero-chooser-choice w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/615f415173b71a5211e28de7/646e7ef1af96a41ac549e59f_choice-icon-2.svg"
              loading="lazy"
              alt=""
              className="chooser-choice-icon"
            />
            <div className="chooser-choice-text">Cloud Storage</div>
          </a>
        </div>
        <div
          data-tracker="survey_hero_training|home"
          className="homepage_hero-chooser-container"
        >
          <a
            href="https://scribehow.com/signup?useCase=build-training-materials"
            className="homepage_hero-chooser-choice w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/615f415173b71a5211e28de7/646e7ef1bae04d47d297f268_choice-icon-3.svg"
              loading="lazy"
              alt=""
              className="chooser-choice-icon"
            />
            <div className="chooser-choice-text">
              Easy Sharing and Permissions
            </div>
          </a>
        </div>
        <div
          data-tracker="survey_hero_qa|home"
          className="homepage_hero-chooser-container"
        >
          <a
            href="https://scribehow.com/signup?useCase=answer-questions"
            className="homepage_hero-chooser-choice w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/615f415173b71a5211e28de7/646e7ef1af96a41ac549e5e9_choice-icon-4.svg"
              loading="lazy"
              alt=""
              className="chooser-choice-icon"
            />
            <div className="chooser-choice-text">Comments and suggestions </div>
          </a>
        </div>
        <div
          data-tracker="survey_hero_customers|home"
          className="homepage_hero-chooser-container"
        >
          <a
            href="https://scribehow.com/signup?useCase=assist-customers"
            className="homepage_hero-chooser-choice w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/615f415173b71a5211e28de7/646e7ef11cdec3ec43fee834_choice-icon-5.svg"
              loading="lazy"
              alt=""
              className="chooser-choice-icon"
            />
            <div className="chooser-choice-text">Real time data</div>
          </a>
        </div>
        <div
          data-tracker="survey_hero_somethingelse|home"
          className="homepage_hero-chooser-container"
        >
          <a
            href="https://scribehow.com/signup?useCase=something-else"
            className="homepage_hero-chooser-choice w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/615f415173b71a5211e28de7/646e7ef192eb3fc19de84ba2_choice-icon-6.svg"
              loading="lazy"
              alt=""
              className="chooser-choice-icon"
            />
            <div className="chooser-choice-text">Something else</div>
          </a>
        </div>
      </div>
      <div className="homepage_cta-buttons-container">
        <a
          id="hero-cta-glass"
          data-tracker="survey_hero_ctabutton|home"
          data-w-id="44edef29-7a91-c608-bb53-5a04aa3120f4"
          href="/login"
          className="homepage_hero-button w-inline-block"
        >
          <div>Get Started 👉</div>
          <div
            className="hero-button-highlight"
            style={{
              willChange: "transform",
              transform:
                "translate3d(-20px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          ></div>
        </a>
      </div>
      <div className="homepage_hero-proof-container">
        {/* <img
          src="https://assets-global.website-files.com/615f415173b71a5211e28de7/646e6b562701a86abfeb0613_chrome-store.png"
          loading="lazy"
          width="24"
          alt="Chrome store"
        /> */}
        <GitHub />
        <img
          src="https://assets-global.website-files.com/615f415173b71a5211e28de7/646e6b569f95784e3ce05bc0_5-stars.svg"
          loading="lazy"
          alt="5 stars"
        />
        <div>Star on Github</div>
      </div>
    </Box>
  );
}
