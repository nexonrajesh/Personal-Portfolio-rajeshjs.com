import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Rajesh Shrestha - Frontend Developer",
  description:
    "Passionate frontend developer with 2 years of experience in creating engaging and user-friendly web applications. Proficient in HTML, CSS, JavaScript, and frameworks like React and Vue.js. Committed to delivering high-quality code and an exceptional user experience. When I'm not coding, you'll find me exploring the latest design trends or enjoying a good cup of coffee. Let's bring your ideas to life!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  >
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
