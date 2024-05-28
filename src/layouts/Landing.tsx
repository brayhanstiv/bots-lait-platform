// Packages
import { Outlet } from "react-router-dom";

// Components
import Navbar from "@/components/Navbars/Navbar.tsx";
import Footer from "@/components/Footers/Footer.tsx";

const Landing = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
