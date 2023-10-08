
import { Poppins } from 'next/font/google';
import { lightPalette } from '../palette/light/lightPalette';
const poppins = Poppins({
    weight: ['300', '400', '500','600', '700','800','900'],
    subsets: ['latin'],
    display: 'swap',
  });
  
export const typography = {
    fontFamily:poppins.style.fontFamily,
    h1: {
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "54px",
      color:lightPalette.text.primary
    },
  
    h2: {
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "30px",
      color:lightPalette.text.primary
    },
  
    h3: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "30px",
      color:lightPalette.text.primary
    },
  
    h4: {
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "30px",
      color:lightPalette.text.primary
    },
  
    h5: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "180%",
      letterSpacing:"-0.3px",
      color:lightPalette.text.primary
    },
    h6: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "180%",
      letterSpacing:"-0.3px",
      wordSpacing:"3px",
      color:lightPalette.text.primary
    },
  
    body1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "180%",
      letterSpacing:"-0.3px",
      wordSpacing:"3px",
      color:lightPalette.text.primary
    },
    body2: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "150%",
      color:lightPalette.text.primary
    },
    body3: {
      fontWeight: 400,
      fontSize: "8px",
      lineHeight: "17px",
      color:lightPalette.text.primary
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "26px",
      letterSpacing:"-0.3px",
      color:lightPalette.text.primary
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "13px",
      letterSpacing:"-0.3px",
      color:lightPalette.text.primary
    },
    button:{
      fontWeight: 500,
      textTransform:"none",
      fontSize: "14px",
      letterSpacing:"-0.3px",
      color:lightPalette.text.primary,
    },
    button_disabled:{
      fontWeight: 500,
      textTransform:"none",
      fontSize: "14px",
      letterSpacing:"-0.3px",
      color:lightPalette.text.primary,
    }
  };
  