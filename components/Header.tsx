"use client";

import { useState } from "react";
import FullLogo from "@/assets/logo-full.svg";
import Container from "./Container";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ChevronDown, MenuIcon, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

export const Header = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 w-full flex items-center h-[var(--header-height)] z-20 glass-tw">
        <Container className="flex gap-12 items-center justify-between">
          <div className="logo">
            <Link href={"/"}>
              <FullLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="flex items-center gap-12 max-lg:gap-6 max-md:hidden">
            {links?.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.path}
                  className={clsx("text-xl leading-[100%]", {
                    "font-bold text-primary": pathname == link.path,
                    "font-normal text-black": pathname != link.path,
                  })}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Rental Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className={clsx(
                    "bg-transparent shadow-none text-black w-fit hover:bg-transparent hover:text-black text-lg leading-[100%] !px-0",
                    {
                      "font-bold text-primary": pathname.includes("/rental"),
                      "font-normal text-black": !pathname.includes("/rental"),
                    }
                  )}
                >
                  Rental <ChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <ul>
                  <li>
                    <Link
                      href={"/rental/studio-rental"}
                      className={clsx(
                        "text-lg leading-[100%] py-3 inline-block hover:bg-black/5 w-full px-2",
                        {
                          "font-bold text-primary":
                            pathname == "/rental/studio-rental",
                          "font-normal text-black":
                            pathname != "/rental/studio-rental",
                        }
                      )}
                    >
                      Studio Rental
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/rental/props-rental"}
                      className={clsx(
                        "text-lg leading-[100%] py-3 inline-block hover:bg-black/5 w-full px-2",
                        {
                          "font-bold text-primary":
                            pathname == "/rental/props-rental",
                          "font-normal text-black":
                            pathname != "/rental/props-rental",
                        }
                      )}
                    >
                      Props Rental
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/rental/equipment-rental"}
                      className={clsx(
                        "text-lg leading-[100%] py-3 inline-block hover:bg-black/5 w-full px-2",
                        {
                          "font-bold text-primary":
                            pathname == "/rental/equipment-rental",
                          "font-normal text-black":
                            pathname != "/rental/equipment-rental",
                        }
                      )}
                    >
                      Equipment Rental
                    </Link>
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 w-[40px] h-[40px] min-[767px]:hidden cursor-pointer duration-200 rounded-sm flex hover:bg-primary/10 border border-transparent hover:border-primary/30 items-center justify-center"
          >
            <MenuIcon className="text-black" strokeWidth={2} />
          </button>
        </Container>
      </header>

      {/* Sidebar (Mobile) */}
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-white flex flex-col transform transition-transform duration-500 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link href={"/"}>
            <FullLogo />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 w-[40px] h-[40px] cursor-pointer duration-200 rounded-sm flex hover:bg-primary/10 border border-transparent hover:border-primary/30 items-center justify-center"
          >
            <X className="text-black" strokeWidth={2} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 flex flex-col p-6 gap-4">
          {links?.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={clsx("text-2xl", {
                "font-bold text-primary": pathname == link.path,
                "font-normal text-black": pathname != link.path,
              })}
            >
              {link.name}
            </Link>
          ))}

          {/* Rental Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="rental">
              <AccordionTrigger
                className={clsx(
                  "text-2xl font-normal text-black hover:no-underline w-full",
                  {
                    "font-bold text-primary": pathname.includes("/rental"),
                  }
                )}
              >
                Rental
                <ChevronDown />
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3 mt-2">
                <Link
                  href="/rental/studio-rental"
                  onClick={() => setIsOpen(false)}
                  className={clsx("text-lg pl-4", {
                    "font-bold text-primary":
                      pathname == "/rental/studio-rental",
                    "font-normal text-black":
                      pathname != "/rental/studio-rental",
                  })}
                >
                  Studio Rental
                </Link>
                <Link
                  href="/rental/props-rental"
                  onClick={() => setIsOpen(false)}
                  className={clsx("text-lg pl-4", {
                    "font-bold text-primary":
                      pathname == "/rental/props-rental",
                    "font-normal text-black":
                      pathname != "/rental/props-rental",
                  })}
                >
                  Props Rental
                </Link>
                <Link
                  href="/rental/equipment-rental"
                  onClick={() => setIsOpen(false)}
                  className={clsx("text-lg pl-4", {
                    "font-bold text-primary":
                      pathname == "/rental/equipment-rental",
                    "font-normal text-black":
                      pathname != "/rental/equipment-rental",
                  })}
                >
                  Equipment Rental
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-primary text-white rounded-sm py-2 text-base font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};
