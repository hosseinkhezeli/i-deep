
import { Poppins } from 'next/font/google';


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
    },
  
    h2: {
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "130%",
    },
  
    h3: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "30px",
    },
  
    h4: {
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "30px",
    },
  
    h5: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "180%",
      letterSpacing:"-0.3px",
    },
    h6: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "180%",
      letterSpacing:"-0.3px",
      wordSpacing:"3px",
    },
  
    body1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "180%",
      letterSpacing:"-0.3px",
      wordSpacing:"3px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "150%",
    },
    body3: {
      fontWeight: 400,
      fontSize: "8px",
      lineHeight: "17px",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "26px",
      letterSpacing:"-0.3px",
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "13px",
      letterSpacing:"-0.3px",
    },
    button:{
      fontWeight: 500,
      // textTransform:capitalize,
      fontSize: "14px",
      letterSpacing:"-0.3px",
    },
    button_disabled:{
      fontWeight: 500,
      // textTransform,
      fontSize: "14px",
      letterSpacing:"-0.3px",
    }
  };
  