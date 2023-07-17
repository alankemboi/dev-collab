export function EditHeader() {
  return (
    <>
      <div className="flex h-[64px] justify-between border-b-[1px] border-slate-200 py-4 px-8 mobile-lg:hidden">
        <div className="flex">
          <div className="flex items-center">
            <div>
              <div className="mr-2 flex w-auto items-center lg:mr-4 lg:w-[210px]">
                <button
                  className="bg-transparent px-0"
                  id="headlessui-menu-button-6"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="flex max-w-max cursor-pointer flex-row items-center bg-transparent">
                    <div
                      className="flex select-none items-center"
                      data-cy="activeTeam"
                    >
                      <div className="flex h-8 items-center rounded-md px-3 hover:bg-white">
                        <span className="font max-w-[40px] truncate text-base font-semibold text-slate-900 xs:max-w-[140px]">
                          Alan's Team
                        </span>
                        <div className="ml-2 h-4 w-4">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-down"
                            className="svg-inline--fa fa-chevron-down text-slate-500"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative h-8 w-full max-w-[600px]">
          <div
            className="absolute top-0 bottom-0 left-0 right-0 blur"
            style={{
              background:
                "linear-gradient(91.36deg,rgb(255, 255, 255) 1.16%,rgb(238, 242, 255) 33.21%,rgb(253, 242, 248) 69.84%,rgb(255, 255, 255) 98.84%)",
            }}
          ></div>
          <button className="absolute top-0 bottom-0 left-0 right-0 flex w-full cursor-pointer items-center justify-center gap-1 bg-transparent duration-300 ease-out group-hover:scale-105">
            <span className="bg-get-pro-gradient bg-clip-text text-sm font-bold leading-5 text-transparent transition-all">
              Get Scribe Pro
            </span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="bolt"
              className="svg-inline--fa fa-bolt text-fuchsia-500 transition-all"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <g className="fa-duotone-group">
                <path
                  className="fa-secondary"
                  fill="currentColor"
                  d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"
                ></path>
                <path className="fa-primary" fill="currentColor" d=""></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="flex shrink-0 items-center gap-2 lg:gap-4">
          <span
            title="Teammates"
            aria-label="Navigate to teammates page"
            className="hidden cursor-pointer items-center gap-2 bg-transparent p-0 md:flex"
          >
            <div
              className="relative flex flex-row-reverse items-center justify-center"
              data-testid="avatar-stack"
              style={{ width: "58px" }}
            >
              <div
                className="absolute h-[26px] w-[26px] rounded-full border-[1px] border-dashed border-slate-400 bg-white"
                data-testid="avatar-placeholder"
                style={{ left: "32px" }}
              ></div>
              <div
                className="absolute h-[26px] w-[26px] rounded-full border-[1px] border-dashed border-slate-400 bg-white"
                data-testid="avatar-placeholder"
                style={{ left: "16px" }}
              ></div>
              <div
                className="absolute flex"
                data-testid="avatar-circle"
                style={{ left: "0px" }}
              >
                <div
                  className="relative flex items-center justify-center overflow-hidden rounded-full border-[1px] border-white"
                  style={{ width: "26px", height: "26px" }}
                >
                  <div className="absolute inset-0">
                    <svg
                      viewBox="0 0 80 80"
                      fill="none"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                    >
                      <mask
                        id="mask__marble"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="80"
                        height="80"
                      >
                        <rect width="80" height="80" fill="#FFFFFF"></rect>
                      </mask>
                      <g mask="url(#mask__marble)">
                        <rect width="80" height="80" fill="#8b5cf6"></rect>
                        <path
                          filter="url(#prefix__filter0_f)"
                          d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                          fill="#6366f1"
                          transform="translate(2 2) rotate(130 40 40) scale(1.5)"
                        ></path>
                        <path
                          filter="url(#prefix__filter0_f)"
                          d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                          fill="#2cd4bf"
                          transform="translate(3 3) rotate(195 40 40) scale(1.5)"
                          style={{ mixBlendMode: "overlay" }}
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="prefix__filter0_f"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feBlend
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          ></feBlend>
                          <feGaussianBlur
                            stdDeviation="7"
                            result="effect1_foregroundBlur"
                          ></feGaussianBlur>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="relative">
                    <span className="text-xs font-bold flex items-center leading-6 text-white">
                      A
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="m-0 text-sm font-semibold leading-5 text-slate-500">
              1 User
            </p>
          </span>
          <div className="hidden gap-3 sm:flex">
            <button className="cursor-pointer text-slate-700 hover:text-slate-900 ring-1 hover:ring-2 ring-slate-200 hover:ring-slate-100/50 hover:ring-offset-1 hover:ring-offset-slate-300 bg-white flex items-center rounded h-8 px-3 py-[6px]">
              <span className="font-sans text-[13px] font-semibold whitespace-nowrap">
                Invite
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="user-plus"
                  className="svg-inline--fa fa-user-plus ml-2 text-slate-500"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM269.7 352c65.7 0 120.1 48.7 129 112H49.3c8.9-63.3 63.3-112 129-112h91.4zm-91.4-48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H224 178.3zM504 312c0 13.3 10.7 24 24 24s24-10.7 24-24V248h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H552V136c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H440c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"
                  ></path>
                </svg>
              </span>
            </button>
            <div>
              <button
                className="inline-block bg-transparent p-0"
                aria-label="toggle menu"
                id="headlessui-menu-button-9"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <button
                  data-cy="newRecordingButton"
                  data-testid="newRecordingButton"
                  className="cursor-pointer text-white ring-1 hover:ring-2 ring-indigo-600 hover:ring-indigo-100 hover:ring-offset-1 ring-offset-indigo-700 bg-gradient-to-b from-indigo-500 to-indigo-600 flex items-center rounded h-8 px-3 py-[6px]"
                >
                  <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] font-sans text-[13px] font-semibold whitespace-nowrap">
                    New
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="plus"
                      className="svg-inline--fa fa-plus ml-2 text-indigo-200"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M232 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H184V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H392c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V72z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </button>
            </div>
            <button
              className="cursor-pointer bg-transparent p-0 pl-2"
              title="Show Activity"
              aria-label="Show activity feed"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="sidebar-flip"
                className="svg-inline--fa fa-sidebar-flip h-4 w-4 text-slate-400"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M288 80V432H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H288zM512 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96zm-64 24c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24zm-24 72c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24h48zm24 120c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
