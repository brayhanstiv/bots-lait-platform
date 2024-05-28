// Packages
import { Outlet } from "react-router-dom";

// Components
import AuthNavbar from "@/components/Navbars/Navbar.tsx";
import FooterSmall from "@/components/Footers/FooterSmall.tsx";

// Images
import Background from "@/assets/img/conexion-formas-geometricas-azules-plexo-abstracto-imagen-generada-ai.jpg";

const Auth = () => {
  return (
    <>
      <AuthNavbar />
      <main>
        <section className='relative w-full h-full py-40 min-h-screen'>
          <div
            className='absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full'
            style={{
              backgroundImage: "url(" + Background + ")",
              backgroundSize: "cover",
            }}
          ></div>
          <Outlet />
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
};

export default Auth;
