import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html, body {
  margin: 0;
  padding: 0;

  font-family: nunito_for_arco,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-variant-numeric: tabular-nums;
  font-weight: 400;
}

#root {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

button {
  border: none;
  box-shadow: none;
  outline: none;
  appearance: none;
}

p, ul {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

input {
  min-width: 0;
  appearance: none;
  border: none;
  box-shadow: none;
}

p, span {
  cursor: inherit;
}

*::-webkit-scrollbar {
  width: 2px;
  border-radius: 2px;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
`;
