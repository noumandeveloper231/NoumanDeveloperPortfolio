import { Poppins, Oswald } from "next/font/google";
import "./globals.css";
import AOSWrapper from "./components/reusable/AOSWrapper";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./context/ThemeContext"; // import ThemeProvider
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"], weight: ["400", '500', "600", "700"]
});

const oswald = Oswald({
  subsets: ["latin"], weight: ["400", '500', "600", "700"]
});

export const metadata = {
  title: "Nouman Dev - Meet Fun with Dev",
  description: "Nouman Dev Solution is a perfect website that merges fun with Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Wrap everything with ThemeProvider */}
        <ThemeProvider>
          <Header />
          <main className="flex-1 overflow-x-hidden">
            <AOSWrapper>{children}</AOSWrapper>
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={true}
          closeOnClick
          draggable={false}
          pauseOnHover={false}
          theme="light"
          icon={true}
          toastStyle={{
            background: "#1a1a1a",
            color: "white",
            borderRadius: "6px",
            padding: "10px 16px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            border: "1px solid #2a2a2a",
          }}
          closeButton={false}
        />
      </body>
    </html>
  );
}
