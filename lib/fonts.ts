import localFont from "next/font/local";

export const googleSansDisplay = localFont({
  src: [
    { path: "fonts/GoogleSansDisplayRegular.woff2", weight: "400" },
    { path: "fonts/GoogleSansDisplayMedium.woff2", weight: "500" },
    { path: "fonts/GoogleSansDisplayBold.woff2", weight: "700" },
  ],
  variable: "--font-google-sans-display",
});

export const roboto = localFont({
  src: [
    { path: "fonts/RobotoRegular.woff2", weight: "400" },
    { path: "fonts/RobotoMedium.woff2", weight: "500" },
    { path: "fonts/RobotoBold.woff2", weight: "700" },
  ],
  variable: "--font-roboto",
});

export const spotifyCircular = localFont({
  src: [
    { path: "fonts/SpotifyCircular.woff2", weight: "400" },
    { path: "fonts/SpotifyCircularBlack.woff2", weight: "500" },
    { path: "fonts/SpotifyCircularBold.woff2", weight: "700" },
  ],
  variable: "--font-spotify-circular",
});

export const helveticaNeue = localFont({
  src: [
    { path: "fonts/HelveticaNeueRegular.woff2", weight: "400" },
    { path: "fonts/HelveticaNeueBold.woff2", weight: "700" },
  ],
  variable: "--font-helvetica-neue",
});

export const sourceCodePro = localFont({
  src: [
    { path: "fonts/SourceCodeProRegular.woff2", weight: "400" },
    { path: "fonts/SourceCodeProMedium.woff2", weight: "500" },
    { path: "fonts/SourceCodeProBold.woff2", weight: "700" },
  ],
  variable: "--font-source-code-pro",
});
