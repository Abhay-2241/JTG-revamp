"use client";

import { Button, ButtonProps } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import jtglogo from "@/assets/images/jtg-logo.webp";

export const navItems = [
  {
    name: "Solution",
    href: "https://www.joshtechnologygroup.com/what-we-do/#solutions",
  },
  {
    name: "Industries",
    href: "https://www.joshtechnologygroup.com/what-we-do/#industries",
  },
  {
    name: "Labs",
    href: "https://www.joshtechnologygroup.com/what-we-do/#labs",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  buttonVariant: ButtonProps["variant"];
  name: string;
  href: string;
}[];

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <header className="border-b border-gray-200/20 relative z-40">
        <div className="container">
          <div className="h-18 lg:h-20 flex justify-between items-center">
            {/* logo */}
            <div className="flex gap-4 items-center">
              <img src={jtglogo.src} alt="jtg-logo" className="w-16 h-16" />
              <div className="font-extrabold text-2xl">Josh Technology Group</div>
            </div>

            {/* nav-items */}
            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {navItems.map(({ name, href }) => (
                  <a
                    href={href}
                    key={href}
                    className="h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase inline-flex items-center
                      before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0
                      last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0"
                    onClick={(e) => {
                      e.preventDefault();
                      if (href.startsWith("#")) {
                        const element = document.querySelector(href);
                        if (element) {
                          setIsMobileNavOpen(false);
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      } else {
                        window.location.href = href;
                      }
                    }}
                  >
                    {name}
                  </a>
                ))}
              </nav>
            </div>

            {/* buttons */}
            <div className="hidden lg:flex gap-4">
              {loginItems.map(({ buttonVariant, name, href }) => (
                <a href={href} key={name}>
                  <Button variant={buttonVariant}>{name}</Button>
                </a>
              ))}
            </div>

            {/* mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                className="
                  size-10 rounded-lg relative border-2 border-transparent 
                  [background:linear-gradient(_var(--color-gray-950),_var(--color-gray-950))_content-box,conic-gradient(from_45deg,_var(--color-violet-400),_var(--color-fuchsia-400),_var(--color-amber-300),_var(--color-teal-300),_var(--color-violet-400))_border-box]"
                onClick={() => setIsMobileNavOpen((curr) => !curr)}
              >
                <div
                  className={twMerge(
                    "w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300",
                    isMobileNavOpen && "translate-y-0 rotate-45"
                  )}
                ></div>
                <div
                  className={twMerge(
                    "w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300",
                    isMobileNavOpen && "translate-y-0 -rotate-45"
                  )}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileNavOpen && (
        <div className="fixed top-18 left-0 bottom-0 right-0 bg-gray-950 z-30 overflow-hidden">
          <div className="absolute-center isolate -z-10">
            <Orbit />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[350px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[500px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[650px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[800px]" />
          </div>
          <div className="container h-full">
            <nav className="flex flex-col items-center gap-4 py-8 h-full justify-center">
              {navItems.map(({ name, href }) => (
                <a
                  href={href}
                  key={name}
                  className="text-gray-400 uppercase tracking-widest font-bold text-xs h-10"
                  onClick={(e) => {
                    e.preventDefault();
                    if (href.startsWith("#")) {
                      const element = document.querySelector(href);
                      if (element) {
                        setIsMobileNavOpen(false);
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    } else {
                      window.location.href = href;
                    }
                  }}
                >
                  {name}
                </a>
              ))}
              {loginItems.map(({ name, href, buttonVariant }) => (
                <a href={href} key={name} className="w-full max-w-xs">
                  <Button variant={buttonVariant} block>
                    {name}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
