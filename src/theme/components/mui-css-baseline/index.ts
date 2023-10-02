export const MuiCssBaseline = {
  styleOverrides: `
  :root {
    font-family: Poppins, Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  *{
    margin:0;
    padding:0;
    text-decoration:none;

  }

  #root {
    width: 1530px;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
  
  input[type=number] {
      -moz-appearance: textfield;
  }
   
`,
};
