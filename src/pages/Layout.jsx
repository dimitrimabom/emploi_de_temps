import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  const theme = localStorage.getItem("theme") || "";
  return (
    <main
      style={
        theme === "light"
          ? {
              backgroundImage: `url(/images/bg-light.webp)`,
              height: "100vh",
            }
          : {
              backgroundImage: `url(/images/bg-light.webp)`,
              height: "100vh",
            }
      }
      className="layout background_image"
    >
      <Outlet />
    </main>
  );
};

export default Layout;
