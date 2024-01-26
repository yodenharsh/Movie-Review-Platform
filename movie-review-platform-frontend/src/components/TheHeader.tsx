import { FC, useEffect, useState } from "react";

const TheHeader: FC = () => {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 350
        ? setStickyClass(
            "fixed top-0 left-0 z-50 md:w-full border-b-2 border-slate-400"
          )
        : setStickyClass("relative rounded-b-3xl");
    }
  };

  return (
    <div
      className={`bg-primary-bg h-24 mx-auto w-full md:w-[75%] flex items-center justify-center ${stickyClass}`}
    >
      <header className="text-white flex items-center justify-between w-full">
        <div className="flex items-center pl-16">
          <img className="mr-2" alt="logo" src="/public/logo.jpeg" width={70} />
          <h1 className="text-4xl font-olive-village">Cine Scan</h1>
        </div>
        <div className="flex pr-16">
          <button
            type="button"
            className="text-white font-semibold mx-2 bg-button-primary-bg w-24 h-12 text-xl rounded-xl border-2 border-black hover:text-black hover:bg-primary hover:border-secondary transition ease-in-out duration-500"
          >
            Login
          </button>
          <button
            type="button"
            className="text-white font-semibold mx-2 bg-button-primary-bg w-24 h-12 text-xl rounded-xl border-2 border-black hover:text-black hover:bg-primary hover:border-secondary transition ease-in-out duration-500"
          >
            Signup
          </button>
        </div>
      </header>
    </div>
  );
};

export default TheHeader;
