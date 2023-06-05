import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background:lightgrey;
    margin:24px;
  }

  ul{
    padding-inline-start:unset;
  }

li{
    list-style-type:none;
    padding:12px 24px 24px 24px;
    background:white;
    border-radius:8px;
    margin-bottom:24px;
    min-width:300px;
    box-shadow:3px 3px 8px rgba(0,0,0,0.12);
  }

  li:hover{
    box-shadow:4px 4px 12px rgba(0,0,0,0.18);
  }
  li:hover > button{
    background-color:rgba(240,240,240);
    box-shadow:3px 3px 8px rgba(0,0,0,0.12);
  }
span{
  color:grey;
  font-size:0.8em;
  font-weight:bold;
}

.details{
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items:center;
}
.details p{

  font-weight:bold;
}

button{
  padding:6px 36px;
  border:0px;
  border-radius:8px;
  background-color:rgba(200,200,200)
  box-shadow:2px 2px 4px rgba(0,0,0,0.08);
}
button a{
  font-weight:bold;
  color:black;
  text-transform: uppercase;
}
`;
