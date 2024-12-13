/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    colors: {
      "color-blue-50": "rgba(235, 237, 250, 1)",
      "color-red-50": "rgba(254, 244, 242, 1)",
      "color-red-100": "rgba(255, 230, 225, 1)",
      "color-red-200": "rgba(255, 210, 201, 1)",
      "color-red-300": "rgba(254, 178, 163, 1)",
      "color-red-400": "rgba(250, 134, 111, 1)",
      "color-red-500": "rgba(242, 93, 63, 1)",
      "color-red-600": "rgba(223, 67, 35, 1)",
      "color-red-700": "rgba(188, 52, 26, 1)",
      "color-red-800": "rgba(155, 47, 26, 1)",
      "color-red-900": "rgba(129, 44, 26, 1)",
      "color-red-950": "rgba(70, 20, 9, 1)",
      "color-blue-100": "rgba(214, 219, 245, 1)",
      "color-green-50": "rgba(241, 250, 240, 1)",
      "color-blue-200": "rgba(169, 179, 234, 1)",
      "color-blue-300": "rgba(128, 142, 224, 1)",
      "color-blue-400": "rgba(82, 102, 213, 1)",
      "color-blue-500": "rgba(47, 68, 195, 1)",
      "color-blue-600": "rgba(38, 55, 156, 1)",
      "color-blue-700": "rgba(29, 42, 120, 1)",
      "color-blue-800": "rgba(19, 28, 78, 1)",
      "color-blue-900": "rgba(10, 15, 41, 1)",
      "color-blue-950": "rgba(5, 7, 21, 1)",
      "color-yellow-50": "rgba(255, 253, 245, 1)",
      "color-yellow-100": "rgba(255, 252, 240, 1)",
      "color-yellow-200": "rgba(255, 248, 224, 1)",
      "color-yellow-300": "rgba(255, 244, 204, 1)",
      "color-yellow-400": "rgba(255, 240, 189, 1)",
      "color-yellow-500": "rgba(255, 237, 174, 1)",
      "color-yellow-600": "rgba(255, 219, 87, 1)",
      "color-yellow-700": "rgba(255, 200, 3, 1)",
      "color-yellow-800": "rgba(173, 136, 1, 1)",
      "color-yellow-900": "rgba(87, 68, 0, 1)",
      "color-yellow-950": "rgba(42, 32, 0, 1)",
      "color-brown-50": "rgba(250, 238, 229, 1)",
      "color-brown-100": "rgba(246, 222, 203, 1)",
      "color-brown-200": "rgba(237, 191, 155, 1)",
      "color-brown-300": "rgba(229, 157, 103, 1)",
      "color-brown-400": "rgba(219, 124, 50, 1)",
      "color-brown-500": "rgba(181, 96, 32, 1)",
      "color-brown-600": "rgba(143, 76, 25, 1)",
      "color-brown-700": "rgba(108, 58, 19, 1)",
      "color-brown-800": "rgba(74, 39, 14, 1)",
      "color-brown-900": "rgba(35, 18, 6, 1)",
      "color-brown-950": "rgba(17, 9, 3, 1)",
      "color-neutrals-50": "rgba(255, 255, 255, 1)",
      "color-transparent-transparent": "rgba(255, 255, 255, 0)",
      "color-neutrals-100": "rgba(252, 252, 252, 1)",
      "color-neutrals-200": "rgba(252, 252, 252, 1)",
      "color-neutrals-300": "rgba(250, 250, 250, 1)",
      "color-neutrals-400": "rgba(247, 247, 247, 1)",
      "color-neutrals-500": "rgba(246, 246, 246, 1)",
      "color-neutrals-600": "rgba(196, 196, 196, 1)",
      "color-neutrals-700": "rgba(148, 148, 148, 1)",
      "color-neutrals-800": "rgba(99, 99, 99, 1)",
      "color-neutrals-900": "rgba(48, 48, 48, 1)",
      "color-neutrals-950": "rgba(26, 26, 26, 1)",
      "color-green-100": "rgba(229, 246, 224, 1)",
      "color-green-200": "rgba(203, 235, 193, 1)",
      "color-green-300": "rgba(177, 225, 163, 1)",
      "color-green-400": "rgba(154, 216, 136, 1)",
      "color-green-500": "rgba(128, 206, 104, 1)",
      "color-green-600": "rgba(92, 189, 60, 1)",
      "color-green-700": "rgba(68, 139, 45, 1)",
      "color-green-800": "rgba(45, 92, 30, 1)",
      "color-green-900": "rgba(23, 46, 15, 1)",
      "color-green-950": "rgba(11, 23, 7, 1)",
    },

    /* Borders - borderstørrelser herunder */
    borderWidth: {
      "border-1": "1px",
      "border-2": "2px",
    },

    /* Border radius størrelser herunder */
    borderRadius: {
      "border-radius-11": "11px",
      "border-radius-43": "43px",
      "border-radius-full": "999px",
    },

    extend: {
      /* Tilføj din egen spacing nedenfor */
      spacing: {
        "spacing-xxs": "4px",
        "spacing-xs": "8px",
        "spacing-s": "12px",
        "spacing-sm": "16px",
        "spacing-m": "20px",
        "spacing-ml": "32px",
        "spacing-l": "40px",
        "spacing-xl": "48px",
        "spacing-2xl": "56px",
        "spacing-3xl": "64px",
        "spacing-4xl": "72px",
        "spacing-5xl": "80px",
        "spacing-6xl": "88px",
        "spacing-7xl": "96px",
        "spacing-8xl": "104px",
        "spacing-9xl": "112px",
        "spacing-10xl": "128px",
        "spacing-11xl": "144px",
        "spacing-12xl": "160px",
        "spacing-13xl": "176px",
        "spacing-14xl": "192px",
        "spacing-15xl": "208px",
        "spacing-16xl": "224px",
        "spacing-17xl": "240px",
        "spacing-18xl": "256px",
        "spacing-19xl": "272px",
        "spacing-20xl": "327px",
      },
      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        display: ["Unbounded", "sans-serif"],
      },
      /* Tilføj dit typografiske hierarki herunder */
      fontSize: {
        base: ["1rem", { lineHeight: "1.5rem" }],
        p: ["1rem", { lineHeight: "1.25rem" }],
        h1_d: ["5.062rem", { lineHeight: "6.25rem" }],
        h2_d: ["3.375rem", { lineHeight: "4.188rem" }],
        h3_d: ["2.250rem", { lineHeight: "2.75rem" }],
        h4_d: ["2.250rem", { lineHeight: "2.188rem" }],
        h5_d: ["1.5rem", { lineHeight: "1.375rem" }],
        h6_d: ["1rem", { lineHeight: "1.375rem" }],
        h1_m: ["2.369rem", { lineHeight: "2.875rem" }],
        h2_m: ["1.777rem", { lineHeight: "2.063rem" }],
        h3_m: ["1.333rem", { lineHeight: "1.75rem" }],
        h4_m: ["1.333", { lineHeight: "1.75rem" }],
        h5_m: ["1.25rem", { lineHeight: "1.625rem" }],
        h6_m: ["1rem", { lineHeight: "1.188rem" }],
      },
      /* Tilføj dit fontvægt-hierarki nedenfor */
      fontWeight: {
        regular: "400",
        bold: "700",
        ekstrabold: "800",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};

// EKSTRA
// .unbounded-<uniquifier> {
//     font-family: "Unbounded", sans-serif;
//     font-optical-sizing: auto;
//     font-weight: 800;
//     font-style: normal;
//   }

//   .open-sans-<uniquifier> {
//     font-family: "Open Sans", serif;
//     font-optical-sizing: auto;
//     font-weight: <weight>;
//     font-style: normal;
//     font-variation-settings:
//       "wdth" 100;
//   }
