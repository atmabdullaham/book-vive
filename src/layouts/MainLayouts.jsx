import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
  return (
    <div className="">
      <Toaster></Toaster>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Dynamic Section */}
      <div className="min-h-[calc(100vh-290px)] py-6 container mx-auto px-12">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
