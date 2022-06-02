import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="h-min max-h-screen font-[HeadlandOne]">
      <Helmet>
        <title>Portal CDSO</title>
      </Helmet>

      <Navbar />
      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
