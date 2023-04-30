import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import NProgress from "nprogress";

const Layout = ({ children, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url) => {
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouterChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouterChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Ryan Ray Portafolio</h1>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>Todos los derechos reservados</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Layout;
