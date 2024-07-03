import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --color-primary: #ffffff;
  --color-secondary: #000000;
  --color-accent: #f5f5f5;
  --color-active: #e5e5e5;
  --color-faded: #707072;
  --color-accent-dark: #7e7e7e;
  --color-border-faded: #cacacb;
  --color-overlay: #00000020;
  // Fonts
  --font-primary: "Inter", sans-serif;
  //
  --border-radius: 5px;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  font-family: var(--font-primary);
  font-size: 1.4rem;
  overflow-x: hidden;
}


img,
svg {
  width: 100%;
  height: 100%;
  display: block;
}

section {
  padding-inline: 1.6rem;
  margin-bottom: 8.4rem;
}

@media(width > 700px){
  section {
      padding-inline: 3.2rem;
  }
}

@media(width > 1000px){
  section {
      padding-inline: 4rem;
  }
}

`;

export default GlobalStyles;
