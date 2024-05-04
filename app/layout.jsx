import { Poppins } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "./components/Navbar";

const poppsReg = Poppins({ subsets: ["latin"], weight: "400" });
const poppsBold = Poppins({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppsReg.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
